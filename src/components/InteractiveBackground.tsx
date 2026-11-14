import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── GLSL Shaders (ported from study-game-engines/three.js-fluid) ───

const face_vert = `
attribute vec3 position;
uniform vec2 px;
uniform vec2 boundarySpace;
varying vec2 uv;
precision highp float;
void main(){
    vec3 pos = position;
    vec2 scale = 1.0 - boundarySpace * 2.0;
    pos.xy = pos.xy * scale;
    uv = vec2(0.5)+(pos.xy)*0.5;
    gl_Position = vec4(pos, 1.0);
}
`

const line_vert = `
attribute vec3 position;
varying vec2 uv;
uniform vec2 px;
precision highp float;
void main(){
    vec3 pos = position;
    uv = 0.5 + pos.xy * 0.5;
    vec2 n = sign(pos.xy);
    pos.xy = abs(pos.xy) - px * 1.0;
    pos.xy *= n;
    gl_Position = vec4(pos, 1.0);
}
`

const mouse_vert = `
precision highp float;
attribute vec3 position;
attribute vec2 uv;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;
void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`

const advection_frag = `
precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform bool isBFECC;
uniform vec2 fboSize;
uniform vec2 px;
varying vec2 uv;
void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy;
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`

const externalForce_frag = `
precision highp float;
uniform vec2 force;
uniform vec2 center;
uniform vec2 scale;
uniform vec2 px;
varying vec2 vUv;
void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0-min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0, 1);
}
`

const viscous_frag = `
precision highp float;
uniform sampler2D velocity;
uniform sampler2D velocity_new;
uniform float v;
uniform vec2 px;
uniform float dt;
varying vec2 uv;
void main(){
    // Poisson-style viscous diffusion (exact match to original)
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0, px.y * 2.0)).xy;
    vec2 result = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    result /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(result, 0.0, 0.0);
}
`

const divergence_frag = `
precision highp float;
uniform sampler2D velocity;
uniform float dt;
uniform vec2 px;
varying vec2 uv;
void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0)).x;
    float y0 = texture2D(velocity, uv-vec2(0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0, px.y)).y;
    float divergence = (x1-x0 + y1-y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`

const poisson_frag = `
precision highp float;
uniform sampler2D pressure;
uniform sampler2D divergence;
uniform vec2 px;
varying vec2 uv;
void main(){
    float p0 = texture2D(pressure, uv+vec2(px.x * 2.0, 0)).r;
    float p1 = texture2D(pressure, uv-vec2(px.x * 2.0, 0)).r;
    float p2 = texture2D(pressure, uv+vec2(0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv-vec2(0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`

const pressure_frag = `
precision highp float;
uniform sampler2D pressure;
uniform sampler2D velocity;
uniform vec2 px;
uniform float dt;
varying vec2 uv;
void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv+vec2(px.x * step, 0)).r;
    float p1 = texture2D(pressure, uv-vec2(px.x * step, 0)).r;
    float p2 = texture2D(pressure, uv+vec2(0, px.y * step)).r;
    float p3 = texture2D(pressure, uv-vec2(0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`

const color_frag = `
precision highp float;
uniform sampler2D velocity;
uniform float isDark;
varying vec2 uv;
void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;

    // Original mapping: velocity direction → full RGB spectrum
    vec3 color = vec3(vel.x, vel.y, 1.0);

    // Mix with background based on velocity magnitude
    vec3 bg = (isDark > 0.5) ? vec3(0.01, 0.015, 0.06) : vec3(0.972, 0.980, 0.988);
    color = mix(bg, color, len);

    gl_FragColor = vec4(color, 1.0);
}
`

// ─── Fluid Simulation Class ───

class FluidSimulation {
  renderer: THREE.WebGLRenderer
  width: number
  height: number
  
  // Options — Highly optimized for performance (60fps target)
  options = {
    iterations_poisson: 8,      // Reduced from 32
    iterations_viscous: 8,      // Reduced from 32
    mouse_force: 20,
    resolution: 0.4,            // Reduced from 0.5 for less fragment processing
    cursor_size: 100,
    viscous: 30,
    dt: 0.014,
    isViscous: true,
    BFECC: false                // Disabled to skip extra advection texture reads
  }

  // FBOs
  fbos: Record<string, THREE.WebGLRenderTarget> = {}
  fboSize = new THREE.Vector2()
  cellScale = new THREE.Vector2()
  boundarySpace = new THREE.Vector2()

  // Scenes & cameras for each pass
  advectionScene!: THREE.Scene
  advectionCamera!: THREE.Camera
  advectionMaterial!: THREE.RawShaderMaterial
  advectionLine!: THREE.LineSegments

  externalForceScene!: THREE.Scene
  externalForceCamera!: THREE.Camera
  externalForceMesh!: THREE.Mesh

  viscousScene!: THREE.Scene
  viscousCamera!: THREE.Camera
  viscousMaterial!: THREE.RawShaderMaterial

  divergenceScene!: THREE.Scene
  divergenceCamera!: THREE.Camera
  divergenceMaterial!: THREE.RawShaderMaterial

  poissonScene!: THREE.Scene
  poissonCamera!: THREE.Camera
  poissonMaterial!: THREE.RawShaderMaterial

  pressureScene!: THREE.Scene
  pressureCamera!: THREE.Camera
  pressureMaterial!: THREE.RawShaderMaterial

  outputScene!: THREE.Scene
  outputCamera!: THREE.Camera
  outputMaterial!: THREE.RawShaderMaterial

  // Mouse state
  mouseCoords = new THREE.Vector2()
  mouseCoordsOld = new THREE.Vector2()
  mouseDiff = new THREE.Vector2()
  mouseMoved = false
  mouseTimer: ReturnType<typeof setTimeout> | null = null

  constructor(canvas: HTMLCanvasElement) {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true })
    this.renderer.autoClear = false
    this.renderer.setSize(this.width, this.height)
    // Cap pixel ratio to 1.5 to prevent massive performance drops on retina/high-DPI screens
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    this.renderer.setClearColor(0x000000)

    this.calcSize()
    this.createFBOs()
    this.createAdvection()
    this.createExternalForce()
    this.createViscous()
    this.createDivergence()
    this.createPoisson()
    this.createPressure()
    this.createOutput()
  }

  calcSize() {
    const w = Math.round(this.options.resolution * this.width)
    const h = Math.round(this.options.resolution * this.height)
    this.cellScale.set(1 / w, 1 / h)
    this.fboSize.set(w, h)
  }

  createFBOs() {
    const type = THREE.FloatType
    const keys = ['vel_0', 'vel_1', 'vel_viscous0', 'vel_viscous1', 'div', 'pressure_0', 'pressure_1']
    for (const key of keys) {
      this.fbos[key] = new THREE.WebGLRenderTarget(this.fboSize.x, this.fboSize.y, { type })
    }
  }

  createAdvection() {
    this.advectionScene = new THREE.Scene()
    this.advectionCamera = new THREE.Camera()
    this.advectionMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert,
      fragmentShader: advection_frag,
      uniforms: {
        boundarySpace: { value: this.cellScale },
        px: { value: this.cellScale },
        fboSize: { value: this.fboSize },
        velocity: { value: this.fbos.vel_0.texture },
        dt: { value: this.options.dt },
        isBFECC: { value: true }
      }
    })
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.advectionMaterial)
    this.advectionScene.add(plane)

    // Boundary lines
    const boundaryG = new THREE.BufferGeometry()
    const verts = new Float32Array([-1,-1,0, -1,1,0, -1,1,0, 1,1,0, 1,1,0, 1,-1,0, 1,-1,0, -1,-1,0])
    boundaryG.setAttribute('position', new THREE.BufferAttribute(verts, 3))
    const boundaryM = new THREE.RawShaderMaterial({
      vertexShader: line_vert,
      fragmentShader: advection_frag,
      uniforms: this.advectionMaterial.uniforms
    })
    this.advectionLine = new THREE.LineSegments(boundaryG, boundaryM)
    this.advectionLine.visible = false
    this.advectionScene.add(this.advectionLine)
  }

  createExternalForce() {
    this.externalForceScene = new THREE.Scene()
    this.externalForceCamera = new THREE.Camera()
    const mouseG = new THREE.PlaneGeometry(1, 1)
    const mouseM = new THREE.RawShaderMaterial({
      vertexShader: mouse_vert,
      fragmentShader: externalForce_frag,
      blending: THREE.AdditiveBlending,
      uniforms: {
        px: { value: this.cellScale },
        force: { value: new THREE.Vector2(0, 0) },
        center: { value: new THREE.Vector2(0, 0) },
        scale: { value: new THREE.Vector2(this.options.cursor_size, this.options.cursor_size) }
      }
    })
    this.externalForceMesh = new THREE.Mesh(mouseG, mouseM)
    this.externalForceScene.add(this.externalForceMesh)
  }

  createViscous() {
    this.viscousScene = new THREE.Scene()
    this.viscousCamera = new THREE.Camera()
    this.viscousMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert,
      fragmentShader: viscous_frag,
      uniforms: {
        boundarySpace: { value: this.boundarySpace },
        velocity: { value: this.fbos.vel_1.texture },
        velocity_new: { value: this.fbos.vel_viscous0.texture },
        v: { value: this.options.viscous },
        px: { value: this.cellScale },
        dt: { value: this.options.dt }
      }
    })
    this.viscousScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.viscousMaterial))
  }

  createDivergence() {
    this.divergenceScene = new THREE.Scene()
    this.divergenceCamera = new THREE.Camera()
    this.divergenceMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert,
      fragmentShader: divergence_frag,
      uniforms: {
        boundarySpace: { value: this.boundarySpace },
        velocity: { value: this.fbos.vel_1.texture },
        px: { value: this.cellScale },
        dt: { value: this.options.dt }
      }
    })
    this.divergenceScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.divergenceMaterial))
  }

  createPoisson() {
    this.poissonScene = new THREE.Scene()
    this.poissonCamera = new THREE.Camera()
    this.poissonMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert,
      fragmentShader: poisson_frag,
      uniforms: {
        boundarySpace: { value: this.boundarySpace },
        pressure: { value: this.fbos.pressure_0.texture },
        divergence: { value: this.fbos.div.texture },
        px: { value: this.cellScale }
      }
    })
    this.poissonScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.poissonMaterial))
  }

  createPressure() {
    this.pressureScene = new THREE.Scene()
    this.pressureCamera = new THREE.Camera()
    this.pressureMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert,
      fragmentShader: pressure_frag,
      uniforms: {
        boundarySpace: { value: this.boundarySpace },
        pressure: { value: this.fbos.pressure_0.texture },
        velocity: { value: this.fbos.vel_1.texture },
        px: { value: this.cellScale },
        dt: { value: this.options.dt }
      }
    })
    this.pressureScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.pressureMaterial))
  }

  createOutput() {
    this.outputScene = new THREE.Scene()
    this.outputCamera = new THREE.Camera()
    this.outputMaterial = new THREE.RawShaderMaterial({
      vertexShader: face_vert,
      fragmentShader: color_frag,
      uniforms: {
        velocity: { value: this.fbos.vel_0.texture },
        boundarySpace: { value: new THREE.Vector2() },
        isDark: { value: 1.0 }
      }
    })
    this.outputScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.outputMaterial))
  }

  setMouse(x: number, y: number) {
    if (this.mouseTimer) clearTimeout(this.mouseTimer)
    this.mouseCoords.set((x / this.width) * 2 - 1, -(y / this.height) * 2 + 1)
    this.mouseMoved = true
    this.mouseTimer = setTimeout(() => { this.mouseMoved = false }, 100)
  }

  updateMouse() {
    this.mouseDiff.subVectors(this.mouseCoords, this.mouseCoordsOld)
    this.mouseCoordsOld.copy(this.mouseCoords)
    if (this.mouseCoordsOld.x === 0 && this.mouseCoordsOld.y === 0) this.mouseDiff.set(0, 0)
  }

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer.setSize(this.width, this.height)
    this.calcSize()
    for (const key in this.fbos) {
      this.fbos[key].setSize(this.fboSize.x, this.fboSize.y)
    }
  }

  renderPass(scene: THREE.Scene, camera: THREE.Camera, target: THREE.WebGLRenderTarget | null) {
    this.renderer.setRenderTarget(target)
    this.renderer.render(scene, camera)
    this.renderer.setRenderTarget(null)
  }

  update() {
    this.updateMouse()
    this.boundarySpace.copy(this.cellScale)

    // 1. Advection
    this.advectionMaterial.uniforms.velocity.value = this.fbos.vel_0.texture
    this.advectionMaterial.uniforms.dt.value = this.options.dt
    this.advectionMaterial.uniforms.isBFECC.value = this.options.BFECC
    this.renderPass(this.advectionScene, this.advectionCamera, this.fbos.vel_1)

    // 2. External Force (mouse interaction)
    const uniforms = (this.externalForceMesh.material as THREE.RawShaderMaterial).uniforms
    const forceX = this.mouseDiff.x / 2 * this.options.mouse_force
    const forceY = this.mouseDiff.y / 2 * this.options.mouse_force
    const cursorSizeX = this.options.cursor_size * this.cellScale.x
    const cursorSizeY = this.options.cursor_size * this.cellScale.y
    const centerX = Math.min(Math.max(this.mouseCoords.x, -1 + cursorSizeX + this.cellScale.x * 2), 1 - cursorSizeX - this.cellScale.x * 2)
    const centerY = Math.min(Math.max(this.mouseCoords.y, -1 + cursorSizeY + this.cellScale.y * 2), 1 - cursorSizeY - this.cellScale.y * 2)
    uniforms.force.value.set(forceX, forceY)
    uniforms.center.value.set(centerX, centerY)
    uniforms.scale.value.set(this.options.cursor_size, this.options.cursor_size)
    this.renderPass(this.externalForceScene, this.externalForceCamera, this.fbos.vel_1)

    // 3. Viscous diffusion (Jacobi iterations)
    let vel = this.fbos.vel_1
    if (this.options.isViscous) {
      this.viscousMaterial.uniforms.velocity.value = this.fbos.vel_1.texture
      this.viscousMaterial.uniforms.v.value = this.options.viscous
      this.viscousMaterial.uniforms.dt.value = this.options.dt

      let v_in: THREE.WebGLRenderTarget, v_out: THREE.WebGLRenderTarget
      for (let i = 0; i < this.options.iterations_viscous; i++) {
        if (i % 2 === 0) {
          v_in = this.fbos.vel_viscous0
          v_out = this.fbos.vel_viscous1
        } else {
          v_in = this.fbos.vel_viscous1
          v_out = this.fbos.vel_viscous0
        }
        this.viscousMaterial.uniforms.velocity_new.value = v_in.texture
        this.renderPass(this.viscousScene, this.viscousCamera, v_out)
      }
      vel = (this.options.iterations_viscous % 2 === 0) ? this.fbos.vel_viscous0 : this.fbos.vel_viscous1
    }

    // 4. Divergence
    this.divergenceMaterial.uniforms.velocity.value = vel.texture
    this.renderPass(this.divergenceScene, this.divergenceCamera, this.fbos.div)

    // 5. Poisson (pressure solve)
    let p_in: THREE.WebGLRenderTarget, p_out: THREE.WebGLRenderTarget
    for (let i = 0; i < this.options.iterations_poisson; i++) {
      if (i % 2 === 0) {
        p_in = this.fbos.pressure_0
        p_out = this.fbos.pressure_1
      } else {
        p_in = this.fbos.pressure_1
        p_out = this.fbos.pressure_0
      }
      this.poissonMaterial.uniforms.pressure.value = p_in.texture
      this.renderPass(this.poissonScene, this.poissonCamera, p_out)
    }

    // 6. Pressure gradient subtraction
    const finalPressure = (this.options.iterations_poisson % 2 === 0) ? this.fbos.pressure_0 : this.fbos.pressure_1
    this.pressureMaterial.uniforms.velocity.value = vel.texture
    this.pressureMaterial.uniforms.pressure.value = finalPressure.texture
    this.renderPass(this.pressureScene, this.pressureCamera, this.fbos.vel_0)

    // 7. Output with theme-aware coloring
    this.outputMaterial.uniforms.velocity.value = this.fbos.vel_0.texture
    this.outputMaterial.uniforms.isDark.value = document.documentElement.classList.contains('dark') ? 1.0 : 0.0
    this.renderer.setRenderTarget(null)
    this.renderer.render(this.outputScene, this.outputCamera)
  }

  dispose() {
    for (const key in this.fbos) {
      this.fbos[key].dispose()
    }
    this.renderer.dispose()
  }
}

// ─── React Component ───

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let destroyed = false
    const sim = new FluidSimulation(canvas)

    const onMouseMove = (e: MouseEvent) => sim.setMouse(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        sim.setMouse(e.touches[0].clientX, e.touches[0].clientY)
      }
    }
    const onResize = () => sim.resize()

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('resize', onResize)

    const loop = () => {
      if (destroyed) return
      sim.update()
      requestAnimationFrame(loop)
    }
    loop()

    return () => {
      destroyed = true
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('resize', onResize)
      sim.dispose()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
