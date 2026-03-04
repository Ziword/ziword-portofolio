(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Cd={exports:{}},Sl={};var px;function m1(){if(px)return Sl;px=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return Sl.Fragment=t,Sl.jsx=n,Sl.jsxs=n,Sl}var mx;function g1(){return mx||(mx=1,Cd.exports=m1()),Cd.exports}var rt=g1(),wd={exports:{}},le={};var gx;function v1(){if(gx)return le;gx=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function x(F,q,_t){this.props=F,this.context=q,this.refs=S,this.updater=_t||E}x.prototype.isReactComponent={},x.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function C(){}C.prototype=x.prototype;function D(F,q,_t){this.props=F,this.context=q,this.refs=S,this.updater=_t||E}var L=D.prototype=new C;L.constructor=D,A(L,x.prototype),L.isPureReactComponent=!0;var O=Array.isArray;function z(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(F,q,_t){var Rt=_t.ref;return{$$typeof:i,type:F,key:q,ref:Rt!==void 0?Rt:null,props:_t}}function lt(F,q){return U(F.type,q,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function Z(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(_t){return q[_t]})}var nt=/\/+/g;function ut(F,q){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):q.toString(36)}function Q(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(z,z):(F.status="pending",F.then(function(q){F.status==="pending"&&(F.status="fulfilled",F.value=q)},function(q){F.status==="pending"&&(F.status="rejected",F.reason=q)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function P(F,q,_t,Rt,Bt){var et=typeof F;(et==="undefined"||et==="boolean")&&(F=null);var xt=!1;if(F===null)xt=!0;else switch(et){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(F.$$typeof){case i:case t:xt=!0;break;case g:return xt=F._init,P(xt(F._payload),q,_t,Rt,Bt)}}if(xt)return Bt=Bt(F),xt=Rt===""?"."+ut(F,0):Rt,O(Bt)?(_t="",xt!=null&&(_t=xt.replace(nt,"$&/")+"/"),P(Bt,q,_t,"",function(Jt){return Jt})):Bt!=null&&(H(Bt)&&(Bt=lt(Bt,_t+(Bt.key==null||F&&F.key===Bt.key?"":(""+Bt.key).replace(nt,"$&/")+"/")+xt)),q.push(Bt)),1;xt=0;var Tt=Rt===""?".":Rt+":";if(O(F))for(var Wt=0;Wt<F.length;Wt++)Rt=F[Wt],et=Tt+ut(Rt,Wt),xt+=P(Rt,q,_t,et,Bt);else if(Wt=y(F),typeof Wt=="function")for(F=Wt.call(F),Wt=0;!(Rt=F.next()).done;)Rt=Rt.value,et=Tt+ut(Rt,Wt++),xt+=P(Rt,q,_t,et,Bt);else if(et==="object"){if(typeof F.then=="function")return P(Q(F),q,_t,Rt,Bt);throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function I(F,q,_t){if(F==null)return F;var Rt=[],Bt=0;return P(F,Rt,"","",function(et){return q.call(_t,et,Bt++)}),Rt}function st(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(_t){(F._status===0||F._status===-1)&&(F._status=1,F._result=_t)},function(_t){(F._status===0||F._status===-1)&&(F._status=2,F._result=_t)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var ht=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},St={map:I,forEach:function(F,q,_t){I(F,function(){q.apply(this,arguments)},_t)},count:function(F){var q=0;return I(F,function(){q++}),q},toArray:function(F){return I(F,function(q){return q})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return le.Activity=_,le.Children=St,le.Component=x,le.Fragment=n,le.Profiler=o,le.PureComponent=D,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(F){return B.H.useMemoCache(F)}},le.cache=function(F){return function(){return F.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(F,q,_t){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Rt=A({},F.props),Bt=F.key;if(q!=null)for(et in q.key!==void 0&&(Bt=""+q.key),q)!T.call(q,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&q.ref===void 0||(Rt[et]=q[et]);var et=arguments.length-2;if(et===1)Rt.children=_t;else if(1<et){for(var xt=Array(et),Tt=0;Tt<et;Tt++)xt[Tt]=arguments[Tt+2];Rt.children=xt}return U(F.type,Bt,Rt)},le.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},le.createElement=function(F,q,_t){var Rt,Bt={},et=null;if(q!=null)for(Rt in q.key!==void 0&&(et=""+q.key),q)T.call(q,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Bt[Rt]=q[Rt]);var xt=arguments.length-2;if(xt===1)Bt.children=_t;else if(1<xt){for(var Tt=Array(xt),Wt=0;Wt<xt;Wt++)Tt[Wt]=arguments[Wt+2];Bt.children=Tt}if(F&&F.defaultProps)for(Rt in xt=F.defaultProps,xt)Bt[Rt]===void 0&&(Bt[Rt]=xt[Rt]);return U(F,et,Bt)},le.createRef=function(){return{current:null}},le.forwardRef=function(F){return{$$typeof:h,render:F}},le.isValidElement=H,le.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:st}},le.memo=function(F,q){return{$$typeof:d,type:F,compare:q===void 0?null:q}},le.startTransition=function(F){var q=B.T,_t={};B.T=_t;try{var Rt=F(),Bt=B.S;Bt!==null&&Bt(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(z,ht)}catch(et){ht(et)}finally{q!==null&&_t.types!==null&&(q.types=_t.types),B.T=q}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(F){return B.H.use(F)},le.useActionState=function(F,q,_t){return B.H.useActionState(F,q,_t)},le.useCallback=function(F,q){return B.H.useCallback(F,q)},le.useContext=function(F){return B.H.useContext(F)},le.useDebugValue=function(){},le.useDeferredValue=function(F,q){return B.H.useDeferredValue(F,q)},le.useEffect=function(F,q){return B.H.useEffect(F,q)},le.useEffectEvent=function(F){return B.H.useEffectEvent(F)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(F,q,_t){return B.H.useImperativeHandle(F,q,_t)},le.useInsertionEffect=function(F,q){return B.H.useInsertionEffect(F,q)},le.useLayoutEffect=function(F,q){return B.H.useLayoutEffect(F,q)},le.useMemo=function(F,q){return B.H.useMemo(F,q)},le.useOptimistic=function(F,q){return B.H.useOptimistic(F,q)},le.useReducer=function(F,q,_t){return B.H.useReducer(F,q,_t)},le.useRef=function(F){return B.H.useRef(F)},le.useState=function(F){return B.H.useState(F)},le.useSyncExternalStore=function(F,q,_t){return B.H.useSyncExternalStore(F,q,_t)},le.useTransition=function(){return B.H.useTransition()},le.version="19.2.4",le}var vx;function Ym(){return vx||(vx=1,wd.exports=v1()),wd.exports}var Lt=Ym(),Dd={exports:{}},Ml={},Ld={exports:{}},Ud={};var _x;function _1(){return _x||(_x=1,(function(i){function t(P,I){var st=P.length;P.push(I);t:for(;0<st;){var ht=st-1>>>1,St=P[ht];if(0<o(St,I))P[ht]=I,P[st]=St,st=ht;else break t}}function n(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var I=P[0],st=P.pop();if(st!==I){P[0]=st;t:for(var ht=0,St=P.length,F=St>>>1;ht<F;){var q=2*(ht+1)-1,_t=P[q],Rt=q+1,Bt=P[Rt];if(0>o(_t,st))Rt<St&&0>o(Bt,_t)?(P[ht]=Bt,P[Rt]=st,ht=Rt):(P[ht]=_t,P[q]=st,ht=q);else if(Rt<St&&0>o(Bt,st))P[ht]=Bt,P[Rt]=st,ht=Rt;else break t}}return I}function o(P,I){var st=P.sortIndex-I.sortIndex;return st!==0?st:P.id-I.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,y=!1,E=!1,A=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var I=n(d);I!==null;){if(I.callback===null)s(d);else if(I.startTime<=P)s(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=n(d)}}function O(P){if(A=!1,L(P),!E)if(n(m)!==null)E=!0,z||(z=!0,Z());else{var I=n(d);I!==null&&Q(O,I.startTime-P)}}var z=!1,B=-1,T=5,U=-1;function lt(){return S?!0:!(i.unstable_now()-U<T)}function H(){if(S=!1,z){var P=i.unstable_now();U=P;var I=!0;try{t:{E=!1,A&&(A=!1,C(B),B=-1),y=!0;var st=v;try{e:{for(L(P),_=n(m);_!==null&&!(_.expirationTime>P&&lt());){var ht=_.callback;if(typeof ht=="function"){_.callback=null,v=_.priorityLevel;var St=ht(_.expirationTime<=P);if(P=i.unstable_now(),typeof St=="function"){_.callback=St,L(P),I=!0;break e}_===n(m)&&s(m),L(P)}else s(m);_=n(m)}if(_!==null)I=!0;else{var F=n(d);F!==null&&Q(O,F.startTime-P),I=!1}}break t}finally{_=null,v=st,y=!1}I=void 0}}finally{I?Z():z=!1}}}var Z;if(typeof D=="function")Z=function(){D(H)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ut=nt.port2;nt.port1.onmessage=H,Z=function(){ut.postMessage(null)}}else Z=function(){x(H,0)};function Q(P,I){B=x(function(){P(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(P){P.callback=null},i.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_next=function(P){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var st=v;v=I;try{return P()}finally{v=st}},i.unstable_requestPaint=function(){S=!0},i.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var st=v;v=P;try{return I()}finally{v=st}},i.unstable_scheduleCallback=function(P,I,st){var ht=i.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?ht+st:ht):st=ht,P){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=st+St,P={id:g++,callback:I,priorityLevel:P,startTime:st,expirationTime:St,sortIndex:-1},st>ht?(P.sortIndex=st,t(d,P),n(m)===null&&P===n(d)&&(A?(C(B),B=-1):A=!0,Q(O,st-ht))):(P.sortIndex=St,t(m,P),E||y||(E=!0,z||(z=!0,Z()))),P},i.unstable_shouldYield=lt,i.unstable_wrapCallback=function(P){var I=v;return function(){var st=v;v=I;try{return P.apply(this,arguments)}finally{v=st}}}})(Ud)),Ud}var xx;function x1(){return xx||(xx=1,Ld.exports=_1()),Ld.exports}var Nd={exports:{}},Nn={};var yx;function y1(){if(yx)return Nn;yx=1;var i=Ym();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Nn.flushSync=function(m){var d=u.T,g=s.p;try{if(u.T=null,s.p=2,m)return m()}finally{u.T=d,s.p=g,s.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var Sx;function S1(){if(Sx)return Nd.exports;Sx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Nd.exports=y1(),Nd.exports}var Mx;function M1(){if(Mx)return Ml;Mx=1;var i=x1(),t=Ym(),n=S1();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function u(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var f=r.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===r)return m(f),e;if(p===l)return m(f),a;p=p.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=p;else{for(var M=!1,R=f.child;R;){if(R===r){M=!0,r=f,l=p;break}if(R===l){M=!0,l=f,r=p;break}R=R.sibling}if(!M){for(R=p.child;R;){if(R===r){M=!0,r=p,l=f;break}if(R===l){M=!0,l=p,r=f;break}R=R.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),lt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case L:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return a=e.displayName||null,a!==null?a:ut(e.type)||"Memo";case T:a=e._payload,e=e._init;try{return ut(e(a))}catch{}}return null}var Q=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},ht=[],St=-1;function F(e){return{current:e}}function q(e){0>St||(e.current=ht[St],ht[St]=null,St--)}function _t(e,a){St++,ht[St]=e.current,e.current=a}var Rt=F(null),Bt=F(null),et=F(null),xt=F(null);function Tt(e,a){switch(_t(et,a),_t(Bt,e),_t(Rt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?I_(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=I_(a),e=B_(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Rt),_t(Rt,e)}function Wt(){q(Rt),q(Bt),q(et)}function Jt(e){e.memoizedState!==null&&_t(xt,e);var a=Rt.current,r=B_(a,e.type);a!==r&&(_t(Bt,e),_t(Rt,r))}function ee(e){Bt.current===e&&(q(Rt),q(Bt)),xt.current===e&&(q(xt),vl._currentValue=st)}var en,ye;function ve(e){if(en===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);en=a&&a[1]||"",ye=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+ye}var Ue=!1;function ce(e,a){if(!e||Ue)return"";Ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var it=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){it=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){it=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],R=p[1];if(M&&R){var V=M.split(`
`),$=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<$.length&&!$[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===$.length)for(l=V.length-1,f=$.length-1;1<=l&&0<=f&&V[l]!==$[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==$[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==$[f]){var pt=`
`+V[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=f);break}}}finally{Ue=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ve(r):""}function $e(e,a){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==a&&a!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return ve("Activity");default:return""}}function G(e){try{var a="",r=null;do a+=$e(e,r),r=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ke=Object.prototype.hasOwnProperty,Te=i.unstable_scheduleCallback,Pe=i.unstable_cancelCallback,Yt=i.unstable_shouldYield,N=i.unstable_requestPaint,b=i.unstable_now,j=i.unstable_getCurrentPriorityLevel,mt=i.unstable_ImmediatePriority,yt=i.unstable_UserBlockingPriority,dt=i.unstable_NormalPriority,jt=i.unstable_LowPriority,wt=i.unstable_IdlePriority,Qt=i.log,ne=i.unstable_setDisableYieldValue,bt=null,Mt=null;function Ot(e){if(typeof Qt=="function"&&ne(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(bt,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,Ft=Math.log,fe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ft(e)/fe|0)|0}var Ct=256,At=262144,It=4194304;function Et(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,a,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var R=l&134217727;return R!==0?(l=R&~p,l!==0?f=Et(l):(M&=R,M!==0?f=Et(M):r||(r=R&~e,r!==0&&(f=Et(r))))):(R=l&~p,R!==0?f=Et(R):M!==0?f=Et(M):r||(r=l&~e,r!==0&&(f=Et(r)))),f===0?0:a!==0&&a!==f&&(a&p)===0&&(p=f&-f,r=a&-a,p>=r||p===32&&(r&4194048)!==0)?a:f}function Vt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function ae(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ae(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function zn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ci(e,a,r,l,f,p){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,$=e.hiddenUpdates;for(r=M&~r;0<r;){var pt=31-Pt(r),vt=1<<pt;R[pt]=0,V[pt]=-1;var it=$[pt];if(it!==null)for($[pt]=null,pt=0;pt<it.length;pt++){var ct=it[pt];ct!==null&&(ct.lane&=-536870913)}r&=~vt}l!==0&&Uo(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(M&~a))}function Uo(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Pt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function dr(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-Pt(r),f=1<<l;f&a|e[l]&a&&(e[l]|=a),r&=~f}}function ec(e,a){var r=a&-a;return r=(r&42)!==0?1:pr(r),(r&(e.suspendedLanes|a))!==0?0:r}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:ox(e.type))}function gr(e,a){var r=I.p;try{return I.p=e,a()}finally{I.p=r}}var wi=Math.random().toString(36).slice(2),un="__reactFiber$"+wi,xn="__reactProps$"+wi,ha="__reactContainer$"+wi,ja="__reactEvents$"+wi,nc="__reactListeners$"+wi,ic="__reactHandles$"+wi,ac="__reactResources$"+wi,Ls="__reactMarker$"+wi;function No(e){delete e[un],delete e[xn],delete e[ja],delete e[nc],delete e[ic]}function qa(e){var a=e[un];if(a)return a;for(var r=e.parentNode;r;){if(a=r[ha]||r[un]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=W_(e);e!==null;){if(r=e[un])return r;e=W_(e)}return a}e=r,r=e.parentNode}return null}function Ya(e){if(e=e[un]||e[ha]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Us(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function w(e){var a=e[ac];return a||(a=e[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function X(e){e[Ls]=!0}var ot=new Set,tt={};function K(e,a){Dt(e,a),Dt(e+"Capture",a)}function Dt(e,a){for(tt[e]=a,e=0;e<a.length;e++)ot.add(a[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},qt={};function Zt(e){return Ke.call(qt,e)?!0:Ke.call(Ut,e)?!1:zt.test(e)?qt[e]=!0:(Ut[e]=!0,!1)}function ie(e,a,r){if(Zt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function oe(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function Ht(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ze(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Qe(e,a,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){r=""+M,p.call(this,M)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ce(e){if(!e._valueTracker){var a=Ze(e)?"checked":"value";e._valueTracker=Qe(e,a,""+e[a])}}function yn(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=Ze(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vn=/[\n"\\]/g;function re(e){return e.replace(Vn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Hn(e,a,r,l,f,p,M,R){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+he(a)):e.value!==""+he(a)&&(e.value=""+he(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Di(e,M,he(a)):r!=null?Di(e,M,he(r)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+he(R):e.removeAttribute("name")}function ii(e,a,r,l,f,p,M,R){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),a!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||a!=null)){Ce(e);return}r=r!=null?""+he(r):"",a=a!=null?""+he(a):r,R||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ce(e)}function Di(e,a,r){a==="number"&&kt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ai(e,a,r,l){if(e=e.options,a){a={};for(var f=0;f<r.length;f++)a["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=a.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),a=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function Oe(e,a,r){if(a!=null&&(a=""+he(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+he(r):""}function fn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(Q(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=he(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ce(e)}function Gn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var hn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Li(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||hn.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function da(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&r[f]!==l&&Li(e,f,l)}else for(var p in a)a.hasOwnProperty(p)&&Li(e,p,a[p])}function vr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sc(e){return hb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var Tf=null;function Af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,xr=null;function Fg(e){var a=Ya(e);if(a&&(e=a.stateNode)){var r=e[xn]||null;t:switch(e=a.stateNode,a.type){case"input":if(Hn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+re(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var f=l[xn]||null;if(!f)throw Error(s(90));Hn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&yn(l)}break t;case"textarea":Oe(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&ai(e,!!r.multiple,a,!1)}}}var Rf=!1;function Ig(e,a,r){if(Rf)return e(a,r);Rf=!0;try{var l=e(a);return l}finally{if(Rf=!1,(_r!==null||xr!==null)&&(jc(),_r&&(a=_r,e=xr,xr=_r=null,Fg(a),e)))for(a=0;a<e.length;a++)Fg(e[a])}}function Po(e,a){var r=e.stateNode;if(r===null)return null;var l=r[xn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=!1;if(ma)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Cf=!1}var Ka=null,wf=null,rc=null;function Bg(){if(rc)return rc;var e,a=wf,r=a.length,l,f="value"in Ka?Ka.value:Ka.textContent,p=f.length;for(e=0;e<r&&a[e]===f[e];e++);var M=r-e;for(l=1;l<=M&&a[r-l]===f[p-l];l++);return rc=f.slice(e,1<l?1-l:void 0)}function oc(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function lc(){return!0}function zg(){return!1}function Yn(e){function a(r,l,f,p,M){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(p):p[R]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?lc:zg,this.isPropagationStopped=zg,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),a}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Yn(Ns),Fo=_({},Ns,{view:0,detail:0}),db=Yn(Fo),Df,Lf,Io,uc=_({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Io&&(Io&&e.type==="mousemove"?(Df=e.screenX-Io.screenX,Lf=e.screenY-Io.screenY):Lf=Df=0,Io=e),Df)},movementY:function(e){return"movementY"in e?e.movementY:Lf}}),Vg=Yn(uc),pb=_({},uc,{dataTransfer:0}),mb=Yn(pb),gb=_({},Fo,{relatedTarget:0}),Uf=Yn(gb),vb=_({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),_b=Yn(vb),xb=_({},Ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yb=Yn(xb),Sb=_({},Ns,{data:0}),Hg=Yn(Sb),Mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tb(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=bb[e])?!!a[e]:!1}function Nf(){return Tb}var Ab=_({},Fo,{key:function(e){if(e.key){var a=Mb[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=oc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(e){return e.type==="keypress"?oc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rb=Yn(Ab),Cb=_({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Yn(Cb),wb=_({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),Db=Yn(wb),Lb=_({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ub=Yn(Lb),Nb=_({},uc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pb=Yn(Nb),Ob=_({},Ns,{newState:0,oldState:0}),Fb=Yn(Ob),Ib=[9,13,27,32],Pf=ma&&"CompositionEvent"in window,Bo=null;ma&&"documentMode"in document&&(Bo=document.documentMode);var Bb=ma&&"TextEvent"in window&&!Bo,kg=ma&&(!Pf||Bo&&8<Bo&&11>=Bo),Xg=" ",Wg=!1;function jg(e,a){switch(e){case"keyup":return Ib.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function zb(e,a){switch(e){case"compositionend":return qg(a);case"keypress":return a.which!==32?null:(Wg=!0,Xg);case"textInput":return e=a.data,e===Xg&&Wg?null:e;default:return null}}function Vb(e,a){if(yr)return e==="compositionend"||!Pf&&jg(e,a)?(e=Bg(),rc=wf=Ka=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return kg&&a.locale!=="ko"?null:a.data;default:return null}}var Hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Hb[e.type]:a==="textarea"}function Kg(e,a,r,l){_r?xr?xr.push(l):xr=[l]:_r=l,a=$c(a,"onChange"),0<a.length&&(r=new cc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var zo=null,Vo=null;function Gb(e){L_(e,0)}function fc(e){var a=Us(e);if(yn(a))return e}function Zg(e,a){if(e==="change")return a}var Qg=!1;if(ma){var Of;if(ma){var Ff="oninput"in document;if(!Ff){var Jg=document.createElement("div");Jg.setAttribute("oninput","return;"),Ff=typeof Jg.oninput=="function"}Of=Ff}else Of=!1;Qg=Of&&(!document.documentMode||9<document.documentMode)}function $g(){zo&&(zo.detachEvent("onpropertychange",t0),Vo=zo=null)}function t0(e){if(e.propertyName==="value"&&fc(Vo)){var a=[];Kg(a,Vo,e,Af(e)),Ig(Gb,a)}}function kb(e,a,r){e==="focusin"?($g(),zo=a,Vo=r,zo.attachEvent("onpropertychange",t0)):e==="focusout"&&$g()}function Xb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fc(Vo)}function Wb(e,a){if(e==="click")return fc(a)}function jb(e,a){if(e==="input"||e==="change")return fc(a)}function qb(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var si=typeof Object.is=="function"?Object.is:qb;function Ho(e,a){if(si(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Ke.call(a,f)||!si(e[f],a[f]))return!1}return!0}function e0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,a){var r=e0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=e0(r)}}function i0(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?i0(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function a0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=kt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=kt(e.document)}return a}function If(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Yb=ma&&"documentMode"in document&&11>=document.documentMode,Sr=null,Bf=null,Go=null,zf=!1;function s0(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zf||Sr==null||Sr!==kt(l)||(l=Sr,"selectionStart"in l&&If(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=$c(Bf,"onSelect"),0<l.length&&(a=new cc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=Sr)))}function Ps(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Mr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Vf={},r0={};ma&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Os(e){if(Vf[e])return Vf[e];if(!Mr[e])return e;var a=Mr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in r0)return Vf[e]=a[r];return e}var o0=Os("animationend"),l0=Os("animationiteration"),c0=Os("animationstart"),Kb=Os("transitionrun"),Zb=Os("transitionstart"),Qb=Os("transitioncancel"),u0=Os("transitionend"),f0=new Map,Hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hf.push("scrollEnd");function Ui(e,a){f0.set(e,a),K(a,[e])}var hc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],Er=0,Gf=0;function dc(){for(var e=Er,a=Gf=Er=0;a<e;){var r=pi[a];pi[a++]=null;var l=pi[a];pi[a++]=null;var f=pi[a];pi[a++]=null;var p=pi[a];if(pi[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&h0(r,f,p)}}function pc(e,a,r,l){pi[Er++]=e,pi[Er++]=a,pi[Er++]=r,pi[Er++]=l,Gf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function kf(e,a,r,l){return pc(e,a,r,l),mc(e)}function Fs(e,a){return pc(e,null,null,a),mc(e)}function h0(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,p=e.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&a!==null&&(f=31-Pt(r),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[a]:l.push(a),a.lane=r|536870912),p):null}function mc(e){if(50<ul)throw ul=0,Jh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var br={};function Jb(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,a,r,l){return new Jb(e,a,r,l)}function Xf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,a){var r=e.alternate;return r===null?(r=ri(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function d0(e,a){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function gc(e,a,r,l,f,p){var M=0;if(l=e,typeof e=="function")Xf(e)&&(M=1);else if(typeof e=="string")M=i1(e,r,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=ri(31,r,a,f),e.elementType=U,e.lanes=p,e;case A:return Is(r.children,f,p,a);case S:M=8,f|=24;break;case x:return e=ri(12,r,a,f|2),e.elementType=x,e.lanes=p,e;case O:return e=ri(13,r,a,f),e.elementType=O,e.lanes=p,e;case z:return e=ri(19,r,a,f),e.elementType=z,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:M=10;break t;case C:M=9;break t;case L:M=11;break t;case B:M=14;break t;case T:M=16,l=null;break t}M=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=ri(M,r,a,f),a.elementType=e,a.type=l,a.lanes=p,a}function Is(e,a,r,l){return e=ri(7,e,l,a),e.lanes=r,e}function Wf(e,a,r){return e=ri(6,e,null,a),e.lanes=r,e}function p0(e){var a=ri(18,null,null,0);return a.stateNode=e,a}function jf(e,a,r){return a=ri(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var m0=new WeakMap;function mi(e,a){if(typeof e=="object"&&e!==null){var r=m0.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},m0.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var Tr=[],Ar=0,vc=null,ko=0,gi=[],vi=0,Za=null,Ji=1,$i="";function va(e,a){Tr[Ar++]=ko,Tr[Ar++]=vc,vc=e,ko=a}function g0(e,a,r){gi[vi++]=Ji,gi[vi++]=$i,gi[vi++]=Za,Za=e;var l=Ji;e=$i;var f=32-Pt(l)-1;l&=~(1<<f),r+=1;var p=32-Pt(a)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ji=1<<32-Pt(a)+f|r<<f|l,$i=p+e}else Ji=1<<p|r<<f|l,$i=e}function qf(e){e.return!==null&&(va(e,1),g0(e,1,0))}function Yf(e){for(;e===vc;)vc=Tr[--Ar],Tr[Ar]=null,ko=Tr[--Ar],Tr[Ar]=null;for(;e===Za;)Za=gi[--vi],gi[vi]=null,$i=gi[--vi],gi[vi]=null,Ji=gi[--vi],gi[vi]=null}function v0(e,a){gi[vi++]=Ji,gi[vi++]=$i,gi[vi++]=Za,Ji=a.id,$i=a.overflow,Za=e}var Rn=null,qe=null,Ee=!1,Qa=null,_i=!1,Kf=Error(s(519));function Ja(e){var a=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xo(mi(a,e)),Kf}function _0(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[un]=e,a[xn]=l,r){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(r=0;r<hl.length;r++)xe(hl[r],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),ii(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),fn(a,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||O_(a.textContent,r)?(l.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),l.onScroll!=null&&xe("scroll",a),l.onScrollEnd!=null&&xe("scrollend",a),l.onClick!=null&&(a.onclick=pa),a=!0):a=!1,a||Ja(e,!0)}function x0(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Rn=Rn.return}}function Rr(e){if(e!==Rn)return!1;if(!Ee)return x0(e),Ee=!0,!1;var a=e.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||dd(e.type,e.memoizedProps)),r=!r),r&&qe&&Ja(e),x0(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=X_(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=X_(e)}else a===27?(a=qe,hs(e.type)?(e=_d,_d=null,qe=e):qe=a):qe=Rn?yi(e.stateNode.nextSibling):null;return!0}function Bs(){qe=Rn=null,Ee=!1}function Zf(){var e=Qa;return e!==null&&(Jn===null?Jn=e:Jn.push.apply(Jn,e),Qa=null),e}function Xo(e){Qa===null?Qa=[e]:Qa.push(e)}var Qf=F(null),zs=null,_a=null;function $a(e,a,r){_t(Qf,a._currentValue),a._currentValue=r}function xa(e){e._currentValue=Qf.current,q(Qf)}function Jf(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function $f(e,a,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;t:for(;p!==null;){var R=p;p=f;for(var V=0;V<a.length;V++)if(R.context===a[V]){p.lanes|=r,R=p.alternate,R!==null&&(R.lanes|=r),Jf(p.return,r,e),l||(M=null);break t}p=R.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=r,p=M.alternate,p!==null&&(p.lanes|=r),Jf(M,r,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Cr(e,a,r,l){e=null;for(var f=a,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var R=f.type;si(f.pendingProps.value,M.value)||(e!==null?e.push(R):e=[R])}}else if(f===xt.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(vl):e=[vl])}f=f.return}e!==null&&$f(a,e,r,l),a.flags|=262144}function _c(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){zs=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return y0(zs,e)}function xc(e,a){return zs===null&&Vs(e),y0(e,a)}function y0(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},_a===null){if(e===null)throw Error(s(308));_a=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else _a=_a.next=a;return r}var $b=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},tT=i.unstable_scheduleCallback,eT=i.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function th(){return{controller:new $b,data:new Map,refCount:0}}function Wo(e){e.refCount--,e.refCount===0&&tT(eT,function(){e.controller.abort()})}var jo=null,eh=0,wr=0,Dr=null;function nT(e,a){if(jo===null){var r=jo=[];eh=0,wr=ad(),Dr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return eh++,a.then(S0,S0),a}function S0(){if(--eh===0&&jo!==null){Dr!==null&&(Dr.status="fulfilled");var e=jo;jo=null,wr=0,Dr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function iT(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<r.length;f++)(0,r[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var M0=P.S;P.S=function(e,a){s_=b(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&nT(e,a),M0!==null&&M0(e,a)};var Hs=F(null);function nh(){var e=Hs.current;return e!==null?e:We.pooledCache}function yc(e,a){a===null?_t(Hs,Hs.current):_t(Hs,a.pool)}function E0(){var e=nh();return e===null?null:{parent:dn._currentValue,pool:e}}var Lr=Error(s(460)),ih=Error(s(474)),Sc=Error(s(542)),Mc={then:function(){}};function b0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function T0(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(pa,pa),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,R0(e),e;default:if(typeof a.status=="string")a.then(pa,pa);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,R0(e),e}throw ks=a,Lr}}function Gs(e){try{var a=e._init;return a(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ks=r,Lr):r}}var ks=null;function A0(){if(ks===null)throw Error(s(459));var e=ks;return ks=null,e}function R0(e){if(e===Lr||e===Sc)throw Error(s(483))}var Ur=null,qo=0;function Ec(e){var a=qo;return qo+=1,Ur===null&&(Ur=[]),T0(Ur,e,a)}function Yo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function bc(e,a){throw a.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function C0(e){function a(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function r(Y,k){if(!e)return null;for(;k!==null;)a(Y,k),k=k.sibling;return null}function l(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function f(Y,k){return Y=ga(Y,k),Y.index=0,Y.sibling=null,Y}function p(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function R(Y,k,J,gt){return k===null||k.tag!==6?(k=Wf(J,Y.mode,gt),k.return=Y,k):(k=f(k,J),k.return=Y,k)}function V(Y,k,J,gt){var $t=J.type;return $t===A?pt(Y,k,J.props.children,gt,J.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Gs($t)===k.type)?(k=f(k,J.props),Yo(k,J),k.return=Y,k):(k=gc(J.type,J.key,J.props,null,Y.mode,gt),Yo(k,J),k.return=Y,k)}function $(Y,k,J,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=jf(J,Y.mode,gt),k.return=Y,k):(k=f(k,J.children||[]),k.return=Y,k)}function pt(Y,k,J,gt,$t){return k===null||k.tag!==7?(k=Is(J,Y.mode,gt,$t),k.return=Y,k):(k=f(k,J),k.return=Y,k)}function vt(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Wf(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return J=gc(k.type,k.key,k.props,null,Y.mode,J),Yo(J,k),J.return=Y,J;case E:return k=jf(k,Y.mode,J),k.return=Y,k;case T:return k=Gs(k),vt(Y,k,J)}if(Q(k)||Z(k))return k=Is(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return vt(Y,Ec(k),J);if(k.$$typeof===D)return vt(Y,xc(Y,k),J);bc(Y,k)}return null}function it(Y,k,J,gt){var $t=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $t!==null?null:R(Y,k,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===$t?V(Y,k,J,gt):null;case E:return J.key===$t?$(Y,k,J,gt):null;case T:return J=Gs(J),it(Y,k,J,gt)}if(Q(J)||Z(J))return $t!==null?null:pt(Y,k,J,gt,null);if(typeof J.then=="function")return it(Y,k,Ec(J),gt);if(J.$$typeof===D)return it(Y,k,xc(Y,J),gt);bc(Y,J)}return null}function ct(Y,k,J,gt,$t){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get(J)||null,R(k,Y,""+gt,$t);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Y=Y.get(gt.key===null?J:gt.key)||null,V(k,Y,gt,$t);case E:return Y=Y.get(gt.key===null?J:gt.key)||null,$(k,Y,gt,$t);case T:return gt=Gs(gt),ct(Y,k,J,gt,$t)}if(Q(gt)||Z(gt))return Y=Y.get(J)||null,pt(k,Y,gt,$t,null);if(typeof gt.then=="function")return ct(Y,k,J,Ec(gt),$t);if(gt.$$typeof===D)return ct(Y,k,J,xc(k,gt),$t);bc(k,gt)}return null}function Gt(Y,k,J,gt){for(var $t=null,we=null,Kt=k,de=k=0,Me=null;Kt!==null&&de<J.length;de++){Kt.index>de?(Me=Kt,Kt=null):Me=Kt.sibling;var De=it(Y,Kt,J[de],gt);if(De===null){Kt===null&&(Kt=Me);break}e&&Kt&&De.alternate===null&&a(Y,Kt),k=p(De,k,de),we===null?$t=De:we.sibling=De,we=De,Kt=Me}if(de===J.length)return r(Y,Kt),Ee&&va(Y,de),$t;if(Kt===null){for(;de<J.length;de++)Kt=vt(Y,J[de],gt),Kt!==null&&(k=p(Kt,k,de),we===null?$t=Kt:we.sibling=Kt,we=Kt);return Ee&&va(Y,de),$t}for(Kt=l(Kt);de<J.length;de++)Me=ct(Kt,Y,de,J[de],gt),Me!==null&&(e&&Me.alternate!==null&&Kt.delete(Me.key===null?de:Me.key),k=p(Me,k,de),we===null?$t=Me:we.sibling=Me,we=Me);return e&&Kt.forEach(function(vs){return a(Y,vs)}),Ee&&va(Y,de),$t}function te(Y,k,J,gt){if(J==null)throw Error(s(151));for(var $t=null,we=null,Kt=k,de=k=0,Me=null,De=J.next();Kt!==null&&!De.done;de++,De=J.next()){Kt.index>de?(Me=Kt,Kt=null):Me=Kt.sibling;var vs=it(Y,Kt,De.value,gt);if(vs===null){Kt===null&&(Kt=Me);break}e&&Kt&&vs.alternate===null&&a(Y,Kt),k=p(vs,k,de),we===null?$t=vs:we.sibling=vs,we=vs,Kt=Me}if(De.done)return r(Y,Kt),Ee&&va(Y,de),$t;if(Kt===null){for(;!De.done;de++,De=J.next())De=vt(Y,De.value,gt),De!==null&&(k=p(De,k,de),we===null?$t=De:we.sibling=De,we=De);return Ee&&va(Y,de),$t}for(Kt=l(Kt);!De.done;de++,De=J.next())De=ct(Kt,Y,de,De.value,gt),De!==null&&(e&&De.alternate!==null&&Kt.delete(De.key===null?de:De.key),k=p(De,k,de),we===null?$t=De:we.sibling=De,we=De);return e&&Kt.forEach(function(p1){return a(Y,p1)}),Ee&&va(Y,de),$t}function Xe(Y,k,J,gt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var $t=J.key;k!==null;){if(k.key===$t){if($t=J.type,$t===A){if(k.tag===7){r(Y,k.sibling),gt=f(k,J.props.children),gt.return=Y,Y=gt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Gs($t)===k.type){r(Y,k.sibling),gt=f(k,J.props),Yo(gt,J),gt.return=Y,Y=gt;break t}r(Y,k);break}else a(Y,k);k=k.sibling}J.type===A?(gt=Is(J.props.children,Y.mode,gt,J.key),gt.return=Y,Y=gt):(gt=gc(J.type,J.key,J.props,null,Y.mode,gt),Yo(gt,J),gt.return=Y,Y=gt)}return M(Y);case E:t:{for($t=J.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){r(Y,k.sibling),gt=f(k,J.children||[]),gt.return=Y,Y=gt;break t}else{r(Y,k);break}else a(Y,k);k=k.sibling}gt=jf(J,Y.mode,gt),gt.return=Y,Y=gt}return M(Y);case T:return J=Gs(J),Xe(Y,k,J,gt)}if(Q(J))return Gt(Y,k,J,gt);if(Z(J)){if($t=Z(J),typeof $t!="function")throw Error(s(150));return J=$t.call(J),te(Y,k,J,gt)}if(typeof J.then=="function")return Xe(Y,k,Ec(J),gt);if(J.$$typeof===D)return Xe(Y,k,xc(Y,J),gt);bc(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(r(Y,k.sibling),gt=f(k,J),gt.return=Y,Y=gt):(r(Y,k),gt=Wf(J,Y.mode,gt),gt.return=Y,Y=gt),M(Y)):r(Y,k)}return function(Y,k,J,gt){try{qo=0;var $t=Xe(Y,k,J,gt);return Ur=null,$t}catch(Kt){if(Kt===Lr||Kt===Sc)throw Kt;var we=ri(29,Kt,null,Y.mode);return we.lanes=gt,we.return=Y,we}}}var Xs=C0(!0),w0=C0(!1),ts=!1;function ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function es(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ns(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=mc(e),h0(e,null,r),a}return pc(e,l,a,r),mc(e)}function Ko(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,dr(e,r)}}function rh(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,r=r.next}while(r!==null);p===null?f=p=a:p=p.next=a}else f=p=a;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var oh=!1;function Zo(){if(oh){var e=Dr;if(e!==null)throw e}}function Qo(e,a,r,l){oh=!1;var f=e.updateQueue;ts=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,$=V.next;V.next=null,M===null?p=$:M.next=$,M=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==M&&(R===null?pt.firstBaseUpdate=$:R.next=$,pt.lastBaseUpdate=V))}if(p!==null){var vt=f.baseState;M=0,pt=$=V=null,R=p;do{var it=R.lane&-536870913,ct=it!==R.lane;if(ct?(Se&it)===it:(l&it)===it){it!==0&&it===wr&&(oh=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Gt=e,te=R;it=a;var Xe=r;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){vt=Gt.call(Xe,vt,it);break t}vt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,it=typeof Gt=="function"?Gt.call(Xe,vt,it):Gt,it==null)break t;vt=_({},vt,it);break t;case 2:ts=!0}}it=R.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=f.callbacks,ct===null?f.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?($=pt=ct,V=vt):pt=pt.next=ct,M|=it;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,f.lastBaseUpdate=ct,f.shared.pending=null}}while(!0);pt===null&&(V=vt),f.baseState=V,f.firstBaseUpdate=$,f.lastBaseUpdate=pt,p===null&&(f.shared.lanes=0),os|=M,e.lanes=M,e.memoizedState=vt}}function D0(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function L0(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)D0(r[e],a)}var Nr=F(null),Tc=F(0);function U0(e,a){e=Ca,_t(Tc,e),_t(Nr,a),Ca=e|a.baseLanes}function lh(){_t(Tc,Ca),_t(Nr,Nr.current)}function ch(){Ca=Tc.current,q(Nr),q(Tc)}var oi=F(null),xi=null;function is(e){var a=e.alternate;_t(rn,rn.current&1),_t(oi,e),xi===null&&(a===null||Nr.current!==null||a.memoizedState!==null)&&(xi=e)}function uh(e){_t(rn,rn.current),_t(oi,e),xi===null&&(xi=e)}function N0(e){e.tag===22?(_t(rn,rn.current),_t(oi,e),xi===null&&(xi=e)):as()}function as(){_t(rn,rn.current),_t(oi,oi.current)}function li(e){q(oi),xi===e&&(xi=null),q(rn)}var rn=F(0);function Ac(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||gd(r)||vd(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ya=0,ue=null,Ge=null,pn=null,Rc=!1,Pr=!1,Ws=!1,Cc=0,Jo=0,Or=null,aT=0;function nn(){throw Error(s(321))}function fh(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!si(e[r],a[r]))return!1;return!0}function hh(e,a,r,l,f,p){return ya=p,ue=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,P.H=e===null||e.memoizedState===null?gv:Rh,Ws=!1,p=r(l,f),Ws=!1,Pr&&(p=O0(a,r,l,f)),P0(e),p}function P0(e){P.H=el;var a=Ge!==null&&Ge.next!==null;if(ya=0,pn=Ge=ue=null,Rc=!1,Jo=0,Or=null,a)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&_c(e)&&(mn=!0))}function O0(e,a,r,l){ue=e;var f=0;do{if(Pr&&(Or=null),Jo=0,Pr=!1,25<=f)throw Error(s(301));if(f+=1,pn=Ge=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}P.H=vv,p=a(r,l)}while(Pr);return p}function sT(){var e=P.H,a=e.useState()[0];return a=typeof a.then=="function"?$o(a):a,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),a}function dh(){var e=Cc!==0;return Cc=0,e}function ph(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function mh(e){if(Rc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Rc=!1}ya=0,pn=Ge=ue=null,Pr=!1,Jo=Cc=0,Or=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ue.memoizedState=pn=e:pn=pn.next=e,pn}function on(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var a=pn===null?ue.memoizedState:pn.next;if(a!==null)pn=a,Ge=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},pn===null?ue.memoizedState=pn=e:pn=pn.next=e}return pn}function wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var a=Jo;return Jo+=1,Or===null&&(Or=[]),e=T0(Or,e,a),a=ue,(pn===null?a.memoizedState:pn.next)===null&&(a=a.alternate,P.H=a===null||a.memoizedState===null?gv:Rh),e}function Dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $o(e);if(e.$$typeof===D)return Cn(e)}throw Error(s(438,String(e)))}function gh(e){var a=null,r=ue.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=wc(),ue.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=lt;return a.index++,r}function Sa(e,a){return typeof a=="function"?a(e):a}function Lc(e){var a=on();return vh(a,Ge,e)}function vh(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}a.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{a=f.next;var R=M=null,V=null,$=a,pt=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(Se&vt)===vt:(ya&vt)===vt){var it=$.revertLane;if(it===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===wr&&(pt=!0);else if((ya&it)===it){$=$.next,it===wr&&(pt=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},V===null?(R=V=vt,M=p):V=V.next=vt,ue.lanes|=it,os|=it;vt=$.action,Ws&&r(p,vt),p=$.hasEagerState?$.eagerState:r(p,vt)}else it={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},V===null?(R=V=it,M=p):V=V.next=it,ue.lanes|=vt,os|=vt;$=$.next}while($!==null&&$!==a);if(V===null?M=p:V.next=R,!si(p,e.memoizedState)&&(mn=!0,pt&&(r=Dr,r!==null)))throw r;e.memoizedState=p,e.baseState=M,e.baseQueue=V,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function _h(e){var a=on(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,p=a.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do p=e(p,M.action),M=M.next;while(M!==f);si(p,a.memoizedState)||(mn=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),r.lastRenderedState=p}return[p,l]}function F0(e,a,r){var l=ue,f=on(),p=Ee;if(p){if(r===void 0)throw Error(s(407));r=r()}else r=a();var M=!si((Ge||f).memoizedState,r);if(M&&(f.memoizedState=r,mn=!0),f=f.queue,Sh(z0.bind(null,l,f,e),[e]),f.getSnapshot!==a||M||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,Fr(9,{destroy:void 0},B0.bind(null,l,f,r,a),null),We===null)throw Error(s(349));p||(ya&127)!==0||I0(l,a,r)}return r}function I0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ue.updateQueue,a===null?(a=wc(),ue.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function B0(e,a,r,l){a.value=r,a.getSnapshot=l,V0(a)&&H0(e)}function z0(e,a,r){return r(function(){V0(a)&&H0(e)})}function V0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!si(e,r)}catch{return!0}}function H0(e){var a=Fs(e,2);a!==null&&$n(a,e,2)}function xh(e){var a=kn();if(typeof e=="function"){var r=e;if(e=r(),Ws){Ot(!0);try{r()}finally{Ot(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},a}function G0(e,a,r,l){return e.baseState=r,vh(e,Ge,typeof l=="function"?l:Sa)}function rT(e,a,r,l,f){if(Pc(e))throw Error(s(485));if(e=a.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};P.T!==null?r(!0):p.isTransition=!1,l(p),r=a.pending,r===null?(p.next=a.pending=p,k0(a,p)):(p.next=r.next,a.pending=r.next=p)}}function k0(e,a){var r=a.action,l=a.payload,f=e.state;if(a.isTransition){var p=P.T,M={};P.T=M;try{var R=r(f,l),V=P.S;V!==null&&V(M,R),X0(e,a,R)}catch($){yh(e,a,$)}finally{p!==null&&M.types!==null&&(p.types=M.types),P.T=p}}else try{p=r(f,l),X0(e,a,p)}catch($){yh(e,a,$)}}function X0(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){W0(e,a,l)},function(l){return yh(e,a,l)}):W0(e,a,r)}function W0(e,a,r){a.status="fulfilled",a.value=r,j0(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,k0(e,r)))}function yh(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,j0(a),a=a.next;while(a!==l)}e.action=null}function j0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function q0(e,a){return a}function Y0(e,a){if(Ee){var r=We.formState;if(r!==null){t:{var l=ue;if(Ee){if(qe){e:{for(var f=qe,p=_i;f.nodeType!==8;){if(!p){f=null;break e}if(f=yi(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){qe=yi(f.nextSibling),l=f.data==="F!";break t}}Ja(l)}l=!1}l&&(a=r[0])}}return r=kn(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:q0,lastRenderedState:a},r.queue=l,r=dv.bind(null,ue,l),l.dispatch=r,l=xh(!1),p=Ah.bind(null,ue,!1,l.queue),l=kn(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,r=rT.bind(null,ue,f,p,r),f.dispatch=r,l.memoizedState=e,[a,r,!1]}function K0(e){var a=on();return Z0(a,Ge,e)}function Z0(e,a,r){if(a=vh(e,a,q0)[0],e=Lc(Sa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=$o(a)}catch(M){throw M===Lr?Sc:M}else l=a;a=on();var f=a.queue,p=f.dispatch;return r!==a.memoizedState&&(ue.flags|=2048,Fr(9,{destroy:void 0},oT.bind(null,f,r),null)),[l,p,e]}function oT(e,a){e.action=a}function Q0(e){var a=on(),r=Ge;if(r!==null)return Z0(a,r,e);on(),a=a.memoizedState,r=on();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Fr(e,a,r,l){return e={tag:e,create:r,deps:l,inst:a,next:null},a=ue.updateQueue,a===null&&(a=wc(),ue.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function J0(){return on().memoizedState}function Uc(e,a,r,l){var f=kn();ue.flags|=e,f.memoizedState=Fr(1|a,{destroy:void 0},r,l===void 0?null:l)}function Nc(e,a,r,l){var f=on();l=l===void 0?null:l;var p=f.memoizedState.inst;Ge!==null&&l!==null&&fh(l,Ge.memoizedState.deps)?f.memoizedState=Fr(a,p,r,l):(ue.flags|=e,f.memoizedState=Fr(1|a,p,r,l))}function $0(e,a){Uc(8390656,8,e,a)}function Sh(e,a){Nc(2048,8,e,a)}function lT(e){ue.flags|=4;var a=ue.updateQueue;if(a===null)a=wc(),ue.updateQueue=a,a.events=[e];else{var r=a.events;r===null?a.events=[e]:r.push(e)}}function tv(e){var a=on().memoizedState;return lT({ref:a,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}function ev(e,a){return Nc(4,2,e,a)}function nv(e,a){return Nc(4,4,e,a)}function iv(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function av(e,a,r){r=r!=null?r.concat([e]):null,Nc(4,4,iv.bind(null,a,e),r)}function Mh(){}function sv(e,a){var r=on();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&fh(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function rv(e,a){var r=on();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&fh(a,l[1]))return l[0];if(l=e(),Ws){Ot(!0);try{e()}finally{Ot(!1)}}return r.memoizedState=[l,a],l}function Eh(e,a,r){return r===void 0||(ya&1073741824)!==0&&(Se&261930)===0?e.memoizedState=a:(e.memoizedState=r,e=o_(),ue.lanes|=e,os|=e,r)}function ov(e,a,r,l){return si(r,a)?r:Nr.current!==null?(e=Eh(e,r,l),si(e,a)||(mn=!0),e):(ya&42)===0||(ya&1073741824)!==0&&(Se&261930)===0?(mn=!0,e.memoizedState=r):(e=o_(),ue.lanes|=e,os|=e,a)}function lv(e,a,r,l,f){var p=I.p;I.p=p!==0&&8>p?p:8;var M=P.T,R={};P.T=R,Ah(e,!1,a,r);try{var V=f(),$=P.S;if($!==null&&$(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=iT(V,l);tl(e,a,pt,fi(e))}else tl(e,a,l,fi(e))}catch(vt){tl(e,a,{then:function(){},status:"rejected",reason:vt},fi())}finally{I.p=p,M!==null&&R.types!==null&&(M.types=R.types),P.T=M}}function cT(){}function bh(e,a,r,l){if(e.tag!==5)throw Error(s(476));var f=cv(e).queue;lv(e,f,a,st,r===null?cT:function(){return uv(e),r(l)})}function cv(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:st},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function uv(e){var a=cv(e);a.next===null&&(a=e.alternate.memoizedState),tl(e,a.next.queue,{},fi())}function Th(){return Cn(vl)}function fv(){return on().memoizedState}function hv(){return on().memoizedState}function uT(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=fi();e=es(r);var l=ns(a,e,r);l!==null&&($n(l,a,r),Ko(l,a,r)),a={cache:th()},e.payload=a;return}a=a.return}}function fT(e,a,r){var l=fi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pc(e)?pv(a,r):(r=kf(e,a,r,l),r!==null&&($n(r,e,l),mv(r,a,l)))}function dv(e,a,r){var l=fi();tl(e,a,r,l)}function tl(e,a,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))pv(a,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var M=a.lastRenderedState,R=p(M,r);if(f.hasEagerState=!0,f.eagerState=R,si(R,M))return pc(e,a,f,0),We===null&&dc(),!1}catch{}if(r=kf(e,a,f,l),r!==null)return $n(r,e,l),mv(r,a,l),!0}return!1}function Ah(e,a,r,l){if(l={lane:2,revertLane:ad(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(e)){if(a)throw Error(s(479))}else a=kf(e,r,l,2),a!==null&&$n(a,e,2)}function Pc(e){var a=e.alternate;return e===ue||a!==null&&a===ue}function pv(e,a){Pr=Rc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function mv(e,a,r){if((r&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,dr(e,r)}}var el={readContext:Cn,use:Dc,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};el.useEffectEvent=nn;var gv={readContext:Cn,use:Dc,useCallback:function(e,a){return kn().memoizedState=[e,a===void 0?null:a],e},useContext:Cn,useEffect:$0,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,Uc(4194308,4,iv.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Uc(4194308,4,e,a)},useInsertionEffect:function(e,a){Uc(4,2,e,a)},useMemo:function(e,a){var r=kn();a=a===void 0?null:a;var l=e();if(Ws){Ot(!0);try{e()}finally{Ot(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=kn();if(r!==void 0){var f=r(a);if(Ws){Ot(!0);try{r(a)}finally{Ot(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=fT.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var a=kn();return e={current:e},a.memoizedState=e},useState:function(e){e=xh(e);var a=e.queue,r=dv.bind(null,ue,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:Mh,useDeferredValue:function(e,a){var r=kn();return Eh(r,e,a)},useTransition:function(){var e=xh(!1);return e=lv.bind(null,ue,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=ue,f=kn();if(Ee){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),We===null)throw Error(s(349));(Se&127)!==0||I0(l,a,r)}f.memoizedState=r;var p={value:r,getSnapshot:a};return f.queue=p,$0(z0.bind(null,l,p,e),[e]),l.flags|=2048,Fr(9,{destroy:void 0},B0.bind(null,l,p,r,a),null),r},useId:function(){var e=kn(),a=We.identifierPrefix;if(Ee){var r=$i,l=Ji;r=(l&~(1<<32-Pt(l)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Cc++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=aT++,a="_"+a+"r_"+r.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Th,useFormState:Y0,useActionState:Y0,useOptimistic:function(e){var a=kn();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Ah.bind(null,ue,!0,r),r.dispatch=a,[e,a]},useMemoCache:gh,useCacheRefresh:function(){return kn().memoizedState=uT.bind(null,ue)},useEffectEvent:function(e){var a=kn(),r={impl:e};return a.memoizedState=r,function(){if((Ne&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Rh={readContext:Cn,use:Dc,useCallback:sv,useContext:Cn,useEffect:Sh,useImperativeHandle:av,useInsertionEffect:ev,useLayoutEffect:nv,useMemo:rv,useReducer:Lc,useRef:J0,useState:function(){return Lc(Sa)},useDebugValue:Mh,useDeferredValue:function(e,a){var r=on();return ov(r,Ge.memoizedState,e,a)},useTransition:function(){var e=Lc(Sa)[0],a=on().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:F0,useId:fv,useHostTransitionStatus:Th,useFormState:K0,useActionState:K0,useOptimistic:function(e,a){var r=on();return G0(r,Ge,e,a)},useMemoCache:gh,useCacheRefresh:hv};Rh.useEffectEvent=tv;var vv={readContext:Cn,use:Dc,useCallback:sv,useContext:Cn,useEffect:Sh,useImperativeHandle:av,useInsertionEffect:ev,useLayoutEffect:nv,useMemo:rv,useReducer:_h,useRef:J0,useState:function(){return _h(Sa)},useDebugValue:Mh,useDeferredValue:function(e,a){var r=on();return Ge===null?Eh(r,e,a):ov(r,Ge.memoizedState,e,a)},useTransition:function(){var e=_h(Sa)[0],a=on().memoizedState;return[typeof e=="boolean"?e:$o(e),a]},useSyncExternalStore:F0,useId:fv,useHostTransitionStatus:Th,useFormState:Q0,useActionState:Q0,useOptimistic:function(e,a){var r=on();return Ge!==null?G0(r,Ge,e,a):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:gh,useCacheRefresh:hv};vv.useEffectEvent=tv;function Ch(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:_({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var wh={enqueueSetState:function(e,a,r){e=e._reactInternals;var l=fi(),f=es(l);f.payload=a,r!=null&&(f.callback=r),a=ns(e,f,l),a!==null&&($n(a,e,l),Ko(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=fi(),f=es(l);f.tag=1,f.payload=a,r!=null&&(f.callback=r),a=ns(e,f,l),a!==null&&($n(a,e,l),Ko(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=fi(),l=es(r);l.tag=2,a!=null&&(l.callback=a),a=ns(e,l,r),a!==null&&($n(a,e,r),Ko(a,e,r))}};function _v(e,a,r,l,f,p,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,M):a.prototype&&a.prototype.isPureReactComponent?!Ho(r,l)||!Ho(f,p):!0}function xv(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&wh.enqueueReplaceState(a,a.state,null)}function js(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=_({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function yv(e){hc(e)}function Sv(e){console.error(e)}function Mv(e){hc(e)}function Oc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Ev(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Dh(e,a,r){return r=es(r),r.tag=3,r.payload={element:null},r.callback=function(){Oc(e,a)},r}function bv(e){return e=es(e),e.tag=3,e}function Tv(e,a,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){Ev(a,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Ev(a,r,l),typeof f!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function hT(e,a,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Cr(a,r,f,!0),r=oi.current,r!==null){switch(r.tag){case 31:case 13:return xi===null?qc():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Mc?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),ed(e,l,f)),!1;case 22:return r.flags|=65536,l===Mc?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),ed(e,l,f)),!1}throw Error(s(435,r.tag))}return ed(e,l,f),qc(),!1}if(Ee)return a=oi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Kf&&(e=Error(s(422),{cause:l}),Xo(mi(e,r)))):(l!==Kf&&(a=Error(s(423),{cause:l}),Xo(mi(a,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=mi(l,r),f=Dh(e.stateNode,l,f),rh(e,f),an!==4&&(an=2)),!1;var p=Error(s(520),{cause:l});if(p=mi(p,r),cl===null?cl=[p]:cl.push(p),an!==4&&(an=2),a===null)return!0;l=mi(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Dh(r.stateNode,l,e),rh(r,e),!1;case 1:if(a=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ls===null||!ls.has(p))))return r.flags|=65536,f&=-f,r.lanes|=f,f=bv(f),Tv(f,e,r,l),rh(r,f),!1}r=r.return}while(r!==null);return!1}var Lh=Error(s(461)),mn=!1;function wn(e,a,r,l){a.child=e===null?w0(a,null,r,l):Xs(a,e.child,r,l)}function Av(e,a,r,l,f){r=r.render;var p=a.ref;if("ref"in l){var M={};for(var R in l)R!=="ref"&&(M[R]=l[R])}else M=l;return Vs(a),l=hh(e,a,r,M,p,f),R=dh(),e!==null&&!mn?(ph(e,a,f),Ma(e,a,f)):(Ee&&R&&qf(a),a.flags|=1,wn(e,a,l,f),a.child)}function Rv(e,a,r,l,f){if(e===null){var p=r.type;return typeof p=="function"&&!Xf(p)&&p.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=p,Cv(e,a,p,l,f)):(e=gc(r.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(p=e.child,!zh(e,f)){var M=p.memoizedProps;if(r=r.compare,r=r!==null?r:Ho,r(M,l)&&e.ref===a.ref)return Ma(e,a,f)}return a.flags|=1,e=ga(p,l),e.ref=a.ref,e.return=a,a.child=e}function Cv(e,a,r,l,f){if(e!==null){var p=e.memoizedProps;if(Ho(p,l)&&e.ref===a.ref)if(mn=!1,a.pendingProps=l=p,zh(e,f))(e.flags&131072)!==0&&(mn=!0);else return a.lanes=e.lanes,Ma(e,a,f)}return Uh(e,a,r,l,f)}function wv(e,a,r,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,e!==null){for(l=a.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,a.child=null;return Dv(e,a,p,r,l)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&yc(a,p!==null?p.cachePool:null),p!==null?U0(a,p):lh(),N0(a);else return l=a.lanes=536870912,Dv(e,a,p!==null?p.baseLanes|r:r,r,l)}else p!==null?(yc(a,p.cachePool),U0(a,p),as(),a.memoizedState=null):(e!==null&&yc(a,null),lh(),as());return wn(e,a,f,r),a.child}function nl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Dv(e,a,r,l,f){var p=nh();return p=p===null?null:{parent:dn._currentValue,pool:p},a.memoizedState={baseLanes:r,cachePool:p},e!==null&&yc(a,null),lh(),N0(a),e!==null&&Cr(e,a,l,!0),a.childLanes=f,null}function Fc(e,a){return a=Bc({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Lv(e,a,r){return Xs(a,e.child,null,r),e=Fc(a,a.pendingProps),e.flags|=2,li(a),a.memoizedState=null,e}function dT(e,a,r){var l=a.pendingProps,f=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=Fc(a,l),a.lanes=536870912,nl(null,e);if(uh(a),(e=qe)?(e=k_(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Za!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},r=p0(e),r.return=a,a.child=r,Rn=a,qe=null)):e=null,e===null)throw Ja(a);return a.lanes=536870912,null}return Fc(a,l)}var p=e.memoizedState;if(p!==null){var M=p.dehydrated;if(uh(a),f)if(a.flags&256)a.flags&=-257,a=Lv(e,a,r);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(s(558));else if(mn||Cr(e,a,r,!1),f=(r&e.childLanes)!==0,mn||f){if(l=We,l!==null&&(M=ec(l,r),M!==0&&M!==p.retryLane))throw p.retryLane=M,Fs(e,M),$n(l,e,M),Lh;qc(),a=Lv(e,a,r)}else e=p.treeContext,qe=yi(M.nextSibling),Rn=a,Ee=!0,Qa=null,_i=!1,e!==null&&v0(a,e),a=Fc(a,l),a.flags|=4096;return a}return e=ga(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ic(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=4194816)}}function Uh(e,a,r,l,f){return Vs(a),r=hh(e,a,r,l,void 0,f),l=dh(),e!==null&&!mn?(ph(e,a,f),Ma(e,a,f)):(Ee&&l&&qf(a),a.flags|=1,wn(e,a,r,f),a.child)}function Uv(e,a,r,l,f,p){return Vs(a),a.updateQueue=null,r=O0(a,l,r,f),P0(e),l=dh(),e!==null&&!mn?(ph(e,a,p),Ma(e,a,p)):(Ee&&l&&qf(a),a.flags|=1,wn(e,a,r,p),a.child)}function Nv(e,a,r,l,f){if(Vs(a),a.stateNode===null){var p=br,M=r.contextType;typeof M=="object"&&M!==null&&(p=Cn(M)),p=new r(l,p),a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=wh,a.stateNode=p,p._reactInternals=a,p=a.stateNode,p.props=l,p.state=a.memoizedState,p.refs={},ah(a),M=r.contextType,p.context=typeof M=="object"&&M!==null?Cn(M):br,p.state=a.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Ch(a,r,M,l),p.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&wh.enqueueReplaceState(p,p.state,null),Qo(a,l,p,f),Zo(),p.state=a.memoizedState),typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){p=a.stateNode;var R=a.memoizedProps,V=js(r,R);p.props=V;var $=p.context,pt=r.contextType;M=br,typeof pt=="object"&&pt!==null&&(M=Cn(pt));var vt=r.getDerivedStateFromProps;pt=typeof vt=="function"||typeof p.getSnapshotBeforeUpdate=="function",R=a.pendingProps!==R,pt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(R||$!==M)&&xv(a,p,l,M),ts=!1;var it=a.memoizedState;p.state=it,Qo(a,l,p,f),Zo(),$=a.memoizedState,R||it!==$||ts?(typeof vt=="function"&&(Ch(a,r,vt,l),$=a.memoizedState),(V=ts||_v(a,r,V,l,it,$,M))?(pt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=$),p.props=l,p.state=$,p.context=M,l=V):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{p=a.stateNode,sh(e,a),M=a.memoizedProps,pt=js(r,M),p.props=pt,vt=a.pendingProps,it=p.context,$=r.contextType,V=br,typeof $=="object"&&$!==null&&(V=Cn($)),R=r.getDerivedStateFromProps,($=typeof R=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==vt||it!==V)&&xv(a,p,l,V),ts=!1,it=a.memoizedState,p.state=it,Qo(a,l,p,f),Zo();var ct=a.memoizedState;M!==vt||it!==ct||ts||e!==null&&e.dependencies!==null&&_c(e.dependencies)?(typeof R=="function"&&(Ch(a,r,R,l),ct=a.memoizedState),(pt=ts||_v(a,r,pt,l,it,ct,V)||e!==null&&e.dependencies!==null&&_c(e.dependencies))?($||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ct,V),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ct,V)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=ct),p.props=l,p.state=ct,p.context=V,l=pt):(typeof p.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(a.flags|=1024),l=!1)}return p=l,Ic(e,a),l=(a.flags&128)!==0,p||l?(p=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),a.flags|=1,e!==null&&l?(a.child=Xs(a,e.child,null,f),a.child=Xs(a,null,r,f)):wn(e,a,r,f),a.memoizedState=p.state,e=a.child):e=Ma(e,a,f),e}function Pv(e,a,r,l){return Bs(),a.flags|=256,wn(e,a,r,l),a.child}var Nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ph(e){return{baseLanes:e,cachePool:E0()}}function Oh(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=ui),e}function Ov(e,a,r){var l=a.pendingProps,f=!1,p=(a.flags&128)!==0,M;if((M=p)||(M=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ee){if(f?is(a):as(),(e=qe)?(e=k_(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Za!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},r=p0(e),r.return=a,a.child=r,Rn=a,qe=null)):e=null,e===null)throw Ja(a);return vd(e)?a.lanes=32:a.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(as(),f=a.mode,R=Bc({mode:"hidden",children:R},f),l=Is(l,f,r,null),R.return=a,l.return=a,R.sibling=l,a.child=R,l=a.child,l.memoizedState=Ph(r),l.childLanes=Oh(e,M,r),a.memoizedState=Nh,nl(null,l)):(is(a),Fh(a,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(p)a.flags&256?(is(a),a.flags&=-257,a=Ih(e,a,r)):a.memoizedState!==null?(as(),a.child=e.child,a.flags|=128,a=null):(as(),R=l.fallback,f=a.mode,l=Bc({mode:"visible",children:l.children},f),R=Is(R,f,r,null),R.flags|=2,l.return=a,R.return=a,l.sibling=R,a.child=l,Xs(a,e.child,null,r),l=a.child,l.memoizedState=Ph(r),l.childLanes=Oh(e,M,r),a.memoizedState=Nh,a=nl(null,l));else if(is(a),vd(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var $=M.dgst;M=$,l=Error(s(419)),l.stack="",l.digest=M,Xo({value:l,source:null,stack:null}),a=Ih(e,a,r)}else if(mn||Cr(e,a,r,!1),M=(r&e.childLanes)!==0,mn||M){if(M=We,M!==null&&(l=ec(M,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,Fs(e,l),$n(M,e,l),Lh;gd(R)||qc(),a=Ih(e,a,r)}else gd(R)?(a.flags|=192,a.child=e.child,a=null):(e=V.treeContext,qe=yi(R.nextSibling),Rn=a,Ee=!0,Qa=null,_i=!1,e!==null&&v0(a,e),a=Fh(a,l.children),a.flags|=4096);return a}return f?(as(),R=l.fallback,f=a.mode,V=e.child,$=V.sibling,l=ga(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,$!==null?R=ga($,R):(R=Is(R,f,r,null),R.flags|=2),R.return=a,l.return=a,l.sibling=R,a.child=l,nl(null,l),l=a.child,R=e.child.memoizedState,R===null?R=Ph(r):(f=R.cachePool,f!==null?(V=dn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=E0(),R={baseLanes:R.baseLanes|r,cachePool:f}),l.memoizedState=R,l.childLanes=Oh(e,M,r),a.memoizedState=Nh,nl(e.child,l)):(is(a),r=e.child,e=r.sibling,r=ga(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=r,a.memoizedState=null,r)}function Fh(e,a){return a=Bc({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Bc(e,a){return e=ri(22,e,null,a),e.lanes=0,e}function Ih(e,a,r){return Xs(a,e.child,null,r),e=Fh(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Fv(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Jf(e.return,a,r)}function Bh(e,a,r,l,f,p){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:p}:(M.isBackwards=a,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=f,M.treeForkCount=p)}function Iv(e,a,r){var l=a.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=rn.current,R=(M&2)!==0;if(R?(M=M&1|2,a.flags|=128):M&=1,_t(rn,M),wn(e,a,l,r),l=Ee?ko:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fv(e,r,a);else if(e.tag===19)Fv(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=a.child,f=null;r!==null;)e=r.alternate,e!==null&&Ac(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=a.child,a.child=null):(f=r.sibling,r.sibling=null),Bh(a,!1,f,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&Ac(e)===null){a.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}Bh(a,!0,r,null,p,l);break;case"together":Bh(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Ma(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),os|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Cr(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=ga(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=ga(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function zh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&_c(e)))}function pT(e,a,r){switch(a.tag){case 3:Tt(a,a.stateNode.containerInfo),$a(a,dn,e.memoizedState.cache),Bs();break;case 27:case 5:Jt(a);break;case 4:Tt(a,a.stateNode.containerInfo);break;case 10:$a(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,uh(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(is(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Ov(e,a,r):(is(a),e=Ma(e,a,r),e!==null?e.sibling:null);is(a);break;case 19:var f=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Cr(e,a,r,!1),l=(r&a.childLanes)!==0),f){if(l)return Iv(e,a,r);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_t(rn,rn.current),l)break;return null;case 22:return a.lanes=0,wv(e,a,r,a.pendingProps);case 24:$a(a,dn,e.memoizedState.cache)}return Ma(e,a,r)}function Bv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)mn=!0;else{if(!zh(e,r)&&(a.flags&128)===0)return mn=!1,pT(e,a,r);mn=(e.flags&131072)!==0}else mn=!1,Ee&&(a.flags&1048576)!==0&&g0(a,ko,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(e=Gs(a.elementType),a.type=e,typeof e=="function")Xf(e)?(l=js(e,l),a.tag=1,a=Nv(null,a,e,l,r)):(a.tag=0,a=Uh(null,a,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===L){a.tag=11,a=Av(null,a,e,l,r);break t}else if(f===B){a.tag=14,a=Rv(null,a,e,l,r);break t}}throw a=ut(e)||e,Error(s(306,a,""))}}return a;case 0:return Uh(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,f=js(l,a.pendingProps),Nv(e,a,l,f,r);case 3:t:{if(Tt(a,a.stateNode.containerInfo),e===null)throw Error(s(387));l=a.pendingProps;var p=a.memoizedState;f=p.element,sh(e,a),Qo(a,l,null,r);var M=a.memoizedState;if(l=M.cache,$a(a,dn,l),l!==p.cache&&$f(a,[dn],r,!0),Zo(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=Pv(e,a,l,r);break t}else if(l!==f){f=mi(Error(s(424)),a),Xo(f),a=Pv(e,a,l,r);break t}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=yi(e.firstChild),Rn=a,Ee=!0,Qa=null,_i=!0,r=w0(a,null,l,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bs(),l===f){a=Ma(e,a,r);break t}wn(e,a,l,r)}a=a.child}return a;case 26:return Ic(e,a),e===null?(r=K_(a.type,null,a.pendingProps,null))?a.memoizedState=r:Ee||(r=a.type,e=a.pendingProps,l=tu(et.current).createElement(r),l[un]=a,l[xn]=e,Dn(l,r,e),X(l),a.stateNode=l):a.memoizedState=K_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Jt(a),e===null&&Ee&&(l=a.stateNode=j_(a.type,a.pendingProps,et.current),Rn=a,_i=!0,f=qe,hs(a.type)?(_d=f,qe=yi(l.firstChild)):qe=f),wn(e,a,a.pendingProps.children,r),Ic(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ee&&((f=l=qe)&&(l=XT(l,a.type,a.pendingProps,_i),l!==null?(a.stateNode=l,Rn=a,qe=yi(l.firstChild),_i=!1,f=!0):f=!1),f||Ja(a)),Jt(a),f=a.type,p=a.pendingProps,M=e!==null?e.memoizedProps:null,l=p.children,dd(f,p)?l=null:M!==null&&dd(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=hh(e,a,sT,null,null,r),vl._currentValue=f),Ic(e,a),wn(e,a,l,r),a.child;case 6:return e===null&&Ee&&((e=r=qe)&&(r=WT(r,a.pendingProps,_i),r!==null?(a.stateNode=r,Rn=a,qe=null,e=!0):e=!1),e||Ja(a)),null;case 13:return Ov(e,a,r);case 4:return Tt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Xs(a,null,l,r):wn(e,a,l,r),a.child;case 11:return Av(e,a,a.type,a.pendingProps,r);case 7:return wn(e,a,a.pendingProps,r),a.child;case 8:return wn(e,a,a.pendingProps.children,r),a.child;case 12:return wn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,$a(a,a.type,l.value),wn(e,a,l.children,r),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Vs(a),f=Cn(f),l=l(f),a.flags|=1,wn(e,a,l,r),a.child;case 14:return Rv(e,a,a.type,a.pendingProps,r);case 15:return Cv(e,a,a.type,a.pendingProps,r);case 19:return Iv(e,a,r);case 31:return dT(e,a,r);case 22:return wv(e,a,r,a.pendingProps);case 24:return Vs(a),l=Cn(dn),e===null?(f=nh(),f===null&&(f=We,p=th(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=r),f=p),a.memoizedState={parent:l,cache:f},ah(a),$a(a,dn,f)):((e.lanes&r)!==0&&(sh(e,a),Qo(a,null,null,r),Zo()),f=e.memoizedState,p=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),$a(a,dn,l)):(l=p.cache,$a(a,dn,l),l!==f.cache&&$f(a,[dn],r,!0))),wn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function Ea(e){e.flags|=4}function Vh(e,a,r,l,f){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(f_())e.flags|=8192;else throw ks=Mc,ih}else e.flags&=-16777217}function zv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tx(a))if(f_())e.flags|=8192;else throw ks=Mc,ih}function zc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Ie():536870912,e.lanes|=a,Vr|=a)}function il(e,a){if(!Ee)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function mT(e,a,r){var l=a.pendingProps;switch(Yf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(a),null;case 1:return Ye(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),xa(dn),Wt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(a)?Ea(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Zf())),Ye(a),null;case 26:var f=a.type,p=a.memoizedState;return e===null?(Ea(a),p!==null?(Ye(a),zv(a,p)):(Ye(a),Vh(a,f,null,l,r))):p?p!==e.memoizedState?(Ea(a),Ye(a),zv(a,p)):(Ye(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ea(a),Ye(a),Vh(a,f,e,l,r)),null;case 27:if(ee(a),r=et.current,f=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ea(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ye(a),null}e=Rt.current,Rr(a)?_0(a):(e=j_(f,l,r),a.stateNode=e,Ea(a))}return Ye(a),null;case 5:if(ee(a),f=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ea(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ye(a),null}if(p=Rt.current,Rr(a))_0(a);else{var M=tu(et.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[un]=a,p[xn]=l;t:for(M=a.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===a)break t;for(;M.sibling===null;){if(M.return===null||M.return===a)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}a.stateNode=p;t:switch(Dn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ea(a)}}return Ye(a),Vh(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,r),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Ea(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=et.current,Rr(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,f=Rn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[un]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||O_(e.nodeValue,r)),e||Ja(a,!0)}else e=tu(e).createTextNode(l),e[un]=a,a.stateNode=e}return Ye(a),null;case 31:if(r=a.memoizedState,e===null||e.memoizedState!==null){if(l=Rr(a),r!==null){if(e===null){if(!l)throw Error(s(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=a}else Bs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),e=!1}else r=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return a.flags&256?(li(a),a):(li(a),null);if((a.flags&128)!==0)throw Error(s(558))}return Ye(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Rr(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[un]=a}else Bs(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),f=!1}else f=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(li(a),a):(li(a),null)}return li(a),(a.flags&128)!==0?(a.lanes=r,a):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),r!==e&&r&&(a.child.flags|=8192),zc(a,a.updateQueue),Ye(a),null);case 4:return Wt(),e===null&&ld(a.stateNode.containerInfo),Ye(a),null;case 10:return xa(a.type),Ye(a),null;case 19:if(q(rn),l=a.memoizedState,l===null)return Ye(a),null;if(f=(a.flags&128)!==0,p=l.rendering,p===null)if(f)il(l,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(p=Ac(e),p!==null){for(a.flags|=128,il(l,!1),e=p.updateQueue,a.updateQueue=e,zc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)d0(r,e),r=r.sibling;return _t(rn,rn.current&1|2),Ee&&va(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&b()>Xc&&(a.flags|=128,f=!0,il(l,!1),a.lanes=4194304)}else{if(!f)if(e=Ac(p),e!==null){if(a.flags|=128,f=!0,e=e.updateQueue,a.updateQueue=e,zc(a,e),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ee)return Ye(a),null}else 2*b()-l.renderingStartTime>Xc&&r!==536870912&&(a.flags|=128,f=!0,il(l,!1),a.lanes=4194304);l.isBackwards?(p.sibling=a.child,a.child=p):(e=l.last,e!==null?e.sibling=p:a.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=b(),e.sibling=null,r=rn.current,_t(rn,f?r&1|2:r&1),Ee&&va(a,l.treeForkCount),e):(Ye(a),null);case 22:case 23:return li(a),ch(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Ye(a),a.subtreeFlags&6&&(a.flags|=8192)):Ye(a),r=a.updateQueue,r!==null&&zc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&q(Hs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),xa(dn),Ye(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function gT(e,a){switch(Yf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return xa(dn),Wt(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ee(a),null;case 31:if(a.memoizedState!==null){if(li(a),a.alternate===null)throw Error(s(340));Bs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(li(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Bs()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return q(rn),null;case 4:return Wt(),null;case 10:return xa(a.type),null;case 22:case 23:return li(a),ch(),e!==null&&q(Hs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return xa(dn),null;case 25:return null;default:return null}}function Vv(e,a){switch(Yf(a),a.tag){case 3:xa(dn),Wt();break;case 26:case 27:case 5:ee(a);break;case 4:Wt();break;case 31:a.memoizedState!==null&&li(a);break;case 13:li(a);break;case 19:q(rn);break;case 10:xa(a.type);break;case 22:case 23:li(a),ch(),e!==null&&q(Hs);break;case 24:xa(dn)}}function al(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var p=r.create,M=r.inst;l=p(),M.destroy=l}r=r.next}while(r!==f)}}catch(R){ze(a,a.return,R)}}function ss(e,a,r){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var M=l.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,f=a;var V=r,$=R;try{$()}catch(pt){ze(f,V,pt)}}}l=l.next}while(l!==p)}}catch(pt){ze(a,a.return,pt)}}function Hv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{L0(a,r)}catch(l){ze(e,e.return,l)}}}function Gv(e,a,r){r.props=js(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){ze(e,a,l)}}function sl(e,a){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){ze(e,a,f)}}function ta(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){ze(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){ze(e,a,f)}else r.current=null}function kv(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){ze(e,e.return,f)}}function Hh(e,a,r){try{var l=e.stateNode;BT(l,e.type,r,a),l[xn]=a}catch(f){ze(e,e.return,f)}}function Xv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hs(e.type)||e.tag===4}function Gh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(e),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=pa));else if(l!==4&&(l===27&&hs(e.type)&&(r=e.stateNode,a=null),e=e.child,e!==null))for(kh(e,a,r),e=e.sibling;e!==null;)kh(e,a,r),e=e.sibling}function Vc(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&(l===27&&hs(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Vc(e,a,r),e=e.sibling;e!==null;)Vc(e,a,r),e=e.sibling}function Wv(e){var a=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Dn(a,l,r),a[un]=e,a[xn]=r}catch(p){ze(e,e.return,p)}}var ba=!1,gn=!1,Xh=!1,jv=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function vT(e,a){if(e=e.containerInfo,fd=ou,e=a0(e),If(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var M=0,R=-1,V=-1,$=0,pt=0,vt=e,it=null;e:for(;;){for(var ct;vt!==r||f!==0&&vt.nodeType!==3||(R=M+f),vt!==p||l!==0&&vt.nodeType!==3||(V=M+l),vt.nodeType===3&&(M+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)it=vt,vt=ct;for(;;){if(vt===e)break e;if(it===r&&++$===f&&(R=M),it===p&&++pt===l&&(V=M),(ct=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=ct}r=R===-1||V===-1?null:{start:R,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(hd={focusedElem:e,selectionRange:r},ou=!1,Tn=a;Tn!==null;)if(a=Tn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Tn=e;else for(;Tn!==null;){switch(a=Tn,p=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=a,f=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var Gt=js(r.type,f);e=l.getSnapshotBeforeUpdate(Gt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){ze(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)md(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Tn=e;break}Tn=a.return}}function qv(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Aa(e,r),l&4&&al(5,r);break;case 1:if(Aa(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(M){ze(r,r.return,M)}else{var f=js(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ze(r,r.return,M)}}l&64&&Hv(r),l&512&&sl(r,r.return);break;case 3:if(Aa(e,r),l&64&&(e=r.updateQueue,e!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{L0(e,a)}catch(M){ze(r,r.return,M)}}break;case 27:a===null&&l&4&&Wv(r);case 26:case 5:Aa(e,r),a===null&&l&4&&kv(r),l&512&&sl(r,r.return);break;case 12:Aa(e,r);break;case 31:Aa(e,r),l&4&&Zv(e,r);break;case 13:Aa(e,r),l&4&&Qv(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=AT.bind(null,r),jT(e,r))));break;case 22:if(l=r.memoizedState!==null||ba,!l){a=a!==null&&a.memoizedState!==null||gn,f=ba;var p=gn;ba=l,(gn=a)&&!p?Ra(e,r,(r.subtreeFlags&8772)!==0):Aa(e,r),ba=f,gn=p}break;case 30:break;default:Aa(e,r)}}function Yv(e){var a=e.alternate;a!==null&&(e.alternate=null,Yv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&No(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Kn=!1;function Ta(e,a,r){for(r=r.child;r!==null;)Kv(e,a,r),r=r.sibling}function Kv(e,a,r){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(bt,r)}catch{}switch(r.tag){case 26:gn||ta(r,a),Ta(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:gn||ta(r,a);var l=Je,f=Kn;hs(r.type)&&(Je=r.stateNode,Kn=!1),Ta(e,a,r),pl(r.stateNode),Je=l,Kn=f;break;case 5:gn||ta(r,a);case 6:if(l=Je,f=Kn,Je=null,Ta(e,a,r),Je=l,Kn=f,Je!==null)if(Kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(p){ze(r,a,p)}else try{Je.removeChild(r.stateNode)}catch(p){ze(r,a,p)}break;case 18:Je!==null&&(Kn?(e=Je,H_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Yr(e)):H_(Je,r.stateNode));break;case 4:l=Je,f=Kn,Je=r.stateNode.containerInfo,Kn=!0,Ta(e,a,r),Je=l,Kn=f;break;case 0:case 11:case 14:case 15:ss(2,r,a),gn||ss(4,r,a),Ta(e,a,r);break;case 1:gn||(ta(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Gv(r,a,l)),Ta(e,a,r);break;case 21:Ta(e,a,r);break;case 22:gn=(l=gn)||r.memoizedState!==null,Ta(e,a,r),gn=l;break;default:Ta(e,a,r)}}function Zv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(r){ze(a,a.return,r)}}}function Qv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(r){ze(a,a.return,r)}}function _T(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new jv),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new jv),a;default:throw Error(s(435,e.tag))}}function Hc(e,a){var r=_T(e);a.forEach(function(l){if(!r.has(l)){r.add(l);var f=RT.bind(null,e,l);l.then(f,f)}})}function Zn(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],p=e,M=a,R=M;t:for(;R!==null;){switch(R.tag){case 27:if(hs(R.type)){Je=R.stateNode,Kn=!1;break t}break;case 5:Je=R.stateNode,Kn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Kn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));Kv(p,M,f),Je=null,Kn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Jv(a,e),a=a.sibling}var Ni=null;function Jv(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(a,e),Qn(e),l&4&&(ss(3,e,e.return),al(3,e),ss(5,e,e.return));break;case 1:Zn(a,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),l&64&&ba&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ni;if(Zn(a,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Ls]||p[un]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Dn(p,l,r),p[un]=e,X(p),l=p;break t;case"link":var M=J_("link","href",f).get(l+(r.href||""));if(M){for(var R=0;R<M.length;R++)if(p=M[R],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(R,1);break e}}p=f.createElement(l),Dn(p,l,r),f.head.appendChild(p);break;case"meta":if(M=J_("meta","content",f).get(l+(r.content||""))){for(R=0;R<M.length;R++)if(p=M[R],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(R,1);break e}}p=f.createElement(l),Dn(p,l,r),f.head.appendChild(p);break;default:throw Error(s(468,l))}p[un]=e,X(p),l=p}e.stateNode=l}else $_(f,e.type,e.stateNode);else e.stateNode=Q_(f,l,e.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?$_(f,e.type,e.stateNode):Q_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Hh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Zn(a,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),r!==null&&l&4&&Hh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Zn(a,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),e.flags&32){f=e.stateNode;try{Gn(f,"")}catch(Gt){ze(e,e.return,Gt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Hh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Xh=!0);break;case 6:if(Zn(a,e),Qn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Gt){ze(e,e.return,Gt)}}break;case 3:if(iu=null,f=Ni,Ni=eu(a.containerInfo),Zn(a,e),Ni=f,Qn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Yr(a.containerInfo)}catch(Gt){ze(e,e.return,Gt)}Xh&&(Xh=!1,$v(e));break;case 4:l=Ni,Ni=eu(e.stateNode.containerInfo),Zn(a,e),Qn(e),Ni=l;break;case 12:Zn(a,e),Qn(e);break;case 31:Zn(a,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 13:Zn(a,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(kc=b()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 22:f=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,$=ba,pt=gn;if(ba=$||f,gn=pt||V,Zn(a,e),gn=pt,ba=$,Qn(e),l&8192)t:for(a=e.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(r===null||V||ba||gn||qs(e)),r=null,a=e;;){if(a.tag===5||a.tag===26){if(r===null){V=r=a;try{if(p=V.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=V.stateNode;var vt=V.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Gt){ze(V,V.return,Gt)}}}else if(a.tag===6){if(r===null){V=a;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Gt){ze(V,V.return,Gt)}}}else if(a.tag===18){if(r===null){V=a;try{var ct=V.stateNode;f?G_(ct,!0):G_(V.stateNode,!1)}catch(Gt){ze(V,V.return,Gt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Hc(e,r))));break;case 19:Zn(a,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hc(e,l)));break;case 30:break;case 21:break;default:Zn(a,e),Qn(e)}}function Qn(e){var a=e.flags;if(a&2){try{for(var r,l=e.return;l!==null;){if(Xv(l)){r=l;break}l=l.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var f=r.stateNode,p=Gh(e);Vc(e,p,f);break;case 5:var M=r.stateNode;r.flags&32&&(Gn(M,""),r.flags&=-33);var R=Gh(e);Vc(e,R,M);break;case 3:case 4:var V=r.stateNode.containerInfo,$=Gh(e);kh(e,$,V);break;default:throw Error(s(161))}}catch(pt){ze(e,e.return,pt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function $v(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;$v(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function Aa(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)qv(e,a.alternate,a),a=a.sibling}function qs(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ss(4,a,a.return),qs(a);break;case 1:ta(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Gv(a,a.return,r),qs(a);break;case 27:pl(a.stateNode);case 26:case 5:ta(a,a.return),qs(a);break;case 22:a.memoizedState===null&&qs(a);break;case 30:qs(a);break;default:qs(a)}e=e.sibling}}function Ra(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,p=a,M=p.flags;switch(p.tag){case 0:case 11:case 15:Ra(f,p,r),al(4,p);break;case 1:if(Ra(f,p,r),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch($){ze(l,l.return,$)}if(l=p,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)D0(V[f],R)}catch($){ze(l,l.return,$)}}r&&M&64&&Hv(p),sl(p,p.return);break;case 27:Wv(p);case 26:case 5:Ra(f,p,r),r&&l===null&&M&4&&kv(p),sl(p,p.return);break;case 12:Ra(f,p,r);break;case 31:Ra(f,p,r),r&&M&4&&Zv(f,p);break;case 13:Ra(f,p,r),r&&M&4&&Qv(f,p);break;case 22:p.memoizedState===null&&Ra(f,p,r),sl(p,p.return);break;case 30:break;default:Ra(f,p,r)}a=a.sibling}}function Wh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Wo(r))}function jh(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Wo(e))}function Pi(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)t_(e,a,r,l),a=a.sibling}function t_(e,a,r,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Pi(e,a,r,l),f&2048&&al(9,a);break;case 1:Pi(e,a,r,l);break;case 3:Pi(e,a,r,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Wo(e)));break;case 12:if(f&2048){Pi(e,a,r,l),e=a.stateNode;try{var p=a.memoizedProps,M=p.id,R=p.onPostCommit;typeof R=="function"&&R(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){ze(a,a.return,V)}}else Pi(e,a,r,l);break;case 31:Pi(e,a,r,l);break;case 13:Pi(e,a,r,l);break;case 23:break;case 22:p=a.stateNode,M=a.alternate,a.memoizedState!==null?p._visibility&2?Pi(e,a,r,l):rl(e,a):p._visibility&2?Pi(e,a,r,l):(p._visibility|=2,Ir(e,a,r,l,(a.subtreeFlags&10256)!==0||!1)),f&2048&&Wh(M,a);break;case 24:Pi(e,a,r,l),f&2048&&jh(a.alternate,a);break;default:Pi(e,a,r,l)}}function Ir(e,a,r,l,f){for(f=f&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var p=e,M=a,R=r,V=l,$=M.flags;switch(M.tag){case 0:case 11:case 15:Ir(p,M,R,V,f),al(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&2?Ir(p,M,R,V,f):rl(p,M):(pt._visibility|=2,Ir(p,M,R,V,f)),f&&$&2048&&Wh(M.alternate,M);break;case 24:Ir(p,M,R,V,f),f&&$&2048&&jh(M.alternate,M);break;default:Ir(p,M,R,V,f)}a=a.sibling}}function rl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,f=l.flags;switch(l.tag){case 22:rl(r,l),f&2048&&Wh(l.alternate,l);break;case 24:rl(r,l),f&2048&&jh(l.alternate,l);break;default:rl(r,l)}a=a.sibling}}var ol=8192;function Br(e,a,r){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)e_(e,a,r),e=e.sibling}function e_(e,a,r){switch(e.tag){case 26:Br(e,a,r),e.flags&ol&&e.memoizedState!==null&&a1(r,Ni,e.memoizedState,e.memoizedProps);break;case 5:Br(e,a,r);break;case 3:case 4:var l=Ni;Ni=eu(e.stateNode.containerInfo),Br(e,a,r),Ni=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ol,ol=16777216,Br(e,a,r),ol=l):Br(e,a,r));break;default:Br(e,a,r)}}function n_(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ll(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,a_(l,e)}n_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i_(e),e=e.sibling}function i_(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&ss(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Gc(e)):ll(e);break;default:ll(e)}}function Gc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Tn=l,a_(l,e)}n_(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ss(8,a,a.return),Gc(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Gc(a));break;default:Gc(a)}e=e.sibling}}function a_(e,a){for(;Tn!==null;){var r=Tn;switch(r.tag){case 0:case 11:case 15:ss(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Tn=l;else t:for(r=e;Tn!==null;){l=Tn;var f=l.sibling,p=l.return;if(Yv(l),l===r){Tn=null;break t}if(f!==null){f.return=p,Tn=f;break t}Tn=p}}}var xT={getCacheForType:function(e){var a=Cn(dn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r},cacheSignal:function(){return Cn(dn).controller.signal}},yT=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,_e=null,Se=0,Be=0,ci=null,rs=!1,zr=!1,qh=!1,Ca=0,an=0,os=0,Ys=0,Yh=0,ui=0,Vr=0,cl=null,Jn=null,Kh=!1,kc=0,s_=0,Xc=1/0,Wc=null,ls=null,Sn=0,cs=null,Hr=null,wa=0,Zh=0,Qh=null,r_=null,ul=0,Jh=null;function fi(){return(Ne&2)!==0&&Se!==0?Se&-Se:P.T!==null?ad():Qi()}function o_(){if(ui===0)if((Se&536870912)===0||Ee){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ui=e}else ui=536870912;return e=oi.current,e!==null&&(e.flags|=32),ui}function $n(e,a,r){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(Gr(e,0),us(e,Se,ui,!1)),zn(e,r),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(Ys|=r),an===4&&us(e,Se,ui,!1)),ea(e))}function l_(e,a,r){if((Ne&6)!==0)throw Error(s(327));var l=!r&&(a&127)===0&&(a&e.expiredLanes)===0||Vt(e,a),f=l?ET(e,a):td(e,a,!0),p=l;do{if(f===0){zr&&!l&&us(e,a,0,!1);break}else{if(r=e.current.alternate,p&&!ST(r)){f=td(e,a,!1),p=!1;continue}if(f===2){if(p=a,e.errorRecoveryDisabledLanes&p)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var R=e;f=cl;var V=R.current.memoizedState.isDehydrated;if(V&&(Gr(R,M).flags|=256),M=td(R,M,!1),M!==2){if(qh&&!V){R.errorRecoveryDisabledLanes|=p,Ys|=p,f=4;break t}p=Jn,Jn=f,p!==null&&(Jn===null?Jn=p:Jn.push.apply(Jn,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){Gr(e,0),us(e,a,0,!0);break}t:{switch(l=e,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:us(l,a,ui,!rs);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(f=kc+300-b(),10<f)){if(us(l,a,ui,!rs),ft(l,0,!0)!==0)break t;wa=a,l.timeoutHandle=z_(c_.bind(null,l,r,Jn,Wc,Kh,a,ui,Ys,Vr,rs,p,"Throttled",-0,0),f);break t}c_(l,r,Jn,Wc,Kh,a,ui,Ys,Vr,rs,p,null,-0,0)}}break}while(!0);ea(e)}function c_(e,a,r,l,f,p,M,R,V,$,pt,vt,it,ct){if(e.timeoutHandle=-1,vt=a.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},e_(a,p,vt);var Gt=(p&62914560)===p?kc-b():(p&4194048)===p?s_-b():0;if(Gt=s1(vt,Gt),Gt!==null){wa=p,e.cancelPendingCommit=Gt(v_.bind(null,e,a,p,r,l,f,M,R,V,pt,vt,null,it,ct)),us(e,p,M,!$);return}}v_(e,a,p,r,l,f,M,R,V)}function ST(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],p=f.getSnapshot;f=f.value;try{if(!si(p(),f))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function us(e,a,r,l){a&=~Yh,a&=~Ys,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var p=31-Pt(f),M=1<<p;l[p]=-1,f&=~M}r!==0&&Uo(e,r,a)}function jc(){return(Ne&6)===0?(fl(0),!1):!0}function $h(){if(_e!==null){if(Be===0)var e=_e.return;else e=_e,_a=zs=null,mh(e),Ur=null,qo=0,e=_e;for(;e!==null;)Vv(e.alternate,e),e=e.return;_e=null}}function Gr(e,a){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,HT(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),wa=0,$h(),We=e,_e=r=ga(e.current,null),Se=a,Be=0,ci=null,rs=!1,zr=Vt(e,a),qh=!1,Vr=ui=Yh=Ys=os=an=0,Jn=cl=null,Kh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-Pt(l),p=1<<f;a|=e[f],l&=~p}return Ca=a,dc(),r}function u_(e,a){ue=null,P.H=el,a===Lr||a===Sc?(a=A0(),Be=3):a===ih?(a=A0(),Be=4):Be=a===Lh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ci=a,_e===null&&(an=1,Oc(e,mi(a,e.current)))}function f_(){var e=oi.current;return e===null?!0:(Se&4194048)===Se?xi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===xi:!1}function h_(){var e=P.H;return P.H=el,e===null?el:e}function d_(){var e=P.A;return P.A=xT,e}function qc(){an=4,rs||(Se&4194048)!==Se&&oi.current!==null||(zr=!0),(os&134217727)===0&&(Ys&134217727)===0||We===null||us(We,Se,ui,!1)}function td(e,a,r){var l=Ne;Ne|=2;var f=h_(),p=d_();(We!==e||Se!==a)&&(Wc=null,Gr(e,a)),a=!1;var M=an;t:do try{if(Be!==0&&_e!==null){var R=_e,V=ci;switch(Be){case 8:$h(),M=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(a=!0);var $=Be;if(Be=0,ci=null,kr(e,R,V,$),r&&zr){M=0;break t}break;default:$=Be,Be=0,ci=null,kr(e,R,V,$)}}MT(),M=an;break}catch(pt){u_(e,pt)}while(!0);return a&&e.shellSuspendCounter++,_a=zs=null,Ne=l,P.H=f,P.A=p,_e===null&&(We=null,Se=0,dc()),M}function MT(){for(;_e!==null;)p_(_e)}function ET(e,a){var r=Ne;Ne|=2;var l=h_(),f=d_();We!==e||Se!==a?(Wc=null,Xc=b()+500,Gr(e,a)):zr=Vt(e,a);t:do try{if(Be!==0&&_e!==null){a=_e;var p=ci;e:switch(Be){case 1:Be=0,ci=null,kr(e,a,p,1);break;case 2:case 9:if(b0(p)){Be=0,ci=null,m_(a);break}a=function(){Be!==2&&Be!==9||We!==e||(Be=7),ea(e)},p.then(a,a);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:b0(p)?(Be=0,ci=null,m_(a)):(Be=0,ci=null,kr(e,a,p,7));break;case 5:var M=null;switch(_e.tag){case 26:M=_e.memoizedState;case 5:case 27:var R=_e;if(M?tx(M):R.stateNode.complete){Be=0,ci=null;var V=R.sibling;if(V!==null)_e=V;else{var $=R.return;$!==null?(_e=$,Yc($)):_e=null}break e}}Be=0,ci=null,kr(e,a,p,5);break;case 6:Be=0,ci=null,kr(e,a,p,6);break;case 8:$h(),an=6;break t;default:throw Error(s(462))}}bT();break}catch(pt){u_(e,pt)}while(!0);return _a=zs=null,P.H=l,P.A=f,Ne=r,_e!==null?0:(We=null,Se=0,dc(),an)}function bT(){for(;_e!==null&&!Yt();)p_(_e)}function p_(e){var a=Bv(e.alternate,e,Ca);e.memoizedProps=e.pendingProps,a===null?Yc(e):_e=a}function m_(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=Uv(r,a,a.pendingProps,a.type,void 0,Se);break;case 11:a=Uv(r,a,a.pendingProps,a.type.render,a.ref,Se);break;case 5:mh(a);default:Vv(r,a),a=_e=d0(a,Ca),a=Bv(r,a,Ca)}e.memoizedProps=e.pendingProps,a===null?Yc(e):_e=a}function kr(e,a,r,l){_a=zs=null,mh(a),Ur=null,qo=0;var f=a.return;try{if(hT(e,f,a,r,Se)){an=1,Oc(e,mi(r,e.current)),_e=null;return}}catch(p){if(f!==null)throw _e=f,p;an=1,Oc(e,mi(r,e.current)),_e=null;return}a.flags&32768?(Ee||l===1?e=!0:zr||(Se&536870912)!==0?e=!1:(rs=e=!0,(l===2||l===9||l===3||l===6)&&(l=oi.current,l!==null&&l.tag===13&&(l.flags|=16384))),g_(a,e)):Yc(a)}function Yc(e){var a=e;do{if((a.flags&32768)!==0){g_(a,rs);return}e=a.return;var r=mT(a.alternate,a,Ca);if(r!==null){_e=r;return}if(a=a.sibling,a!==null){_e=a;return}_e=a=e}while(a!==null);an===0&&(an=5)}function g_(e,a){do{var r=gT(e.alternate,e);if(r!==null){r.flags&=32767,_e=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){_e=e;return}_e=e=r}while(e!==null);an=6,_e=null}function v_(e,a,r,l,f,p,M,R,V){e.cancelPendingCommit=null;do Kc();while(Sn!==0);if((Ne&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(p=a.lanes|a.childLanes,p|=Gf,Ci(e,r,p,M,R,V),e===We&&(_e=We=null,Se=0),Hr=a,cs=e,wa=r,Zh=p,Qh=f,r_=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CT(dt,function(){return M_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=I.p,I.p=2,M=Ne,Ne|=4;try{vT(e,a,r)}finally{Ne=M,I.p=f,P.T=l}}Sn=1,__(),x_(),y_()}}function __(){if(Sn===1){Sn=0;var e=cs,a=Hr,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var l=I.p;I.p=2;var f=Ne;Ne|=4;try{Jv(a,e);var p=hd,M=a0(e.containerInfo),R=p.focusedElem,V=p.selectionRange;if(M!==R&&R&&R.ownerDocument&&i0(R.ownerDocument.documentElement,R)){if(V!==null&&If(R)){var $=V.start,pt=V.end;if(pt===void 0&&(pt=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(pt,R.value.length);else{var vt=R.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Gt=R.textContent.length,te=Math.min(V.start,Gt),Xe=V.end===void 0?te:Math.min(V.end,Gt);!ct.extend&&te>Xe&&(M=Xe,Xe=te,te=M);var Y=n0(R,te),k=n0(R,Xe);if(Y&&k&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var J=vt.createRange();J.setStart(Y.node,Y.offset),ct.removeAllRanges(),te>Xe?(ct.addRange(J),ct.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ct.addRange(J))}}}}for(vt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}ou=!!fd,hd=fd=null}finally{Ne=f,I.p=l,P.T=r}}e.current=a,Sn=2}}function x_(){if(Sn===2){Sn=0;var e=cs,a=Hr,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var l=I.p;I.p=2;var f=Ne;Ne|=4;try{qv(e,a.alternate,a)}finally{Ne=f,I.p=l,P.T=r}}Sn=3}}function y_(){if(Sn===4||Sn===3){Sn=0,N();var e=cs,a=Hr,r=wa,l=r_;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Sn=5:(Sn=0,Hr=cs=null,S_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ls=null),mr(r),a=a.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(bt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=P.T,f=I.p,I.p=2,P.T=null;try{for(var p=e.onRecoverableError,M=0;M<l.length;M++){var R=l[M];p(R.value,{componentStack:R.stack})}}finally{P.T=a,I.p=f}}(wa&3)!==0&&Kc(),ea(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===Jh?ul++:(ul=0,Jh=e):ul=0,fl(0)}}function S_(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Wo(a)))}function Kc(){return __(),x_(),y_(),M_()}function M_(){if(Sn!==5)return!1;var e=cs,a=Zh;Zh=0;var r=mr(wa),l=P.T,f=I.p;try{I.p=32>r?32:r,P.T=null,r=Qh,Qh=null;var p=cs,M=wa;if(Sn=0,Hr=cs=null,wa=0,(Ne&6)!==0)throw Error(s(331));var R=Ne;if(Ne|=4,i_(p.current),t_(p,p.current,M,r),Ne=R,fl(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(bt,p)}catch{}return!0}finally{I.p=f,P.T=l,S_(e,a)}}function E_(e,a,r){a=mi(r,a),a=Dh(e.stateNode,a,2),e=ns(e,a,2),e!==null&&(zn(e,2),ea(e))}function ze(e,a,r){if(e.tag===3)E_(e,e,r);else for(;a!==null;){if(a.tag===3){E_(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ls===null||!ls.has(l))){e=mi(r,e),r=bv(2),l=ns(a,r,2),l!==null&&(Tv(r,l,a,e),zn(l,2),ea(l));break}}a=a.return}}function ed(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new yT;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(r)||(qh=!0,f.add(r),e=TT.bind(null,e,a,r),a.then(e,e))}function TT(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(Se&r)===r&&(an===4||an===3&&(Se&62914560)===Se&&300>b()-kc?(Ne&2)===0&&Gr(e,0):Yh|=r,Vr===Se&&(Vr=0)),ea(e)}function b_(e,a){a===0&&(a=Ie()),e=Fs(e,a),e!==null&&(zn(e,a),ea(e))}function AT(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),b_(e,r)}function RT(e,a){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),b_(e,r)}function CT(e,a){return Te(e,a)}var Zc=null,Xr=null,nd=!1,Qc=!1,id=!1,fs=0;function ea(e){e!==Xr&&e.next===null&&(Xr===null?Zc=Xr=e:Xr=Xr.next=e),Qc=!0,nd||(nd=!0,DT())}function fl(e,a){if(!id&&Qc){id=!0;do for(var r=!1,l=Zc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,R=l.pingedLanes;p=(1<<31-Pt(42|e)+1)-1,p&=f&~(M&~R),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,C_(l,p))}else p=Se,p=ft(l,l===We?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Vt(l,p)||(r=!0,C_(l,p));l=l.next}while(r);id=!1}}function wT(){T_()}function T_(){Qc=nd=!1;var e=0;fs!==0&&VT()&&(e=fs);for(var a=b(),r=null,l=Zc;l!==null;){var f=l.next,p=A_(l,a);p===0?(l.next=null,r===null?Zc=f:r.next=f,f===null&&(Xr=r)):(r=l,(e!==0||(p&3)!==0)&&(Qc=!0)),l=f}Sn!==0&&Sn!==5||fl(e),fs!==0&&(fs=0)}function A_(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var M=31-Pt(p),R=1<<M,V=f[M];V===-1?((R&r)===0||(R&l)!==0)&&(f[M]=ae(R,a)):V<=a&&(e.expiredLanes|=R),p&=~R}if(a=We,r=Se,r=ft(e,e===a?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===a&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Pe(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Vt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Pe(l),mr(r)){case 2:case 8:r=yt;break;case 32:r=dt;break;case 268435456:r=wt;break;default:r=dt}return l=R_.bind(null,e),r=Te(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Pe(l),e.callbackPriority=2,e.callbackNode=null,2}function R_(e,a){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Kc()&&e.callbackNode!==r)return null;var l=Se;return l=ft(e,e===We?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(l_(e,l,a),A_(e,b()),e.callbackNode!=null&&e.callbackNode===r?R_.bind(null,e):null)}function C_(e,a){if(Kc())return null;l_(e,a,!0)}function DT(){GT(function(){(Ne&6)!==0?Te(mt,wT):T_()})}function ad(){if(fs===0){var e=wr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),fs=e}return fs}function w_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sc(""+e)}function D_(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function LT(e,a,r,l,f){if(a==="submit"&&r&&r.stateNode===f){var p=w_((f[xn]||null).action),M=l.submitter;M&&(a=(a=M[xn]||null)?w_(a.formAction):M.getAttribute("formAction"),a!==null&&(p=a,M=null));var R=new cc("action","action",null,l,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fs!==0){var V=M?D_(f,M):new FormData(f);bh(r,{pending:!0,data:V,method:f.method,action:p},null,V)}}else typeof p=="function"&&(R.preventDefault(),V=M?D_(f,M):new FormData(f),bh(r,{pending:!0,data:V,method:f.method,action:p},p,V))},currentTarget:f}]})}}for(var sd=0;sd<Hf.length;sd++){var rd=Hf[sd],UT=rd.toLowerCase(),NT=rd[0].toUpperCase()+rd.slice(1);Ui(UT,"on"+NT)}Ui(o0,"onAnimationEnd"),Ui(l0,"onAnimationIteration"),Ui(c0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Kb,"onTransitionRun"),Ui(Zb,"onTransitionStart"),Ui(Qb,"onTransitionCancel"),Ui(u0,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function L_(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var p=void 0;if(a)for(var M=l.length-1;0<=M;M--){var R=l[M],V=R.instance,$=R.currentTarget;if(R=R.listener,V!==p&&f.isPropagationStopped())break t;p=R,f.currentTarget=$;try{p(f)}catch(pt){hc(pt)}f.currentTarget=null,p=V}else for(M=0;M<l.length;M++){if(R=l[M],V=R.instance,$=R.currentTarget,R=R.listener,V!==p&&f.isPropagationStopped())break t;p=R,f.currentTarget=$;try{p(f)}catch(pt){hc(pt)}f.currentTarget=null,p=V}}}}function xe(e,a){var r=a[ja];r===void 0&&(r=a[ja]=new Set);var l=e+"__bubble";r.has(l)||(U_(a,e,2,!1),r.add(l))}function od(e,a,r){var l=0;a&&(l|=4),U_(r,e,l,a)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[Jc]){e[Jc]=!0,ot.forEach(function(r){r!=="selectionchange"&&(PT.has(r)||od(r,!1,e),od(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Jc]||(a[Jc]=!0,od("selectionchange",!1,a))}}function U_(e,a,r,l){switch(ox(a)){case 2:var f=l1;break;case 8:f=c1;break;default:f=Ed}r=f.bind(null,a,r,e),f=void 0,!Cf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,r,{capture:!0,passive:f}):e.addEventListener(a,r,!0):f!==void 0?e.addEventListener(a,r,{passive:f}):e.addEventListener(a,r,!1)}function cd(e,a,r,l,f){var p=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var R=l.stateNode.containerInfo;if(R===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;R!==null;){if(M=qa(R),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=p=M;continue t}R=R.parentNode}}l=l.return}Ig(function(){var $=p,pt=Af(r),vt=[];t:{var it=f0.get(e);if(it!==void 0){var ct=cc,Gt=e;switch(e){case"keypress":if(oc(r)===0)break t;case"keydown":case"keyup":ct=Rb;break;case"focusin":Gt="focus",ct=Uf;break;case"focusout":Gt="blur",ct=Uf;break;case"beforeblur":case"afterblur":ct=Uf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Db;break;case o0:case l0:case c0:ct=_b;break;case u0:ct=Ub;break;case"scroll":case"scrollend":ct=db;break;case"wheel":ct=Pb;break;case"copy":case"cut":case"paste":ct=yb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Gg;break;case"toggle":case"beforetoggle":ct=Fb}var te=(a&4)!==0,Xe=!te&&(e==="scroll"||e==="scrollend"),Y=te?it!==null?it+"Capture":null:it;te=[];for(var k=$,J;k!==null;){var gt=k;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||Y===null||(gt=Po(k,Y),gt!=null&&te.push(dl(k,gt,J))),Xe)break;k=k.return}0<te.length&&(it=new ct(it,Gt,null,r,pt),vt.push({event:it,listeners:te}))}}if((a&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&r!==Tf&&(Gt=r.relatedTarget||r.fromElement)&&(qa(Gt)||Gt[ha]))break t;if((ct||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Gt=r.relatedTarget||r.toElement,ct=$,Gt=Gt?qa(Gt):null,Gt!==null&&(Xe=c(Gt),te=Gt.tag,Gt!==Xe||te!==5&&te!==27&&te!==6)&&(Gt=null)):(ct=null,Gt=$),ct!==Gt)){if(te=Vg,gt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Gg,gt="onPointerLeave",Y="onPointerEnter",k="pointer"),Xe=ct==null?it:Us(ct),J=Gt==null?it:Us(Gt),it=new te(gt,k+"leave",ct,r,pt),it.target=Xe,it.relatedTarget=J,gt=null,qa(pt)===$&&(te=new te(Y,k+"enter",Gt,r,pt),te.target=J,te.relatedTarget=Xe,gt=te),Xe=gt,ct&&Gt)e:{for(te=OT,Y=ct,k=Gt,J=0,gt=Y;gt;gt=te(gt))J++;gt=0;for(var $t=k;$t;$t=te($t))gt++;for(;0<J-gt;)Y=te(Y),J--;for(;0<gt-J;)k=te(k),gt--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){te=Y;break e}Y=te(Y),k=te(k)}te=null}else te=null;ct!==null&&N_(vt,it,ct,te,!1),Gt!==null&&Xe!==null&&N_(vt,Xe,Gt,te,!0)}}t:{if(it=$?Us($):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var we=Zg;else if(Yg(it))if(Qg)we=jb;else{we=Xb;var Kt=kb}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&vr($.elementType)&&(we=Zg):we=Wb;if(we&&(we=we(e,$))){Kg(vt,we,r,pt);break t}Kt&&Kt(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&Di(it,"number",it.value)}switch(Kt=$?Us($):window,e){case"focusin":(Yg(Kt)||Kt.contentEditable==="true")&&(Sr=Kt,Bf=$,Go=null);break;case"focusout":Go=Bf=Sr=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,s0(vt,r,pt);break;case"selectionchange":if(Yb)break;case"keydown":case"keyup":s0(vt,r,pt)}var de;if(Pf)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else yr?jg(e,r)&&(Me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Me="onCompositionStart");Me&&(kg&&r.locale!=="ko"&&(yr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&yr&&(de=Bg()):(Ka=pt,wf="value"in Ka?Ka.value:Ka.textContent,yr=!0)),Kt=$c($,Me),0<Kt.length&&(Me=new Hg(Me,e,null,r,pt),vt.push({event:Me,listeners:Kt}),de?Me.data=de:(de=qg(r),de!==null&&(Me.data=de)))),(de=Bb?zb(e,r):Vb(e,r))&&(Me=$c($,"onBeforeInput"),0<Me.length&&(Kt=new Hg("onBeforeInput","beforeinput",null,r,pt),vt.push({event:Kt,listeners:Me}),Kt.data=de)),LT(vt,e,$,r,pt)}L_(vt,a)})}function dl(e,a,r){return{instance:e,listener:a,currentTarget:r}}function $c(e,a){for(var r=a+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Po(e,r),f!=null&&l.unshift(dl(e,f,p)),f=Po(e,a),f!=null&&l.push(dl(e,f,p))),e.tag===3)return l;e=e.return}return[]}function OT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function N_(e,a,r,l,f){for(var p=a._reactName,M=[];r!==null&&r!==l;){var R=r,V=R.alternate,$=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||$===null||(V=$,f?($=Po(r,p),$!=null&&M.unshift(dl(r,$,V))):f||($=Po(r,p),$!=null&&M.push(dl(r,$,V)))),r=r.return}M.length!==0&&e.push({event:a,listeners:M})}var FT=/\r\n?/g,IT=/\u0000|\uFFFD/g;function P_(e){return(typeof e=="string"?e:""+e).replace(FT,`
`).replace(IT,"")}function O_(e,a){return a=P_(a),P_(e)===a}function ke(e,a,r,l,f,p){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Gn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Gn(e,""+l);break;case"className":oe(e,"class",l);break;case"tabIndex":oe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(e,r,l);break;case"style":da(e,l,p);break;case"data":if(a!=="object"){oe(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=sc(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(a!=="input"&&ke(e,a,"name",f.name,f,null),ke(e,a,"formEncType",f.formEncType,f,null),ke(e,a,"formMethod",f.formMethod,f,null),ke(e,a,"formTarget",f.formTarget,f,null)):(ke(e,a,"encType",f.encType,f,null),ke(e,a,"method",f.method,f,null),ke(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=sc(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=pa);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=sc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ie(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ie(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=fb.get(r)||r,ie(e,r,l))}}function ud(e,a,r,l,f,p){switch(r){case"style":da(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Gn(e,l):(typeof l=="number"||typeof l=="bigint")&&Gn(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),a=r.slice(2,f?r.length-7:void 0),p=e[xn]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(a,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ie(e,r,l)}}}function Dn(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,f=!1,p;for(p in r)if(r.hasOwnProperty(p)){var M=r[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(e,a,p,M,r,null)}}f&&ke(e,a,"srcSet",r.srcSet,r,null),l&&ke(e,a,"src",r.src,r,null);return;case"input":xe("invalid",e);var R=p=M=f=null,V=null,$=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":M=pt;break;case"checked":V=pt;break;case"defaultChecked":$=pt;break;case"value":p=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,a));break;default:ke(e,a,l,pt,r,null)}}ii(e,p,R,V,$,M,f,!1);return;case"select":xe("invalid",e),l=M=p=null;for(f in r)if(r.hasOwnProperty(f)&&(R=r[f],R!=null))switch(f){case"value":p=R;break;case"defaultValue":M=R;break;case"multiple":l=R;default:ke(e,a,f,R,r,null)}a=p,r=M,e.multiple=!!l,a!=null?ai(e,!!l,a,!1):r!=null&&ai(e,!!l,r,!0);return;case"textarea":xe("invalid",e),p=f=l=null;for(M in r)if(r.hasOwnProperty(M)&&(R=r[M],R!=null))switch(M){case"value":l=R;break;case"defaultValue":f=R;break;case"children":p=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:ke(e,a,M,R,r,null)}fn(e,l,f,p);return;case"option":for(V in r)r.hasOwnProperty(V)&&(l=r[V],l!=null)&&(V==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ke(e,a,V,l,r,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<hl.length;l++)xe(hl[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(l=r[$],l!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:ke(e,a,$,l,r,null)}return;default:if(vr(a)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&ud(e,a,pt,l,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(l=r[R],l!=null&&ke(e,a,R,l,r,null))}function BT(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,R=null,V=null,$=null,pt=null;for(ct in r){var vt=r[ct];if(r.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":V=vt;default:l.hasOwnProperty(ct)||ke(e,a,ct,null,l,vt)}}for(var it in l){var ct=l[it];if(vt=r[it],l.hasOwnProperty(it)&&(ct!=null||vt!=null))switch(it){case"type":p=ct;break;case"name":f=ct;break;case"checked":$=ct;break;case"defaultChecked":pt=ct;break;case"value":M=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,a));break;default:ct!==vt&&ke(e,a,it,ct,l,vt)}}Hn(e,M,R,V,$,pt,p,f);return;case"select":ct=M=R=it=null;for(p in r)if(V=r[p],r.hasOwnProperty(p)&&V!=null)switch(p){case"value":break;case"multiple":ct=V;default:l.hasOwnProperty(p)||ke(e,a,p,null,l,V)}for(f in l)if(p=l[f],V=r[f],l.hasOwnProperty(f)&&(p!=null||V!=null))switch(f){case"value":it=p;break;case"defaultValue":R=p;break;case"multiple":M=p;default:p!==V&&ke(e,a,f,p,l,V)}a=R,r=M,l=ct,it!=null?ai(e,!!r,it,!1):!!l!=!!r&&(a!=null?ai(e,!!r,a,!0):ai(e,!!r,r?[]:"",!1));return;case"textarea":ct=it=null;for(R in r)if(f=r[R],r.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ke(e,a,R,null,l,f)}for(M in l)if(f=l[M],p=r[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":it=f;break;case"defaultValue":ct=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&ke(e,a,M,f,l,p)}Oe(e,it,ct);return;case"option":for(var Gt in r)it=r[Gt],r.hasOwnProperty(Gt)&&it!=null&&!l.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:ke(e,a,Gt,null,l,it));for(V in l)it=l[V],ct=r[V],l.hasOwnProperty(V)&&it!==ct&&(it!=null||ct!=null)&&(V==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":ke(e,a,V,it,l,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)it=r[te],r.hasOwnProperty(te)&&it!=null&&!l.hasOwnProperty(te)&&ke(e,a,te,null,l,it);for($ in l)if(it=l[$],ct=r[$],l.hasOwnProperty($)&&it!==ct&&(it!=null||ct!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,a));break;default:ke(e,a,$,it,l,ct)}return;default:if(vr(a)){for(var Xe in r)it=r[Xe],r.hasOwnProperty(Xe)&&it!==void 0&&!l.hasOwnProperty(Xe)&&ud(e,a,Xe,void 0,l,it);for(pt in l)it=l[pt],ct=r[pt],!l.hasOwnProperty(pt)||it===ct||it===void 0&&ct===void 0||ud(e,a,pt,it,l,ct);return}}for(var Y in r)it=r[Y],r.hasOwnProperty(Y)&&it!=null&&!l.hasOwnProperty(Y)&&ke(e,a,Y,null,l,it);for(vt in l)it=l[vt],ct=r[vt],!l.hasOwnProperty(vt)||it===ct||it==null&&ct==null||ke(e,a,vt,it,l,ct)}function F_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],p=f.transferSize,M=f.initiatorType,R=f.duration;if(p&&R&&F_(M)){for(M=0,R=f.responseEnd,l+=1;l<r.length;l++){var V=r[l],$=V.startTime;if($>R)break;var pt=V.transferSize,vt=V.initiatorType;pt&&F_(vt)&&(V=V.responseEnd,M+=pt*(V<R?1:(R-$)/(V-$)))}if(--l,a+=8*(p+M)/(f.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fd=null,hd=null;function tu(e){return e.nodeType===9?e:e.ownerDocument}function I_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function dd(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var pd=null;function VT(){var e=window.event;return e&&e.type==="popstate"?e===pd?!1:(pd=e,!0):(pd=null,!1)}var z_=typeof setTimeout=="function"?setTimeout:void 0,HT=typeof clearTimeout=="function"?clearTimeout:void 0,V_=typeof Promise=="function"?Promise:void 0,GT=typeof queueMicrotask=="function"?queueMicrotask:typeof V_<"u"?function(e){return V_.resolve(null).then(e).catch(kT)}:z_;function kT(e){setTimeout(function(){throw e})}function hs(e){return e==="head"}function H_(e,a){var r=a,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),Yr(a);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")pl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,pl(r);for(var p=r.firstChild;p;){var M=p.nextSibling,R=p.nodeName;p[Ls]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=M}}else r==="body"&&pl(e.ownerDocument.body);r=f}while(r);Yr(a)}function G_(e,a){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function md(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":md(r),No(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function XT(e,a,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ls])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function WT(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=yi(e.nextSibling),e===null))return null;return e}function k_(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function gd(e){return e.data==="$?"||e.data==="$~"}function vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jT(e,a){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||r.readyState!=="loading")a();else{var l=function(){a(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function yi(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var _d=null;function X_(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(a===0)return yi(e.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}e=e.nextSibling}return null}function W_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return e;a--}else r!=="/$"&&r!=="/&"||a++}e=e.previousSibling}return null}function j_(e,a,r){switch(a=tu(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);No(e)}var Si=new Map,q_=new Set;function eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Da=I.d;I.d={f:qT,r:YT,D:KT,C:ZT,L:QT,m:JT,X:t1,S:$T,M:e1};function qT(){var e=Da.f(),a=jc();return e||a}function YT(e){var a=Ya(e);a!==null&&a.tag===5&&a.type==="form"?uv(a):Da.r(e)}var Wr=typeof document>"u"?null:document;function Y_(e,a,r){var l=Wr;if(l&&typeof a=="string"&&a){var f=re(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),q_.has(f)||(q_.add(f),e={rel:e,crossOrigin:r,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Dn(a,"link",e),X(a),l.head.appendChild(a)))}}function KT(e){Da.D(e),Y_("dns-prefetch",e,null)}function ZT(e,a){Da.C(e,a),Y_("preconnect",e,a)}function QT(e,a,r){Da.L(e,a,r);var l=Wr;if(l&&e&&a){var f='link[rel="preload"][as="'+re(a)+'"]';a==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+re(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+re(r.imageSizes)+'"]')):f+='[href="'+re(e)+'"]';var p=f;switch(a){case"style":p=jr(e);break;case"script":p=qr(e)}Si.has(p)||(e=_({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Si.set(p,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(ml(p))||a==="script"&&l.querySelector(gl(p))||(a=l.createElement("link"),Dn(a,"link",e),X(a),l.head.appendChild(a)))}}function JT(e,a){Da.m(e,a);var r=Wr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+re(l)+'"][href="'+re(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=qr(e)}if(!Si.has(p)&&(e=_({rel:"modulepreload",href:e},a),Si.set(p,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(gl(p)))return}l=r.createElement("link"),Dn(l,"link",e),X(l),r.head.appendChild(l)}}}function $T(e,a,r){Da.S(e,a,r);var l=Wr;if(l&&e){var f=w(l).hoistableStyles,p=jr(e);a=a||"default";var M=f.get(p);if(!M){var R={loading:0,preload:null};if(M=l.querySelector(ml(p)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Si.get(p))&&xd(e,r);var V=M=l.createElement("link");X(V),Dn(V,"link",e),V._p=new Promise(function($,pt){V.onload=$,V.onerror=pt}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nu(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:R},f.set(p,M)}}}function t1(e,a){Da.X(e,a);var r=Wr;if(r&&e){var l=w(r).hoistableScripts,f=qr(e),p=l.get(f);p||(p=r.querySelector(gl(f)),p||(e=_({src:e,async:!0},a),(a=Si.get(f))&&yd(e,a),p=r.createElement("script"),X(p),Dn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function e1(e,a){Da.M(e,a);var r=Wr;if(r&&e){var l=w(r).hoistableScripts,f=qr(e),p=l.get(f);p||(p=r.querySelector(gl(f)),p||(e=_({src:e,async:!0,type:"module"},a),(a=Si.get(f))&&yd(e,a),p=r.createElement("script"),X(p),Dn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function K_(e,a,r,l){var f=(f=et.current)?eu(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=jr(r.href),r=w(f).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=jr(r.href);var p=w(f).hoistableStyles,M=p.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,M),(p=f.querySelector(ml(e)))&&!p._p&&(M.instance=p,M.state.loading=5),Si.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Si.set(e,r),p||n1(f,e,r,M.state))),a&&l===null)throw Error(s(528,""));return M}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=qr(r),r=w(f).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function jr(e){return'href="'+re(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function Z_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function n1(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Dn(a,"link",r),X(a),e.head.appendChild(a))}function qr(e){return'[src="'+re(e)+'"]'}function gl(e){return"script[async]"+e}function Q_(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+re(r.href)+'"]');if(l)return a.instance=l,X(l),l;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),X(l),Dn(l,"style",f),nu(l,r.precedence,e),a.instance=l;case"stylesheet":f=jr(r.href);var p=e.querySelector(ml(f));if(p)return a.state.loading|=4,a.instance=p,X(p),p;l=Z_(r),(f=Si.get(f))&&xd(l,f),p=(e.ownerDocument||e).createElement("link"),X(p);var M=p;return M._p=new Promise(function(R,V){M.onload=R,M.onerror=V}),Dn(p,"link",l),a.state.loading|=4,nu(p,r.precedence,e),a.instance=p;case"script":return p=qr(r.src),(f=e.querySelector(gl(p)))?(a.instance=f,X(f),f):(l=r,(f=Si.get(p))&&(l=_({},r),yd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),X(f),Dn(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,nu(l,r.precedence,e));return a.instance}function nu(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var R=l[M];if(R.dataset.precedence===a)p=R;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function xd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function yd(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var iu=null;function J_(e,a,r){if(iu===null){var l=new Map,f=iu=new Map;f.set(r,l)}else f=iu,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var p=r[f];if(!(p[Ls]||p[un]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(a)||"";M=e+M;var R=l.get(M);R?R.push(p):l.set(M,[p])}}return l}function $_(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function i1(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function tx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function a1(e,a,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=jr(l.href),p=a.querySelector(ml(f));if(p){a=p._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=au.bind(e),a.then(e,e)),r.state.loading|=4,r.instance=p,X(p);return}p=a.ownerDocument||a,l=Z_(l),(f=Si.get(f))&&xd(l,f),p=p.createElement("link"),X(p);var M=p;M._p=new Promise(function(R,V){M.onload=R,M.onerror=V}),Dn(p,"link",l),r.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=au.bind(e),a.addEventListener("load",r),a.addEventListener("error",r))}}var Sd=0;function s1(e,a){return e.stylesheets&&e.count===0&&ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+a);0<e.imgBytes&&Sd===0&&(Sd=62500*zT());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>Sd?50:800)+a);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var su=null;function ru(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,su=new Map,a.forEach(r1,e),su=null,au.call(e))}function r1(e,a){if(!(a.state.loading&4)){var r=su.get(e);if(r)var l=r.get(null);else{r=new Map,su.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),p=r.get(M)||l,p===l&&r.set(null,f),r.set(M,f),this.count++,l=au.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var vl={$$typeof:D,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function o1(e,a,r,l,f,p,M,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function ex(e,a,r,l,f,p,M,R,V,$,pt,vt){return e=new o1(e,a,r,M,V,$,pt,vt,R),a=1,p===!0&&(a|=24),p=ri(3,null,null,a),e.current=p,p.stateNode=e,a=th(),a.refCount++,e.pooledCache=a,a.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:a},ah(p),e}function nx(e){return e?(e=br,e):br}function ix(e,a,r,l,f,p){f=nx(f),l.context===null?l.context=f:l.pendingContext=f,l=es(a),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=ns(e,l,a),r!==null&&($n(r,e,a),Ko(r,e,a))}function ax(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function Md(e,a){ax(e,a),(e=e.alternate)&&ax(e,a)}function sx(e){if(e.tag===13||e.tag===31){var a=Fs(e,67108864);a!==null&&$n(a,e,67108864),Md(e,67108864)}}function rx(e){if(e.tag===13||e.tag===31){var a=fi();a=pr(a);var r=Fs(e,a);r!==null&&$n(r,e,a),Md(e,a)}}var ou=!0;function l1(e,a,r,l){var f=P.T;P.T=null;var p=I.p;try{I.p=2,Ed(e,a,r,l)}finally{I.p=p,P.T=f}}function c1(e,a,r,l){var f=P.T;P.T=null;var p=I.p;try{I.p=8,Ed(e,a,r,l)}finally{I.p=p,P.T=f}}function Ed(e,a,r,l){if(ou){var f=bd(l);if(f===null)cd(e,a,l,lu,r),lx(e,l);else if(f1(f,e,a,r,l))l.stopPropagation();else if(lx(e,l),a&4&&-1<u1.indexOf(e)){for(;f!==null;){var p=Ya(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Et(p.pendingLanes);if(M!==0){var R=p;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var V=1<<31-Pt(M);R.entanglements[1]|=V,M&=~V}ea(p),(Ne&6)===0&&(Xc=b()+500,fl(0))}}break;case 31:case 13:R=Fs(p,2),R!==null&&$n(R,p,2),jc(),Md(p,2)}if(p=bd(l),p===null&&cd(e,a,l,lu,r),p===f)break;f=p}f!==null&&l.stopPropagation()}else cd(e,a,l,null,r)}}function bd(e){return e=Af(e),Td(e)}var lu=null;function Td(e){if(lu=null,e=qa(e),e!==null){var a=c(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=u(a),e!==null)return e;e=null}else if(r===31){if(e=h(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return lu=e,null}function ox(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j()){case mt:return 2;case yt:return 8;case dt:case jt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Ad=!1,ds=null,ps=null,ms=null,_l=new Map,xl=new Map,gs=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lx(e,a){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":_l.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(a.pointerId)}}function yl(e,a,r,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},a!==null&&(a=Ya(a),a!==null&&sx(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function f1(e,a,r,l,f){switch(a){case"focusin":return ds=yl(ds,e,a,r,l,f),!0;case"dragenter":return ps=yl(ps,e,a,r,l,f),!0;case"mouseover":return ms=yl(ms,e,a,r,l,f),!0;case"pointerover":var p=f.pointerId;return _l.set(p,yl(_l.get(p)||null,e,a,r,l,f)),!0;case"gotpointercapture":return p=f.pointerId,xl.set(p,yl(xl.get(p)||null,e,a,r,l,f)),!0}return!1}function cx(e){var a=qa(e.target);if(a!==null){var r=c(a);if(r!==null){if(a=r.tag,a===13){if(a=u(r),a!==null){e.blockedOn=a,gr(e.priority,function(){rx(r)});return}}else if(a===31){if(a=h(r),a!==null){e.blockedOn=a,gr(e.priority,function(){rx(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=bd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Tf=l,r.target.dispatchEvent(l),Tf=null}else return a=Ya(r),a!==null&&sx(a),e.blockedOn=r,!1;a.shift()}return!0}function ux(e,a,r){cu(e)&&r.delete(a)}function h1(){Ad=!1,ds!==null&&cu(ds)&&(ds=null),ps!==null&&cu(ps)&&(ps=null),ms!==null&&cu(ms)&&(ms=null),_l.forEach(ux),xl.forEach(ux)}function uu(e,a){e.blockedOn===a&&(e.blockedOn=null,Ad||(Ad=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,h1)))}var fu=null;function fx(e){fu!==e&&(fu=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){fu===e&&(fu=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(Td(l||r)===null)continue;break}var p=Ya(r);p!==null&&(e.splice(a,3),a-=3,bh(p,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Yr(e){function a(V){return uu(V,e)}ds!==null&&uu(ds,e),ps!==null&&uu(ps,e),ms!==null&&uu(ms,e),_l.forEach(a),xl.forEach(a);for(var r=0;r<gs.length;r++){var l=gs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<gs.length&&(r=gs[0],r.blockedOn===null);)cx(r),r.blockedOn===null&&gs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],p=r[l+1],M=f[xn]||null;if(typeof p=="function")M||fx(r);else if(M){var R=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[xn]||null)R=M.formAction;else if(Td(f)!==null)continue}else R=M.action;typeof R=="function"?r[l+1]=R:(r.splice(l,3),l-=3),fx(r)}}}function hx(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function a(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),f!==null&&(f(),f=null)}}}function Rd(e){this._internalRoot=e}hu.prototype.render=Rd.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=fi();ix(r,l,e,a,null,null)},hu.prototype.unmount=Rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;ix(e.current,2,null,e,null,null),jc(),a[ha]=null}};function hu(e){this._internalRoot=e}hu.prototype.unstable_scheduleHydration=function(e){if(e){var a=Qi();e={blockedOn:null,target:e,priority:a};for(var r=0;r<gs.length&&a!==0&&a<gs[r].priority;r++);gs.splice(r,0,e),r===0&&cx(e)}};var dx=t.version;if(dx!=="19.2.4")throw Error(s(527,dx,"19.2.4"));I.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var d1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{bt=du.inject(d1),Mt=du}catch{}}return Ml.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",f=yv,p=Sv,M=Mv;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),a=ex(e,1,!1,null,null,r,l,null,f,p,M,hx),e[ha]=a.current,ld(e),new Rd(a)},Ml.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,f="",p=yv,M=Sv,R=Mv,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),a=ex(e,1,!0,a,r??null,l,f,V,p,M,R,hx),a.context=nx(null),r=a.current,l=fi(),l=pr(l),f=es(l),f.callback=null,ns(r,f,l),r=l,a.current.lanes=r,zn(a,r),ea(a),e[ha]=a.current,ld(e),new hu(a)},Ml.version="19.2.4",Ml}var Ex;function E1(){if(Ex)return Dd.exports;Ex=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),Dd.exports=M1(),Dd.exports}var b1=E1();const Km="183",T1=0,bx=1,A1=2,ku=1,R1=2,Ul=3,Cs=0,ei=1,Ba=2,Va=0,vo=1,Lp=2,Tx=3,Ax=4,C1=5,sr=100,w1=101,D1=102,L1=103,U1=104,N1=200,P1=201,O1=202,F1=203,Up=204,Np=205,I1=206,B1=207,z1=208,V1=209,H1=210,G1=211,k1=212,X1=213,W1=214,Pp=0,Op=1,Fp=2,yo=3,Ip=4,Bp=5,zp=6,Vp=7,GS=0,j1=1,q1=2,oa=0,kS=1,XS=2,WS=3,jS=4,qS=5,YS=6,KS=7,ZS=300,hr=301,So=302,Pd=303,Od=304,vf=306,Hp=1e3,za=1001,Gp=1002,Un=1003,Y1=1004,pu=1005,In=1006,Fd=1007,or=1008,bi=1009,QS=1010,JS=1011,zl=1012,Zm=1013,ca=1014,ki=1015,Ga=1016,Qm=1017,Jm=1018,Vl=1020,$S=35902,tM=35899,eM=1021,nM=1022,Xi=1023,ka=1026,lr=1027,iM=1028,$m=1029,Mo=1030,tg=1031,eg=1033,Xu=33776,Wu=33777,ju=33778,qu=33779,kp=35840,Xp=35841,Wp=35842,jp=35843,qp=36196,Yp=37492,Kp=37496,Zp=37488,Qp=37489,Jp=37490,$p=37491,tm=37808,em=37809,nm=37810,im=37811,am=37812,sm=37813,rm=37814,om=37815,lm=37816,cm=37817,um=37818,fm=37819,hm=37820,dm=37821,pm=36492,mm=36494,gm=36495,vm=36283,_m=36284,xm=36285,ym=36286,K1=3200,Z1=0,Q1=1,Ts="",Ei="srgb",Eo="srgb-linear",nf="linear",Ve="srgb",Kr=7680,Rx=519,J1=512,$1=513,tA=514,ng=515,eA=516,nA=517,ig=518,iA=519,Cx=35044,wx="300 es",ra=2e3,af=2001;function aA(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sf(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sA(){const i=sf("canvas");return i.style.display="block",i}const Dx={};function Lx(...i){const t="THREE."+i.shift();console.log(t,...i)}function aM(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=i[1];n&&n.isStackTrace?i[0]+=" "+n.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=aM(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...i)}}function Le(...i){i=aM(i);const t="THREE."+i.shift();{const n=i[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...i)}}function rf(...i){const t=i.join(" ");t in Dx||(Dx[t]=!0,se(...i))}function rA(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const oA={[Pp]:Op,[Fp]:zp,[Ip]:Vp,[yo]:Bp,[Op]:Pp,[zp]:Fp,[Vp]:Ip,[Bp]:yo};class Ao{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Id=Math.PI/180,Sm=180/Math.PI;function ql(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function be(i,t,n){return Math.max(t,Math.min(n,i))}function lA(i,t){return(i%t+t)%t}function Bd(i,t,n){return(1-n)*i+n*t}function El(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ge{constructor(t=0,n=0){ge.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ro{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,h){let m=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3],v=c[u+0],y=c[u+1],E=c[u+2],A=c[u+3];if(_!==A||m!==v||d!==y||g!==E){let S=m*v+d*y+g*E+_*A;S<0&&(v=-v,y=-y,E=-E,A=-A,S=-S);let x=1-h;if(S<.9995){const C=Math.acos(S),D=Math.sin(C);x=Math.sin(x*C)/D,h=Math.sin(h*C)/D,m=m*x+v*h,d=d*x+y*h,g=g*x+E*h,_=_*x+A*h}else{m=m*x+v*h,d=d*x+y*h,g=g*x+E*h,_=_*x+A*h;const C=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=C,d*=C,g*=C,_*=C}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,s,o,c,u){const h=s[o],m=s[o+1],d=s[o+2],g=s[o+3],_=c[u],v=c[u+1],y=c[u+2],E=c[u+3];return t[n]=h*E+g*_+m*y-d*v,t[n+1]=m*E+g*v+d*_-h*y,t[n+2]=d*E+g*y+h*v-m*_,t[n+3]=g*E-h*_-m*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,d=h(s/2),g=h(o/2),_=h(c/2),v=m(s/2),y=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_+v*y*E;break;case"YZX":this._x=v*g*_+d*y*E,this._y=d*y*_+v*g*E,this._z=d*g*E-v*y*_,this._w=d*g*_-v*y*E;break;case"XZY":this._x=v*g*_-d*y*E,this._y=d*y*_-v*g*E,this._z=d*g*E+v*y*_,this._w=d*g*_+v*y*E;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-d)*y,this._z=(u-o)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(u-o)/y,this._x=(c+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=s*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-s*d,this._z=c*g+u*d+s*m-o*h,this._w=u*g-s*h-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){let s=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(s=-s,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,n=Math.sin(n*d)/g,this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,n=0,s=0){at.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ux.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ux.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,d=2*(u*o-h*s),g=2*(h*n-c*o),_=2*(c*s-u*n);return this.x=n+m*d+u*_-h*g,this.y=s+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-s*m,this.z=s*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return zd.copy(this).projectOnVector(t),this.sub(zd)}reflect(t){return this.sub(zd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zd=new at,Ux=new Ro;class pe{constructor(t,n,s,o,c,u,h,m,d){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,m,d)}set(t,n,s,o,c,u,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=s,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[3],m=s[6],d=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],A=o[0],S=o[3],x=o[6],C=o[1],D=o[4],L=o[7],O=o[2],z=o[5],B=o[8];return c[0]=u*A+h*C+m*O,c[3]=u*S+h*D+m*z,c[6]=u*x+h*L+m*B,c[1]=d*A+g*C+_*O,c[4]=d*S+g*D+_*z,c[7]=d*x+g*L+_*B,c[2]=v*A+y*C+E*O,c[5]=v*S+y*D+E*z,c[8]=v*x+y*L+E*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-s*c*g+s*h*m+o*c*d-o*u*m}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*u-h*d,v=h*m-g*c,y=d*c-u*m,E=n*_+s*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(o*d-g*s)*A,t[2]=(h*s-o*u)*A,t[3]=v*A,t[4]=(g*n-o*m)*A,t[5]=(o*c-h*n)*A,t[6]=y*A,t[7]=(s*m-d*n)*A,t[8]=(u*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*u+d*h)+u+t,-o*d,o*m,-o*(-d*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Vd.makeScale(t,n)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Vd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new pe,Nx=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Px=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cA(){const i={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ve&&(o.r=Ha(o.r),o.g=Ha(o.g),o.b=Ha(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ve&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ts?nf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return rf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return rf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[Eo]:{primaries:t,whitePoint:s,transfer:nf,toXYZ:Nx,fromXYZ:Px,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Nx,fromXYZ:Px,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),i}const Re=cA();function Ha(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zr;class uA{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Zr===void 0&&(Zr=sf("canvas")),Zr.width=t.width,Zr.height=t.height;const o=Zr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Zr}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=sf("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ha(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Ha(n[s]/255)*255):n[s]=Ha(n[s]);return{data:n,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fA=0;class ag{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=ql(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Hd(o[u].image)):c.push(Hd(o[u]))}else c=Hd(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Hd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let hA=0;const Gd=new at;class qn extends Ao{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,s=za,o=za,c=In,u=or,h=Xi,m=bi,d=qn.DEFAULT_ANISOTROPY,g=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=ql(),this.name="",this.source=new ag(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){se(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){se(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ZS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hp:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case Gp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hp:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case Gp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=ZS;qn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,s=0,o=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],A=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,L=(y+1)/2,O=(x+1)/2,z=(g+v)/4,B=(_+A)/4,T=(E+S)/4;return D>L&&D>O?D<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(D),o=z/s,c=B/s):L>O?L<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),s=z/o,c=T/o):O<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),s=B/c,o=T/c),this.set(s,o,c,n),this}let C=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(C)<.001&&(C=1),this.x=(S-E)/C,this.y=(_-A)/C,this.z=(v-g)/C,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dA extends Ao{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:s.depth},c=new qn(o),u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new ag(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends dA{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class sM extends qn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pA extends qn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(t,n,s,o,c,u,h,m,d,g,_,v,y,E,A,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,m,d,g,_,v,y,E,A,S)}set(t,n,s,o,c,u,h,m,d,g,_,v,y,E,A,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=d,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/Qr.setFromMatrixColumn(t,0).length(),c=1/Qr.setFromMatrixColumn(t,1).length(),u=1/Qr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),h=Math.sin(s),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,y=u*_,E=h*g,A=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=y+E*d,n[5]=v-A*d,n[9]=-h*m,n[2]=A-v*d,n[6]=E+y*d,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=d*g,A=d*_;n[0]=v+A*h,n[4]=E*h-y,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=y*h-E,n[6]=A+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=d*g,A=d*_;n[0]=v-A*h,n[4]=-u*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=u*g,n[9]=A-v*h,n[2]=-u*d,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,y=u*_,E=h*g,A=h*_;n[0]=m*g,n[4]=E*d-y,n[8]=v*d+A,n[1]=m*_,n[5]=A*d+v,n[9]=y*d-E,n[2]=-d,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,y=u*d,E=h*m,A=h*d;n[0]=m*g,n[4]=A-v*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+E,n[10]=v-A*_}else if(t.order==="XZY"){const v=u*m,y=u*d,E=h*m,A=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=v*_+A,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mA,t,gA)}lookAt(t,n,s){const o=this.elements;return hi.subVectors(t,n),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),_s.crossVectors(s,hi),_s.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),_s.crossVectors(s,hi)),_s.normalize(),mu.crossVectors(hi,_s),o[0]=_s.x,o[4]=mu.x,o[8]=hi.x,o[1]=_s.y,o[5]=mu.y,o[9]=hi.y,o[2]=_s.z,o[6]=mu.z,o[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[4],m=s[8],d=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],A=s[6],S=s[10],x=s[14],C=s[3],D=s[7],L=s[11],O=s[15],z=o[0],B=o[4],T=o[8],U=o[12],lt=o[1],H=o[5],Z=o[9],nt=o[13],ut=o[2],Q=o[6],P=o[10],I=o[14],st=o[3],ht=o[7],St=o[11],F=o[15];return c[0]=u*z+h*lt+m*ut+d*st,c[4]=u*B+h*H+m*Q+d*ht,c[8]=u*T+h*Z+m*P+d*St,c[12]=u*U+h*nt+m*I+d*F,c[1]=g*z+_*lt+v*ut+y*st,c[5]=g*B+_*H+v*Q+y*ht,c[9]=g*T+_*Z+v*P+y*St,c[13]=g*U+_*nt+v*I+y*F,c[2]=E*z+A*lt+S*ut+x*st,c[6]=E*B+A*H+S*Q+x*ht,c[10]=E*T+A*Z+S*P+x*St,c[14]=E*U+A*nt+S*I+x*F,c[3]=C*z+D*lt+L*ut+O*st,c[7]=C*B+D*H+L*Q+O*ht,c[11]=C*T+D*Z+L*P+O*St,c[15]=C*U+D*nt+L*I+O*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],A=t[7],S=t[11],x=t[15],C=m*y-d*v,D=h*y-d*_,L=h*v-m*_,O=u*y-d*g,z=u*v-m*g,B=u*_-h*g;return n*(A*C-S*D+x*L)-s*(E*C-S*O+x*z)+o*(E*D-A*O+x*B)-c*(E*L-A*z+S*B)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],A=t[13],S=t[14],x=t[15],C=n*h-s*u,D=n*m-o*u,L=n*d-c*u,O=s*m-o*h,z=s*d-c*h,B=o*d-c*m,T=g*A-_*E,U=g*S-v*E,lt=g*x-y*E,H=_*S-v*A,Z=_*x-y*A,nt=v*x-y*S,ut=C*nt-D*Z+L*H+O*lt-z*U+B*T;if(ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ut;return t[0]=(h*nt-m*Z+d*H)*Q,t[1]=(o*Z-s*nt-c*H)*Q,t[2]=(A*B-S*z+x*O)*Q,t[3]=(v*z-_*B-y*O)*Q,t[4]=(m*lt-u*nt-d*U)*Q,t[5]=(n*nt-o*lt+c*U)*Q,t[6]=(S*L-E*B-x*D)*Q,t[7]=(g*B-v*L+y*D)*Q,t[8]=(u*Z-h*lt+d*T)*Q,t[9]=(s*lt-n*Z-c*T)*Q,t[10]=(E*z-A*L+x*C)*Q,t[11]=(_*L-g*z-y*C)*Q,t[12]=(h*U-u*H-m*T)*Q,t[13]=(n*H-s*U+o*T)*Q,t[14]=(A*D-E*O-S*C)*Q,t[15]=(g*O-_*D+v*C)*Q,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,h=t.y,m=t.z,d=c*u,g=c*h;return this.set(d*u+s,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+s,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,d=c+c,g=u+u,_=h+h,v=c*d,y=c*g,E=c*_,A=u*g,S=u*_,x=h*_,C=m*d,D=m*g,L=m*_,O=s.x,z=s.y,B=s.z;return o[0]=(1-(A+x))*O,o[1]=(y+L)*O,o[2]=(E-D)*O,o[3]=0,o[4]=(y-L)*z,o[5]=(1-(v+x))*z,o[6]=(S+C)*z,o[7]=0,o[8]=(E+D)*B,o[9]=(S-C)*B,o[10]=(1-(v+A))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return s.set(1,1,1),n.identity(),this;let u=Qr.set(o[0],o[1],o[2]).length();const h=Qr.set(o[4],o[5],o[6]).length(),m=Qr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Oi.copy(this);const d=1/u,g=1/h,_=1/m;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,n.setFromRotationMatrix(Oi),s.x=u,s.y=h,s.z=m,this}makePerspective(t,n,s,o,c,u,h=ra,m=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(s-o),v=(n+t)/(n-t),y=(s+o)/(s-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(h===ra)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===af)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,s,o,c,u,h=ra,m=!1){const d=this.elements,g=2/(n-t),_=2/(s-o),v=-(n+t)/(n-t),y=-(s+o)/(s-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(h===ra)E=-2/(u-c),A=-(u+c)/(u-c);else if(h===af)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Qr=new at,Oi=new cn,mA=new at(0,0,0),gA=new at(1,1,1),_s=new at,mu=new at,hi=new at,Ox=new cn,Fx=new Ro;class Xa{constructor(t=0,n=0,s=0,o=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Ox.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ox,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Fx.setFromEuler(this),this.setFromQuaternion(Fx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class rM{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vA=0;const Ix=new at,Jr=new Ro,La=new cn,gu=new at,bl=new at,_A=new at,xA=new Ro,Bx=new at(1,0,0),zx=new at(0,1,0),Vx=new at(0,0,1),Hx={type:"added"},yA={type:"removed"},$r={type:"childadded",child:null},kd={type:"childremoved",child:null};class ni extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new at,n=new Xa,s=new Ro,o=new at(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new cn},normalMatrix:{value:new pe}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Bx,t)}rotateY(t){return this.rotateOnAxis(zx,t)}rotateZ(t){return this.rotateOnAxis(Vx,t)}translateOnAxis(t,n){return Ix.copy(t).applyQuaternion(this.quaternion),this.position.add(Ix.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Bx,t)}translateY(t){return this.translateOnAxis(zx,t)}translateZ(t){return this.translateOnAxis(Vx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?gu.copy(t):gu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(bl,gu,this.up):La.lookAt(gu,bl,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),Jr.setFromRotationMatrix(La),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hx),$r.child=t,this.dispatchEvent($r),$r.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yA),kd.child=t,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hx),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,t,_A),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,xA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*o,c[13]+=s-c[1]*n-c[5]*s-c[9]*o,c[14]+=o-c[2]*n-c[6]*s-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),y=u(t.animations),E=u(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}ni.DEFAULT_UP=new at(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vu extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SA={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,s),x=this._getHandJoint(d,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(SA)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new vu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const oM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},_u={h:0,s:0,l:0};function Wd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class He{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Re.workingColorSpace){return this.r=t,this.g=n,this.b=s,Re.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Re.workingColorSpace){if(t=lA(t,1),n=be(n,0,1),s=be(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Wd(u,c,t+1/3),this.g=Wd(u,c,t),this.b=Wd(u,c,t-1/3)}return Re.colorSpaceToWorking(this,o),this}setStyle(t,n=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:se("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ei){const s=oM[t.toLowerCase()];return s!==void 0?this.setHex(s,n):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return Re.workingToColorSpace(On.copy(this),t),Math.round(be(On.r*255,0,255))*65536+Math.round(be(On.g*255,0,255))*256+Math.round(be(On.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.workingToColorSpace(On.copy(this),n);const s=On.r,o=On.g,c=On.b,u=Math.max(s,o,c),h=Math.min(s,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case s:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-s)/_+2;break;case c:m=(s-o)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Re.workingColorSpace){return Re.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Ei){Re.workingToColorSpace(On.copy(this),t);const n=On.r,s=On.g,o=On.b;return t!==Ei?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+n,xs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(xs),t.getHSL(_u);const s=Bd(xs.h,_u.h,n),o=Bd(xs.s,_u.s,n),c=Bd(xs.l,_u.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new He;He.NAMES=oM;class Ks extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new at,Ua=new at,jd=new at,Na=new at,to=new at,eo=new at,Gx=new at,qd=new at,Yd=new at,Kd=new at,Zd=new ln,Qd=new ln,Jd=new ln;class Gi{constructor(t=new at,n=new at,s=new at){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Fi.subVectors(t,n),o.cross(Fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Fi.subVectors(o,n),Ua.subVectors(s,n),jd.subVectors(t,n);const u=Fi.dot(Fi),h=Fi.dot(Ua),m=Fi.dot(jd),d=Ua.dot(Ua),g=Ua.dot(jd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(d*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,n,s,o,c,u,h,m){return this.getBarycoord(t,n,s,o,Na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Na.x),m.addScaledVector(u,Na.y),m.addScaledVector(h,Na.z),m)}static getInterpolatedAttribute(t,n,s,o,c,u){return Zd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Zd.fromBufferAttribute(t,n),Qd.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Zd,c.x),u.addScaledVector(Qd,c.y),u.addScaledVector(Jd,c.z),u}static isFrontFacing(t,n,s,o){return Fi.subVectors(s,n),Ua.subVectors(t,n),Fi.cross(Ua).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Fi.cross(Ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Gi.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,h;to.subVectors(o,s),eo.subVectors(c,s),qd.subVectors(t,s);const m=to.dot(qd),d=eo.dot(qd);if(m<=0&&d<=0)return n.copy(s);Yd.subVectors(t,o);const g=to.dot(Yd),_=eo.dot(Yd);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(s).addScaledVector(to,u);Kd.subVectors(t,c);const y=to.dot(Kd),E=eo.dot(Kd);if(E>=0&&y<=E)return n.copy(c);const A=y*d-m*E;if(A<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(s).addScaledVector(eo,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return Gx.subVectors(c,o),h=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(Gx,h);const x=1/(S+A+v);return u=A*x,h=v*x,n.copy(s).addScaledVector(to,u).addScaledVector(eo,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yl{constructor(t=new at(1/0,1/0,1/0),n=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Ii.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Ii.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Ii.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ii):Ii.fromBufferAttribute(c,u),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xu.copy(s.boundingBox)),xu.applyMatrix4(t.matrixWorld),this.union(xu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tl),yu.subVectors(this.max,Tl),no.subVectors(t.a,Tl),io.subVectors(t.b,Tl),ao.subVectors(t.c,Tl),ys.subVectors(io,no),Ss.subVectors(ao,io),Zs.subVectors(no,ao);let n=[0,-ys.z,ys.y,0,-Ss.z,Ss.y,0,-Zs.z,Zs.y,ys.z,0,-ys.x,Ss.z,0,-Ss.x,Zs.z,0,-Zs.x,-ys.y,ys.x,0,-Ss.y,Ss.x,0,-Zs.y,Zs.x,0];return!$d(n,no,io,ao,yu)||(n=[1,0,0,0,1,0,0,0,1],!$d(n,no,io,ao,yu))?!1:(Su.crossVectors(ys,Ss),n=[Su.x,Su.y,Su.z],$d(n,no,io,ao,yu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pa=[new at,new at,new at,new at,new at,new at,new at,new at],Ii=new at,xu=new Yl,no=new at,io=new at,ao=new at,ys=new at,Ss=new at,Zs=new at,Tl=new at,yu=new at,Su=new at,Qs=new at;function $d(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){Qs.fromArray(i,c);const h=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),m=t.dot(Qs),d=n.dot(Qs),g=s.dot(Qs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const vn=new at,Mu=new ge;let MA=0;class ji{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=Cx,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Mu.fromBufferAttribute(this,n),Mu.applyMatrix3(t),this.setXY(n,Mu.x,Mu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=El(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ti(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=El(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=El(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=El(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=El(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),s=ti(s,this.array),o=ti(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),s=ti(s,this.array),o=ti(o,this.array),c=ti(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cx&&(t.usage=this.usage),t}}class lM extends ji{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class cM extends ji{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class qi extends ji{constructor(t,n,s){super(new Float32Array(t),n,s)}}const EA=new Yl,Al=new at,tp=new at;class _f{constructor(t=new at,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):EA.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Al.subVectors(t,this.center);const n=Al.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Al,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Al.copy(t.center).add(tp)),this.expandByPoint(Al.copy(t.center).sub(tp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let bA=0;const Mi=new cn,ep=new ni,so=new at,di=new Yl,Rl=new Yl,An=new at;class Zi extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(aA(t)?cM:lM)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,n,s){return Mi.makeTranslation(t,n,s),this.applyMatrix4(Mi),this}scale(t,n,s){return Mi.makeScale(t,n,s),this.applyMatrix4(Mi),this}lookAt(t){return ep.lookAt(t),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qi(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _f);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Rl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(di.min,Rl.min),di.expandByPoint(An),An.addVectors(di.max,Rl.max),di.expandByPoint(An)):(di.expandByPoint(Rl.min),di.expandByPoint(Rl.max))}di.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)An.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(An));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)An.fromBufferAttribute(h,d),m&&(so.fromBufferAttribute(t,d),An.add(so)),o=Math.max(o,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new at,m[T]=new at;const d=new at,g=new at,_=new at,v=new ge,y=new ge,E=new ge,A=new at,S=new at;function x(T,U,lt){d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,U),_.fromBufferAttribute(s,lt),v.fromBufferAttribute(c,T),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,lt),g.sub(d),_.sub(d),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(H),h[T].add(A),h[U].add(A),h[lt].add(A),m[T].add(S),m[U].add(S),m[lt].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,U=C.length;T<U;++T){const lt=C[T],H=lt.start,Z=lt.count;for(let nt=H,ut=H+Z;nt<ut;nt+=3)x(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const D=new at,L=new at,O=new at,z=new at;function B(T){O.fromBufferAttribute(o,T),z.copy(O);const U=h[T];D.copy(U),D.sub(O.multiplyScalar(O.dot(U))).normalize(),L.crossVectors(z,U);const H=L.dot(m[T])<0?-1:1;u.setXYZW(T,D.x,D.y,D.z,H)}for(let T=0,U=C.length;T<U;++T){const lt=C[T],H=lt.start,Z=lt.count;for(let nt=H,ut=H+Z;nt<ut;nt+=3)B(t.getX(nt+0)),B(t.getX(nt+1)),B(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const o=new at,c=new at,u=new at,h=new at,m=new at,d=new at,g=new at,_=new at;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),d.fromBufferAttribute(s,S),h.add(g),m.add(g),d.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*g;for(let x=0;x<g;x++)v[E++]=d[y++]}return new ji(v,g,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,s=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,s);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],y=t(v,s);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];g.push(y.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TA=0;class Kl extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=ql(),this.name="",this.type="Material",this.blending=vo,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Up,this.blendDst=Np,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){se(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){se(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(s.blending=this.blending),this.side!==Cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Up&&(s.blendSrc=this.blendSrc),this.blendDst!==Np&&(s.blendDst=this.blendDst),this.blendEquation!==sr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Oa=new at,np=new at,Eu=new at,Ms=new at,ip=new at,bu=new at,ap=new at;class uM{constructor(t=new at,n=new at(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Oa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Oa.copy(this.origin).addScaledVector(this.direction,n),Oa.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){np.copy(t).add(n).multiplyScalar(.5),Eu.copy(n).sub(t).normalize(),Ms.copy(this.origin).sub(np);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Eu),h=Ms.dot(this.direction),m=-Ms.dot(Eu),d=Ms.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*m-h,v=u*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,y=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*m)+d;else v<=-E?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(np).addScaledVector(Eu,v),y}intersectSphere(t,n){Oa.subVectors(t.center,this.origin);const s=Oa.dot(this.direction),o=Oa.dot(Oa)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=s-u,m=s+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(s=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(s=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||h>o)||((h>s||s!==s)&&(s=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Oa)!==null}intersectTriangle(t,n,s,o,c){ip.subVectors(n,t),bu.subVectors(s,t),ap.crossVectors(ip,bu);let u=this.direction.dot(ap),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ms.subVectors(this.origin,t);const m=h*this.direction.dot(bu.crossVectors(Ms,bu));if(m<0)return null;const d=h*this.direction.dot(ip.cross(Ms));if(d<0||m+d>u)return null;const g=-h*Ms.dot(ap);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fM extends Kl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=GS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kx=new cn,Js=new uM,Tu=new _f,Xx=new at,Au=new at,Ru=new at,Cu=new at,sp=new at,wu=new at,Wx=new at,Du=new at;class Fn extends ni{constructor(t=new Zi,n=new fM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){wu.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(sp.fromBufferAttribute(_,t),u?wu.addScaledVector(sp,g):wu.addScaledVector(sp.sub(n),g))}n.add(wu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tu.copy(s.boundingSphere),Tu.applyMatrix4(c),Js.copy(t.ray).recast(t.near),!(Tu.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Tu,Xx)===null||Js.origin.distanceToSquared(Xx)>(t.far-t.near)**2))&&(kx.copy(c).invert(),Js.copy(t.ray).applyMatrix4(kx),!(s.boundingBox!==null&&Js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Js)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=u[S.materialIndex],C=Math.max(S.start,y.start),D=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let L=C,O=D;L<O;L+=3){const z=h.getX(L),B=h.getX(L+1),T=h.getX(L+2);o=Lu(this,x,t,s,d,g,_,z,B,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=E,x=A;S<x;S+=3){const C=h.getX(S),D=h.getX(S+1),L=h.getX(S+2);o=Lu(this,u,t,s,d,g,_,C,D,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=u[S.materialIndex],C=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let L=C,O=D;L<O;L+=3){const z=L,B=L+1,T=L+2;o=Lu(this,x,t,s,d,g,_,z,B,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,x=A;S<x;S+=3){const C=S,D=S+1,L=S+2;o=Lu(this,u,t,s,d,g,_,C,D,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function AA(i,t,n,s,o,c,u,h){let m;if(t.side===ei?m=s.intersectTriangle(u,c,o,!0,h):m=s.intersectTriangle(o,c,u,t.side===Cs,h),m===null)return null;Du.copy(h),Du.applyMatrix4(i.matrixWorld);const d=n.ray.origin.distanceTo(Du);return d<n.near||d>n.far?null:{distance:d,point:Du.clone(),object:i}}function Lu(i,t,n,s,o,c,u,h,m,d){i.getVertexPosition(h,Au),i.getVertexPosition(m,Ru),i.getVertexPosition(d,Cu);const g=AA(i,t,n,s,Au,Ru,Cu,Wx);if(g){const _=new at;Gi.getBarycoord(Wx,Au,Ru,Cu,_),o&&(g.uv=Gi.getInterpolatedAttribute(o,h,m,d,_,new ge)),c&&(g.uv1=Gi.getInterpolatedAttribute(c,h,m,d,_,new ge)),u&&(g.normal=Gi.getInterpolatedAttribute(u,h,m,d,_,new at),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new at,materialIndex:0};Gi.getNormal(Au,Ru,Cu,v.normal),g.face=v,g.barycoord=_}return g}class RA extends qn{constructor(t=null,n=1,s=1,o,c,u,h,m,d=Un,g=Un,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rp=new at,CA=new at,wA=new pe;class ir{constructor(t=new at(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=rp.subVectors(s,n).cross(CA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(rp),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||wA.getNormalMatrix(t),o=this.coplanarPoint(rp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new _f,DA=new ge(.5,.5),Uu=new at;class hM{constructor(t=new ir,n=new ir,s=new ir,o=new ir,c=new ir,u=new ir){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ra,s=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],A=c[9],S=c[10],x=c[11],C=c[12],D=c[13],L=c[14],O=c[15];if(o[0].setComponents(d-u,y-g,x-E,O-C).normalize(),o[1].setComponents(d+u,y+g,x+E,O+C).normalize(),o[2].setComponents(d+h,y+_,x+A,O+D).normalize(),o[3].setComponents(d-h,y-_,x-A,O-D).normalize(),s)o[4].setComponents(m,v,S,L).normalize(),o[5].setComponents(d-m,y-v,x-S,O-L).normalize();else if(o[4].setComponents(d-m,y-v,x-S,O-L).normalize(),n===ra)o[5].setComponents(d+m,y+v,x+S,O+L).normalize();else if(n===af)o[5].setComponents(m,v,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const n=DA.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Uu.x=o.normal.x>0?t.max.x:t.min.x,Uu.y=o.normal.y>0?t.max.y:t.min.y,Uu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class LA extends Kl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const of=new at,lf=new at,jx=new cn,Cl=new uM,Nu=new _f,op=new at,qx=new at;class UA extends ni{constructor(t=new Zi,n=new LA){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let o=1,c=n.count;o<c;o++)of.fromBufferAttribute(n,o-1),lf.fromBufferAttribute(n,o),s[o]=s[o-1],s[o]+=of.distanceTo(lf);t.setAttribute("lineDistance",new qi(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nu.copy(s.boundingSphere),Nu.applyMatrix4(o),Nu.radius+=c,t.ray.intersectsSphere(Nu)===!1)return;jx.copy(o).invert(),Cl.copy(t.ray).applyMatrix4(jx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,d=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=d){const x=g.getX(A),C=g.getX(A+1),D=Pu(this,t,Cl,m,x,C,A);D&&n.push(D)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),x=Pu(this,t,Cl,m,A,S,E-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=d){const x=Pu(this,t,Cl,m,A,A+1,A);x&&n.push(x)}if(this.isLineLoop){const A=Pu(this,t,Cl,m,E-1,y,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Pu(i,t,n,s,o,c,u){const h=i.geometry.attributes.position;if(of.fromBufferAttribute(h,o),lf.fromBufferAttribute(h,c),n.distanceSqToSegment(of,lf,op,qx)>s)return;op.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(op);if(!(d<t.near||d>t.far))return{distance:d,point:qx.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Yx=new at,Kx=new at;class NA extends UA{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let o=0,c=n.count;o<c;o+=2)Yx.fromBufferAttribute(n,o),Kx.fromBufferAttribute(n,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Yx.distanceTo(Kx);t.setAttribute("lineDistance",new qi(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dM extends qn{constructor(t=[],n=hr,s,o,c,u,h,m,d,g){super(t,n,s,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hl extends qn{constructor(t,n,s=ca,o,c,u,h=Un,m=Un,d,g=ka,_=1){if(g!==ka&&g!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,h,m,g,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ag(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class PA extends Hl{constructor(t,n=ca,s=hr,o,c,u=Un,h=Un,m,d=ka){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class pM extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zl extends Zi{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,n,t,u,c,0),E("z","y","x",1,-1,s,n,-t,u,c,1),E("x","z","y",1,1,t,s,n,o,u,2),E("x","z","y",1,-1,t,s,-n,o,u,3),E("x","y","z",1,-1,t,n,s,o,c,4),E("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(m),this.setAttribute("position",new qi(d,3)),this.setAttribute("normal",new qi(g,3)),this.setAttribute("uv",new qi(_,2));function E(A,S,x,C,D,L,O,z,B,T,U){const lt=L/B,H=O/T,Z=L/2,nt=O/2,ut=z/2,Q=B+1,P=T+1;let I=0,st=0;const ht=new at;for(let St=0;St<P;St++){const F=St*H-nt;for(let q=0;q<Q;q++){const _t=q*lt-Z;ht[A]=_t*C,ht[S]=F*D,ht[x]=ut,d.push(ht.x,ht.y,ht.z),ht[A]=0,ht[S]=0,ht[x]=z>0?1:-1,g.push(ht.x,ht.y,ht.z),_.push(q/B),_.push(1-St/T),I+=1}}for(let St=0;St<T;St++)for(let F=0;F<B;F++){const q=v+F+Q*St,_t=v+F+Q*(St+1),Rt=v+(F+1)+Q*(St+1),Bt=v+(F+1)+Q*St;m.push(q,_t,Bt),m.push(_t,Rt,Bt),st+=6}h.addGroup(y,st,U),y+=st,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vi extends Zi{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(s),m=Math.floor(o),d=h+1,g=m+1,_=t/h,v=n/m,y=[],E=[],A=[],S=[];for(let x=0;x<g;x++){const C=x*v-u;for(let D=0;D<d;D++){const L=D*_-c;E.push(L,-C,0),A.push(0,0,1),S.push(D/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let C=0;C<h;C++){const D=C+d*x,L=C+d*(x+1),O=C+1+d*(x+1),z=C+1+d*x;y.push(D,L,z),y.push(L,O,z)}this.setIndex(y),this.setAttribute("position",new qi(E,3)),this.setAttribute("normal",new qi(A,3)),this.setAttribute("uv",new qi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.widthSegments,t.heightSegments)}}function bo(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Xn(i){const t={};for(let n=0;n<i.length;n++){const s=bo(i[n]);for(const o in s)t[o]=s[o]}return t}function OA(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function mM(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const FA={clone:bo,merge:Xn};var IA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends Kl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IA,this.fragmentShader=BA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=OA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class Fa extends ua{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zA extends Kl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VA extends Kl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ou=new at,Fu=new Ro,na=new at;class Ia extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ou,Fu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Fu,na.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Ou,Fu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ou,Fu,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new at,Zx=new ge,Qx=new ge;class Hi extends Ia{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Sm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Id*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sm*2*Math.atan(Math.tan(Id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,Zx,Qx),n.subVectors(Qx,Zx)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Id*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*s/d,o*=u.width/m,s*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class gM extends Ia{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ro=-90,oo=1;class HA extends ni{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hi(ro,oo,t,n);o.layers=this.layers,this.add(o);const c=new Hi(ro,oo,t,n);c.layers=this.layers,this.add(c);const u=new Hi(ro,oo,t,n);u.layers=this.layers,this.add(u);const h=new Hi(ro,oo,t,n);h.layers=this.layers,this.add(h);const m=new Hi(ro,oo,t,n);m.layers=this.layers,this.add(m);const d=new Hi(ro,oo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,h,m]=n;for(const d of n)this.remove(d);if(t===ra)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===af)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(s,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(s,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(s,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class GA extends Hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Jx(i,t,n,s){const o=kA(s);switch(n){case eM:return i*t;case iM:return i*t/o.components*o.byteLength;case $m:return i*t/o.components*o.byteLength;case Mo:return i*t*2/o.components*o.byteLength;case tg:return i*t*2/o.components*o.byteLength;case nM:return i*t*3/o.components*o.byteLength;case Xi:return i*t*4/o.components*o.byteLength;case eg:return i*t*4/o.components*o.byteLength;case Xu:case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ju:case qu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xp:case jp:return Math.max(i,16)*Math.max(t,8)/4;case kp:case Wp:return Math.max(i,8)*Math.max(t,8)/2;case qp:case Yp:case Zp:case Qp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kp:case Jp:case $p:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tm:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case em:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nm:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case im:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case am:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sm:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rm:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case om:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cm:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case um:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dm:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pm:case mm:case gm:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vm:case _m:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xm:case ym:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kA(i){switch(i){case bi:case QS:return{byteLength:1,components:1};case zl:case JS:case Ga:return{byteLength:2,components:1};case Qm:case Jm:return{byteLength:2,components:4};case ca:case Zm:case ki:return{byteLength:4,components:1};case $S:case tM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Km}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Km);function vM(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function XA(i){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=i.createBuffer();i.bindBuffer(m,v),i.bufferData(m,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,d){const g=m.array,_=m.updateRanges;if(i.bindBuffer(d,h),_.length===0)i.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];i.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(i.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var WA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$A=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_R=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SR="gl_FragColor = linearToOutputTexel( gl_FragColor );",MR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ER=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$R=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_C=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$C=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:WA,alphahash_pars_fragment:jA,alphamap_fragment:qA,alphamap_pars_fragment:YA,alphatest_fragment:KA,alphatest_pars_fragment:ZA,aomap_fragment:QA,aomap_pars_fragment:JA,batching_pars_vertex:$A,batching_vertex:tR,begin_vertex:eR,beginnormal_vertex:nR,bsdfs:iR,iridescence_fragment:aR,bumpmap_pars_fragment:sR,clipping_planes_fragment:rR,clipping_planes_pars_fragment:oR,clipping_planes_pars_vertex:lR,clipping_planes_vertex:cR,color_fragment:uR,color_pars_fragment:fR,color_pars_vertex:hR,color_vertex:dR,common:pR,cube_uv_reflection_fragment:mR,defaultnormal_vertex:gR,displacementmap_pars_vertex:vR,displacementmap_vertex:_R,emissivemap_fragment:xR,emissivemap_pars_fragment:yR,colorspace_fragment:SR,colorspace_pars_fragment:MR,envmap_fragment:ER,envmap_common_pars_fragment:bR,envmap_pars_fragment:TR,envmap_pars_vertex:AR,envmap_physical_pars_fragment:IR,envmap_vertex:RR,fog_vertex:CR,fog_pars_vertex:wR,fog_fragment:DR,fog_pars_fragment:LR,gradientmap_pars_fragment:UR,lightmap_pars_fragment:NR,lights_lambert_fragment:PR,lights_lambert_pars_fragment:OR,lights_pars_begin:FR,lights_toon_fragment:BR,lights_toon_pars_fragment:zR,lights_phong_fragment:VR,lights_phong_pars_fragment:HR,lights_physical_fragment:GR,lights_physical_pars_fragment:kR,lights_fragment_begin:XR,lights_fragment_maps:WR,lights_fragment_end:jR,logdepthbuf_fragment:qR,logdepthbuf_pars_fragment:YR,logdepthbuf_pars_vertex:KR,logdepthbuf_vertex:ZR,map_fragment:QR,map_pars_fragment:JR,map_particle_fragment:$R,map_particle_pars_fragment:tC,metalnessmap_fragment:eC,metalnessmap_pars_fragment:nC,morphinstance_vertex:iC,morphcolor_vertex:aC,morphnormal_vertex:sC,morphtarget_pars_vertex:rC,morphtarget_vertex:oC,normal_fragment_begin:lC,normal_fragment_maps:cC,normal_pars_fragment:uC,normal_pars_vertex:fC,normal_vertex:hC,normalmap_pars_fragment:dC,clearcoat_normal_fragment_begin:pC,clearcoat_normal_fragment_maps:mC,clearcoat_pars_fragment:gC,iridescence_pars_fragment:vC,opaque_fragment:_C,packing:xC,premultiplied_alpha_fragment:yC,project_vertex:SC,dithering_fragment:MC,dithering_pars_fragment:EC,roughnessmap_fragment:bC,roughnessmap_pars_fragment:TC,shadowmap_pars_fragment:AC,shadowmap_pars_vertex:RC,shadowmap_vertex:CC,shadowmask_pars_fragment:wC,skinbase_vertex:DC,skinning_pars_vertex:LC,skinning_vertex:UC,skinnormal_vertex:NC,specularmap_fragment:PC,specularmap_pars_fragment:OC,tonemapping_fragment:FC,tonemapping_pars_fragment:IC,transmission_fragment:BC,transmission_pars_fragment:zC,uv_pars_fragment:VC,uv_pars_vertex:HC,uv_vertex:GC,worldpos_vertex:kC,background_vert:XC,background_frag:WC,backgroundCube_vert:jC,backgroundCube_frag:qC,cube_vert:YC,cube_frag:KC,depth_vert:ZC,depth_frag:QC,distance_vert:JC,distance_frag:$C,equirect_vert:tw,equirect_frag:ew,linedashed_vert:nw,linedashed_frag:iw,meshbasic_vert:aw,meshbasic_frag:sw,meshlambert_vert:rw,meshlambert_frag:ow,meshmatcap_vert:lw,meshmatcap_frag:cw,meshnormal_vert:uw,meshnormal_frag:fw,meshphong_vert:hw,meshphong_frag:dw,meshphysical_vert:pw,meshphysical_frag:mw,meshtoon_vert:gw,meshtoon_frag:vw,points_vert:_w,points_frag:xw,shadow_vert:yw,shadow_frag:Sw,sprite_vert:Mw,sprite_frag:Ew},Nt={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},sa={basic:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Xn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Xn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new He(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Xn([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Xn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Xn([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Xn([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:Xn([Nt.common,Nt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:Xn([Nt.lights,Nt.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};sa.physical={uniforms:Xn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Iu={r:0,b:0,g:0},tr=new Xa,bw=new cn;function Tw(i,t,n,s,o,c){const u=new He(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function y(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const L=C.backgroundBlurriness>0;D=t.get(D,L)}return D}function E(C){let D=!1;const L=y(C);L===null?S(u,h):L&&L.isColor&&(S(L,1),D=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(C,D){const L=y(D);L&&(L.isCubeTexture||L.mapping===vf)?(d===void 0&&(d=new Fn(new Zl(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:bo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,z,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),tr.copy(D.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bw.makeRotationFromEuler(tr)),d.material.toneMapped=Re.getTransfer(L.colorSpace)!==Ve,(g!==L||_!==L.version||v!==i.toneMapping)&&(d.material.needsUpdate=!0,g=L,_=L.version,v=i.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Fn(new Vi(2,2),new ua({name:"BackgroundMaterial",uniforms:bo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Re.getTransfer(L.colorSpace)!==Ve,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||v!==i.toneMapping)&&(m.material.needsUpdate=!0,g=L,_=L.version,v=i.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function S(C,D){C.getRGB(Iu,mM(i)),n.buffers.color.setClear(Iu.r,Iu.g,Iu.b,D,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,D=1){u.set(C),h=D,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,S(u,h)},render:E,addToRenderList:A,dispose:x}}function Aw(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=v(null);let c=o,u=!1;function h(H,Z,nt,ut,Q){let P=!1;const I=_(H,ut,nt,Z);c!==I&&(c=I,d(c.object)),P=y(H,ut,nt,Q),P&&E(H,ut,nt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(P||u)&&(u=!1,L(H,Z,nt,ut),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return i.createVertexArray()}function d(H){return i.bindVertexArray(H)}function g(H){return i.deleteVertexArray(H)}function _(H,Z,nt,ut){const Q=ut.wireframe===!0;let P=s[Z.id];P===void 0&&(P={},s[Z.id]=P);const I=H.isInstancedMesh===!0?H.id:0;let st=P[I];st===void 0&&(st={},P[I]=st);let ht=st[nt.id];ht===void 0&&(ht={},st[nt.id]=ht);let St=ht[Q];return St===void 0&&(St=v(m()),ht[Q]=St),St}function v(H){const Z=[],nt=[],ut=[];for(let Q=0;Q<n;Q++)Z[Q]=0,nt[Q]=0,ut[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:nt,attributeDivisors:ut,object:H,attributes:{},index:null}}function y(H,Z,nt,ut){const Q=c.attributes,P=Z.attributes;let I=0;const st=nt.getAttributes();for(const ht in st)if(st[ht].location>=0){const F=Q[ht];let q=P[ht];if(q===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;I++}return c.attributesNum!==I||c.index!==ut}function E(H,Z,nt,ut){const Q={},P=Z.attributes;let I=0;const st=nt.getAttributes();for(const ht in st)if(st[ht].location>=0){let F=P[ht];F===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(F=H.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),Q[ht]=q,I++}c.attributes=Q,c.attributesNum=I,c.index=ut}function A(){const H=c.newAttributes;for(let Z=0,nt=H.length;Z<nt;Z++)H[Z]=0}function S(H){x(H,0)}function x(H,Z){const nt=c.newAttributes,ut=c.enabledAttributes,Q=c.attributeDivisors;nt[H]=1,ut[H]===0&&(i.enableVertexAttribArray(H),ut[H]=1),Q[H]!==Z&&(i.vertexAttribDivisor(H,Z),Q[H]=Z)}function C(){const H=c.newAttributes,Z=c.enabledAttributes;for(let nt=0,ut=Z.length;nt<ut;nt++)Z[nt]!==H[nt]&&(i.disableVertexAttribArray(nt),Z[nt]=0)}function D(H,Z,nt,ut,Q,P,I){I===!0?i.vertexAttribIPointer(H,Z,nt,Q,P):i.vertexAttribPointer(H,Z,nt,ut,Q,P)}function L(H,Z,nt,ut){A();const Q=ut.attributes,P=nt.getAttributes(),I=Z.defaultAttributeValues;for(const st in P){const ht=P[st];if(ht.location>=0){let St=Q[st];if(St===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(St=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(St=H.instanceColor)),St!==void 0){const F=St.normalized,q=St.itemSize,_t=t.get(St);if(_t===void 0)continue;const Rt=_t.buffer,Bt=_t.type,et=_t.bytesPerElement,xt=Bt===i.INT||Bt===i.UNSIGNED_INT||St.gpuType===Zm;if(St.isInterleavedBufferAttribute){const Tt=St.data,Wt=Tt.stride,Jt=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let ee=0;ee<ht.locationSize;ee++)x(ht.location+ee,Tt.meshPerAttribute);H.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ee=0;ee<ht.locationSize;ee++)S(ht.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let ee=0;ee<ht.locationSize;ee++)D(ht.location+ee,q/ht.locationSize,Bt,F,Wt*et,(Jt+q/ht.locationSize*ee)*et,xt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)x(ht.location+Tt,St.meshPerAttribute);H.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)S(ht.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<ht.locationSize;Tt++)D(ht.location+Tt,q/ht.locationSize,Bt,F,q*et,q/ht.locationSize*Tt*et,xt)}}else if(I!==void 0){const F=I[st];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(ht.location,F);break;case 3:i.vertexAttrib3fv(ht.location,F);break;case 4:i.vertexAttrib4fv(ht.location,F);break;default:i.vertexAttrib1fv(ht.location,F)}}}}C()}function O(){U();for(const H in s){const Z=s[H];for(const nt in Z){const ut=Z[nt];for(const Q in ut){const P=ut[Q];for(const I in P)g(P[I].object),delete P[I];delete ut[Q]}}delete s[H]}}function z(H){if(s[H.id]===void 0)return;const Z=s[H.id];for(const nt in Z){const ut=Z[nt];for(const Q in ut){const P=ut[Q];for(const I in P)g(P[I].object),delete P[I];delete ut[Q]}}delete s[H.id]}function B(H){for(const Z in s){const nt=s[Z];for(const ut in nt){const Q=nt[ut];if(Q[H.id]===void 0)continue;const P=Q[H.id];for(const I in P)g(P[I].object),delete P[I];delete Q[H.id]}}}function T(H){for(const Z in s){const nt=s[Z],ut=H.isInstancedMesh===!0?H.id:0,Q=nt[ut];if(Q!==void 0){for(const P in Q){const I=Q[P];for(const st in I)g(I[st].object),delete I[st];delete Q[P]}delete nt[ut],Object.keys(nt).length===0&&delete s[Z]}}}function U(){lt(),u=!0,c!==o&&(c=o,d(c.object))}function lt(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:U,resetDefaultState:lt,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:C}}function Rw(i,t,n){let s;function o(d){s=d}function c(d,g){i.drawArrays(s,d,g),n.update(g,s,1)}function u(d,g,_){_!==0&&(i.drawArraysInstanced(s,d,g,_),n.update(g,s,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,s,1)}function m(d,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)u(d[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,d,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];n.update(E,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Cw(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Xi&&s.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===Ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==bi&&s.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ki&&!T)}function m(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(se("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),z=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:L,maxSamples:O,samples:z}}function ww(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new ir,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||o;return o=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,x=i.get(_);if(!o||E===null||E.length===0||c&&!S)c?g(null):d();else{const C=c?0:s,D=C*4;let L=x.clippingState||null;m.value=L,L=g(E,v,D,y);for(let O=0;O!==D;++O)L[O]=n[O];x.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const x=y+A*4,C=v.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,L=y;D!==A;++D,L+=4)u.copy(_[D]).applyMatrix4(C,h),u.normal.toArray(S,L),S[L+3]=u.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}const As=4,$x=[.125,.215,.35,.446,.526,.582],rr=20,Dw=256,wl=new gM,ty=new He;let lp=null,cp=0,up=0,fp=!1;const Lw=new at;class ey{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:h=Lw}=c;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ay(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=fp,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===hr||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ga,format:Xi,colorSpace:Eo,depthBuffer:!1},o=ny(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ny(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Uw(c)),this._blurMaterial=Pw(c,t,n),this._ggxMaterial=Nw(c,t,n)}return o}_compileMaterial(t){const n=new Fn(new Zi,t);this._renderer.compile(n,wl)}_sceneToCubeUV(t,n,s,o,c){const m=new Hi(90,1,n,s),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(ty),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new Zl,new fM({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const C=t.background;C?C.isColor&&(S.color.copy(C),t.background=null,x=!0):(S.color.copy(ty),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):L===1?(m.up.set(0,0,d[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const O=this._cubeSize;lo(o,L*O,D>2?O:0,O,O),_.setRenderTarget(o),x&&_.render(A,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=C}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===hr||t.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ay()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iy());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;lo(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(u,wl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const m=u.uniforms,d=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,y=_*v,{_lodMax:E}=this,A=this._sizeLods[s],S=3*A*(s>E-As?s-E+As:0),x=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-n,lo(c,S,x,3*A,2*A),o.setRenderTarget(c),o.render(h,wl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,lo(t,S,x,3*A,2*A),o.setRenderTarget(t),o.render(h,wl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*rr-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):rr;S>rr&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${rr}`);const x=[];let C=0;for(let B=0;B<rr;++B){const T=B/A,U=Math.exp(-T*T/2);x.push(U),B===0?C+=U:B<S&&(C+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/C;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const L=this._sizeLods[o],O=3*L*(o>D-As?o-D+As:0),z=4*(this._cubeSize-L);lo(n,O,z,3*L,2*L),m.setRenderTarget(n),m.render(_,wl)}}function Uw(i){const t=[],n=[],s=[];let o=i;const c=i-As+1+$x.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>i-As?m=$x[u-i+As-1]:u===0&&(m=0),n.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,S=2,x=1,C=new Float32Array(A*E*y),D=new Float32Array(S*E*y),L=new Float32Array(x*E*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,T=z>2?0:-1,U=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];C.set(U,A*E*z),D.set(v,S*E*z);const lt=[z,z,z,z,z,z];L.set(lt,x*E*z)}const O=new Zi;O.setAttribute("position",new ji(C,A)),O.setAttribute("uv",new ji(D,S)),O.setAttribute("faceIndex",new ji(L,x)),s.push(new Fn(O,null)),o>As&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function ny(i,t,n){const s=new Wi(i,t,n);return s.texture.mapping=vf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function lo(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function Nw(i,t,n){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Pw(i,t,n){const s=new Float32Array(rr),o=new at(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function iy(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function ay(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class _M extends Wi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new dM(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Zl(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:bo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:Va});c.uniforms.tEquirect.value=n;const u=new Fn(o,c),h=n.minFilter;return n.minFilter===or&&(n.minFilter=In),new HA(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}function Ow(i){let t=new WeakMap,n=new WeakMap,s=null;function o(v,y=!1){return v==null?null:y?u(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Pd||y===Od)if(t.has(v)){const E=t.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new _M(E.height);return A.fromEquirectangularTexture(i,v),t.set(v,A),v.addEventListener("dispose",d),h(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const y=v.mapping,E=y===Pd||y===Od,A=y===hr||y===So;if(E||A){let S=n.get(v);const x=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new ey(i)),S=E?s.fromEquirectangular(v,S):s.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const C=v.image;return E&&C&&C.height>0||A&&C&&m(C)?(s===null&&(s=new ey(i)),S=E?s.fromEquirectangular(v):s.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function h(v,y){return y===Pd?v.mapping=hr:y===Od&&(v.mapping=So),v}function m(v){let y=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&y++;return y===E}function d(v){const y=v.target;y.removeEventListener("dispose",d);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(v){const y=v.target;y.removeEventListener("dispose",g);const E=n.get(y);E!==void 0&&(n.delete(y),E.dispose())}function _(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function Fw(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&rf("WebGLRenderer: "+s+" extension not supported."),o}}}function Iw(i,t,n,s){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],i.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(y!==null){const C=y.array;A=y.version;for(let D=0,L=C.length;D<L;D+=3){const O=C[D+0],z=C[D+1],B=C[D+2];v.push(O,z,z,B,B,O)}}else{const C=E.array;A=E.version;for(let D=0,L=C.length/3-1;D<L;D+=3){const O=D+0,z=D+1,B=D+2;v.push(O,z,z,B,B,O)}}const S=new(E.count>=65535?cM:lM)(v,1);S.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function Bw(i,t,n){let s;function o(v){s=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,y){i.drawElements(s,y,c,v*u),n.update(y,s,1)}function d(v,y,E){E!==0&&(i.drawElementsInstanced(s,y,c,v*u,E),n.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,s,1)}function _(v,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/u,y[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,A,0,E);let x=0;for(let C=0;C<E;C++)x+=y[C]*A[C];n.update(x,s,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function zw(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=h*(c/3);break;case i.LINES:n.lines+=h*(c/2);break;case i.LINE_STRIP:n.lines+=h*(c-1);break;case i.LINE_LOOP:n.lines+=h*c;break;case i.POINTS:n.points+=h*c;break;default:Le("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function Vw(i,t,n){const s=new WeakMap,o=new ln;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let lt=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",lt)};var y=lt;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),A===!0&&(L=2),S===!0&&(L=3);let O=h.attributes.position.count*L,z=1;O>t.maxTextureSize&&(z=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const B=new Float32Array(O*z*4*_),T=new sM(B,O,z,_);T.type=ki,T.needsUpdate=!0;const U=L*4;for(let H=0;H<_;H++){const Z=x[H],nt=C[H],ut=D[H],Q=O*z*4*H;for(let P=0;P<Z.count;P++){const I=P*U;E===!0&&(o.fromBufferAttribute(Z,P),B[Q+I+0]=o.x,B[Q+I+1]=o.y,B[Q+I+2]=o.z,B[Q+I+3]=0),A===!0&&(o.fromBufferAttribute(nt,P),B[Q+I+4]=o.x,B[Q+I+5]=o.y,B[Q+I+6]=o.z,B[Q+I+7]=0),S===!0&&(o.fromBufferAttribute(ut,P),B[Q+I+8]=o.x,B[Q+I+9]=o.y,B[Q+I+10]=o.z,B[Q+I+11]=ut.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new ge(O,z)},s.set(h,v),h.addEventListener("dispose",lt)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(i,"morphTargetBaseInfluence",A),m.getUniforms().setValue(i,"morphTargetInfluences",d)}m.getUniforms().setValue(i,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:c}}function Hw(i,t,n,s,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(n.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,i.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==g&&(y.update(),c.set(y,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const Gw={[kS]:"LINEAR_TONE_MAPPING",[XS]:"REINHARD_TONE_MAPPING",[WS]:"CINEON_TONE_MAPPING",[jS]:"ACES_FILMIC_TONE_MAPPING",[YS]:"AGX_TONE_MAPPING",[KS]:"NEUTRAL_TONE_MAPPING",[qS]:"CUSTOM_TONE_MAPPING"};function kw(i,t,n,s,o){const c=new Wi(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new Wi(t,n,{type:Ga,depthBuffer:!1,stencilBuffer:!1}),h=new Zi;h.setAttribute("position",new qi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qi([0,2,0,0,2,0],2));const m=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Fn(h,m),g=new gM(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,A=null,S=[],x=!1;this.setSize=function(C,D){c.setSize(C,D),u.setSize(C,D);for(let L=0;L<S.length;L++){const O=S[L];O.setSize&&O.setSize(C,D)}},this.setEffects=function(C){S=C,x=S.length>0&&S[0].isRenderPass===!0;const D=c.width,L=c.height;for(let O=0;O<S.length;O++){const z=S[O];z.setSize&&z.setSize(D,L)}},this.begin=function(C,D){if(y||C.toneMapping===oa&&S.length===0)return!1;if(A=D,D!==null){const L=D.width,O=D.height;(c.width!==L||c.height!==O)&&this.setSize(L,O)}return x===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return x},this.end=function(C,D){C.toneMapping=E,y=!0;let L=c,O=u;for(let z=0;z<S.length;z++){const B=S[z];if(B.enabled!==!1&&(B.render(C,O,L,D),B.needsSwap!==!1)){const T=L;L=O,O=T}}if(_!==C.outputColorSpace||v!==C.toneMapping){_=C.outputColorSpace,v=C.toneMapping,m.defines={},Re.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const z=Gw[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(A),C.render(d,g),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const xM=new qn,Mm=new Hl(1,1),yM=new sM,SM=new pA,MM=new dM,sy=[],ry=[],oy=new Float32Array(16),ly=new Float32Array(9),cy=new Float32Array(4);function Co(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=sy[o];if(c===void 0&&(c=new Float32Array(o),sy[o]=c),t!==0){s.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,i[u].toArray(c,h)}return c}function En(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function bn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function yf(i,t){let n=ry[t];n===void 0&&(n=new Int32Array(t),ry[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function Xw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function Ww(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;i.uniform2fv(this.addr,t),bn(n,t)}}function jw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(En(n,t))return;i.uniform3fv(this.addr,t),bn(n,t)}}function qw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;i.uniform4fv(this.addr,t),bn(n,t)}}function Yw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(En(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(En(n,s))return;cy.set(s),i.uniformMatrix2fv(this.addr,!1,cy),bn(n,s)}}function Kw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(En(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(En(n,s))return;ly.set(s),i.uniformMatrix3fv(this.addr,!1,ly),bn(n,s)}}function Zw(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(En(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(En(n,s))return;oy.set(s),i.uniformMatrix4fv(this.addr,!1,oy),bn(n,s)}}function Qw(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function Jw(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;i.uniform2iv(this.addr,t),bn(n,t)}}function $w(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;i.uniform3iv(this.addr,t),bn(n,t)}}function t2(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;i.uniform4iv(this.addr,t),bn(n,t)}}function e2(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function n2(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;i.uniform2uiv(this.addr,t),bn(n,t)}}function i2(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;i.uniform3uiv(this.addr,t),bn(n,t)}}function a2(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;i.uniform4uiv(this.addr,t),bn(n,t)}}function s2(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Mm.compareFunction=n.isReversedDepthBuffer()?ig:ng,c=Mm):c=xM,n.setTexture2D(t||c,o)}function r2(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||SM,o)}function o2(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||MM,o)}function l2(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||yM,o)}function c2(i){switch(i){case 5126:return Xw;case 35664:return Ww;case 35665:return jw;case 35666:return qw;case 35674:return Yw;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Qw;case 35667:case 35671:return Jw;case 35668:case 35672:return $w;case 35669:case 35673:return t2;case 5125:return e2;case 36294:return n2;case 36295:return i2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return l2}}function u2(i,t){i.uniform1fv(this.addr,t)}function f2(i,t){const n=Co(t,this.size,2);i.uniform2fv(this.addr,n)}function h2(i,t){const n=Co(t,this.size,3);i.uniform3fv(this.addr,n)}function d2(i,t){const n=Co(t,this.size,4);i.uniform4fv(this.addr,n)}function p2(i,t){const n=Co(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function m2(i,t){const n=Co(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function g2(i,t){const n=Co(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function v2(i,t){i.uniform1iv(this.addr,t)}function _2(i,t){i.uniform2iv(this.addr,t)}function x2(i,t){i.uniform3iv(this.addr,t)}function y2(i,t){i.uniform4iv(this.addr,t)}function S2(i,t){i.uniform1uiv(this.addr,t)}function M2(i,t){i.uniform2uiv(this.addr,t)}function E2(i,t){i.uniform3uiv(this.addr,t)}function b2(i,t){i.uniform4uiv(this.addr,t)}function T2(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);En(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Mm:u=xM;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function A2(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);En(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||SM,c[u])}function R2(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);En(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||MM,c[u])}function C2(i,t,n){const s=this.cache,o=t.length,c=yf(n,o);En(s,c)||(i.uniform1iv(this.addr,c),bn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||yM,c[u])}function w2(i){switch(i){case 5126:return u2;case 35664:return f2;case 35665:return h2;case 35666:return d2;case 35674:return p2;case 35675:return m2;case 35676:return g2;case 5124:case 35670:return v2;case 35667:case 35671:return _2;case 35668:case 35672:return x2;case 35669:case 35673:return y2;case 5125:return S2;case 36294:return M2;case 36295:return E2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return C2}}class D2{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=c2(n.type)}}class L2{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w2(n.type)}}class U2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],s)}}}const hp=/(\w+)(\])?(\[|\.)?/g;function uy(i,t){i.seq.push(t),i.map[t.id]=t}function N2(i,t,n){const s=i.name,o=s.length;for(hp.lastIndex=0;;){const c=hp.exec(s),u=hp.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){uy(n,d===void 0?new D2(h,i,t):new L2(h,i,t));break}else{let _=n.map[h];_===void 0&&(_=new U2(h),uy(n,_)),n=_}}}class Yu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);N2(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function fy(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const P2=37297;let O2=0;function F2(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return s.join(`
`)}const hy=new pe;function I2(i){Re._getMatrix(hy,Re.workingColorSpace,i);const t=`mat3( ${hy.elements.map(n=>n.toFixed(4))} )`;switch(Re.getTransfer(i)){case nf:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dy(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+F2(i.getShaderSource(t),h)}else return c}function B2(i,t){const n=I2(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const z2={[kS]:"Linear",[XS]:"Reinhard",[WS]:"Cineon",[jS]:"ACESFilmic",[YS]:"AgX",[KS]:"Neutral",[qS]:"Custom"};function V2(i,t){const n=z2[t];return n===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Bu=new at;function H2(){Re.getLuminanceCoefficients(Bu);const i=Bu.x.toFixed(4),t=Bu.y.toFixed(4),n=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function k2(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function X2(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:h}}return n}function Nl(i){return i!==""}function py(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function my(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(i){return i.replace(W2,q2)}const j2=new Map;function q2(i,t){let n=me[t];if(n===void 0){const s=j2.get(t);if(s!==void 0)n=me[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Em(n)}const Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gy(i){return i.replace(Y2,K2)}function K2(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function vy(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Z2={[ku]:"SHADOWMAP_TYPE_PCF",[Ul]:"SHADOWMAP_TYPE_VSM"};function Q2(i){return Z2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J2={[hr]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[vf]:"ENVMAP_TYPE_CUBE_UV"};function $2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":J2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const t3={[So]:"ENVMAP_MODE_REFRACTION"};function e3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n3={[GS]:"ENVMAP_BLENDING_MULTIPLY",[j1]:"ENVMAP_BLENDING_MIX",[q1]:"ENVMAP_BLENDING_ADD"};function i3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n3[i.combine]||"ENVMAP_BLENDING_NONE"}function a3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function s3(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=Q2(n),d=$2(n),g=e3(n),_=i3(n),v=a3(n),y=G2(n),E=k2(c),A=o.createProgram();let S,x,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Nl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Nl).join(`
`),x.length>0&&(x+=`
`)):(S=[vy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),x=[vy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?me.tonemapping_pars_fragment:"",n.toneMapping!==oa?V2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,B2("linearToOutputTexel",n.outputColorSpace),H2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Nl).join(`
`)),u=Em(u),u=py(u,n),u=my(u,n),h=Em(h),h=py(h,n),h=my(h,n),u=gy(u),h=gy(h),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=C+S+u,L=C+x+h,O=fy(o,o.VERTEX_SHADER,D),z=fy(o,o.FRAGMENT_SHADER,L);o.attachShader(A,O),o.attachShader(A,z),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(H){if(i.debug.checkShaderErrors){const Z=o.getProgramInfoLog(A)||"",nt=o.getShaderInfoLog(O)||"",ut=o.getShaderInfoLog(z)||"",Q=Z.trim(),P=nt.trim(),I=ut.trim();let st=!0,ht=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,A,O,z);else{const St=dy(o,O,"vertex"),F=dy(o,z,"fragment");Le("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+St+`
`+F)}else Q!==""?se("WebGLProgram: Program Info Log:",Q):(P===""||I==="")&&(ht=!1);ht&&(H.diagnostics={runnable:st,programLog:Q,vertexShader:{log:P,prefix:S},fragmentShader:{log:I,prefix:x}})}o.deleteShader(O),o.deleteShader(z),T=new Yu(o,A),U=X2(o,A)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let lt=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return lt===!1&&(lt=o.getProgramParameter(A,P2)),lt},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=O2++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=z,this}let r3=0;class o3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new l3(t),n.set(t,s)),s}}class l3{constructor(t){this.id=r3++,this.code=t,this.usedTimes=0}}function c3(i,t,n,s,o,c){const u=new rM,h=new o3,m=new Set,d=[],g=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,U,lt,H,Z){const nt=H.fog,ut=Z.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||Q,P),st=I&&I.mapping===vf?I.image.height:null,ht=y[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,F=St!==void 0?St.length:0;let q=0;ut.morphAttributes.position!==void 0&&(q=1),ut.morphAttributes.normal!==void 0&&(q=2),ut.morphAttributes.color!==void 0&&(q=3);let _t,Rt,Bt,et;if(ht){const Ae=sa[ht];_t=Ae.vertexShader,Rt=Ae.fragmentShader}else _t=T.vertexShader,Rt=T.fragmentShader,h.update(T),Bt=h.getVertexShaderID(T),et=h.getFragmentShaderID(T);const xt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Wt=Z.isInstancedMesh===!0,Jt=Z.isBatchedMesh===!0,ee=!!T.map,en=!!T.matcap,ye=!!I,ve=!!T.aoMap,Ue=!!T.lightMap,ce=!!T.bumpMap,$e=!!T.normalMap,G=!!T.displacementMap,Ke=!!T.emissiveMap,Te=!!T.metalnessMap,Pe=!!T.roughnessMap,Yt=T.anisotropy>0,N=T.clearcoat>0,b=T.dispersion>0,j=T.iridescence>0,mt=T.sheen>0,yt=T.transmission>0,dt=Yt&&!!T.anisotropyMap,jt=N&&!!T.clearcoatMap,wt=N&&!!T.clearcoatNormalMap,Qt=N&&!!T.clearcoatRoughnessMap,ne=j&&!!T.iridescenceMap,bt=j&&!!T.iridescenceThicknessMap,Mt=mt&&!!T.sheenColorMap,Ot=mt&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,Ft=!!T.specularColorMap,fe=!!T.specularIntensityMap,W=yt&&!!T.transmissionMap,Ct=yt&&!!T.thicknessMap,At=!!T.gradientMap,It=!!T.alphaMap,Et=T.alphaTest>0,ft=!!T.alphaHash,Vt=!!T.extensions;let ae=oa;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Ie={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Jt,batchingColor:Jt&&Z._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&Z.instanceColor!==null,instancingMorph:Wt&&Z.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Eo,alphaToCoverage:!!T.alphaToCoverage,map:ee,matcap:en,envMap:ye,envMapMode:ye&&I.mapping,envMapCubeUVHeight:st,aoMap:ve,lightMap:Ue,bumpMap:ce,normalMap:$e,displacementMap:G,emissiveMap:Ke,normalMapObjectSpace:$e&&T.normalMapType===Q1,normalMapTangentSpace:$e&&T.normalMapType===Z1,metalnessMap:Te,roughnessMap:Pe,anisotropy:Yt,anisotropyMap:dt,clearcoat:N,clearcoatMap:jt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Qt,dispersion:b,iridescence:j,iridescenceMap:ne,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Mt,sheenRoughnessMap:Ot,specularMap:Pt,specularColorMap:Ft,specularIntensityMap:fe,transmission:yt,transmissionMap:W,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===vo&&T.alphaToCoverage===!1,alphaMap:It,alphaTest:Et,alphaHash:ft,combine:T.combine,mapUv:ee&&E(T.map.channel),aoMapUv:ve&&E(T.aoMap.channel),lightMapUv:Ue&&E(T.lightMap.channel),bumpMapUv:ce&&E(T.bumpMap.channel),normalMapUv:$e&&E(T.normalMap.channel),displacementMapUv:G&&E(T.displacementMap.channel),emissiveMapUv:Ke&&E(T.emissiveMap.channel),metalnessMapUv:Te&&E(T.metalnessMap.channel),roughnessMapUv:Pe&&E(T.roughnessMap.channel),anisotropyMapUv:dt&&E(T.anisotropyMap.channel),clearcoatMapUv:jt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&E(T.sheenRoughnessMap.channel),specularMapUv:Pt&&E(T.specularMap.channel),specularColorMapUv:Ft&&E(T.specularColorMap.channel),specularIntensityMapUv:fe&&E(T.specularIntensityMap.channel),transmissionMapUv:W&&E(T.transmissionMap.channel),thicknessMapUv:Ct&&E(T.thicknessMap.channel),alphaMapUv:It&&E(T.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&($e||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ut.attributes.uv&&(ee||It),fog:!!nt,useFog:T.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ut.attributes.normal===void 0&&$e===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Tt,skinning:Z.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&lt.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ee&&T.map.isVideoTexture===!0&&Re.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ke&&T.emissiveMap.isVideoTexture===!0&&Re.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ba,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Vt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&T.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function S(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const lt in T.defines)U.push(lt),U.push(T.defines[lt]);return T.isRawShaderMaterial===!1&&(x(U,T),C(U,T),U.push(i.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function C(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),T.push(u.mask)}function D(T){const U=y[T.type];let lt;if(U){const H=sa[U];lt=FA.clone(H.uniforms)}else lt=T.uniforms;return lt}function L(T,U){let lt=g.get(U);return lt!==void 0?++lt.usedTimes:(lt=new s3(i,U,T,o),d.push(lt),g.set(U,lt)),lt}function O(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function z(T){h.remove(T)}function B(){h.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:D,acquireProgram:L,releaseProgram:O,releaseShaderCache:z,programs:d,dispose:B}}function u3(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function s(u){i.delete(u)}function o(u,h,m){i.get(u)[h]=m}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function f3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _y(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xy(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,E,A,S,x){let C=i[t];return C===void 0?(C={id:v.id,object:v,geometry:y,material:E,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:x},i[t]=C):(C.id=v.id,C.object=v,C.geometry=y,C.material=E,C.materialVariant=u(v),C.groupOrder=A,C.renderOrder=v.renderOrder,C.z=S,C.group=x),t++,C}function m(v,y,E,A,S,x){const C=h(v,y,E,A,S,x);E.transmission>0?s.push(C):E.transparent===!0?o.push(C):n.push(C)}function d(v,y,E,A,S,x){const C=h(v,y,E,A,S,x);E.transmission>0?s.unshift(C):E.transparent===!0?o.unshift(C):n.unshift(C)}function g(v,y){n.length>1&&n.sort(v||f3),s.length>1&&s.sort(y||_y),o.length>1&&o.sort(y||_y)}function _(){for(let v=t,y=i.length;v<y;v++){const E=i[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function h3(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new xy,i.set(s,[u])):o>=c.length?(u=new xy,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function d3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new at,color:new He};break;case"SpotLight":n={position:new at,direction:new at,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new at,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new at,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new at,halfWidth:new at,halfHeight:new at};break}return i[t.id]=n,n}}}function p3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let m3=0;function g3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v3(i){const t=new d3,n=p3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new at);const o=new at,c=new cn,u=new cn;function h(d){let g=0,_=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let y=0,E=0,A=0,S=0,x=0,C=0,D=0,L=0,O=0,z=0,B=0;d.sort(g3);for(let U=0,lt=d.length;U<lt;U++){const H=d[U],Z=H.color,nt=H.intensity,ut=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Mo?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Z.r*nt,_+=Z.g*nt,v+=Z.b*nt;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],nt);B++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,st=n.get(H);st.shadowIntensity=I.intensity,st.shadowBias=I.bias,st.shadowNormalBias=I.normalBias,st.shadowRadius=I.radius,st.shadowMapSize=I.mapSize,s.directionalShadow[y]=st,s.directionalShadowMap[y]=Q,s.directionalShadowMatrix[y]=H.shadow.matrix,C++}s.directional[y]=P,y++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(Z).multiplyScalar(nt),P.distance=ut,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[A]=P;const I=H.shadow;if(H.map&&(s.spotLightMap[O]=H.map,O++,I.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[A]=I.matrix,H.castShadow){const st=n.get(H);st.shadowIntensity=I.intensity,st.shadowBias=I.bias,st.shadowNormalBias=I.normalBias,st.shadowRadius=I.radius,st.shadowMapSize=I.mapSize,s.spotShadow[A]=st,s.spotShadowMap[A]=Q,L++}A++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(Z).multiplyScalar(nt),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=P,S++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const I=H.shadow,st=n.get(H);st.shadowIntensity=I.intensity,st.shadowBias=I.bias,st.shadowNormalBias=I.normalBias,st.shadowRadius=I.radius,st.shadowMapSize=I.mapSize,st.shadowCameraNear=I.camera.near,st.shadowCameraFar=I.camera.far,s.pointShadow[E]=st,s.pointShadowMap[E]=Q,s.pointShadowMatrix[E]=H.shadow.matrix,D++}s.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(nt),P.groundColor.copy(H.groundColor).multiplyScalar(nt),s.hemi[x]=P,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==D||T.numSpotShadows!==L||T.numSpotMaps!==O||T.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+O-z,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,T.directionalLength=y,T.pointLength=E,T.spotLength=A,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=D,T.numSpotShadows=L,T.numSpotMaps=O,T.numLightProbes=B,s.version=m3++)}function m(d,g){let _=0,v=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let x=0,C=d.length;x<C;x++){const D=d[x];if(D.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),_++}else if(D.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const L=s.hemi[A];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:s}}function yy(i){const t=new v3(i),n=[],s=[];function o(g){d.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const d={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function _3(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new yy(i),t.set(o,[h])):c>=u.length?(h=new yy(i),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const x3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S3=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],M3=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],Sy=new cn,Dl=new at,dp=new at;function E3(i,t,n){let s=new hM;const o=new ge,c=new ge,u=new ln,h=new zA,m=new VA,d={},g=n.maxTextureSize,_={[Cs]:ei,[ei]:Cs,[Ba]:Ba},v=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:x3,fragmentShader:y3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Zi;E.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Fn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let x=this.type;this.render=function(z,B,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===R1&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ku);const U=i.getRenderTarget(),lt=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Va),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const nt=x!==this.type;nt&&B.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(Q=>Q.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,Q=z.length;ut<Q;ut++){const P=z[ut],I=P.shadow;if(I===void 0){se("WebGLShadowMap:",P,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const st=I.getFrameExtents();o.multiply(st),c.copy(I.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/st.x),o.x=c.x*st.x,I.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/st.y),o.y=c.y*st.y,I.mapSize.y=c.y));const ht=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ht,I.map===null||nt===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Ul){if(P.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Wi(o.x,o.y,{format:Mo,type:Ga,minFilter:In,magFilter:In,generateMipmaps:!1}),I.map.texture.name=P.name+".shadowMap",I.map.depthTexture=new Hl(o.x,o.y,ki),I.map.depthTexture.name=P.name+".shadowMapDepth",I.map.depthTexture.format=ka,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un}else P.isPointLight?(I.map=new _M(o.x),I.map.depthTexture=new PA(o.x,ca)):(I.map=new Wi(o.x,o.y),I.map.depthTexture=new Hl(o.x,o.y,ca)),I.map.depthTexture.name=P.name+".shadowMap",I.map.depthTexture.format=ka,this.type===ku?(I.map.depthTexture.compareFunction=ht?ig:ng,I.map.depthTexture.minFilter=In,I.map.depthTexture.magFilter=In):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Un,I.map.depthTexture.magFilter=Un);I.camera.updateProjectionMatrix()}const St=I.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<St;F++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,F),i.clear();else{F===0&&(i.setRenderTarget(I.map),i.clear());const q=I.getViewport(F);u.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),Z.viewport(u)}if(P.isPointLight){const q=I.camera,_t=I.matrix,Rt=P.distance||q.far;Rt!==q.far&&(q.far=Rt,q.updateProjectionMatrix()),Dl.setFromMatrixPosition(P.matrixWorld),q.position.copy(Dl),dp.copy(q.position),dp.add(S3[F]),q.up.copy(M3[F]),q.lookAt(dp),q.updateMatrixWorld(),_t.makeTranslation(-Dl.x,-Dl.y,-Dl.z),Sy.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Sy,q.coordinateSystem,q.reversedDepth)}else I.updateMatrices(P);s=I.getFrustum(),L(B,T,I.camera,P,this.type)}I.isPointLightShadow!==!0&&this.type===Ul&&C(I,T),I.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(U,lt,H)};function C(z,B){const T=t.update(A);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Wi(o.x,o.y,{format:Mo,type:Ga})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,i.setRenderTarget(z.mapPass),i.clear(),i.renderBufferDirect(B,null,T,v,A,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,i.setRenderTarget(z.map),i.clear(),i.renderBufferDirect(B,null,T,y,A,null)}function D(z,B,T,U){let lt=null;const H=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)lt=H;else if(lt=T.isPointLight===!0?m:h,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=lt.uuid,nt=B.uuid;let ut=d[Z];ut===void 0&&(ut={},d[Z]=ut);let Q=ut[nt];Q===void 0&&(Q=lt.clone(),ut[nt]=Q,B.addEventListener("dispose",O)),lt=Q}if(lt.visible=B.visible,lt.wireframe=B.wireframe,U===Ul?lt.side=B.shadowSide!==null?B.shadowSide:B.side:lt.side=B.shadowSide!==null?B.shadowSide:_[B.side],lt.alphaMap=B.alphaMap,lt.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,lt.map=B.map,lt.clipShadows=B.clipShadows,lt.clippingPlanes=B.clippingPlanes,lt.clipIntersection=B.clipIntersection,lt.displacementMap=B.displacementMap,lt.displacementScale=B.displacementScale,lt.displacementBias=B.displacementBias,lt.wireframeLinewidth=B.wireframeLinewidth,lt.linewidth=B.linewidth,T.isPointLight===!0&&lt.isMeshDistanceMaterial===!0){const Z=i.properties.get(lt);Z.light=T}return lt}function L(z,B,T,U,lt){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&lt===Ul)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const nt=t.update(z),ut=z.material;if(Array.isArray(ut)){const Q=nt.groups;for(let P=0,I=Q.length;P<I;P++){const st=Q[P],ht=ut[st.materialIndex];if(ht&&ht.visible){const St=D(z,ht,U,lt);z.onBeforeShadow(i,z,B,T,nt,St,st),i.renderBufferDirect(T,null,nt,St,z,st),z.onAfterShadow(i,z,B,T,nt,St,st)}}}else if(ut.visible){const Q=D(z,ut,U,lt);z.onBeforeShadow(i,z,B,T,nt,Q,null),i.renderBufferDirect(T,null,nt,Q,z,null),z.onAfterShadow(i,z,B,T,nt,Q,null)}}const Z=z.children;for(let nt=0,ut=Z.length;nt<ut;nt++)L(Z[nt],B,T,U,lt)}function O(z){z.target.removeEventListener("dispose",O);for(const T in d){const U=d[T],lt=z.target.uuid;lt in U&&(U[lt].dispose(),delete U[lt])}}}function b3(i,t){function n(){let W=!1;const Ct=new ln;let At=null;const It=new ln(0,0,0,0);return{setMask:function(Et){At!==Et&&!W&&(i.colorMask(Et,Et,Et,Et),At=Et)},setLocked:function(Et){W=Et},setClear:function(Et,ft,Vt,ae,Ie){Ie===!0&&(Et*=ae,ft*=ae,Vt*=ae),Ct.set(Et,ft,Vt,ae),It.equals(Ct)===!1&&(i.clearColor(Et,ft,Vt,ae),It.copy(Ct))},reset:function(){W=!1,At=null,It.set(-1,0,0,0)}}}function s(){let W=!1,Ct=!1,At=null,It=null,Et=null;return{setReversed:function(ft){if(Ct!==ft){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ft;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return Ct},setTest:function(ft){ft?xt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ft){At!==ft&&!W&&(i.depthMask(ft),At=ft)},setFunc:function(ft){if(Ct&&(ft=oA[ft]),It!==ft){switch(ft){case Pp:i.depthFunc(i.NEVER);break;case Op:i.depthFunc(i.ALWAYS);break;case Fp:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case Ip:i.depthFunc(i.EQUAL);break;case Bp:i.depthFunc(i.GEQUAL);break;case zp:i.depthFunc(i.GREATER);break;case Vp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=ft}},setLocked:function(ft){W=ft},setClear:function(ft){Et!==ft&&(Et=ft,Ct&&(ft=1-ft),i.clearDepth(ft))},reset:function(){W=!1,At=null,It=null,Et=null,Ct=!1}}}function o(){let W=!1,Ct=null,At=null,It=null,Et=null,ft=null,Vt=null,ae=null,Ie=null;return{setTest:function(Ae){W||(Ae?xt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Ae){Ct!==Ae&&!W&&(i.stencilMask(Ae),Ct=Ae)},setFunc:function(Ae,zn,Ci){(At!==Ae||It!==zn||Et!==Ci)&&(i.stencilFunc(Ae,zn,Ci),At=Ae,It=zn,Et=Ci)},setOp:function(Ae,zn,Ci){(ft!==Ae||Vt!==zn||ae!==Ci)&&(i.stencilOp(Ae,zn,Ci),ft=Ae,Vt=zn,ae=Ci)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Ie!==Ae&&(i.clearStencil(Ae),Ie=Ae)},reset:function(){W=!1,Ct=null,At=null,It=null,Et=null,ft=null,Vt=null,ae=null,Ie=null}}}const c=new n,u=new s,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,A=!1,S=null,x=null,C=null,D=null,L=null,O=null,z=null,B=new He(0,0,0),T=0,U=!1,lt=null,H=null,Z=null,nt=null,ut=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(st)[1]),P=I>=1):st.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),P=I>=2);let ht=null,St={};const F=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),_t=new ln().fromArray(F),Rt=new ln().fromArray(q);function Bt(W,Ct,At,It){const Et=new Uint8Array(4),ft=i.createTexture();i.bindTexture(W,ft),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<At;Vt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Ct+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ft}const et={};et[i.TEXTURE_2D]=Bt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),xt(i.DEPTH_TEST),u.setFunc(yo),ce(!1),$e(bx),xt(i.CULL_FACE),ve(Va);function xt(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function Tt(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function Wt(W,Ct){return _[W]!==Ct?(i.bindFramebuffer(W,Ct),_[W]=Ct,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Ct),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Jt(W,Ct){let At=y,It=!1;if(W){At=v.get(Ct),At===void 0&&(At=[],v.set(Ct,At));const Et=W.textures;if(At.length!==Et.length||At[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Vt=Et.length;ft<Vt;ft++)At[ft]=i.COLOR_ATTACHMENT0+ft;At.length=Et.length,It=!0}}else At[0]!==i.BACK&&(At[0]=i.BACK,It=!0);It&&i.drawBuffers(At)}function ee(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const en={[sr]:i.FUNC_ADD,[w1]:i.FUNC_SUBTRACT,[D1]:i.FUNC_REVERSE_SUBTRACT};en[L1]=i.MIN,en[U1]=i.MAX;const ye={[N1]:i.ZERO,[P1]:i.ONE,[O1]:i.SRC_COLOR,[Up]:i.SRC_ALPHA,[H1]:i.SRC_ALPHA_SATURATE,[z1]:i.DST_COLOR,[I1]:i.DST_ALPHA,[F1]:i.ONE_MINUS_SRC_COLOR,[Np]:i.ONE_MINUS_SRC_ALPHA,[V1]:i.ONE_MINUS_DST_COLOR,[B1]:i.ONE_MINUS_DST_ALPHA,[G1]:i.CONSTANT_COLOR,[k1]:i.ONE_MINUS_CONSTANT_COLOR,[X1]:i.CONSTANT_ALPHA,[W1]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(W,Ct,At,It,Et,ft,Vt,ae,Ie,Ae){if(W===Va){A===!0&&(Tt(i.BLEND),A=!1);return}if(A===!1&&(xt(i.BLEND),A=!0),W!==C1){if(W!==S||Ae!==U){if((x!==sr||L!==sr)&&(i.blendEquation(i.FUNC_ADD),x=sr,L=sr),Ae)switch(W){case vo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lp:i.blendFunc(i.ONE,i.ONE);break;case Tx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ax:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",W);break}else switch(W){case vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lp:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tx:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ax:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",W);break}C=null,D=null,O=null,z=null,B.set(0,0,0),T=0,S=W,U=Ae}return}Et=Et||Ct,ft=ft||At,Vt=Vt||It,(Ct!==x||Et!==L)&&(i.blendEquationSeparate(en[Ct],en[Et]),x=Ct,L=Et),(At!==C||It!==D||ft!==O||Vt!==z)&&(i.blendFuncSeparate(ye[At],ye[It],ye[ft],ye[Vt]),C=At,D=It,O=ft,z=Vt),(ae.equals(B)===!1||Ie!==T)&&(i.blendColor(ae.r,ae.g,ae.b,Ie),B.copy(ae),T=Ie),S=W,U=!1}function Ue(W,Ct){W.side===Ba?Tt(i.CULL_FACE):xt(i.CULL_FACE);let At=W.side===ei;Ct&&(At=!At),ce(At),W.blending===vo&&W.transparent===!1?ve(Va):ve(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;h.setTest(It),It&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ke(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(W){lt!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),lt=W)}function $e(W){W!==T1?(xt(i.CULL_FACE),W!==H&&(W===bx?i.cullFace(i.BACK):W===A1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),H=W}function G(W){W!==Z&&(P&&i.lineWidth(W),Z=W)}function Ke(W,Ct,At){W?(xt(i.POLYGON_OFFSET_FILL),(nt!==Ct||ut!==At)&&(nt=Ct,ut=At,u.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,At))):Tt(i.POLYGON_OFFSET_FILL)}function Te(W){W?xt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function Pe(W){W===void 0&&(W=i.TEXTURE0+Q-1),ht!==W&&(i.activeTexture(W),ht=W)}function Yt(W,Ct,At){At===void 0&&(ht===null?At=i.TEXTURE0+Q-1:At=ht);let It=St[At];It===void 0&&(It={type:void 0,texture:void 0},St[At]=It),(It.type!==W||It.texture!==Ct)&&(ht!==At&&(i.activeTexture(At),ht=At),i.bindTexture(W,Ct||et[W]),It.type=W,It.texture=Ct)}function N(){const W=St[ht];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function mt(){try{i.texSubImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function yt(){try{i.texSubImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function dt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function jt(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function wt(){try{i.texStorage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function Qt(){try{i.texStorage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function ne(){try{i.texImage2D(...arguments)}catch(W){Le("WebGLState:",W)}}function bt(){try{i.texImage3D(...arguments)}catch(W){Le("WebGLState:",W)}}function Mt(W){_t.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Ot(W){Rt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Pt(W,Ct){let At=d.get(Ct);At===void 0&&(At=new WeakMap,d.set(Ct,At));let It=At.get(W);It===void 0&&(It=i.getUniformBlockIndex(Ct,W.name),At.set(W,It))}function Ft(W,Ct){const It=d.get(Ct).get(W);m.get(Ct)!==It&&(i.uniformBlockBinding(Ct,It,W.__bindingPointIndex),m.set(Ct,It))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},ht=null,St={},_={},v=new WeakMap,y=[],E=null,A=!1,S=null,x=null,C=null,D=null,L=null,O=null,z=null,B=new He(0,0,0),T=0,U=!1,lt=null,H=null,Z=null,nt=null,ut=null,_t.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:xt,disable:Tt,bindFramebuffer:Wt,drawBuffers:Jt,useProgram:ee,setBlending:ve,setMaterial:Ue,setFlipSided:ce,setCullFace:$e,setLineWidth:G,setPolygonOffset:Ke,setScissorTest:Te,activeTexture:Pe,bindTexture:Yt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:ne,texImage3D:bt,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:wt,texStorage3D:Qt,texSubImage2D:mt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:jt,scissor:Mt,viewport:Ot,reset:fe}}function T3(i,t,n,s,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ge,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):sf("canvas")}function A(N,b,j){let mt=1;const yt=Yt(N);if((yt.width>j||yt.height>j)&&(mt=j/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(mt*yt.width),jt=Math.floor(mt*yt.height);_===void 0&&(_=E(dt,jt));const wt=b?E(dt,jt):_;return wt.width=dt,wt.height=jt,wt.getContext("2d").drawImage(N,0,0,dt,jt),se("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+jt+")."),wt}else return"data"in N&&se("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){i.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(N,b,j,mt,yt=!1){if(N!==null){if(i[N]!==void 0)return i[N];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let dt=b;if(b===i.RED&&(j===i.FLOAT&&(dt=i.R32F),j===i.HALF_FLOAT&&(dt=i.R16F),j===i.UNSIGNED_BYTE&&(dt=i.R8)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(dt=i.R8UI),j===i.UNSIGNED_SHORT&&(dt=i.R16UI),j===i.UNSIGNED_INT&&(dt=i.R32UI),j===i.BYTE&&(dt=i.R8I),j===i.SHORT&&(dt=i.R16I),j===i.INT&&(dt=i.R32I)),b===i.RG&&(j===i.FLOAT&&(dt=i.RG32F),j===i.HALF_FLOAT&&(dt=i.RG16F),j===i.UNSIGNED_BYTE&&(dt=i.RG8)),b===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(dt=i.RG8UI),j===i.UNSIGNED_SHORT&&(dt=i.RG16UI),j===i.UNSIGNED_INT&&(dt=i.RG32UI),j===i.BYTE&&(dt=i.RG8I),j===i.SHORT&&(dt=i.RG16I),j===i.INT&&(dt=i.RG32I)),b===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(dt=i.RGB8UI),j===i.UNSIGNED_SHORT&&(dt=i.RGB16UI),j===i.UNSIGNED_INT&&(dt=i.RGB32UI),j===i.BYTE&&(dt=i.RGB8I),j===i.SHORT&&(dt=i.RGB16I),j===i.INT&&(dt=i.RGB32I)),b===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(dt=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(dt=i.RGBA16UI),j===i.UNSIGNED_INT&&(dt=i.RGBA32UI),j===i.BYTE&&(dt=i.RGBA8I),j===i.SHORT&&(dt=i.RGBA16I),j===i.INT&&(dt=i.RGBA32I)),b===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(dt=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(dt=i.R11F_G11F_B10F)),b===i.RGBA){const jt=yt?nf:Re.getTransfer(mt);j===i.FLOAT&&(dt=i.RGBA32F),j===i.HALF_FLOAT&&(dt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(dt=jt===Ve?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function L(N,b){let j;return N?b===null||b===ca||b===Vl?j=i.DEPTH24_STENCIL8:b===ki?j=i.DEPTH32F_STENCIL8:b===zl&&(j=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ca||b===Vl?j=i.DEPTH_COMPONENT24:b===ki?j=i.DEPTH_COMPONENT32F:b===zl&&(j=i.DEPTH_COMPONENT16),j}function O(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Un&&N.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),T(b),b.isVideoTexture&&g.delete(b)}function B(N){const b=N.target;b.removeEventListener("dispose",B),lt(b)}function T(N){const b=s.get(N);if(b.__webglInit===void 0)return;const j=N.source,mt=v.get(j);if(mt){const yt=mt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&U(N),Object.keys(mt).length===0&&v.delete(j)}s.remove(N)}function U(N){const b=s.get(N);i.deleteTexture(b.__webglTexture);const j=N.source,mt=v.get(j);delete mt[b.__cacheKey],u.memory.textures--}function lt(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let yt=0;yt<b.__webglFramebuffer[mt].length;yt++)i.deleteFramebuffer(b.__webglFramebuffer[mt][yt]);else i.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)i.deleteFramebuffer(b.__webglFramebuffer[mt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=N.textures;for(let mt=0,yt=j.length;mt<yt;mt++){const dt=s.get(j[mt]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),u.memory.textures--),s.remove(j[mt])}s.remove(N)}let H=0;function Z(){H=0}function nt(){const N=H;return N>=o.maxTextures&&se("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ut(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function Q(N,b){const j=s.get(N);if(N.isVideoTexture&&Te(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const mt=N.image;if(mt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,N,b);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function P(N,b){const j=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){et(j,N,b);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function I(N,b){const j=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){et(j,N,b);return}n.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function st(N,b){const j=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){xt(j,N,b);return}n.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}const ht={[Hp]:i.REPEAT,[za]:i.CLAMP_TO_EDGE,[Gp]:i.MIRRORED_REPEAT},St={[Un]:i.NEAREST,[Y1]:i.NEAREST_MIPMAP_NEAREST,[pu]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Fd]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR},F={[J1]:i.NEVER,[iA]:i.ALWAYS,[$1]:i.LESS,[ng]:i.LEQUAL,[tA]:i.EQUAL,[ig]:i.GEQUAL,[eA]:i.GREATER,[nA]:i.NOTEQUAL};function q(N,b){if(b.type===ki&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Fd||b.magFilter===pu||b.magFilter===or||b.minFilter===In||b.minFilter===Fd||b.minFilter===pu||b.minFilter===or)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ht[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ht[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ht[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,St[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==pu&&b.minFilter!==or||b.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function _t(N,b){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const mt=b.source;let yt=v.get(mt);yt===void 0&&(yt={},v.set(mt,yt));const dt=ut(b);if(dt!==N.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,j=!0),yt[dt].usedTimes++;const jt=yt[N.__cacheKey];jt!==void 0&&(yt[N.__cacheKey].usedTimes--,jt.usedTimes===0&&U(b)),N.__cacheKey=dt,N.__webglTexture=yt[dt].texture}return j}function Rt(N,b,j){return Math.floor(Math.floor(N/j)/b)}function Bt(N,b,j,mt){const dt=N.updateRanges;if(dt.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,j,mt,b.data);else{dt.sort((bt,Mt)=>bt.start-Mt.start);let jt=0;for(let bt=1;bt<dt.length;bt++){const Mt=dt[jt],Ot=dt[bt],Pt=Mt.start+Mt.count,Ft=Rt(Ot.start,b.width,4),fe=Rt(Mt.start,b.width,4);Ot.start<=Pt+1&&Ft===fe&&Rt(Ot.start+Ot.count-1,b.width,4)===Ft?Mt.count=Math.max(Mt.count,Ot.start+Ot.count-Mt.start):(++jt,dt[jt]=Ot)}dt.length=jt+1;const wt=i.getParameter(i.UNPACK_ROW_LENGTH),Qt=i.getParameter(i.UNPACK_SKIP_PIXELS),ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Mt=dt.length;bt<Mt;bt++){const Ot=dt[bt],Pt=Math.floor(Ot.start/4),Ft=Math.ceil(Ot.count/4),fe=Pt%b.width,W=Math.floor(Pt/b.width),Ct=Ft,At=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),n.texSubImage2D(i.TEXTURE_2D,0,fe,W,Ct,At,j,mt,b.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,wt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ne)}}function et(N,b,j){let mt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=i.TEXTURE_3D);const yt=_t(N,b),dt=b.source;n.bindTexture(mt,N.__webglTexture,i.TEXTURE0+j);const jt=s.get(dt);if(dt.version!==jt.__version||yt===!0){n.activeTexture(i.TEXTURE0+j);const wt=Re.getPrimaries(Re.workingColorSpace),Qt=b.colorSpace===Ts?null:Re.getPrimaries(b.colorSpace),ne=b.colorSpace===Ts||wt===Qt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let bt=A(b.image,!1,o.maxTextureSize);bt=Pe(b,bt);const Mt=c.convert(b.format,b.colorSpace),Ot=c.convert(b.type);let Pt=D(b.internalFormat,Mt,Ot,b.colorSpace,b.isVideoTexture);q(mt,b);let Ft;const fe=b.mipmaps,W=b.isVideoTexture!==!0,Ct=jt.__version===void 0||yt===!0,At=dt.dataReady,It=O(b,bt);if(b.isDepthTexture)Pt=L(b.format===lr,b.type),Ct&&(W?n.texStorage2D(i.TEXTURE_2D,1,Pt,bt.width,bt.height):n.texImage2D(i.TEXTURE_2D,0,Pt,bt.width,bt.height,0,Mt,Ot,null));else if(b.isDataTexture)if(fe.length>0){W&&Ct&&n.texStorage2D(i.TEXTURE_2D,It,Pt,fe[0].width,fe[0].height);for(let Et=0,ft=fe.length;Et<ft;Et++)Ft=fe[Et],W?At&&n.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,Mt,Ot,Ft.data):n.texImage2D(i.TEXTURE_2D,Et,Pt,Ft.width,Ft.height,0,Mt,Ot,Ft.data);b.generateMipmaps=!1}else W?(Ct&&n.texStorage2D(i.TEXTURE_2D,It,Pt,bt.width,bt.height),At&&Bt(b,bt,Mt,Ot)):n.texImage2D(i.TEXTURE_2D,0,Pt,bt.width,bt.height,0,Mt,Ot,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ct&&n.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,fe[0].width,fe[0].height,bt.depth);for(let Et=0,ft=fe.length;Et<ft;Et++)if(Ft=fe[Et],b.format!==Xi)if(Mt!==null)if(W){if(At)if(b.layerUpdates.size>0){const Vt=Jx(Ft.width,Ft.height,b.format,b.type);for(const ae of b.layerUpdates){const Ie=Ft.data.subarray(ae*Vt/Ft.data.BYTES_PER_ELEMENT,(ae+1)*Vt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,ae,Ft.width,Ft.height,1,Mt,Ie)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,Mt,Ft.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Pt,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,Mt,Ot,Ft.data):n.texImage3D(i.TEXTURE_2D_ARRAY,Et,Pt,Ft.width,Ft.height,bt.depth,0,Mt,Ot,Ft.data)}else{W&&Ct&&n.texStorage2D(i.TEXTURE_2D,It,Pt,fe[0].width,fe[0].height);for(let Et=0,ft=fe.length;Et<ft;Et++)Ft=fe[Et],b.format!==Xi?Mt!==null?W?At&&n.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,Mt,Ft.data):n.compressedTexImage2D(i.TEXTURE_2D,Et,Pt,Ft.width,Ft.height,0,Ft.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&n.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,Mt,Ot,Ft.data):n.texImage2D(i.TEXTURE_2D,Et,Pt,Ft.width,Ft.height,0,Mt,Ot,Ft.data)}else if(b.isDataArrayTexture)if(W){if(Ct&&n.texStorage3D(i.TEXTURE_2D_ARRAY,It,Pt,bt.width,bt.height,bt.depth),At)if(b.layerUpdates.size>0){const Et=Jx(bt.width,bt.height,b.format,b.type);for(const ft of b.layerUpdates){const Vt=bt.data.subarray(ft*Et/bt.data.BYTES_PER_ELEMENT,(ft+1)*Et/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,bt.width,bt.height,1,Mt,Ot,Vt)}b.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Mt,Ot,bt.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,bt.width,bt.height,bt.depth,0,Mt,Ot,bt.data);else if(b.isData3DTexture)W?(Ct&&n.texStorage3D(i.TEXTURE_3D,It,Pt,bt.width,bt.height,bt.depth),At&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Mt,Ot,bt.data)):n.texImage3D(i.TEXTURE_3D,0,Pt,bt.width,bt.height,bt.depth,0,Mt,Ot,bt.data);else if(b.isFramebufferTexture){if(Ct)if(W)n.texStorage2D(i.TEXTURE_2D,It,Pt,bt.width,bt.height);else{let Et=bt.width,ft=bt.height;for(let Vt=0;Vt<It;Vt++)n.texImage2D(i.TEXTURE_2D,Vt,Pt,Et,ft,0,Mt,Ot,null),Et>>=1,ft>>=1}}else if(fe.length>0){if(W&&Ct){const Et=Yt(fe[0]);n.texStorage2D(i.TEXTURE_2D,It,Pt,Et.width,Et.height)}for(let Et=0,ft=fe.length;Et<ft;Et++)Ft=fe[Et],W?At&&n.texSubImage2D(i.TEXTURE_2D,Et,0,0,Mt,Ot,Ft):n.texImage2D(i.TEXTURE_2D,Et,Pt,Mt,Ot,Ft);b.generateMipmaps=!1}else if(W){if(Ct){const Et=Yt(bt);n.texStorage2D(i.TEXTURE_2D,It,Pt,Et.width,Et.height)}At&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ot,bt)}else n.texImage2D(i.TEXTURE_2D,0,Pt,Mt,Ot,bt);S(b)&&x(mt),jt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function xt(N,b,j){if(b.image.length!==6)return;const mt=_t(N,b),yt=b.source;n.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);const dt=s.get(yt);if(yt.version!==dt.__version||mt===!0){n.activeTexture(i.TEXTURE0+j);const jt=Re.getPrimaries(Re.workingColorSpace),wt=b.colorSpace===Ts?null:Re.getPrimaries(b.colorSpace),Qt=b.colorSpace===Ts||jt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ne=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let ft=0;ft<6;ft++)!ne&&!bt?Mt[ft]=A(b.image[ft],!0,o.maxCubemapSize):Mt[ft]=bt?b.image[ft].image:b.image[ft],Mt[ft]=Pe(b,Mt[ft]);const Ot=Mt[0],Pt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type),fe=D(b.internalFormat,Pt,Ft,b.colorSpace),W=b.isVideoTexture!==!0,Ct=dt.__version===void 0||mt===!0,At=yt.dataReady;let It=O(b,Ot);q(i.TEXTURE_CUBE_MAP,b);let Et;if(ne){W&&Ct&&n.texStorage2D(i.TEXTURE_CUBE_MAP,It,fe,Ot.width,Ot.height);for(let ft=0;ft<6;ft++){Et=Mt[ft].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];b.format!==Xi?Pt!==null?W?At&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,ae.width,ae.height,Pt,ae.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,fe,ae.width,ae.height,0,ae.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,ae.width,ae.height,Pt,Ft,ae.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,fe,ae.width,ae.height,0,Pt,Ft,ae.data)}}}else{if(Et=b.mipmaps,W&&Ct){Et.length>0&&It++;const ft=Yt(Mt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,It,fe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(bt){W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Mt[ft].width,Mt[ft].height,Pt,Ft,Mt[ft].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,fe,Mt[ft].width,Mt[ft].height,0,Pt,Ft,Mt[ft].data);for(let Vt=0;Vt<Et.length;Vt++){const Ie=Et[Vt].image[ft].image;W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,Ie.width,Ie.height,Pt,Ft,Ie.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,fe,Ie.width,Ie.height,0,Pt,Ft,Ie.data)}}else{W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Pt,Ft,Mt[ft]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,fe,Pt,Ft,Mt[ft]);for(let Vt=0;Vt<Et.length;Vt++){const ae=Et[Vt];W?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,Pt,Ft,ae.image[ft]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,fe,Pt,Ft,ae.image[ft])}}}S(b)&&x(i.TEXTURE_CUBE_MAP),dt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Tt(N,b,j,mt,yt,dt){const jt=c.convert(j.format,j.colorSpace),wt=c.convert(j.type),Qt=D(j.internalFormat,jt,wt,j.colorSpace),ne=s.get(b),bt=s.get(j);if(bt.__renderTarget=b,!ne.__hasExternalTextures){const Mt=Math.max(1,b.width>>dt),Ot=Math.max(1,b.height>>dt);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?n.texImage3D(yt,dt,Qt,Mt,Ot,b.depth,0,jt,wt,null):n.texImage2D(yt,dt,Qt,Mt,Ot,0,jt,wt,null)}n.bindFramebuffer(i.FRAMEBUFFER,N),Ke(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,yt,bt.__webglTexture,0,G(b)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,yt,bt.__webglTexture,dt),n.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(N,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){const mt=b.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,dt=L(b.stencilBuffer,yt),jt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ke(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(b),dt,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(b),dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,dt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,jt,i.RENDERBUFFER,N)}else{const mt=b.textures;for(let yt=0;yt<mt.length;yt++){const dt=mt[yt],jt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),Qt=D(dt.internalFormat,jt,wt,dt.colorSpace);Ke(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G(b),Qt,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,G(b),Qt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Qt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(N,b,j){const mt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(b.depthTexture);if(yt.__renderTarget=b,(!yt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),yt.__webglTexture===void 0){yt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,yt.__webglTexture),q(i.TEXTURE_CUBE_MAP,b.depthTexture);const ne=c.convert(b.depthTexture.format),bt=c.convert(b.depthTexture.type);let Mt;b.depthTexture.format===ka?Mt=i.DEPTH_COMPONENT24:b.depthTexture.format===lr&&(Mt=i.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Mt,b.width,b.height,0,ne,bt,null)}}else Q(b.depthTexture,0);const dt=yt.__webglTexture,jt=G(b),wt=mt?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,Qt=b.depthTexture.format===lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ka)Ke(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Qt,wt,dt,0,jt):i.framebufferTexture2D(i.FRAMEBUFFER,Qt,wt,dt,0);else if(b.depthTexture.format===lr)Ke(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Qt,wt,dt,0,jt):i.framebufferTexture2D(i.FRAMEBUFFER,Qt,wt,dt,0);else throw new Error("Unknown depthTexture format")}function ee(N){const b=s.get(N),j=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=mt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let mt=0;mt<6;mt++)Jt(b.__webglFramebuffer[mt],N,mt);else{const mt=N.texture.mipmaps;mt&&mt.length>0?Jt(b.__webglFramebuffer[0],N,0):Jt(b.__webglFramebuffer,N,0)}else if(j){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(n.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=i.createRenderbuffer(),Wt(b.__webglDepthbuffer[mt],N,!1);else{const yt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,dt)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?n.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Wt(b.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,dt)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function en(N,b,j){const mt=s.get(N);b!==void 0&&Tt(mt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ee(N)}function ye(N){const b=N.texture,j=s.get(N),mt=s.get(b);N.addEventListener("dispose",B);const yt=N.textures,dt=N.isWebGLCubeRenderTarget===!0,jt=yt.length>1;if(jt||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=b.version,u.memory.textures++),dt){j.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[wt]=[];for(let Qt=0;Qt<b.mipmaps.length;Qt++)j.__webglFramebuffer[wt][Qt]=i.createFramebuffer()}else j.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)j.__webglFramebuffer[wt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(jt)for(let wt=0,Qt=yt.length;wt<Qt;wt++){const ne=s.get(yt[wt]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),u.memory.textures++)}if(N.samples>0&&Ke(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const Qt=yt[wt];j.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[wt]);const ne=c.convert(Qt.format,Qt.colorSpace),bt=c.convert(Qt.type),Mt=D(Qt.internalFormat,ne,bt,Qt.colorSpace,N.isXRRenderTarget===!0),Ot=G(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Mt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,j.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(j.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){n.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),q(i.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Tt(j.__webglFramebuffer[wt][Qt],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Qt);else Tt(j.__webglFramebuffer[wt],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(b)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let wt=0,Qt=yt.length;wt<Qt;wt++){const ne=yt[wt],bt=s.get(ne);let Mt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Mt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Mt,bt.__webglTexture),q(Mt,ne),Tt(j.__webglFramebuffer,N,ne,i.COLOR_ATTACHMENT0+wt,Mt,0),S(ne)&&x(Mt)}n.unbindTexture()}else{let wt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(wt,mt.__webglTexture),q(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Qt=0;Qt<b.mipmaps.length;Qt++)Tt(j.__webglFramebuffer[Qt],N,b,i.COLOR_ATTACHMENT0,wt,Qt);else Tt(j.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,wt,0);S(b)&&x(wt),n.unbindTexture()}N.depthBuffer&&ee(N)}function ve(N){const b=N.textures;for(let j=0,mt=b.length;j<mt;j++){const yt=b[j];if(S(yt)){const dt=C(N),jt=s.get(yt).__webglTexture;n.bindTexture(dt,jt),x(dt),n.unbindTexture()}}}const Ue=[],ce=[];function $e(N){if(N.samples>0){if(Ke(N)===!1){const b=N.textures,j=N.width,mt=N.height;let yt=i.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,jt=s.get(N),wt=b.length>1;if(wt)for(let ne=0;ne<b.length;ne++)n.bindFramebuffer(i.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Qt=N.texture.mipmaps;Qt&&Qt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ne=0;ne<b.length;ne++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,jt.__webglColorRenderbuffer[ne]);const bt=s.get(b[ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,j,mt,0,0,j,mt,yt,i.NEAREST),m===!0&&(Ue.length=0,ce.length=0,Ue.push(i.COLOR_ATTACHMENT0+ne),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ue.push(dt),ce.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let ne=0;ne<b.length;ne++){n.bindFramebuffer(i.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,jt.__webglColorRenderbuffer[ne]);const bt=s.get(b[ne]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,bt,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function G(N){return Math.min(o.maxSamples,N.samples)}function Ke(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(N){const b=u.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Pe(N,b){const j=N.colorSpace,mt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Eo&&j!==Ts&&(Re.getTransfer(j)===Ve?(mt!==Xi||yt!==bi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",j)),b}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=nt,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=I,this.setTextureCube=st,this.rebindTextures=en,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function A3(i,t){function n(s,o=Ts){let c;const u=Re.getTransfer(o);if(s===bi)return i.UNSIGNED_BYTE;if(s===Qm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Jm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===$S)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===tM)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===QS)return i.BYTE;if(s===JS)return i.SHORT;if(s===zl)return i.UNSIGNED_SHORT;if(s===Zm)return i.INT;if(s===ca)return i.UNSIGNED_INT;if(s===ki)return i.FLOAT;if(s===Ga)return i.HALF_FLOAT;if(s===eM)return i.ALPHA;if(s===nM)return i.RGB;if(s===Xi)return i.RGBA;if(s===ka)return i.DEPTH_COMPONENT;if(s===lr)return i.DEPTH_STENCIL;if(s===iM)return i.RED;if(s===$m)return i.RED_INTEGER;if(s===Mo)return i.RG;if(s===tg)return i.RG_INTEGER;if(s===eg)return i.RGBA_INTEGER;if(s===Xu||s===Wu||s===ju||s===qu)if(u===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Xu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ju)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Xu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ju)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kp||s===Xp||s===Wp||s===jp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===kp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qp||s===Yp||s===Kp||s===Zp||s===Qp||s===Jp||s===$p)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qp||s===Yp)return u===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Kp)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Zp)return c.COMPRESSED_R11_EAC;if(s===Qp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Jp)return c.COMPRESSED_RG11_EAC;if(s===$p)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um||s===fm||s===hm||s===dm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===tm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===em)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===im)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===am)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===om)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===um)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dm)return u===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pm||s===mm||s===gm)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===pm)return u===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vm||s===_m||s===xm||s===ym)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===vm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===_m)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ym)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vl?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const R3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new pM(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new ua({vertexShader:R3,fragmentShader:C3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Vi(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D3 extends Ao{constructor(t,n){super();const s=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new w3,x={},C=n.getContextAttributes();let D=null,L=null;const O=[],z=[],B=new ge;let T=null;const U=new Hi;U.viewport=new ln;const lt=new Hi;lt.viewport=new ln;const H=[U,lt],Z=new GA;let nt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let xt=O[et];return xt===void 0&&(xt=new Xd,O[et]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(et){let xt=O[et];return xt===void 0&&(xt=new Xd,O[et]=xt),xt.getGripSpace()},this.getHand=function(et){let xt=O[et];return xt===void 0&&(xt=new Xd,O[et]=xt),xt.getHandSpace()};function Q(et){const xt=z.indexOf(et.inputSource);if(xt===-1)return;const Tt=O[xt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,d||u),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",I);for(let et=0;et<O.length;et++){const xt=z[et];xt!==null&&(z[et]=null,O[et].disconnect(xt))}nt=null,ut=null,S.reset();for(const et in x)delete x[et];t.setRenderTarget(D),y=null,v=null,_=null,o=null,L=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(et){if(o=et,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",P),o.addEventListener("inputsourceschange",I),C.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Wt=null,Jt=null;C.depth&&(Jt=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=C.stencil?lr:ka,Wt=C.stencil?Vl:ca);const ee={colorFormat:n.RGBA8,depthFormat:Jt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ee),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Wi(v.textureWidth,v.textureHeight,{format:Xi,type:bi,depthTexture:new Hl(v.textureWidth,v.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Tt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Xi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Bt.setContext(o),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function I(et){for(let xt=0;xt<et.removed.length;xt++){const Tt=et.removed[xt],Wt=z.indexOf(Tt);Wt>=0&&(z[Wt]=null,O[Wt].disconnect(Tt))}for(let xt=0;xt<et.added.length;xt++){const Tt=et.added[xt];let Wt=z.indexOf(Tt);if(Wt===-1){for(let ee=0;ee<O.length;ee++)if(ee>=z.length){z.push(Tt),Wt=ee;break}else if(z[ee]===null){z[ee]=Tt,Wt=ee;break}if(Wt===-1)break}const Jt=O[Wt];Jt&&Jt.connect(Tt)}}const st=new at,ht=new at;function St(et,xt,Tt){st.setFromMatrixPosition(xt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const Wt=st.distanceTo(ht),Jt=xt.projectionMatrix.elements,ee=Tt.projectionMatrix.elements,en=Jt[14]/(Jt[10]-1),ye=Jt[14]/(Jt[10]+1),ve=(Jt[9]+1)/Jt[5],Ue=(Jt[9]-1)/Jt[5],ce=(Jt[8]-1)/Jt[0],$e=(ee[8]+1)/ee[0],G=en*ce,Ke=en*$e,Te=Wt/(-ce+$e),Pe=Te*-ce;if(xt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Pe),et.translateZ(Te),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Jt[10]===-1)et.projectionMatrix.copy(xt.projectionMatrix),et.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Yt=en+Te,N=ye+Te,b=G-Pe,j=Ke+(Wt-Pe),mt=ve*ye/N*Yt,yt=Ue*ye/N*Yt;et.projectionMatrix.makePerspective(b,j,mt,yt,Yt,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function F(et,xt){xt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(xt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(o===null)return;let xt=et.near,Tt=et.far;S.texture!==null&&(S.depthNear>0&&(xt=S.depthNear),S.depthFar>0&&(Tt=S.depthFar)),Z.near=lt.near=U.near=xt,Z.far=lt.far=U.far=Tt,(nt!==Z.near||ut!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),nt=Z.near,ut=Z.far),Z.layers.mask=et.layers.mask|6,U.layers.mask=Z.layers.mask&-5,lt.layers.mask=Z.layers.mask&-3;const Wt=et.parent,Jt=Z.cameras;F(Z,Wt);for(let ee=0;ee<Jt.length;ee++)F(Jt[ee],Wt);Jt.length===2?St(Z,U,lt):Z.projectionMatrix.copy(U.projectionMatrix),q(et,Z,Wt)};function q(et,xt,Tt){Tt===null?et.matrix.copy(xt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(xt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(xt.projectionMatrix),et.projectionMatrixInverse.copy(xt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Sm*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(et){m=et,v!==null&&(v.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(et){return x[et]};let _t=null;function Rt(et,xt){if(g=xt.getViewerPose(d||u),E=xt,g!==null){const Tt=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Wt=!1;Tt.length!==Z.cameras.length&&(Z.cameras.length=0,Wt=!0);for(let ye=0;ye<Tt.length;ye++){const ve=Tt[ye];let Ue=null;if(y!==null)Ue=y.getViewport(ve);else{const $e=_.getViewSubImage(v,ve);Ue=$e.viewport,ye===0&&(t.setRenderTargetTextures(L,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(L))}let ce=H[ye];ce===void 0&&(ce=new Hi,ce.layers.enable(ye),ce.viewport=new ln,H[ye]=ce),ce.matrix.fromArray(ve.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ye===0&&(Z.matrix.copy(ce.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Wt===!0&&Z.cameras.push(ce)}const Jt=o.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const ye=_.getDepthInformation(Tt[0]);ye&&ye.isValid&&ye.texture&&S.init(ye,o.renderState)}if(Jt&&Jt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let ye=0;ye<Tt.length;ye++){const ve=Tt[ye].camera;if(ve){let Ue=x[ve];Ue||(Ue=new pM,x[ve]=Ue);const ce=_.getCameraImage(ve);Ue.sourceTexture=ce}}}}for(let Tt=0;Tt<O.length;Tt++){const Wt=z[Tt],Jt=O[Tt];Wt!==null&&Jt!==void 0&&Jt.update(Wt,xt,d||u)}_t&&_t(et,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),E=null}const Bt=new vM;Bt.setAnimationLoop(Rt),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const er=new Xa,L3=new cn;function U3(i,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,mM(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,C,D,L){x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,L)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),A(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,C,D):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ei&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ei&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const C=t.get(x),D=C.envMap,L=C.envMapRotation;D&&(S.envMap.value=D,er.copy(L),er.x*=-1,er.y*=-1,er.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),S.envMapRotation.value.setFromMatrix4(L3.makeRotationFromEuler(er)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,C,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*C,S.scale.value=D*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,C){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const C=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function N3(i,t,n,s){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,D){const L=D.program;s.uniformBlockBinding(C,L)}function d(C,D){let L=o[C.id];L===void 0&&(E(C),L=g(C),o[C.id]=L,C.addEventListener("dispose",S));const O=D.program;s.updateUBOMapping(C,O);const z=t.render.frame;c[C.id]!==z&&(v(C),c[C.id]=z)}function g(C){const D=_();C.__bindingPointIndex=D;const L=i.createBuffer(),O=C.__size,z=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,z),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,L),L}function _(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const D=o[C.id],L=C.uniforms,O=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let z=0,B=L.length;z<B;z++){const T=Array.isArray(L[z])?L[z]:[L[z]];for(let U=0,lt=T.length;U<lt;U++){const H=T[U];if(y(H,z,U,O)===!0){const Z=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let Q=0;Q<nt.length;Q++){const P=nt[Q],I=A(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,Z+ut,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ut),ut+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(C,D,L,O){const z=C.value,B=D+"_"+L;if(O[B]===void 0)return typeof z=="number"||typeof z=="boolean"?O[B]=z:O[B]=z.clone(),!0;{const T=O[B];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return O[B]=z,!0}else if(T.equals(z)===!1)return T.copy(z),!0}return!1}function E(C){const D=C.uniforms;let L=0;const O=16;for(let B=0,T=D.length;B<T;B++){const U=Array.isArray(D[B])?D[B]:[D[B]];for(let lt=0,H=U.length;lt<H;lt++){const Z=U[lt],nt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,Q=nt.length;ut<Q;ut++){const P=nt[ut],I=A(P),st=L%O,ht=st%I.boundary,St=st+ht;L+=ht,St!==0&&O-St<I.storage&&(L+=O-St),Z.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=I.storage}}}const z=L%O;return z>0&&(L+=O-z),C.__size=L,C.__cache={},this}function A(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",C),D}function S(C){const D=C.target;D.removeEventListener("dispose",S);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),i.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const C in o)i.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:d,dispose:x}}const P3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function O3(){return ia===null&&(ia=new RA(P3,16,16,Mo,Ga),ia.name="DFG_LUT",ia.minFilter=In,ia.magFilter=In,ia.wrapS=za,ia.wrapT=za,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class F3{constructor(t={}){const{canvas:n=sA(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=bi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const A=y,S=new Set([eg,tg,$m]),x=new Set([bi,ca,zl,Vl,Qm,Jm]),C=new Uint32Array(4),D=new Int32Array(4);let L=null,O=null;const z=[],B=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let lt=!1;this._outputColorSpace=Ei;let H=0,Z=0,nt=null,ut=-1,Q=null;const P=new ln,I=new ln;let st=null;const ht=new He(0);let St=0,F=n.width,q=n.height,_t=1,Rt=null,Bt=null;const et=new ln(0,0,F,q),xt=new ln(0,0,F,q);let Tt=!1;const Wt=new hM;let Jt=!1,ee=!1;const en=new cn,ye=new at,ve=new ln,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function $e(){return nt===null?_t:1}let G=s;function Ke(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Km}`),n.addEventListener("webglcontextlost",Vt,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),G===null){const X="webgl2";if(G=Ke(X,w),G===null)throw Ke(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Le("WebGLRenderer: "+w.message),w}let Te,Pe,Yt,N,b,j,mt,yt,dt,jt,wt,Qt,ne,bt,Mt,Ot,Pt,Ft,fe,W,Ct,At,It;function Et(){Te=new Fw(G),Te.init(),Ct=new A3(G,Te),Pe=new Cw(G,Te,t,Ct),Yt=new b3(G,Te),Pe.reversedDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),N=new zw(G),b=new u3,j=new T3(G,Te,Yt,b,Pe,Ct,N),mt=new Ow(U),yt=new XA(G),At=new Aw(G,yt),dt=new Iw(G,yt,N,At),jt=new Hw(G,dt,yt,At,N),Ft=new Vw(G,Pe,j),Mt=new ww(b),wt=new c3(U,mt,Te,Pe,At,Mt),Qt=new U3(U,b),ne=new h3,bt=new _3(Te),Pt=new Tw(U,mt,Yt,jt,E,m),Ot=new E3(U,jt,Pe),It=new N3(G,N,Pe,Yt),fe=new Rw(G,Te,N),W=new Bw(G,Te,N),N.programs=wt.programs,U.capabilities=Pe,U.extensions=Te,U.properties=b,U.renderLists=ne,U.shadowMap=Ot,U.state=Yt,U.info=N}Et(),A!==bi&&(T=new kw(A,n.width,n.height,o,c));const ft=new D3(U,G);this.xr=ft,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(F,q,!1))},this.getSize=function(w){return w.set(F,q)},this.setSize=function(w,X,ot=!0){if(ft.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,q=X,n.width=Math.floor(w*_t),n.height=Math.floor(X*_t),ot===!0&&(n.style.width=w+"px",n.style.height=X+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(F*_t,q*_t).floor()},this.setDrawingBufferSize=function(w,X,ot){F=w,q=X,_t=ot,n.width=Math.floor(w*ot),n.height=Math.floor(X*ot),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(A===bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,X,ot,tt){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,X,ot,tt),Yt.viewport(P.copy(et).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(xt)},this.setScissor=function(w,X,ot,tt){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,X,ot,tt),Yt.scissor(I.copy(xt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(w){Yt.setScissorTest(Tt=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){Bt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,ot=!0){let tt=0;if(w){let K=!1;if(nt!==null){const Dt=nt.texture.format;K=S.has(Dt)}if(K){const Dt=nt.texture.type,zt=x.has(Dt),Ut=Pt.getClearColor(),qt=Pt.getClearAlpha(),Zt=Ut.r,ie=Ut.g,oe=Ut.b;zt?(C[0]=Zt,C[1]=ie,C[2]=oe,C[3]=qt,G.clearBufferuiv(G.COLOR,0,C)):(D[0]=Zt,D[1]=ie,D[2]=oe,D[3]=qt,G.clearBufferiv(G.COLOR,0,D))}else tt|=G.COLOR_BUFFER_BIT}X&&(tt|=G.DEPTH_BUFFER_BIT),ot&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Vt,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Pt.dispose(),ne.dispose(),bt.dispose(),b.dispose(),mt.dispose(),jt.dispose(),At.dispose(),It.dispose(),wt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",pr),ft.removeEventListener("sessionend",mr),Qi.stop()};function Vt(w){w.preventDefault(),Lx("WebGLRenderer: Context Lost."),lt=!0}function ae(){Lx("WebGLRenderer: Context Restored."),lt=!1;const w=N.autoReset,X=Ot.enabled,ot=Ot.autoUpdate,tt=Ot.needsUpdate,K=Ot.type;Et(),N.autoReset=w,Ot.enabled=X,Ot.autoUpdate=ot,Ot.needsUpdate=tt,Ot.type=K}function Ie(w){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const X=w.target;X.removeEventListener("dispose",Ae),zn(X)}function zn(w){Ci(w),b.remove(w)}function Ci(w){const X=b.get(w).programs;X!==void 0&&(X.forEach(function(ot){wt.releaseProgram(ot)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,ot,tt,K,Dt){X===null&&(X=Ue);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Ut=ac(w,X,ot,tt,K);Yt.setMaterial(tt,zt);let qt=ot.index,Zt=1;if(tt.wireframe===!0){if(qt=dt.getWireframeAttribute(ot),qt===void 0)return;Zt=2}const ie=ot.drawRange,oe=ot.attributes.position;let Ht=ie.start*Zt,he=(ie.start+ie.count)*Zt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*Zt),he=Math.min(he,(Dt.start+Dt.count)*Zt)),qt!==null?(Ht=Math.max(Ht,0),he=Math.min(he,qt.count)):oe!=null&&(Ht=Math.max(Ht,0),he=Math.min(he,oe.count));const Ze=he-Ht;if(Ze<0||Ze===1/0)return;At.setup(K,tt,Ut,ot,qt);let Qe,Ce=fe;if(qt!==null&&(Qe=yt.get(qt),Ce=W,Ce.setIndex(Qe)),K.isMesh)tt.wireframe===!0?(Yt.setLineWidth(tt.wireframeLinewidth*$e()),Ce.setMode(G.LINES)):Ce.setMode(G.TRIANGLES);else if(K.isLine){let yn=tt.linewidth;yn===void 0&&(yn=1),Yt.setLineWidth(yn*$e()),K.isLineSegments?Ce.setMode(G.LINES):K.isLineLoop?Ce.setMode(G.LINE_LOOP):Ce.setMode(G.LINE_STRIP)}else K.isPoints?Ce.setMode(G.POINTS):K.isSprite&&Ce.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)rf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const yn=K._multiDrawStarts,kt=K._multiDrawCounts,Vn=K._multiDrawCount,re=qt?yt.get(qt).bytesPerElement:1,Hn=b.get(tt).currentProgram.getUniforms();for(let ii=0;ii<Vn;ii++)Hn.setValue(G,"_gl_DrawID",ii),Ce.render(yn[ii]/re,kt[ii])}else if(K.isInstancedMesh)Ce.renderInstances(Ht,Ze,K.count);else if(ot.isInstancedBufferGeometry){const yn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,kt=Math.min(ot.instanceCount,yn);Ce.renderInstances(Ht,Ze,kt)}else Ce.render(Ht,Ze)};function Uo(w,X,ot){w.transparent===!0&&w.side===Ba&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,ja(w,X,ot),w.side=Cs,w.needsUpdate=!0,ja(w,X,ot),w.side=Ba):ja(w,X,ot)}this.compile=function(w,X,ot=null){ot===null&&(ot=w),O=bt.get(ot),O.init(X),B.push(O),ot.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(O.pushLight(K),K.castShadow&&O.pushShadow(K))}),w!==ot&&w.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(O.pushLight(K),K.castShadow&&O.pushShadow(K))}),O.setupLights();const tt=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Ut=Dt[zt];Uo(Ut,ot,K),tt.add(Ut)}else Uo(Dt,ot,K),tt.add(Dt)}),O=B.pop(),tt},this.compileAsync=function(w,X,ot=null){const tt=this.compile(w,X,ot);return new Promise(K=>{function Dt(){if(tt.forEach(function(zt){b.get(zt).currentProgram.isReady()&&tt.delete(zt)}),tt.size===0){K(w);return}setTimeout(Dt,10)}Te.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let dr=null;function ec(w){dr&&dr(w)}function pr(){Qi.stop()}function mr(){Qi.start()}const Qi=new vM;Qi.setAnimationLoop(ec),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(w){dr=w,ft.setAnimationLoop(w),w===null?Qi.stop():Qi.start()},ft.addEventListener("sessionstart",pr),ft.addEventListener("sessionend",mr),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(lt===!0)return;const ot=ft.enabled===!0&&ft.isPresenting===!0,tt=T!==null&&(nt===null||ot)&&T.begin(U,nt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,X,nt),O=bt.get(w,B.length),O.init(X),B.push(O),en.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Wt.setFromProjectionMatrix(en,ra,X.reversedDepth),ee=this.localClippingEnabled,Jt=Mt.init(this.clippingPlanes,ee),L=ne.get(w,z.length),L.init(),z.push(L),ft.enabled===!0&&ft.isPresenting===!0){const zt=U.xr.getDepthSensingMesh();zt!==null&&gr(zt,X,-1/0,U.sortObjects)}gr(w,X,0,U.sortObjects),L.finish(),U.sortObjects===!0&&L.sort(Rt,Bt),ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ce&&Pt.addToRenderList(L,w),this.info.render.frame++,Jt===!0&&Mt.beginShadows();const K=O.state.shadowsArray;if(Ot.render(K,w,X),Jt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&T.hasRenderPass())===!1){const zt=L.opaque,Ut=L.transmissive;if(O.setupLights(),X.isArrayCamera){const qt=X.cameras;if(Ut.length>0)for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt];un(zt,Ut,w,oe)}ce&&Pt.render(w);for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt];wi(L,w,oe,oe.viewport)}}else Ut.length>0&&un(zt,Ut,w,X),ce&&Pt.render(w),wi(L,w,X)}nt!==null&&Z===0&&(j.updateMultisampleRenderTarget(nt),j.updateRenderTargetMipmap(nt)),tt&&T.end(U),w.isScene===!0&&w.onAfterRender(U,w,X),At.resetDefaultState(),ut=-1,Q=null,B.pop(),B.length>0?(O=B[B.length-1],Jt===!0&&Mt.setGlobalState(U.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function gr(w,X,ot,tt){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)O.pushLight(w),w.castShadow&&O.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Wt.intersectsSprite(w)){tt&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(en);const zt=jt.update(w),Ut=w.material;Ut.visible&&L.push(w,zt,Ut,ot,ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Wt.intersectsObject(w))){const zt=jt.update(w),Ut=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),ve.copy(zt.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(en)),Array.isArray(Ut)){const qt=zt.groups;for(let Zt=0,ie=qt.length;Zt<ie;Zt++){const oe=qt[Zt],Ht=Ut[oe.materialIndex];Ht&&Ht.visible&&L.push(w,zt,Ht,ot,ve.z,oe)}}else Ut.visible&&L.push(w,zt,Ut,ot,ve.z,null)}}const Dt=w.children;for(let zt=0,Ut=Dt.length;zt<Ut;zt++)gr(Dt[zt],X,ot,tt)}function wi(w,X,ot,tt){const{opaque:K,transmissive:Dt,transparent:zt}=w;O.setupLightsView(ot),Jt===!0&&Mt.setGlobalState(U.clippingPlanes,ot),tt&&Yt.viewport(P.copy(tt)),K.length>0&&xn(K,X,ot),Dt.length>0&&xn(Dt,X,ot),zt.length>0&&xn(zt,X,ot),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function un(w,X,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[tt.id]===void 0){const Ht=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[tt.id]=new Wi(1,1,{generateMipmaps:!0,type:Ht?Ga:bi,minFilter:or,samples:Math.max(4,Pe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Dt=O.state.transmissionRenderTarget[tt.id],zt=tt.viewport||P;Dt.setSize(zt.z*U.transmissionResolutionScale,zt.w*U.transmissionResolutionScale);const Ut=U.getRenderTarget(),qt=U.getActiveCubeFace(),Zt=U.getActiveMipmapLevel();U.setRenderTarget(Dt),U.getClearColor(ht),St=U.getClearAlpha(),St<1&&U.setClearColor(16777215,.5),U.clear(),ce&&Pt.render(ot);const ie=U.toneMapping;U.toneMapping=oa;const oe=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),O.setupLightsView(tt),Jt===!0&&Mt.setGlobalState(U.clippingPlanes,tt),xn(w,ot,tt),j.updateMultisampleRenderTarget(Dt),j.updateRenderTargetMipmap(Dt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let he=0,Ze=X.length;he<Ze;he++){const Qe=X[he],{object:Ce,geometry:yn,material:kt,group:Vn}=Qe;if(kt.side===Ba&&Ce.layers.test(tt.layers)){const re=kt.side;kt.side=ei,kt.needsUpdate=!0,ha(Ce,ot,tt,yn,kt,Vn),kt.side=re,kt.needsUpdate=!0,Ht=!0}}Ht===!0&&(j.updateMultisampleRenderTarget(Dt),j.updateRenderTargetMipmap(Dt))}U.setRenderTarget(Ut,qt,Zt),U.setClearColor(ht,St),oe!==void 0&&(tt.viewport=oe),U.toneMapping=ie}function xn(w,X,ot){const tt=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Dt=w.length;K<Dt;K++){const zt=w[K],{object:Ut,geometry:qt,group:Zt}=zt;let ie=zt.material;ie.allowOverride===!0&&tt!==null&&(ie=tt),Ut.layers.test(ot.layers)&&ha(Ut,X,ot,qt,ie,Zt)}}function ha(w,X,ot,tt,K,Dt){w.onBeforeRender(U,X,ot,tt,K,Dt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(U,X,ot,tt,w,Dt),K.transparent===!0&&K.side===Ba&&K.forceSinglePass===!1?(K.side=ei,K.needsUpdate=!0,U.renderBufferDirect(ot,X,tt,K,w,Dt),K.side=Cs,K.needsUpdate=!0,U.renderBufferDirect(ot,X,tt,K,w,Dt),K.side=Ba):U.renderBufferDirect(ot,X,tt,K,w,Dt),w.onAfterRender(U,X,ot,tt,K,Dt)}function ja(w,X,ot){X.isScene!==!0&&(X=Ue);const tt=b.get(w),K=O.state.lights,Dt=O.state.shadowsArray,zt=K.state.version,Ut=wt.getParameters(w,K.state,Dt,X,ot),qt=wt.getProgramCacheKey(Ut);let Zt=tt.programs;tt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,tt.fog=X.fog;const ie=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;tt.envMap=mt.get(w.envMap||tt.environment,ie),tt.envMapRotation=tt.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Zt===void 0&&(w.addEventListener("dispose",Ae),Zt=new Map,tt.programs=Zt);let oe=Zt.get(qt);if(oe!==void 0){if(tt.currentProgram===oe&&tt.lightsStateVersion===zt)return ic(w,Ut),oe}else Ut.uniforms=wt.getUniforms(w),w.onBeforeCompile(Ut,U),oe=wt.acquireProgram(Ut,qt),Zt.set(qt,oe),tt.uniforms=Ut.uniforms;const Ht=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=Mt.uniform),ic(w,Ut),tt.needsLights=No(w),tt.lightsStateVersion=zt,tt.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),tt.currentProgram=oe,tt.uniformsList=null,oe}function nc(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Yu.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function ic(w,X){const ot=b.get(w);ot.outputColorSpace=X.outputColorSpace,ot.batching=X.batching,ot.batchingColor=X.batchingColor,ot.instancing=X.instancing,ot.instancingColor=X.instancingColor,ot.instancingMorph=X.instancingMorph,ot.skinning=X.skinning,ot.morphTargets=X.morphTargets,ot.morphNormals=X.morphNormals,ot.morphColors=X.morphColors,ot.morphTargetsCount=X.morphTargetsCount,ot.numClippingPlanes=X.numClippingPlanes,ot.numIntersection=X.numClipIntersection,ot.vertexAlphas=X.vertexAlphas,ot.vertexTangents=X.vertexTangents,ot.toneMapping=X.toneMapping}function ac(w,X,ot,tt,K){X.isScene!==!0&&(X=Ue),j.resetTextureUnits();const Dt=X.fog,zt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?X.environment:null,Ut=nt===null?U.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Eo,qt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Zt=mt.get(tt.envMap||zt,qt),ie=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,oe=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ht=!!ot.morphAttributes.position,he=!!ot.morphAttributes.normal,Ze=!!ot.morphAttributes.color;let Qe=oa;tt.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Qe=U.toneMapping);const Ce=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,yn=Ce!==void 0?Ce.length:0,kt=b.get(tt),Vn=O.state.lights;if(Jt===!0&&(ee===!0||w!==Q)){const hn=w===Q&&tt.id===ut;Mt.setState(tt,w,hn)}let re=!1;tt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Vn.state.version||kt.outputColorSpace!==Ut||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==Zt||tt.fog===!0&&kt.fog!==Dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Mt.numPlanes||kt.numIntersection!==Mt.numIntersection)||kt.vertexAlphas!==ie||kt.vertexTangents!==oe||kt.morphTargets!==Ht||kt.morphNormals!==he||kt.morphColors!==Ze||kt.toneMapping!==Qe||kt.morphTargetsCount!==yn)&&(re=!0):(re=!0,kt.__version=tt.version);let Hn=kt.currentProgram;re===!0&&(Hn=ja(tt,X,K));let ii=!1,Di=!1,ai=!1;const Oe=Hn.getUniforms(),fn=kt.uniforms;if(Yt.useProgram(Hn.program)&&(ii=!0,Di=!0,ai=!0),tt.id!==ut&&(ut=tt.id,Di=!0),ii||Q!==w){Yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",w.projectionMatrix),Oe.setValue(G,"viewMatrix",w.matrixWorldInverse);const Li=Oe.map.cameraPosition;Li!==void 0&&Li.setValue(G,ye.setFromMatrixPosition(w.matrixWorld)),Pe.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Di=!0,ai=!0)}if(kt.needsLights&&(Vn.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",Vn.state.directionalShadowMap,j),Vn.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",Vn.state.spotShadowMap,j),Vn.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",Vn.state.pointShadowMap,j)),K.isSkinnedMesh){Oe.setOptional(G,K,"bindMatrix"),Oe.setOptional(G,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Oe.setValue(G,"boneTexture",hn.boneTexture,j))}K.isBatchedMesh&&(Oe.setOptional(G,K,"batchingTexture"),Oe.setValue(G,"batchingTexture",K._matricesTexture,j),Oe.setOptional(G,K,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",K._indirectTexture,j),Oe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",K._colorsTexture,j));const Gn=ot.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Ft.update(K,ot,Hn),(Di||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Oe.setValue(G,"receiveShadow",K.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&X.environment!==null&&(fn.envMapIntensity.value=X.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=O3()),Di&&(Oe.setValue(G,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&Ls(fn,ai),Dt&&tt.fog===!0&&Qt.refreshFogUniforms(fn,Dt),Qt.refreshMaterialUniforms(fn,tt,_t,q,O.state.transmissionRenderTarget[w.id]),Yu.upload(G,nc(kt),fn,j)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Yu.upload(G,nc(kt),fn,j),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Oe.setValue(G,"center",K.center),Oe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Oe.setValue(G,"normalMatrix",K.normalMatrix),Oe.setValue(G,"modelMatrix",K.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const hn=tt.uniformsGroups;for(let Li=0,da=hn.length;Li<da;Li++){const vr=hn[Li];It.update(vr,Hn),It.bind(vr,Hn)}}return Hn}function Ls(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function No(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(w,X,ot){const tt=b.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=X,b.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const ot=b.get(w);ot.__webglFramebuffer=X,ot.__useDefaultFramebuffer=X===void 0};const qa=G.createFramebuffer();this.setRenderTarget=function(w,X=0,ot=0){nt=w,H=X,Z=ot;let tt=null,K=!1,Dt=!1;if(w){const Ut=b.get(w);if(Ut.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Ut.__webglFramebuffer),P.copy(w.viewport),I.copy(w.scissor),st=w.scissorTest,Yt.viewport(P),Yt.scissor(I),Yt.setScissorTest(st),ut=-1;return}else if(Ut.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(Ut.__hasExternalTextures)j.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(Ut.__boundDepthTexture!==ie){if(ie!==null&&b.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}const qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Dt=!0);const Zt=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Zt[X])?tt=Zt[X][ot]:tt=Zt[X],K=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?tt=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Zt)?tt=Zt[ot]:tt=Zt,P.copy(w.viewport),I.copy(w.scissor),st=w.scissorTest}else P.copy(et).multiplyScalar(_t).floor(),I.copy(xt).multiplyScalar(_t).floor(),st=Tt;if(ot!==0&&(tt=qa),Yt.bindFramebuffer(G.FRAMEBUFFER,tt)&&Yt.drawBuffers(w,tt),Yt.viewport(P),Yt.scissor(I),Yt.setScissorTest(st),K){const Ut=b.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,ot)}else if(Dt){const Ut=X;for(let qt=0;qt<w.textures.length;qt++){const Zt=b.get(w.textures[qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,ot,Ut)}}else if(w!==null&&ot!==0){const Ut=b.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ut.__webglTexture,ot)}ut=-1},this.readRenderTargetPixels=function(w,X,ot,tt,K,Dt,zt,Ut=0){if(!(w&&w.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(qt=qt[zt]),qt){Yt.bindFramebuffer(G.FRAMEBUFFER,qt);try{const Zt=w.textures[Ut],ie=Zt.format,oe=Zt.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ut),!Pe.textureFormatReadable(ie)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(oe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-tt&&ot>=0&&ot<=w.height-K&&G.readPixels(X,ot,tt,K,Ct.convert(ie),Ct.convert(oe),Dt)}finally{const Zt=nt!==null?b.get(nt).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(w,X,ot,tt,K,Dt,zt,Ut=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(qt=qt[zt]),qt)if(X>=0&&X<=w.width-tt&&ot>=0&&ot<=w.height-K){Yt.bindFramebuffer(G.FRAMEBUFFER,qt);const Zt=w.textures[Ut],ie=Zt.format,oe=Zt.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ut),!Pe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(X,ot,tt,K,Ct.convert(ie),Ct.convert(oe),0);const he=nt!==null?b.get(nt).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,he);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await rA(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(Ht),G.deleteSync(Ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,ot=0){const tt=Math.pow(2,-ot),K=Math.floor(w.image.width*tt),Dt=Math.floor(w.image.height*tt),zt=X!==null?X.x:0,Ut=X!==null?X.y:0;j.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,zt,Ut,K,Dt),Yt.unbindTexture()};const Ya=G.createFramebuffer(),Us=G.createFramebuffer();this.copyTextureToTexture=function(w,X,ot=null,tt=null,K=0,Dt=0){let zt,Ut,qt,Zt,ie,oe,Ht,he,Ze;const Qe=w.isCompressedTexture?w.mipmaps[Dt]:w.image;if(ot!==null)zt=ot.max.x-ot.min.x,Ut=ot.max.y-ot.min.y,qt=ot.isBox3?ot.max.z-ot.min.z:1,Zt=ot.min.x,ie=ot.min.y,oe=ot.isBox3?ot.min.z:0;else{const fn=Math.pow(2,-K);zt=Math.floor(Qe.width*fn),Ut=Math.floor(Qe.height*fn),w.isDataArrayTexture?qt=Qe.depth:w.isData3DTexture?qt=Math.floor(Qe.depth*fn):qt=1,Zt=0,ie=0,oe=0}tt!==null?(Ht=tt.x,he=tt.y,Ze=tt.z):(Ht=0,he=0,Ze=0);const Ce=Ct.convert(X.format),yn=Ct.convert(X.type);let kt;X.isData3DTexture?(j.setTexture3D(X,0),kt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),kt=G.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),kt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Vn=G.getParameter(G.UNPACK_ROW_LENGTH),re=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Hn=G.getParameter(G.UNPACK_SKIP_PIXELS),ii=G.getParameter(G.UNPACK_SKIP_ROWS),Di=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oe);const ai=w.isDataArrayTexture||w.isData3DTexture,Oe=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const fn=b.get(w),Gn=b.get(X),hn=b.get(fn.__renderTarget),Li=b.get(Gn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,hn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let da=0;da<qt;da++)ai&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(w).__webglTexture,K,oe+da),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(X).__webglTexture,Dt,Ze+da)),G.blitFramebuffer(Zt,ie,zt,Ut,Ht,he,zt,Ut,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||b.has(w)){const fn=b.get(w),Gn=b.get(X);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,Ya),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Us);for(let hn=0;hn<qt;hn++)ai?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,K,oe+hn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,K),Oe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gn.__webglTexture,Dt,Ze+hn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Gn.__webglTexture,Dt),K!==0?G.blitFramebuffer(Zt,ie,zt,Ut,Ht,he,zt,Ut,G.COLOR_BUFFER_BIT,G.NEAREST):Oe?G.copyTexSubImage3D(kt,Dt,Ht,he,Ze+hn,Zt,ie,zt,Ut):G.copyTexSubImage2D(kt,Dt,Ht,he,Zt,ie,zt,Ut);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Oe?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(kt,Dt,Ht,he,Ze,zt,Ut,qt,Ce,yn,Qe.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(kt,Dt,Ht,he,Ze,zt,Ut,qt,Ce,Qe.data):G.texSubImage3D(kt,Dt,Ht,he,Ze,zt,Ut,qt,Ce,yn,Qe):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,he,zt,Ut,Ce,yn,Qe.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Ht,he,Qe.width,Qe.height,Ce,Qe.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,he,zt,Ut,Ce,yn,Qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Vn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,re),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Hn),G.pixelStorei(G.UNPACK_SKIP_ROWS,ii),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Di),Dt===0&&X.generateMipmaps&&G.generateMipmap(kt),Yt.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),Yt.unbindTexture()},this.resetState=function(){H=0,Z=0,nt=null,Yt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),n.unpackColorSpace=Re._getUnpackColorSpace()}}const co=`
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
`,I3=`
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
`,B3=`
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
`,My=`
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
`,z3=`
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
`,V3=`
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
`,H3=`
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
`,G3=`
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
`,k3=`
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
`,X3=`
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
    vec3 bg = (isDark > 0.5) ? vec3(0.01, 0.015, 0.06) : vec3(1.0);
    color = mix(bg, color, len);

    gl_FragColor = vec4(color, 1.0);
}
`;class W3{renderer;width;height;options={iterations_poisson:8,iterations_viscous:8,mouse_force:20,resolution:.4,cursor_size:100,viscous:30,dt:.014,isViscous:!0,BFECC:!1};fbos={};fboSize=new ge;cellScale=new ge;boundarySpace=new ge;advectionScene;advectionCamera;advectionMaterial;advectionLine;externalForceScene;externalForceCamera;externalForceMesh;viscousScene;viscousCamera;viscousMaterial;divergenceScene;divergenceCamera;divergenceMaterial;poissonScene;poissonCamera;poissonMaterial;pressureScene;pressureCamera;pressureMaterial;outputScene;outputCamera;outputMaterial;mouseCoords=new ge;mouseCoordsOld=new ge;mouseDiff=new ge;mouseMoved=!1;mouseTimer=null;constructor(t){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer=new F3({canvas:t,antialias:!1,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setClearColor(0),this.calcSize(),this.createFBOs(),this.createAdvection(),this.createExternalForce(),this.createViscous(),this.createDivergence(),this.createPoisson(),this.createPressure(),this.createOutput()}calcSize(){const t=Math.round(this.options.resolution*this.width),n=Math.round(this.options.resolution*this.height);this.cellScale.set(1/t,1/n),this.fboSize.set(t,n)}createFBOs(){const t=ki,n=["vel_0","vel_1","vel_viscous0","vel_viscous1","div","pressure_0","pressure_1"];for(const s of n)this.fbos[s]=new Wi(this.fboSize.x,this.fboSize.y,{type:t})}createAdvection(){this.advectionScene=new Ks,this.advectionCamera=new Ia,this.advectionMaterial=new Fa({vertexShader:co,fragmentShader:My,uniforms:{boundarySpace:{value:this.cellScale},px:{value:this.cellScale},fboSize:{value:this.fboSize},velocity:{value:this.fbos.vel_0.texture},dt:{value:this.options.dt},isBFECC:{value:!0}}});const t=new Fn(new Vi(2,2),this.advectionMaterial);this.advectionScene.add(t);const n=new Zi,s=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);n.setAttribute("position",new ji(s,3));const o=new Fa({vertexShader:I3,fragmentShader:My,uniforms:this.advectionMaterial.uniforms});this.advectionLine=new NA(n,o),this.advectionLine.visible=!1,this.advectionScene.add(this.advectionLine)}createExternalForce(){this.externalForceScene=new Ks,this.externalForceCamera=new Ia;const t=new Vi(1,1),n=new Fa({vertexShader:B3,fragmentShader:z3,blending:Lp,uniforms:{px:{value:this.cellScale},force:{value:new ge(0,0)},center:{value:new ge(0,0)},scale:{value:new ge(this.options.cursor_size,this.options.cursor_size)}}});this.externalForceMesh=new Fn(t,n),this.externalForceScene.add(this.externalForceMesh)}createViscous(){this.viscousScene=new Ks,this.viscousCamera=new Ia,this.viscousMaterial=new Fa({vertexShader:co,fragmentShader:V3,uniforms:{boundarySpace:{value:this.boundarySpace},velocity:{value:this.fbos.vel_1.texture},velocity_new:{value:this.fbos.vel_viscous0.texture},v:{value:this.options.viscous},px:{value:this.cellScale},dt:{value:this.options.dt}}}),this.viscousScene.add(new Fn(new Vi(2,2),this.viscousMaterial))}createDivergence(){this.divergenceScene=new Ks,this.divergenceCamera=new Ia,this.divergenceMaterial=new Fa({vertexShader:co,fragmentShader:H3,uniforms:{boundarySpace:{value:this.boundarySpace},velocity:{value:this.fbos.vel_1.texture},px:{value:this.cellScale},dt:{value:this.options.dt}}}),this.divergenceScene.add(new Fn(new Vi(2,2),this.divergenceMaterial))}createPoisson(){this.poissonScene=new Ks,this.poissonCamera=new Ia,this.poissonMaterial=new Fa({vertexShader:co,fragmentShader:G3,uniforms:{boundarySpace:{value:this.boundarySpace},pressure:{value:this.fbos.pressure_0.texture},divergence:{value:this.fbos.div.texture},px:{value:this.cellScale}}}),this.poissonScene.add(new Fn(new Vi(2,2),this.poissonMaterial))}createPressure(){this.pressureScene=new Ks,this.pressureCamera=new Ia,this.pressureMaterial=new Fa({vertexShader:co,fragmentShader:k3,uniforms:{boundarySpace:{value:this.boundarySpace},pressure:{value:this.fbos.pressure_0.texture},velocity:{value:this.fbos.vel_1.texture},px:{value:this.cellScale},dt:{value:this.options.dt}}}),this.pressureScene.add(new Fn(new Vi(2,2),this.pressureMaterial))}createOutput(){this.outputScene=new Ks,this.outputCamera=new Ia,this.outputMaterial=new Fa({vertexShader:co,fragmentShader:X3,uniforms:{velocity:{value:this.fbos.vel_0.texture},boundarySpace:{value:new ge},isDark:{value:1}}}),this.outputScene.add(new Fn(new Vi(2,2),this.outputMaterial))}setMouse(t,n){this.mouseTimer&&clearTimeout(this.mouseTimer),this.mouseCoords.set(t/this.width*2-1,-(n/this.height)*2+1),this.mouseMoved=!0,this.mouseTimer=setTimeout(()=>{this.mouseMoved=!1},100)}updateMouse(){this.mouseDiff.subVectors(this.mouseCoords,this.mouseCoordsOld),this.mouseCoordsOld.copy(this.mouseCoords),this.mouseCoordsOld.x===0&&this.mouseCoordsOld.y===0&&this.mouseDiff.set(0,0)}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setSize(this.width,this.height),this.calcSize();for(const t in this.fbos)this.fbos[t].setSize(this.fboSize.x,this.fboSize.y)}renderPass(t,n,s){this.renderer.setRenderTarget(s),this.renderer.render(t,n),this.renderer.setRenderTarget(null)}update(){this.updateMouse(),this.boundarySpace.copy(this.cellScale),this.advectionMaterial.uniforms.velocity.value=this.fbos.vel_0.texture,this.advectionMaterial.uniforms.dt.value=this.options.dt,this.advectionMaterial.uniforms.isBFECC.value=this.options.BFECC,this.renderPass(this.advectionScene,this.advectionCamera,this.fbos.vel_1);const t=this.externalForceMesh.material.uniforms,n=this.mouseDiff.x/2*this.options.mouse_force,s=this.mouseDiff.y/2*this.options.mouse_force,o=this.options.cursor_size*this.cellScale.x,c=this.options.cursor_size*this.cellScale.y,u=Math.min(Math.max(this.mouseCoords.x,-1+o+this.cellScale.x*2),1-o-this.cellScale.x*2),h=Math.min(Math.max(this.mouseCoords.y,-1+c+this.cellScale.y*2),1-c-this.cellScale.y*2);t.force.value.set(n,s),t.center.value.set(u,h),t.scale.value.set(this.options.cursor_size,this.options.cursor_size),this.renderPass(this.externalForceScene,this.externalForceCamera,this.fbos.vel_1);let m=this.fbos.vel_1;if(this.options.isViscous){this.viscousMaterial.uniforms.velocity.value=this.fbos.vel_1.texture,this.viscousMaterial.uniforms.v.value=this.options.viscous,this.viscousMaterial.uniforms.dt.value=this.options.dt;let v,y;for(let E=0;E<this.options.iterations_viscous;E++)E%2===0?(v=this.fbos.vel_viscous0,y=this.fbos.vel_viscous1):(v=this.fbos.vel_viscous1,y=this.fbos.vel_viscous0),this.viscousMaterial.uniforms.velocity_new.value=v.texture,this.renderPass(this.viscousScene,this.viscousCamera,y);m=this.options.iterations_viscous%2===0?this.fbos.vel_viscous0:this.fbos.vel_viscous1}this.divergenceMaterial.uniforms.velocity.value=m.texture,this.renderPass(this.divergenceScene,this.divergenceCamera,this.fbos.div);let d,g;for(let v=0;v<this.options.iterations_poisson;v++)v%2===0?(d=this.fbos.pressure_0,g=this.fbos.pressure_1):(d=this.fbos.pressure_1,g=this.fbos.pressure_0),this.poissonMaterial.uniforms.pressure.value=d.texture,this.renderPass(this.poissonScene,this.poissonCamera,g);const _=this.options.iterations_poisson%2===0?this.fbos.pressure_0:this.fbos.pressure_1;this.pressureMaterial.uniforms.velocity.value=m.texture,this.pressureMaterial.uniforms.pressure.value=_.texture,this.renderPass(this.pressureScene,this.pressureCamera,this.fbos.vel_0),this.outputMaterial.uniforms.velocity.value=this.fbos.vel_0.texture,this.outputMaterial.uniforms.isDark.value=document.documentElement.classList.contains("dark")?1:0,this.renderer.setRenderTarget(null),this.renderer.render(this.outputScene,this.outputCamera)}dispose(){for(const t in this.fbos)this.fbos[t].dispose();this.renderer.dispose()}}const j3=()=>{const i=Lt.useRef(null);return Lt.useEffect(()=>{const t=i.current;if(!t)return;let n=!1;const s=new W3(t),o=m=>s.setMouse(m.clientX,m.clientY),c=m=>{m.touches.length===1&&s.setMouse(m.touches[0].clientX,m.touches[0].clientY)},u=()=>s.resize();window.addEventListener("mousemove",o),window.addEventListener("touchmove",c),window.addEventListener("resize",u);const h=()=>{n||(s.update(),requestAnimationFrame(h))};return h(),()=>{n=!0,window.removeEventListener("mousemove",o),window.removeEventListener("touchmove",c),window.removeEventListener("resize",u),s.dispose()}},[]),rt.jsx("div",{className:"fixed inset-0 z-[-10] pointer-events-none",children:rt.jsx("canvas",{ref:i,className:"w-full h-full block"})})},sg=Lt.createContext({});function rg(i){const t=Lt.useRef(null);return t.current===null&&(t.current=i()),t.current}const EM=typeof window<"u",bM=EM?Lt.useLayoutEffect:Lt.useEffect,Sf=Lt.createContext(null);function og(i,t){i.indexOf(t)===-1&&i.push(t)}function cf(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const fa=(i,t,n)=>n>t?t:n<i?i:n;let lg=()=>{};const Wa={},TM=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function AM(i){return typeof i=="object"&&i!==null}const RM=i=>/^0[^.\s]+$/u.test(i);function CM(i){let t;return()=>(t===void 0&&(t=i()),t)}const Ai=i=>i,q3=(i,t)=>n=>t(i(n)),Ql=(...i)=>i.reduce(q3),Gl=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class cg{constructor(){this.subscriptions=[]}add(t){return og(this.subscriptions,t),()=>cf(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yi=i=>i*1e3,Ti=i=>i/1e3;function wM(i,t){return t?i*(1e3/t):0}const DM=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,Y3=1e-7,K3=12;function Z3(i,t,n,s,o){let c,u,h=0;do u=t+(n-t)/2,c=DM(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>Y3&&++h<K3);return u}function Jl(i,t,n,s){if(i===t&&n===s)return Ai;const o=c=>Z3(c,0,1,i,n);return c=>c===0||c===1?c:DM(o(c),t,s)}const LM=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,UM=i=>t=>1-i(1-t),NM=Jl(.33,1.53,.69,.99),ug=UM(NM),PM=LM(ug),OM=i=>(i*=2)<1?.5*ug(i):.5*(2-Math.pow(2,-10*(i-1))),fg=i=>1-Math.sin(Math.acos(i)),FM=UM(fg),IM=LM(fg),Q3=Jl(.42,0,1,1),J3=Jl(0,0,.58,1),BM=Jl(.42,0,.58,1),$3=i=>Array.isArray(i)&&typeof i[0]!="number",zM=i=>Array.isArray(i)&&typeof i[0]=="number",tD={linear:Ai,easeIn:Q3,easeInOut:BM,easeOut:J3,circIn:fg,circInOut:IM,circOut:FM,backIn:ug,backInOut:PM,backOut:NM,anticipate:OM},eD=i=>typeof i=="string",Ey=i=>{if(zM(i)){lg(i.length===4);const[t,n,s,o]=i;return Jl(t,n,s,o)}else if(eD(i))return tD[i];return i},zu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function nD(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function m(g){u.has(g)&&(d.schedule(g),i()),g(h)}const d={schedule:(g,_=!1,v=!1)=>{const E=v&&o?n:s;return _&&u.add(g),E.has(g)||E.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(h=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(m),n.clear(),o=!1,c&&(c=!1,d.process(g))}};return d}const iD=40;function VM(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=zu.reduce((D,L)=>(D[L]=nD(c),D),{}),{setup:h,read:m,resolveKeyframes:d,preUpdate:g,update:_,preRender:v,render:y,postRender:E}=u,A=()=>{const D=Wa.useManualTiming?o.timestamp:performance.now();n=!1,Wa.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(D-o.timestamp,iD),1)),o.timestamp=D,o.isProcessing=!0,h.process(o),m.process(o),d.process(o),g.process(o),_.process(o),v.process(o),y.process(o),E.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(A))},S=()=>{n=!0,s=!0,o.isProcessing||i(A)};return{schedule:zu.reduce((D,L)=>{const O=u[L];return D[L]=(z,B=!1,T=!1)=>(n||S(),O.schedule(z,B,T)),D},{}),cancel:D=>{for(let L=0;L<zu.length;L++)u[zu[L]].cancel(D)},state:o,steps:u}}const{schedule:je,cancel:ws,state:Ln,steps:pp}=VM(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ai,!0);let Ku;function aD(){Ku=void 0}const Wn={now:()=>(Ku===void 0&&Wn.set(Ln.isProcessing||Wa.useManualTiming?Ln.timestamp:performance.now()),Ku),set:i=>{Ku=i,queueMicrotask(aD)}},HM=i=>t=>typeof t=="string"&&t.startsWith(i),GM=HM("--"),sD=HM("var(--"),hg=i=>sD(i)?rD.test(i.split("/*")[0].trim()):!1,rD=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function by(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const wo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},kl={...wo,transform:i=>fa(0,1,i)},Vu={...wo,default:1},Ol=i=>Math.round(i*1e5)/1e5,dg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function oD(i){return i==null}const lD=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pg=(i,t)=>n=>!!(typeof n=="string"&&lD.test(n)&&n.startsWith(i)||t&&!oD(n)&&Object.prototype.hasOwnProperty.call(n,t)),kM=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,h]=s.match(dg);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},cD=i=>fa(0,255,i),mp={...wo,transform:i=>Math.round(cD(i))},cr={test:pg("rgb","red"),parse:kM("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+mp.transform(i)+", "+mp.transform(t)+", "+mp.transform(n)+", "+Ol(kl.transform(s))+")"};function uD(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const bm={test:pg("#"),parse:uD,transform:cr.transform},$l=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),bs=$l("deg"),la=$l("%"),Xt=$l("px"),fD=$l("vh"),hD=$l("vw"),Ty={...la,parse:i=>la.parse(i)/100,transform:i=>la.transform(i*100)},fo={test:pg("hsl","hue"),parse:kM("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+la.transform(Ol(t))+", "+la.transform(Ol(n))+", "+Ol(kl.transform(s))+")"},_n={test:i=>cr.test(i)||bm.test(i)||fo.test(i),parse:i=>cr.test(i)?cr.parse(i):fo.test(i)?fo.parse(i):bm.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?cr.transform(i):fo.transform(i),getAnimatableNone:i=>{const t=_n.parse(i);return t.alpha=0,_n.transform(t)}},dD=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pD(i){return isNaN(i)&&typeof i=="string"&&(i.match(dg)?.length||0)+(i.match(dD)?.length||0)>0}const XM="number",WM="color",mD="var",gD="var(",Ay="${}",vD=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xl(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const h=t.replace(vD,m=>(_n.test(m)?(s.color.push(c),o.push(WM),n.push(_n.parse(m))):m.startsWith(gD)?(s.var.push(c),o.push(mD),n.push(m)):(s.number.push(c),o.push(XM),n.push(parseFloat(m))),++c,Ay)).split(Ay);return{values:n,split:h,indexes:s,types:o}}function jM(i){return Xl(i).values}function qM(i){const{split:t,types:n}=Xl(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const h=n[u];h===XM?c+=Ol(o[u]):h===WM?c+=_n.transform(o[u]):c+=o[u]}return c}}const _D=i=>typeof i=="number"?0:_n.test(i)?_n.getAnimatableNone(i):i;function xD(i){const t=jM(i);return qM(i)(t.map(_D))}const Ki={test:pD,parse:jM,createTransformer:qM,getAnimatableNone:xD};function gp(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function yD({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const h=n<.5?n*(1+t):n+t-n*t,m=2*n-h;o=gp(m,h,i+1/3),c=gp(m,h,i),u=gp(m,h,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function uf(i,t){return n=>n>0?t:i}const tn=(i,t,n)=>i+(t-i)*n,vp=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},SD=[bm,cr,fo],MD=i=>SD.find(t=>t.test(i));function Ry(i){const t=MD(i);if(!t)return!1;let n=t.parse(i);return t===fo&&(n=yD(n)),n}const Cy=(i,t)=>{const n=Ry(i),s=Ry(t);if(!n||!s)return uf(i,t);const o={...n};return c=>(o.red=vp(n.red,s.red,c),o.green=vp(n.green,s.green,c),o.blue=vp(n.blue,s.blue,c),o.alpha=tn(n.alpha,s.alpha,c),cr.transform(o))},Tm=new Set(["none","hidden"]);function ED(i,t){return Tm.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function bD(i,t){return n=>tn(i,t,n)}function mg(i){return typeof i=="number"?bD:typeof i=="string"?hg(i)?uf:_n.test(i)?Cy:RD:Array.isArray(i)?YM:typeof i=="object"?_n.test(i)?Cy:TD:uf}function YM(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>mg(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function TD(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=mg(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function AD(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],h=i.values[u]??0;n[o]=h,s[c]++}return n}const RD=(i,t)=>{const n=Ki.createTransformer(t),s=Xl(i),o=Xl(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?Tm.has(i)&&!o.values.length||Tm.has(t)&&!s.values.length?ED(i,t):Ql(YM(AD(s,o),o.values),n):uf(i,t)};function KM(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?tn(i,t,n):mg(i)(i,t)}const CD=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>je.update(t,n),stop:()=>ws(t),now:()=>Ln.isProcessing?Ln.timestamp:Wn.now()}},ZM=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},ff=2e4;function gg(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<ff;)t+=n,s=i.next(t);return t>=ff?1/0:t}function wD(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(gg(s),ff);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ti(o)}}const DD=5;function QM(i,t,n){const s=Math.max(t-DD,0);return wM(n-i(s),t-s)}const sn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},_p=.001;function LD({duration:i=sn.duration,bounce:t=sn.bounce,velocity:n=sn.velocity,mass:s=sn.mass}){let o,c,u=1-t;u=fa(sn.minDamping,sn.maxDamping,u),i=fa(sn.minDuration,sn.maxDuration,Ti(i)),u<1?(o=d=>{const g=d*u,_=g*i,v=g-n,y=Am(d,u),E=Math.exp(-_);return _p-v/y*E},c=d=>{const _=d*u*i,v=_*n+n,y=Math.pow(u,2)*Math.pow(d,2)*i,E=Math.exp(-_),A=Am(Math.pow(d,2),u);return(-o(d)+_p>0?-1:1)*((v-y)*E)/A}):(o=d=>{const g=Math.exp(-d*i),_=(d-n)*i+1;return-_p+g*_},c=d=>{const g=Math.exp(-d*i),_=(n-d)*(i*i);return g*_});const h=5/i,m=ND(o,c,h);if(i=Yi(i),isNaN(m))return{stiffness:sn.stiffness,damping:sn.damping,duration:i};{const d=Math.pow(m,2)*s;return{stiffness:d,damping:u*2*Math.sqrt(s*d),duration:i}}}const UD=12;function ND(i,t,n){let s=n;for(let o=1;o<UD;o++)s=s-i(s)/t(s);return s}function Am(i,t){return i*Math.sqrt(1-t*t)}const PD=["duration","bounce"],OD=["stiffness","damping","mass"];function wy(i,t){return t.some(n=>i[n]!==void 0)}function FD(i){let t={velocity:sn.velocity,stiffness:sn.stiffness,damping:sn.damping,mass:sn.mass,isResolvedFromDuration:!1,...i};if(!wy(i,OD)&&wy(i,PD))if(t.velocity=0,i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*fa(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:sn.mass,stiffness:o,damping:c}}else{const n=LD({...i,velocity:0});t={...t,...n,mass:sn.mass},t.isResolvedFromDuration=!0}return t}function hf(i=sn.visualDuration,t=sn.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],h={done:!1,value:c},{stiffness:m,damping:d,mass:g,duration:_,velocity:v,isResolvedFromDuration:y}=FD({...n,velocity:-Ti(n.velocity||0)}),E=v||0,A=d/(2*Math.sqrt(m*g)),S=u-c,x=Ti(Math.sqrt(m/g)),C=Math.abs(S)<5;s||(s=C?sn.restSpeed.granular:sn.restSpeed.default),o||(o=C?sn.restDelta.granular:sn.restDelta.default);let D;if(A<1){const O=Am(x,A);D=z=>{const B=Math.exp(-A*x*z);return u-B*((E+A*x*S)/O*Math.sin(O*z)+S*Math.cos(O*z))}}else if(A===1)D=O=>u-Math.exp(-x*O)*(S+(E+x*S)*O);else{const O=x*Math.sqrt(A*A-1);D=z=>{const B=Math.exp(-A*x*z),T=Math.min(O*z,300);return u-B*((E+A*x*S)*Math.sinh(T)+O*S*Math.cosh(T))/O}}const L={calculatedDuration:y&&_||null,next:O=>{const z=D(O);if(y)h.done=O>=_;else{let B=O===0?E:0;A<1&&(B=O===0?Yi(E):QM(D,O,z));const T=Math.abs(B)<=s,U=Math.abs(u-z)<=o;h.done=T&&U}return h.value=h.done?u:z,h},toString:()=>{const O=Math.min(gg(L),ff),z=ZM(B=>L.next(O*B).value,O,30);return O+"ms "+z},toTransition:()=>{}};return L}hf.applyToOptions=i=>{const t=wD(i,100,hf);return i.ease=t.ease,i.duration=Yi(t.duration),i.type="keyframes",i};function Rm({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:h,max:m,restDelta:d=.5,restSpeed:g}){const _=i[0],v={done:!1,value:_},y=T=>h!==void 0&&T<h||m!==void 0&&T>m,E=T=>h===void 0?m:m===void 0||Math.abs(h-T)<Math.abs(m-T)?h:m;let A=n*t;const S=_+A,x=u===void 0?S:u(S);x!==S&&(A=x-_);const C=T=>-A*Math.exp(-T/s),D=T=>x+C(T),L=T=>{const U=C(T),lt=D(T);v.done=Math.abs(U)<=d,v.value=v.done?x:lt};let O,z;const B=T=>{y(v.value)&&(O=T,z=hf({keyframes:[v.value,E(v.value)],velocity:QM(D,T,v.value),damping:o,stiffness:c,restDelta:d,restSpeed:g}))};return B(0),{calculatedDuration:null,next:T=>{let U=!1;return!z&&O===void 0&&(U=!0,L(T),B(T)),O!==void 0&&T>=O?z.next(T-O):(!U&&L(T),v)}}}function ID(i,t,n){const s=[],o=n||Wa.mix||KM,c=i.length-1;for(let u=0;u<c;u++){let h=o(i[u],i[u+1]);if(t){const m=Array.isArray(t)?t[u]||Ai:t;h=Ql(m,h)}s.push(h)}return s}function BD(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(lg(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const h=ID(t,s,o),m=h.length,d=g=>{if(u&&g<i[0])return t[0];let _=0;if(m>1)for(;_<i.length-2&&!(g<i[_+1]);_++);const v=Gl(i[_],i[_+1],g);return h[_](v)};return n?g=>d(fa(i[0],i[c-1],g)):d}function zD(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Gl(0,t,s);i.push(tn(n,1,o))}}function VD(i){const t=[0];return zD(t,i.length-1),t}function HD(i,t){return i.map(n=>n*t)}function GD(i,t){return i.map(()=>t||BM).splice(0,i.length-1)}function Fl({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=$3(s)?s.map(Ey):Ey(s),c={done:!1,value:t[0]},u=HD(n&&n.length===t.length?n:VD(t),i),h=BD(u,t,{ease:Array.isArray(o)?o:GD(t,o)});return{calculatedDuration:i,next:m=>(c.value=h(m),c.done=m>=i,c)}}const kD=i=>i!==null;function vg(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(kD),h=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!h||s===void 0?c[h]:s}const XD={decay:Rm,inertia:Rm,tween:Fl,keyframes:Fl,spring:hf};function JM(i){typeof i.type=="string"&&(i.type=XD[i.type])}class _g{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const WD=i=>i/100;class xg extends _g{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==Wn.now()&&this.tick(Wn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;JM(t);const{type:n=Fl,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:h}=t;const m=n||Fl;m!==Fl&&typeof h[0]!="number"&&(this.mixKeyframes=Ql(WD,KM(h[0],h[1])),h=[0,100]);const d=m({...t,keyframes:h});c==="mirror"&&(this.mirroredGenerator=m({...t,keyframes:[...h].reverse(),velocity:-u})),d.calculatedDuration===null&&(d.calculatedDuration=gg(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:d=0,keyframes:g,repeat:_,repeatType:v,repeatDelay:y,type:E,onUpdate:A,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let D=this.currentTime,L=s;if(_){const T=Math.min(this.currentTime,o)/h;let U=Math.floor(T),lt=T%1;!lt&&T>=1&&(lt=1),lt===1&&U--,U=Math.min(U,_+1),U%2&&(v==="reverse"?(lt=1-lt,y&&(lt-=y/h)):v==="mirror"&&(L=u)),D=fa(0,1,lt)*h}const O=C?{done:!1,value:g[0]}:L.next(D);c&&(O.value=c(O.value));let{done:z}=O;!C&&m!==null&&(z=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return B&&E!==Rm&&(O.value=vg(g,this.options,S,this.speed)),A&&A(O.value),B&&this.finish(),O}then(t,n){return this.finished.then(t,n)}get duration(){return Ti(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ti(t)}get time(){return Ti(this.currentTime)}set time(t){t=Yi(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Wn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ti(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=CD,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Wn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function jD(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const ur=i=>i*180/Math.PI,Cm=i=>{const t=ur(Math.atan2(i[1],i[0]));return wm(t)},qD={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:Cm,rotateZ:Cm,skewX:i=>ur(Math.atan(i[1])),skewY:i=>ur(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},wm=i=>(i=i%360,i<0&&(i+=360),i),Dy=Cm,Ly=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Uy=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),YD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ly,scaleY:Uy,scale:i=>(Ly(i)+Uy(i))/2,rotateX:i=>wm(ur(Math.atan2(i[6],i[5]))),rotateY:i=>wm(ur(Math.atan2(-i[2],i[0]))),rotateZ:Dy,rotate:Dy,skewX:i=>ur(Math.atan(i[4])),skewY:i=>ur(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function Dm(i){return i.includes("scale")?1:0}function Lm(i,t){if(!i||i==="none")return Dm(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=YD,o=n;else{const h=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=qD,o=h}if(!o)return Dm(t);const c=s[t],u=o[1].split(",").map(ZD);return typeof c=="function"?c(u):u[c]}const KD=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return Lm(n,t)};function ZD(i){return parseFloat(i.trim())}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Lo=new Set(Do),Ny=i=>i===wo||i===Xt,QD=new Set(["x","y","z"]),JD=Do.filter(i=>!QD.has(i));function $D(i){const t=[];return JD.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const Rs={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>Lm(t,"x"),y:(i,{transform:t})=>Lm(t,"y")};Rs.translateX=Rs.x;Rs.translateY=Rs.y;const fr=new Set;let Um=!1,Nm=!1,Pm=!1;function $M(){if(Nm){const i=Array.from(fr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=$D(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{s.getValue(c)?.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Nm=!1,Um=!1,fr.forEach(i=>i.complete(Pm)),fr.clear()}function tE(){fr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Nm=!0)})}function tL(){Pm=!0,tE(),$M(),Pm=!1}class yg{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(fr.add(this),Um||(Um=!0,je.read(tE),je.resolveKeyframes($M))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o?.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const h=s.readValue(n,u);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}jD(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),fr.delete(this)}cancel(){this.state==="scheduled"&&(fr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const eL=i=>i.startsWith("--");function nL(i,t,n){eL(t)?i.style.setProperty(t,n):i.style[t]=n}const iL={};function eE(i,t){const n=CM(i);return()=>iL[t]??n()}const aL=eE(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),nE=eE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Pl=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,Py={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pl([0,.65,.55,1]),circOut:Pl([.55,0,1,.45]),backIn:Pl([.31,.01,.66,-.59]),backOut:Pl([.33,1.53,.69,.99])};function iE(i,t){if(i)return typeof i=="function"?nE()?ZM(i,t):"ease-out":zM(i)?Pl(i):Array.isArray(i)?i.map(n=>iE(n,t)||Py.easeOut):Py[i]}function sL(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:h="easeOut",times:m}={},d=void 0){const g={[t]:n};m&&(g.offset=m);const _=iE(h,o);Array.isArray(_)&&(g.easing=_);const v={delay:s,duration:o,easing:Array.isArray(_)?"linear":_,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return d&&(v.pseudoElement=d),i.animate(g,v)}function aE(i){return typeof i=="function"&&"applyToOptions"in i}function rL({type:i,...t}){return aE(i)&&nE()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class sE extends _g{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:h,onComplete:m}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,lg(typeof t.type!="string");const d=rL(t);this.animation=sL(n,s,o,d,c),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=vg(o,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):nL(n,s,g),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Ti(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ti(t)}get time(){return Ti(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Yi(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&aL()?(this.animation.timeline=t,Ai):n(this)}}const rE={anticipate:OM,backInOut:PM,circInOut:IM};function oL(i){return i in rE}function lL(i){typeof i.ease=="string"&&oL(i.ease)&&(i.ease=rE[i.ease])}const xp=10;class cL extends sE{constructor(t){lL(t),JM(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const h=new xg({...u,autoplay:!1}),m=Math.max(xp,Wn.now()-this.startTime),d=fa(0,xp,m-xp);n.setWithVelocity(h.sample(Math.max(0,m-d)).value,h.sample(m).value,d),h.stop()}}const Oy=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Ki.test(i)||i==="0")&&!i.startsWith("url("));function uL(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function fL(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=Oy(o,t),h=Oy(c,t);return!u||!h?!1:uL(i)||(n==="spring"||aE(n))&&s}function Om(i){i.duration=0,i.type="keyframes"}const hL=new Set(["opacity","clipPath","filter","transform"]),dL=CM(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function pL(i){const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:d}=t.owner.getProps();return dL()&&n&&hL.has(n)&&(n!=="transform"||!d)&&!m&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const mL=40;class gL extends _g{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:h,name:m,motionValue:d,element:g,..._}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Wn.now();const v={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:m,motionValue:d,element:g,..._},y=g?.KeyframeResolver||yg;this.keyframeResolver=new y(h,(E,A,S)=>this.onKeyframesResolved(E,A,v,!S),m,d,g),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:h,delay:m,isHandoff:d,onUpdate:g}=s;this.resolvedAt=Wn.now(),fL(t,c,u,h)||((Wa.instantAnimations||!m)&&g?.(vg(t,s,n)),t[0]=t[t.length-1],Om(s),s.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>mL?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!d&&pL(v),E=v.motionValue?.owner?.current,A=y?new cL({...v,element:E}):new xg(v);A.finished.then(()=>{this.notifyFinished()}).catch(Ai),this.pendingTimeline&&(this.stopTimeline=A.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=A}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),tL()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function oE(i,t,n,s=0,o=1){const c=Array.from(i).sort((d,g)=>d.sortNodePosition(g)).indexOf(t),u=i.size,h=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:h-c*s}const vL=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _L(i){const t=vL.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function lE(i,t,n=1){const[s,o]=_L(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return TM(u)?parseFloat(u):u}return hg(o)?lE(o,t,n+1):o}const xL={type:"spring",stiffness:500,damping:25,restSpeed:10},yL=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),SL={type:"keyframes",duration:.8},ML={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},EL=(i,{keyframes:t})=>t.length>2?SL:Lo.has(i)?i.startsWith("scale")?yL(t[1]):xL:ML,bL=i=>i!==null;function TL(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(bL),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}function cE(i,t){if(i?.inherit&&t){const{inherit:n,...s}=i;return{...t,...s}}return i}function Sg(i,t){const n=i?.[t]??i?.default??i;return n!==i?cE(n,i):n}function AL({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:h,from:m,elapsed:d,...g}){return!!Object.keys(g).length}const Mg=(i,t,n,s={},o,c)=>u=>{const h=Sg(s,i)||{},m=h.delay||s.delay||0;let{elapsed:d=0}=s;d=d-Yi(m);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-d,onUpdate:v=>{t.set(v),h.onUpdate&&h.onUpdate(v)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:i,motionValue:t,element:c?void 0:o};AL(h)||Object.assign(g,EL(i,g)),g.duration&&(g.duration=Yi(g.duration)),g.repeatDelay&&(g.repeatDelay=Yi(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let _=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Om(g),g.delay===0&&(_=!0)),(Wa.instantAnimations||Wa.skipAnimations||o?.shouldSkipAnimations)&&(_=!0,Om(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,_&&!c&&t.get()!==void 0){const v=TL(g.keyframes,h);if(v!==void 0){je.update(()=>{g.onUpdate(v),g.onComplete()});return}}return h.isSync?new xg(g):new gL(g)};function Fy(i){const t=[{},{}];return i?.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function Eg(i,t,n,s){if(typeof t=="function"){const[o,c]=Fy(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=Fy(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function xo(i,t,n){const s=i.getProps();return Eg(s,t,n!==void 0?n:s.custom,i)}const uE=new Set(["width","height","top","left","right","bottom",...Do]),Iy=30,RL=i=>!isNaN(parseFloat(i));class CL{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const o=Wn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Wn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=RL(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new cg);const s=this.events[t].add(n);return t==="change"?()=>{s(),je.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Wn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Iy)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Iy);return wM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function To(i,t){return new CL(i,t)}const Fm=i=>Array.isArray(i);function wL(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,To(n))}function DL(i){return Fm(i)?i[i.length-1]||0:i}function LL(i,t){const n=xo(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const h=DL(c[u]);wL(i,u,h)}}const Bn=i=>!!(i&&i.getVelocity);function UL(i){return!!(Bn(i)&&i.add)}function Im(i,t){const n=i.getValue("willChange");if(UL(n))return n.add(t);if(!n&&Wa.WillChange){const s=new Wa.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function bg(i){return i.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const NL="framerAppearId",fE="data-"+bg(NL);function hE(i){return i.props[fE]}function PL({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function dE(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c,transitionEnd:u,...h}=t;const m=i.getDefaultTransition();c=c?cE(c,m):m;const d=c?.reduceMotion;s&&(c=s);const g=[],_=o&&i.animationState&&i.animationState.getState()[o];for(const v in h){const y=i.getValue(v,i.latestValues[v]??null),E=h[v];if(E===void 0||_&&PL(_,v))continue;const A={delay:n,...Sg(c||{},v)},S=y.get();if(S!==void 0&&!y.isAnimating&&!Array.isArray(E)&&E===S&&!A.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const L=hE(i);if(L){const O=window.MotionHandoffAnimation(L,v,je);O!==null&&(A.startTime=O,x=!0)}}Im(i,v);const C=d??i.shouldReduceMotion;y.start(Mg(v,y,E,C&&uE.has(v)?{type:!1}:A,i,x));const D=y.animation;D&&g.push(D)}if(u){const v=()=>je.update(()=>{u&&LL(i,u)});g.length?Promise.all(g).then(v):v()}return g}function Bm(i,t,n={}){const s=xo(i,t,n.type==="exit"?i.presenceContext?.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(dE(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(m=0)=>{const{delayChildren:d=0,staggerChildren:g,staggerDirection:_}=o;return OL(i,t,m,d,g,_,n)}:()=>Promise.resolve(),{when:h}=o;if(h){const[m,d]=h==="beforeChildren"?[c,u]:[u,c];return m().then(()=>d())}else return Promise.all([c(),u(n.delay)])}function OL(i,t,n=0,s=0,o=0,c=1,u){const h=[];for(const m of i.variantChildren)m.notify("AnimationStart",t),h.push(Bm(m,t,{...u,delay:n+(typeof s=="function"?0:s)+oE(i.variantChildren,m,s,o,c)}).then(()=>m.notify("AnimationComplete",t)));return Promise.all(h)}function FL(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>Bm(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=Bm(i,t,n);else{const o=typeof t=="function"?xo(i,t,n.custom):t;s=Promise.all(dE(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}const IL={test:i=>i==="auto",parse:i=>i},pE=i=>t=>t.test(i),mE=[wo,Xt,la,bs,hD,fD,IL],By=i=>mE.find(pE(i));function BL(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||RM(i):!0}const zL=new Set(["brightness","contrast","saturate","opacity"]);function VL(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(dg)||[];if(!s)return i;const o=n.replace(s,"");let c=zL.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const HL=/\b([a-z-]*)\(.*?\)/gu,zm={...Ki,getAnimatableNone:i=>{const t=i.match(HL);return t?t.map(VL).join(" "):i}},Vm={...Ki,getAnimatableNone:i=>{const t=Ki.parse(i);return Ki.createTransformer(i)(t.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},zy={...wo,transform:Math.round},GL={rotate:bs,rotateX:bs,rotateY:bs,rotateZ:bs,scale:Vu,scaleX:Vu,scaleY:Vu,scaleZ:Vu,skew:bs,skewX:bs,skewY:bs,distance:Xt,translateX:Xt,translateY:Xt,translateZ:Xt,x:Xt,y:Xt,z:Xt,perspective:Xt,transformPerspective:Xt,opacity:kl,originX:Ty,originY:Ty,originZ:Xt},Tg={borderWidth:Xt,borderTopWidth:Xt,borderRightWidth:Xt,borderBottomWidth:Xt,borderLeftWidth:Xt,borderRadius:Xt,borderTopLeftRadius:Xt,borderTopRightRadius:Xt,borderBottomRightRadius:Xt,borderBottomLeftRadius:Xt,width:Xt,maxWidth:Xt,height:Xt,maxHeight:Xt,top:Xt,right:Xt,bottom:Xt,left:Xt,inset:Xt,insetBlock:Xt,insetBlockStart:Xt,insetBlockEnd:Xt,insetInline:Xt,insetInlineStart:Xt,insetInlineEnd:Xt,padding:Xt,paddingTop:Xt,paddingRight:Xt,paddingBottom:Xt,paddingLeft:Xt,paddingBlock:Xt,paddingBlockStart:Xt,paddingBlockEnd:Xt,paddingInline:Xt,paddingInlineStart:Xt,paddingInlineEnd:Xt,margin:Xt,marginTop:Xt,marginRight:Xt,marginBottom:Xt,marginLeft:Xt,marginBlock:Xt,marginBlockStart:Xt,marginBlockEnd:Xt,marginInline:Xt,marginInlineStart:Xt,marginInlineEnd:Xt,fontSize:Xt,backgroundPositionX:Xt,backgroundPositionY:Xt,...GL,zIndex:zy,fillOpacity:kl,strokeOpacity:kl,numOctaves:zy},kL={...Tg,color:_n,backgroundColor:_n,outlineColor:_n,fill:_n,stroke:_n,borderColor:_n,borderTopColor:_n,borderRightColor:_n,borderBottomColor:_n,borderLeftColor:_n,filter:zm,WebkitFilter:zm,mask:Vm,WebkitMask:Vm},gE=i=>kL[i],XL=new Set([zm,Vm]);function vE(i,t){let n=gE(i);return XL.has(n)||(n=Ki),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const WL=new Set(["auto","none","0"]);function jL(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!WL.has(c)&&Xl(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=vE(n,o)}class qL extends yg{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let _=t[g];if(typeof _=="string"&&(_=_.trim(),hg(_))){const v=lE(_,n.current);v!==void 0&&(t[g]=v),g===t.length-1&&(this.finalKeyframe=_)}}if(this.resolveNoneKeyframes(),!uE.has(s)||t.length!==2)return;const[o,c]=t,u=By(o),h=By(c),m=by(o),d=by(c);if(m!==d&&Rs[s]){this.needsMeasurement=!0;return}if(u!==h)if(Ny(u)&&Ny(h))for(let g=0;g<t.length;g++){const _=t[g];typeof _=="string"&&(t[g]=parseFloat(_))}else Rs[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||BL(t[o]))&&s.push(o);s.length&&jL(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Rs[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=Rs[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([h,m])=>{t.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const YL=new Set(["opacity","clipPath","filter","transform"]);function _E(i,t,n){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=n?.[i]??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i).filter(s=>s!=null)}const xE=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function Hm(i){return AM(i)&&"offsetHeight"in i}const{schedule:Ag}=VM(queueMicrotask,!1),zi={x:!1,y:!1};function yE(){return zi.x||zi.y}function KL(i){return i==="x"||i==="y"?zi[i]?null:(zi[i]=!0,()=>{zi[i]=!1}):zi.x||zi.y?null:(zi.x=zi.y=!0,()=>{zi.x=zi.y=!1})}function SE(i,t){const n=_E(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function ZL(i){return!(i.pointerType==="touch"||yE())}function QL(i,t,n={}){const[s,o,c]=SE(i,n);return s.forEach(u=>{let h=!1,m=!1,d;const g=()=>{u.removeEventListener("pointerleave",E)},_=S=>{d&&(d(S),d=void 0),g()},v=S=>{h=!1,window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),m&&(m=!1,_(S))},y=()=>{h=!0,window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",v,o)},E=S=>{if(S.pointerType!=="touch"){if(h){m=!0;return}_(S)}},A=S=>{if(!ZL(S))return;m=!1;const x=t(u,S);typeof x=="function"&&(d=x,u.addEventListener("pointerleave",E,o))};u.addEventListener("pointerenter",A,o),u.addEventListener("pointerdown",y,o)}),c}const ME=(i,t)=>t?i===t?!0:ME(i,t.parentElement):!1,Rg=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,JL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $L(i){return JL.has(i.tagName)||i.isContentEditable===!0}const tU=new Set(["INPUT","SELECT","TEXTAREA"]);function eU(i){return tU.has(i.tagName)||i.isContentEditable===!0}const Zu=new WeakSet;function Vy(i){return t=>{t.key==="Enter"&&i(t)}}function yp(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const nU=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=Vy(()=>{if(Zu.has(n))return;yp(n,"down");const o=Vy(()=>{yp(n,"up")}),c=()=>yp(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function Hy(i){return Rg(i)&&!yE()}const Gy=new WeakSet;function iU(i,t,n={}){const[s,o,c]=SE(i,n),u=h=>{const m=h.currentTarget;if(!Hy(h)||Gy.has(h))return;Zu.add(m),n.stopPropagation&&Gy.add(h);const d=t(m,h),g=(y,E)=>{window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",v),Zu.has(m)&&Zu.delete(m),Hy(y)&&typeof d=="function"&&d(y,{success:E})},_=y=>{g(y,m===window||m===document||n.useGlobalTarget||ME(m,y.target))},v=y=>{g(y,!1)};window.addEventListener("pointerup",_,o),window.addEventListener("pointercancel",v,o)};return s.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",u,o),Hm(h)&&(h.addEventListener("focus",d=>nU(d,o)),!$L(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function Cg(i){return AM(i)&&"ownerSVGElement"in i}const Qu=new WeakMap;let Ju;const EE=(i,t,n)=>(s,o)=>o&&o[0]?o[0][i+"Size"]:Cg(s)&&"getBBox"in s?s.getBBox()[t]:s[n],aU=EE("inline","width","offsetWidth"),sU=EE("block","height","offsetHeight");function rU({target:i,borderBoxSize:t}){Qu.get(i)?.forEach(n=>{n(i,{get width(){return aU(i,t)},get height(){return sU(i,t)}})})}function oU(i){i.forEach(rU)}function lU(){typeof ResizeObserver>"u"||(Ju=new ResizeObserver(oU))}function cU(i,t){Ju||lU();const n=_E(i);return n.forEach(s=>{let o=Qu.get(s);o||(o=new Set,Qu.set(s,o)),o.add(t),Ju?.observe(s)}),()=>{n.forEach(s=>{const o=Qu.get(s);o?.delete(t),o?.size||Ju?.unobserve(s)})}}const $u=new Set;let ho;function uU(){ho=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};$u.forEach(t=>t(i))},window.addEventListener("resize",ho)}function fU(i){return $u.add(i),ho||uU(),()=>{$u.delete(i),!$u.size&&typeof ho=="function"&&(window.removeEventListener("resize",ho),ho=void 0)}}function ky(i,t){return typeof i=="function"?fU(i):cU(i,t)}function hU(i){return Cg(i)&&i.tagName==="svg"}const dU=[...mE,_n,Ki],pU=i=>dU.find(pE(i)),Xy=()=>({translate:0,scale:1,origin:0,originPoint:0}),po=()=>({x:Xy(),y:Xy()}),Wy=()=>({min:0,max:0}),Mn=()=>({x:Wy(),y:Wy()}),mU=new WeakMap;function Mf(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Wl(i){return typeof i=="string"||Array.isArray(i)}const wg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dg=["initial",...wg];function Ef(i){return Mf(i.animate)||Dg.some(t=>Wl(i[t]))}function bE(i){return!!(Ef(i)||i.variants)}function gU(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Bn(o))i.addValue(s,o);else if(Bn(c))i.addValue(s,To(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,To(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const Gm={current:null},TE={current:!1},vU=typeof window<"u";function _U(){if(TE.current=!0,!!vU)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gm.current=i.matches;i.addEventListener("change",t),t()}else Gm.current=!1}const jy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let df={};function AE(i){df=i}function xU(){return df}class yU{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=yg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Wn.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,je.render(this.render,!1,!0))};const{latestValues:d,renderState:g}=h;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=g,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=Ef(n),this.isVariantNode=bE(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:_,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in v){const E=v[y];d[y]!==void 0&&Bn(E)&&E.set(d[y])}}mount(t){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=t,mU.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(TE.current||_U(),this.shouldReduceMotion=Gm.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),ws(this.notifyUpdate),ws(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&YL.has(t)&&this.current instanceof HTMLElement){const{factory:u,keyframes:h,times:m,ease:d,duration:g}=n.accelerate,_=new sE({element:this.current,name:t,keyframes:h,times:m,ease:d,duration:Yi(g)}),v=u(_);this.valueSubscriptions.set(t,()=>{v(),_.cancel()});return}const s=Lo.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&je.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in df){const n=df[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<jy.length;s++){const o=jy[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=gU(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=To(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(TM(s)||RM(s))?s=parseFloat(s):!pU(s)&&Ki.test(n)&&(s=vE(t,n)),this.setBaseTarget(t,Bn(s)?s.get():s)),Bn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const c=Eg(this.props,n,this.presenceContext?.custom);c&&(s=c[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Bn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new cg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Ag.render(this.render)}}class RE extends yU{constructor(){super(...arguments),this.KeyframeResolver=qL}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const s=t.style;return s?s[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Bn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Ds{constructor(t){this.isMounted=!1,this.node=t}update(){}}function CE({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function SU({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function MU(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Sp(i){return i===void 0||i===1}function km({scale:i,scaleX:t,scaleY:n}){return!Sp(i)||!Sp(t)||!Sp(n)}function ar(i){return km(i)||wE(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function wE(i){return qy(i.x)||qy(i.y)}function qy(i){return i&&i!=="0%"}function pf(i,t,n){const s=i-n,o=t*s;return n+o}function Yy(i,t,n,s,o){return o!==void 0&&(i=pf(i,o,s)),pf(i,n,s)+t}function Xm(i,t=0,n=1,s,o){i.min=Yy(i.min,t,n,s,o),i.max=Yy(i.max,t,n,s,o)}function DE(i,{x:t,y:n}){Xm(i.x,t.translate,t.scale,t.originPoint),Xm(i.y,n.translate,n.scale,n.originPoint)}const Ky=.999999999999,Zy=1.0000000000001;function EU(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let h=0;h<o;h++){c=n[h],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&go(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,DE(i,u)),s&&ar(c.latestValues)&&go(i,c.latestValues))}t.x<Zy&&t.x>Ky&&(t.x=1),t.y<Zy&&t.y>Ky&&(t.y=1)}function mo(i,t){i.min=i.min+t,i.max=i.max+t}function Qy(i,t,n,s,o=.5){const c=tn(i.min,i.max,o);Xm(i,t,n,c,s)}function go(i,t){Qy(i.x,t.x,t.scaleX,t.scale,t.originX),Qy(i.y,t.y,t.scaleY,t.scale,t.originY)}function LE(i,t){return CE(MU(i.getBoundingClientRect(),t))}function bU(i,t,n){const s=LE(i,n),{scroll:o}=t;return o&&(mo(s.x,o.offset.x),mo(s.y,o.offset.y)),s}const TU={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},AU=Do.length;function RU(i,t,n){let s="",o=!0;for(let c=0;c<AU;c++){const u=Do[c],h=i[u];if(h===void 0)continue;let m=!0;if(typeof h=="number")m=h===(u.startsWith("scale")?1:0);else{const d=parseFloat(h);m=u.startsWith("scale")?d===1:d===0}if(!m||n){const d=xE(h,Tg[u]);if(!m){o=!1;const g=TU[u]||u;s+=`${g}(${d}) `}n&&(t[u]=d)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Lg(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,h=!1;for(const m in t){const d=t[m];if(Lo.has(m)){u=!0;continue}else if(GM(m)){o[m]=d;continue}else{const g=xE(d,Tg[m]);m.startsWith("origin")?(h=!0,c[m]=g):s[m]=g}}if(t.transform||(u||n?s.transform=RU(t,i.transform,n):s.transform&&(s.transform="none")),h){const{originX:m="50%",originY:d="50%",originZ:g=0}=c;s.transformOrigin=`${m} ${d} ${g}`}}function UE(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o?.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function Jy(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const Ll={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(Xt.test(i))i=parseFloat(i);else return i;const n=Jy(i,t.target.x),s=Jy(i,t.target.y);return`${n}% ${s}%`}},CU={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=Ki.parse(i);if(o.length>5)return s;const c=Ki.createTransformer(i),u=typeof o[0]!="number"?1:0,h=n.x.scale*t.x,m=n.y.scale*t.y;o[0+u]/=h,o[1+u]/=m;const d=tn(h,m,.5);return typeof o[2+u]=="number"&&(o[2+u]/=d),typeof o[3+u]=="number"&&(o[3+u]/=d),c(o)}},Wm={borderRadius:{...Ll,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ll,borderTopRightRadius:Ll,borderBottomLeftRadius:Ll,borderBottomRightRadius:Ll,boxShadow:CU};function NE(i,{layout:t,layoutId:n}){return Lo.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!Wm[i]||i==="opacity")}function Ug(i,t,n){const s=i.style,o=t?.style,c={};if(!s)return c;for(const u in s)(Bn(s[u])||o&&Bn(o[u])||NE(u,i)||n?.getValue(u)?.liveStyle!==void 0)&&(c[u]=s[u]);return c}function wU(i){return window.getComputedStyle(i)}class DU extends RE{constructor(){super(...arguments),this.type="html",this.renderInstance=UE}readValueFromInstance(t,n){if(Lo.has(n))return this.projection?.isProjecting?Dm(n):KD(t,n);{const s=wU(t),o=(GM(n)?s.getPropertyValue(n):s[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return LE(t,n)}build(t,n,s){Lg(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Ug(t,n,s)}}const LU={offset:"stroke-dashoffset",array:"stroke-dasharray"},UU={offset:"strokeDashoffset",array:"strokeDasharray"};function NU(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?LU:UU;i[c.offset]=`${-s}`,i[c.array]=`${t} ${n}`}const PU=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function PE(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...h},m,d,g){if(Lg(i,h,d),m){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:_,style:v}=i;_.transform&&(v.transform=_.transform,delete _.transform),(v.transform||_.transformOrigin)&&(v.transformOrigin=_.transformOrigin??"50% 50%",delete _.transformOrigin),v.transform&&(v.transformBox=g?.transformBox??"fill-box",delete _.transformBox);for(const y of PU)_[y]!==void 0&&(v[y]=_[y],delete _[y]);t!==void 0&&(_.x=t),n!==void 0&&(_.y=n),s!==void 0&&(_.scale=s),o!==void 0&&NU(_,o,c,u,!1)}const OE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),FE=i=>typeof i=="string"&&i.toLowerCase()==="svg";function OU(i,t,n,s){UE(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(OE.has(o)?o:bg(o),t.attrs[o])}function IE(i,t,n){const s=Ug(i,t,n);for(const o in i)if(Bn(i[o])||Bn(t[o])){const c=Do.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}class FU extends RE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Mn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Lo.has(n)){const s=gE(n);return s&&s.default||0}return n=OE.has(n)?n:bg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return IE(t,n,s)}build(t,n,s){PE(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){OU(t,n,s,o)}mount(t){this.isSVGTag=FE(t.tagName),super.mount(t)}}const IU=Dg.length;function BE(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?BE(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<IU;n++){const s=Dg[n],o=i.props[s];(Wl(o)||o===!1)&&(t[s]=o)}return t}function zE(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const BU=[...wg].reverse(),zU=wg.length;function VU(i){return t=>Promise.all(t.map(({animation:n,options:s})=>FL(i,n,s)))}function HU(i){let t=VU(i),n=$y(),s=!0;const o=m=>(d,g)=>{const _=xo(i,g,m==="exit"?i.presenceContext?.custom:void 0);if(_){const{transition:v,transitionEnd:y,...E}=_;d={...d,...E,...y}}return d};function c(m){t=m(i)}function u(m){const{props:d}=i,g=BE(i.parent)||{},_=[],v=new Set;let y={},E=1/0;for(let S=0;S<zU;S++){const x=BU[S],C=n[x],D=d[x]!==void 0?d[x]:g[x],L=Wl(D),O=x===m?C.isActive:null;O===!1&&(E=S);let z=D===g[x]&&D!==d[x]&&L;if(z&&s&&i.manuallyAnimateOnMount&&(z=!1),C.protectedKeys={...y},!C.isActive&&O===null||!D&&!C.prevProp||Mf(D)||typeof D=="boolean")continue;if(x==="exit"&&C.isActive&&O!==!0){C.prevResolvedValues&&(y={...y,...C.prevResolvedValues});continue}const B=GU(C.prevProp,D);let T=B||x===m&&C.isActive&&!z&&L||S>E&&L,U=!1;const lt=Array.isArray(D)?D:[D];let H=lt.reduce(o(x),{});O===!1&&(H={});const{prevResolvedValues:Z={}}=C,nt={...Z,...H},ut=I=>{T=!0,v.has(I)&&(U=!0,v.delete(I)),C.needsAnimating[I]=!0;const st=i.getValue(I);st&&(st.liveStyle=!1)};for(const I in nt){const st=H[I],ht=Z[I];if(y.hasOwnProperty(I))continue;let St=!1;Fm(st)&&Fm(ht)?St=!zE(st,ht):St=st!==ht,St?st!=null?ut(I):v.add(I):st!==void 0&&v.has(I)?ut(I):C.protectedKeys[I]=!0}C.prevProp=D,C.prevResolvedValues=H,C.isActive&&(y={...y,...H}),s&&i.blockInitialAnimation&&(T=!1);const Q=z&&B;T&&(!Q||U)&&_.push(...lt.map(I=>{const st={type:x};if(typeof I=="string"&&s&&!Q&&i.manuallyAnimateOnMount&&i.parent){const{parent:ht}=i,St=xo(ht,I);if(ht.enteringChildren&&St){const{delayChildren:F}=St.transition||{};st.delay=oE(ht.enteringChildren,i,F)}}return{animation:I,options:st}}))}if(v.size){const S={};if(typeof d.initial!="boolean"){const x=xo(i,Array.isArray(d.initial)?d.initial[0]:d.initial);x&&x.transition&&(S.transition=x.transition)}v.forEach(x=>{const C=i.getBaseTarget(x),D=i.getValue(x);D&&(D.liveStyle=!0),S[x]=C??null}),_.push({animation:S})}let A=!!_.length;return s&&(d.initial===!1||d.initial===d.animate)&&!i.manuallyAnimateOnMount&&(A=!1),s=!1,A?t(_):Promise.resolve()}function h(m,d){if(n[m].isActive===d)return Promise.resolve();i.variantChildren?.forEach(_=>_.animationState?.setActive(m,d)),n[m].isActive=d;const g=u(m);for(const _ in n)n[_].protectedKeys={};return g}return{animateChanges:u,setActive:h,setAnimateFunction:c,getState:()=>n,reset:()=>{n=$y()}}}function GU(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!zE(t,i):!1}function nr(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $y(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}function tS(i,t){i.min=t.min,i.max=t.max}function Bi(i,t){tS(i.x,t.x),tS(i.y,t.y)}function eS(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}const VE=1e-4,kU=1-VE,XU=1+VE,HE=.01,WU=0-HE,jU=0+HE;function jn(i){return i.max-i.min}function qU(i,t,n){return Math.abs(i-t)<=n}function nS(i,t,n,s=.5){i.origin=s,i.originPoint=tn(t.min,t.max,i.origin),i.scale=jn(n)/jn(t),i.translate=tn(n.min,n.max,i.origin)-i.originPoint,(i.scale>=kU&&i.scale<=XU||isNaN(i.scale))&&(i.scale=1),(i.translate>=WU&&i.translate<=jU||isNaN(i.translate))&&(i.translate=0)}function Il(i,t,n,s){nS(i.x,t.x,n.x,s?s.originX:void 0),nS(i.y,t.y,n.y,s?s.originY:void 0)}function iS(i,t,n){i.min=n.min+t.min,i.max=i.min+jn(t)}function YU(i,t,n){iS(i.x,t.x,n.x),iS(i.y,t.y,n.y)}function aS(i,t,n){i.min=t.min-n.min,i.max=i.min+jn(t)}function mf(i,t,n){aS(i.x,t.x,n.x),aS(i.y,t.y,n.y)}function sS(i,t,n,s,o){return i-=t,i=pf(i,1/n,s),o!==void 0&&(i=pf(i,1/o,s)),i}function KU(i,t=0,n=1,s=.5,o,c=i,u=i){if(la.test(t)&&(t=parseFloat(t),t=tn(u.min,u.max,t/100)-u.min),typeof t!="number")return;let h=tn(c.min,c.max,s);i===c&&(h-=t),i.min=sS(i.min,t,n,h,o),i.max=sS(i.max,t,n,h,o)}function rS(i,t,[n,s,o],c,u){KU(i,t[n],t[s],t[o],t.scale,c,u)}const ZU=["x","scaleX","originX"],QU=["y","scaleY","originY"];function oS(i,t,n,s){rS(i.x,t,ZU,n?n.x:void 0,s?s.x:void 0),rS(i.y,t,QU,n?n.y:void 0,s?s.y:void 0)}function lS(i){return i.translate===0&&i.scale===1}function GE(i){return lS(i.x)&&lS(i.y)}function cS(i,t){return i.min===t.min&&i.max===t.max}function JU(i,t){return cS(i.x,t.x)&&cS(i.y,t.y)}function uS(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function kE(i,t){return uS(i.x,t.x)&&uS(i.y,t.y)}function fS(i){return jn(i.x)/jn(i.y)}function hS(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}function aa(i){return[i("x"),i("y")]}function $U(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=n?.z||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:g,rotateX:_,rotateY:v,skewX:y,skewY:E}=n;d&&(s=`perspective(${d}px) ${s}`),g&&(s+=`rotate(${g}deg) `),_&&(s+=`rotateX(${_}deg) `),v&&(s+=`rotateY(${v}deg) `),y&&(s+=`skewX(${y}deg) `),E&&(s+=`skewY(${E}deg) `)}const h=i.x.scale*t.x,m=i.y.scale*t.y;return(h!==1||m!==1)&&(s+=`scale(${h}, ${m})`),s||"none"}const XE=["TopLeft","TopRight","BottomLeft","BottomRight"],tN=XE.length,dS=i=>typeof i=="string"?parseFloat(i):i,pS=i=>typeof i=="number"||Xt.test(i);function eN(i,t,n,s,o,c){o?(i.opacity=tn(0,n.opacity??1,nN(s)),i.opacityExit=tn(t.opacity??1,0,iN(s))):c&&(i.opacity=tn(t.opacity??1,n.opacity??1,s));for(let u=0;u<tN;u++){const h=`border${XE[u]}Radius`;let m=mS(t,h),d=mS(n,h);if(m===void 0&&d===void 0)continue;m||(m=0),d||(d=0),m===0||d===0||pS(m)===pS(d)?(i[h]=Math.max(tn(dS(m),dS(d),s),0),(la.test(d)||la.test(m))&&(i[h]+="%")):i[h]=d}(t.rotate||n.rotate)&&(i.rotate=tn(t.rotate||0,n.rotate||0,s))}function mS(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const nN=WE(0,.5,FM),iN=WE(.5,.95,Ai);function WE(i,t,n){return s=>s<i?0:s>t?1:n(Gl(i,t,s))}function aN(i,t,n){const s=Bn(i)?i:To(i);return s.start(Mg("",s,t,n)),s.animation}function jl(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}const sN=(i,t)=>i.depth-t.depth;class rN{constructor(){this.children=[],this.isDirty=!1}add(t){og(this.children,t),this.isDirty=!0}remove(t){cf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(sN),this.isDirty=!1,this.children.forEach(t)}}function oN(i,t){const n=Wn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(ws(s),i(c-t))};return je.setup(s,!0),()=>ws(s)}function tf(i){return Bn(i)?i.get():i}class lN{constructor(){this.members=[]}add(t){og(this.members,t);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===t||s===this.lead||s===this.prevLead)continue;const o=s.instance;o&&o.isConnected===!1&&s.isPresent!==!1&&!s.snapshot&&cf(this.members,s)}t.scheduleRender()}remove(t){if(cf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o],u=c.instance;if(c.isPresent!==!1&&(!u||u.isConnected!==!1)){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender();const o=s.options.layoutDependency,c=t.options.layoutDependency;if(!(o!==void 0&&c!==void 0&&o===c)){const m=s.instance;m&&m.isConnected===!1&&!s.snapshot||(t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0))}const{crossfade:h}=t.options;h===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ef={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Mp=["","X","Y","Z"],cN=1e3;let uN=0;function Ep(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function jE(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=hE(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",je,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&jE(s)}function qE({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},h=t?.()){this.id=uN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(dN),this.nodes.forEach(vN),this.nodes.forEach(_N),this.nodes.forEach(pN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new rN)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new cg),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const m=this.eventHandlers.get(u);m&&m.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Cg(u)&&!hU(u),this.instance=u;const{layoutId:h,layout:m,visualElement:d}=this.options;if(d&&!d.current&&d.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),i){let g,_=0;const v=()=>this.root.updateBlockedByResize=!1;je.read(()=>{_=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==_&&(_=y,this.root.updateBlockedByResize=!0,g&&g(),g=oN(v,250),ef.hasAnimatedSinceResize&&(ef.hasAnimatedSinceResize=!1,this.nodes.forEach(_S)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&d&&(h||m)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:_,hasRelativeLayoutChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||EN,{onLayoutAnimationStart:A,onLayoutAnimationComplete:S}=d.getProps(),x=!this.targetLayout||!kE(this.targetLayout,y),C=!_&&v;if(this.options.layoutRoot||this.resumeFrom||C||_&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Sg(E,"layout"),onPlay:A,onComplete:S};(d.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(g,C)}else _||_S(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ws(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xN),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const _=this.path[g];_.shouldResetTransform=!0,_.updateScroll("snapshot"),_.options.layoutRoot&&_.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gS);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(vS);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gN),this.nodes.forEach(fN),this.nodes.forEach(hN)):this.nodes.forEach(vS),this.clearAllSnapshots();const h=Wn.now();Ln.delta=fa(0,1e3/60,h-Ln.timestamp),Ln.timestamp=h,Ln.isProcessing=!0,pp.update.process(Ln),pp.preRender.process(Ln),pp.render.process(Ln),Ln.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ag.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mN),this.sharedNodes.forEach(yN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,je.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){je.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!jn(this.snapshot.measuredBox.x)&&!jn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Mn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!GE(this.projectionDelta),m=this.getTransformTemplate(),d=m?m(this.latestValues,""):void 0,g=d!==this.prevTransformTemplateValue;u&&this.instance&&(h||ar(this.latestValues)||g)&&(o(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return u&&(m=this.removeTransform(m)),bN(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Mn();const h=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(TN))){const{scroll:d}=this.root;d&&(mo(h.x,d.offset.x),mo(h.y,d.offset.y))}return h}removeElementScroll(u){const h=Mn();if(Bi(h,u),this.scroll?.wasRoot)return h;for(let m=0;m<this.path.length;m++){const d=this.path[m],{scroll:g,options:_}=d;d!==this.root&&g&&_.layoutScroll&&(g.wasRoot&&Bi(h,u),mo(h.x,g.offset.x),mo(h.y,g.offset.y))}return h}applyTransform(u,h=!1){const m=Mn();Bi(m,u);for(let d=0;d<this.path.length;d++){const g=this.path[d];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&go(m,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ar(g.latestValues)&&go(m,g.latestValues)}return ar(this.latestValues)&&go(m,this.latestValues),m}removeTransform(u){const h=Mn();Bi(h,u);for(let m=0;m<this.path.length;m++){const d=this.path[m];if(!d.instance||!ar(d.latestValues))continue;km(d.latestValues)&&d.updateSnapshot();const g=Mn(),_=d.measurePageBox();Bi(g,_),oS(h,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,g)}return ar(this.latestValues)&&oS(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ln.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:_}=this.options;if(!this.layout||!(g||_))return;this.resolvedRelativeTargetAt=Ln.timestamp;const v=this.getClosestProjectingParent();v&&this.linkedParentVersion!==v.layoutVersion&&!v.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(v&&v.layout?this.createRelativeTarget(v,this.layout.layoutBox,v.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Mn(),this.targetWithTransforms=Mn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),YU(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Bi(this.target,this.layout.layoutBox),DE(this.target,this.targetDelta)):Bi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?this.createRelativeTarget(v,this.target,v.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||km(this.parent.latestValues)||wE(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,h,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mn(),this.relativeTargetOrigin=Mn(),mf(this.relativeTargetOrigin,h,m),Bi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const u=this.getLead(),h=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Ln.timestamp&&(m=!1),m)return;const{layout:d,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||g))return;Bi(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,v=this.treeScale.y;EU(this.layoutCorrected,this.treeScale,this.path,h),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Mn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(eS(this.prevProjectionDelta.x,this.projectionDelta.x),eS(this.prevProjectionDelta.y,this.projectionDelta.y)),Il(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==v||!hS(this.projectionDelta.x,this.prevProjectionDelta.x)||!hS(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=po(),this.projectionDelta=po(),this.projectionDeltaWithTransform=po()}setAnimationOrigin(u,h=!1){const m=this.snapshot,d=m?m.latestValues:{},g={...this.latestValues},_=po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const v=Mn(),y=m?m.source:void 0,E=this.layout?this.layout.source:void 0,A=y!==E,S=this.getStack(),x=!S||S.members.length<=1,C=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(MN));this.animationProgress=0;let D;this.mixTargetDelta=L=>{const O=L/1e3;xS(_.x,u.x,O),xS(_.y,u.y,O),this.setTargetDelta(_),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mf(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),SN(this.relativeTarget,this.relativeTargetOrigin,v,O),D&&JU(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Mn()),Bi(D,this.relativeTarget)),A&&(this.animationValues=g,eN(g,d,this.latestValues,O,C,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ws(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=je.update(()=>{ef.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=To(0)),this.motionValue.jump(0,!1),this.currentAnimation=aN(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:h=>{this.mixTargetDelta(h),u.onUpdate&&u.onUpdate(h)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:m,layout:d,latestValues:g}=u;if(!(!h||!m||!d)){if(this!==u&&this.layout&&d&&YE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){m=this.target||Mn();const _=jn(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+_;const v=jn(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+v}Bi(h,m),go(h,g),Il(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new lN),this.sharedNodes.get(u).add(h);const d=h.options.initialPromotionConfig;h.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:m}={}){const d=this.getStack();d&&d.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const d={};m.z&&Ep("z",u,d,this.animationValues);for(let g=0;g<Mp.length;g++)Ep(`rotate${Mp[g]}`,u,d,this.animationValues),Ep(`skew${Mp[g]}`,u,d,this.animationValues);u.render();for(const g in d)u.setStaticValue(g,d[g]),this.animationValues&&(this.animationValues[g]=d[g]);u.scheduleRender()}applyProjectionStyles(u,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=tf(h?.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=tf(h?.pointerEvents)||""),this.hasProjected&&!ar(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=d.animationValues||d.latestValues;this.applyTransformsToTarget();let _=$U(this.projectionDeltaWithTransform,this.treeScale,g);m&&(_=m(g,_)),u.transform=_;const{x:v,y}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,d.animationValues?u.opacity=d===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=d===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const E in Wm){if(g[E]===void 0)continue;const{correct:A,applyTo:S,isCSSVariable:x}=Wm[E],C=_==="none"?g[E]:A(g[E],d);if(S){const D=S.length;for(let L=0;L<D;L++)u[S[L]]=C}else x?this.options.visualElement.renderState.vars[E]=C:u[E]=C}this.options.layoutId&&(u.pointerEvents=d===this?tf(h?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(gS),this.root.sharedNodes.clear()}}}function fN(i){i.updateLayout()}function hN(i){const t=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:s}=i.layout,{animationType:o}=i.options,c=t.source!==i.layout.source;o==="size"?aa(g=>{const _=c?t.measuredBox[g]:t.layoutBox[g],v=jn(_);_.min=n[g].min,_.max=_.min+v}):YE(o,t.layoutBox,n)&&aa(g=>{const _=c?t.measuredBox[g]:t.layoutBox[g],v=jn(n[g]);_.max=_.min+v,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[g].max=i.relativeTarget[g].min+v)});const u=po();Il(u,n,t.layoutBox);const h=po();c?Il(h,i.applyTransform(s,!0),t.measuredBox):Il(h,n,t.layoutBox);const m=!GE(u);let d=!1;if(!i.resumeFrom){const g=i.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:_,layout:v}=g;if(_&&v){const y=Mn();mf(y,t.layoutBox,_.layoutBox);const E=Mn();mf(E,n,v.layoutBox),kE(y,E)||(d=!0),g.options.layoutRoot&&(i.relativeTarget=E,i.relativeTargetOrigin=y,i.relativeParent=g)}}}i.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:h,layoutDelta:u,hasLayoutChanged:m,hasRelativeLayoutChanged:d})}else if(i.isLead()){const{onExitComplete:n}=i.options;n&&n()}i.options.transition=void 0}function dN(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function pN(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function mN(i){i.clearSnapshot()}function gS(i){i.clearMeasurements()}function vS(i){i.isLayoutDirty=!1}function gN(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function _S(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function vN(i){i.resolveTargetDelta()}function _N(i){i.calcProjection()}function xN(i){i.resetSkewAndRotation()}function yN(i){i.removeLeadSnapshot()}function xS(i,t,n){i.translate=tn(t.translate,0,n),i.scale=tn(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function yS(i,t,n,s){i.min=tn(t.min,n.min,s),i.max=tn(t.max,n.max,s)}function SN(i,t,n,s){yS(i.x,t.x,n.x,s),yS(i.y,t.y,n.y,s)}function MN(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const EN={duration:.45,ease:[.4,0,.1,1]},SS=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),MS=SS("applewebkit/")&&!SS("chrome/")?Math.round:Ai;function ES(i){i.min=MS(i.min),i.max=MS(i.max)}function bN(i){ES(i.x),ES(i.y)}function YE(i,t,n){return i==="position"||i==="preserve-aspect"&&!qU(fS(t),fS(n),.2)}function TN(i){return i!==i.root&&i.scroll?.wasRoot}const AN=qE({attachResizeListener:(i,t)=>jl(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),bp={current:void 0},KE=qE({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!bp.current){const i=new AN({});i.mount(window),i.setOptions({layoutScroll:!0}),bp.current=i}return bp.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),Ng=Lt.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function bS(i,t){if(typeof i=="function")return i(t);i!=null&&(i.current=t)}function RN(...i){return t=>{let n=!1;const s=i.map(o=>{const c=bS(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<s.length;o++){const c=s[o];typeof c=="function"?c():bS(i[o],null)}}}}function CN(...i){return Lt.useCallback(RN(...i),i)}class wN extends Lt.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,o=Hm(s)&&s.offsetWidth||0,c=Hm(s)&&s.offsetHeight||0,u=this.props.sizeRef.current;u.height=n.offsetHeight||0,u.width=n.offsetWidth||0,u.top=n.offsetTop,u.left=n.offsetLeft,u.right=o-u.width-u.left,u.bottom=c-u.height-u.top}return null}componentDidUpdate(){}render(){return this.props.children}}function DN({children:i,isPresent:t,anchorX:n,anchorY:s,root:o,pop:c}){const u=Lt.useId(),h=Lt.useRef(null),m=Lt.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:d}=Lt.useContext(Ng),g=i.props?.ref??i?.ref,_=CN(h,g);return Lt.useInsertionEffect(()=>{const{width:v,height:y,top:E,left:A,right:S,bottom:x}=m.current;if(t||c===!1||!h.current||!v||!y)return;const C=n==="left"?`left: ${A}`:`right: ${S}`,D=s==="bottom"?`bottom: ${x}`:`top: ${E}`;h.current.dataset.motionPopId=u;const L=document.createElement("style");d&&(L.nonce=d);const O=o??document.head;return O.appendChild(L),L.sheet&&L.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${v}px !important;
            height: ${y}px !important;
            ${C}px !important;
            ${D}px !important;
          }
        `),()=>{O.contains(L)&&O.removeChild(L)}},[t]),rt.jsx(wN,{isPresent:t,childRef:h,sizeRef:m,pop:c,children:c===!1?i:Lt.cloneElement(i,{ref:_})})}const LN=({children:i,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:c,mode:u,anchorX:h,anchorY:m,root:d})=>{const g=rg(UN),_=Lt.useId();let v=!0,y=Lt.useMemo(()=>(v=!1,{id:_,initial:t,isPresent:n,custom:o,onExitComplete:E=>{g.set(E,!0);for(const A of g.values())if(!A)return;s&&s()},register:E=>(g.set(E,!1),()=>g.delete(E))}),[n,g,s]);return c&&v&&(y={...y}),Lt.useMemo(()=>{g.forEach((E,A)=>g.set(A,!1))},[n]),Lt.useEffect(()=>{!n&&!g.size&&s&&s()},[n]),i=rt.jsx(DN,{pop:u==="popLayout",isPresent:n,anchorX:h,anchorY:m,root:d,children:i}),rt.jsx(Sf.Provider,{value:y,children:i})};function UN(){return new Map}function ZE(i=!0){const t=Lt.useContext(Sf);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=Lt.useId();Lt.useEffect(()=>{if(i)return o(c)},[i]);const u=Lt.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const Hu=i=>i.key||"";function TS(i){const t=[];return Lt.Children.forEach(i,n=>{Lt.isValidElement(n)&&t.push(n)}),t}const NN=({children:i,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:h="left",anchorY:m="top",root:d})=>{const[g,_]=ZE(u),v=Lt.useMemo(()=>TS(i),[i]),y=u&&!g?[]:v.map(Hu),E=Lt.useRef(!0),A=Lt.useRef(v),S=rg(()=>new Map),x=Lt.useRef(new Set),[C,D]=Lt.useState(v),[L,O]=Lt.useState(v);bM(()=>{E.current=!1,A.current=v;for(let T=0;T<L.length;T++){const U=Hu(L[T]);y.includes(U)?(S.delete(U),x.current.delete(U)):S.get(U)!==!0&&S.set(U,!1)}},[L,y.length,y.join("-")]);const z=[];if(v!==C){let T=[...v];for(let U=0;U<L.length;U++){const lt=L[U],H=Hu(lt);y.includes(H)||(T.splice(U,0,lt),z.push(lt))}return c==="wait"&&z.length&&(T=z),O(TS(T)),D(v),null}const{forceRender:B}=Lt.useContext(sg);return rt.jsx(rt.Fragment,{children:L.map(T=>{const U=Hu(T),lt=u&&!g?!1:v===L||y.includes(U),H=()=>{if(x.current.has(U))return;if(x.current.add(U),S.has(U))S.set(U,!0);else return;let Z=!0;S.forEach(nt=>{nt||(Z=!1)}),Z&&(B?.(),O(A.current),u&&_?.(),s&&s())};return rt.jsx(LN,{isPresent:lt,initial:!E.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:c,root:d,onExitComplete:lt?void 0:H,anchorX:h,anchorY:m,children:T},U)})})},QE=Lt.createContext({strict:!1}),AS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let RS=!1;function PN(){if(RS)return;const i={};for(const t in AS)i[t]={isEnabled:n=>AS[t].some(s=>!!n[s])};AE(i),RS=!0}function JE(){return PN(),xU()}function ON(i){const t=JE();for(const n in i)t[n]={...t[n],...i[n]};AE(t)}const FN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function gf(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||FN.has(i)}let $E=i=>!gf(i);function IN(i){typeof i=="function"&&($E=t=>t.startsWith("on")?!gf(t):i(t))}try{IN(require("@emotion/is-prop-valid").default)}catch{}function BN(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||($E(o)||n===!0&&gf(o)||!t&&!gf(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const bf=Lt.createContext({});function zN(i,t){if(Ef(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Wl(n)?n:void 0,animate:Wl(s)?s:void 0}}return i.inherit!==!1?t:{}}function VN(i){const{initial:t,animate:n}=zN(i,Lt.useContext(bf));return Lt.useMemo(()=>({initial:t,animate:n}),[CS(t),CS(n)])}function CS(i){return Array.isArray(i)?i.join(" "):i}const Pg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tb(i,t,n){for(const s in t)!Bn(t[s])&&!NE(s,n)&&(i[s]=t[s])}function HN({transformTemplate:i},t){return Lt.useMemo(()=>{const n=Pg();return Lg(n,t,i),Object.assign({},n.vars,n.style)},[t])}function GN(i,t){const n=i.style||{},s={};return tb(s,n,i),Object.assign(s,HN(i,t)),s}function kN(i,t){const n={},s=GN(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const eb=()=>({...Pg(),attrs:{}});function XN(i,t,n,s){const o=Lt.useMemo(()=>{const c=eb();return PE(c,t,FE(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};tb(c,i.style,i),o.style={...c,...o.style}}return o}const WN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Og(i){return typeof i!="string"||i.includes("-")?!1:!!(WN.indexOf(i)>-1||/[A-Z]/u.test(i))}function jN(i,t,n,{latestValues:s},o,c=!1,u){const m=(u??Og(i)?XN:kN)(t,s,o,i),d=BN(t,typeof i=="string",c),g=i!==Lt.Fragment?{...d,...m,ref:n}:{},{children:_}=t,v=Lt.useMemo(()=>Bn(_)?_.get():_,[_]);return Lt.createElement(i,{...g,children:v})}function qN({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:YN(n,s,o,i),renderState:t()}}function YN(i,t,n,s){const o={},c=s(i,{});for(const v in c)o[v]=tf(c[v]);let{initial:u,animate:h}=i;const m=Ef(i),d=bE(i);t&&d&&!m&&i.inherit!==!1&&(u===void 0&&(u=t.initial),h===void 0&&(h=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const _=g?h:u;if(_&&typeof _!="boolean"&&!Mf(_)){const v=Array.isArray(_)?_:[_];for(let y=0;y<v.length;y++){const E=Eg(i,v[y]);if(E){const{transitionEnd:A,transition:S,...x}=E;for(const C in x){let D=x[C];if(Array.isArray(D)){const L=g?D.length-1:0;D=D[L]}D!==null&&(o[C]=D)}for(const C in A)o[C]=A[C]}}}return o}const nb=i=>(t,n)=>{const s=Lt.useContext(bf),o=Lt.useContext(Sf),c=()=>qN(i,t,s,o);return n?c():rg(c)},KN=nb({scrapeMotionValuesFromProps:Ug,createRenderState:Pg}),ZN=nb({scrapeMotionValuesFromProps:IE,createRenderState:eb}),QN=Symbol.for("motionComponentSymbol");function JN(i,t,n){const s=Lt.useRef(n);Lt.useInsertionEffect(()=>{s.current=n});const o=Lt.useRef(null);return Lt.useCallback(c=>{c&&i.onMount?.(c),t&&(c?t.mount(c):t.unmount());const u=s.current;if(typeof u=="function")if(c){const h=u(c);typeof h=="function"&&(o.current=h)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[t])}const ib=Lt.createContext({});function uo(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function $N(i,t,n,s,o,c){const{visualElement:u}=Lt.useContext(bf),h=Lt.useContext(QE),m=Lt.useContext(Sf),d=Lt.useContext(Ng),g=d.reducedMotion,_=d.skipAnimations,v=Lt.useRef(null),y=Lt.useRef(!1);s=s||h.renderer,!v.current&&s&&(v.current=s(i,{visualState:t,parent:u,props:n,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g,skipAnimations:_,isSVG:c}),y.current&&v.current&&(v.current.manuallyAnimateOnMount=!0));const E=v.current,A=Lt.useContext(ib);E&&!E.projection&&o&&(E.type==="html"||E.type==="svg")&&tP(v.current,n,o,A);const S=Lt.useRef(!1);Lt.useInsertionEffect(()=>{E&&S.current&&E.update(n,m)});const x=n[fE],C=Lt.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return bM(()=>{y.current=!0,E&&(S.current=!0,window.MotionIsMounted=!0,E.updateFeatures(),E.scheduleRenderMicrotask(),C.current&&E.animationState&&E.animationState.animateChanges())}),Lt.useEffect(()=>{E&&(!C.current&&E.animationState&&E.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),C.current=!1),E.enteringChildren=void 0)}),E}function tP(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:h,layoutScroll:m,layoutRoot:d,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:ab(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||h&&uo(h),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:m,layoutRoot:d})}function ab(i){if(i)return i.options.allowProjection!==!1?i.projection:ab(i.parent)}function Tp(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&ON(s);const c=n?n==="svg":Og(i),u=c?ZN:KN;function h(d,g){let _;const v={...Lt.useContext(Ng),...d,layoutId:eP(d)},{isStatic:y}=v,E=VN(d),A=u(d,y);if(!y&&EM){nP();const S=iP(v);_=S.MeasureLayout,E.visualElement=$N(i,A,v,o,S.ProjectionNode,c)}return rt.jsxs(bf.Provider,{value:E,children:[_&&E.visualElement?rt.jsx(_,{visualElement:E.visualElement,...v}):null,jN(i,d,JN(A,E.visualElement,g),A,y,t,c)]})}h.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const m=Lt.forwardRef(h);return m[QN]=i,m}function eP({layoutId:i}){const t=Lt.useContext(sg).id;return t&&i!==void 0?t+"-"+i:i}function nP(i,t){Lt.useContext(QE).strict}function iP(i){const t=JE(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n?.isEnabled(i)||s?.isEnabled(i)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function aP(i,t){if(typeof Proxy>"u")return Tp;const n=new Map,s=(c,u)=>Tp(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,Tp(u,void 0,i,t)),n.get(u))})}const sP=(i,t)=>t.isSVG??Og(i)?new FU(t):new DU(t,{allowProjection:i!==Lt.Fragment});class rP extends Ds{constructor(t){super(t),t.animationState||(t.animationState=HU(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Mf(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let oP=0;class lP extends Ds{constructor(){super(...arguments),this.id=oP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const cP={animation:{Feature:rP},exit:{Feature:lP}};function tc(i){return{point:{x:i.pageX,y:i.pageY}}}const uP=i=>t=>Rg(t)&&i(t,tc(t));function Bl(i,t,n,s){return jl(i,t,uP(n),s)}const sb=({current:i})=>i?i.ownerDocument.defaultView:null,wS=(i,t)=>Math.abs(i-t);function fP(i,t){const n=wS(i.x,t.x),s=wS(i.y,t.y);return Math.sqrt(n**2+s**2)}const DS=new Set(["auto","scroll"]);class rb{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Rp(this.lastMoveEventInfo,this.history),E=this.startEvent!==null,A=fP(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!E&&!A)return;const{point:S}=y,{timestamp:x}=Ln;this.history.push({...S,timestamp:x});const{onStart:C,onMove:D}=this.handlers;E||(C&&C(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,y)},this.handlePointerMove=(y,E)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Ap(E,this.transformPagePoint),je.update(this.updatePoint,!0)},this.handlePointerUp=(y,E)=>{this.end();const{onEnd:A,onSessionEnd:S,resumeAnimation:x}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Rp(y.type==="pointercancel"?this.lastMoveEventInfo:Ap(E,this.transformPagePoint),this.history);this.startEvent&&A&&A(y,C),S&&S(y,C)},!Rg(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const m=tc(t),d=Ap(m,this.transformPagePoint),{point:g}=d,{timestamp:_}=Ln;this.history=[{...g,timestamp:_}];const{onSessionStart:v}=n;v&&v(t,Rp(d,this.history)),this.removeListeners=Ql(Bl(this.contextWindow,"pointermove",this.handlePointerMove),Bl(this.contextWindow,"pointerup",this.handlePointerUp),Bl(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(DS.has(s.overflowX)||DS.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},c={x:o.x-n.x,y:o.y-n.y};c.x===0&&c.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(t,o),je.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ws(this.updatePoint)}}function Ap(i,t){return t?{point:t(i.point)}:i}function LS(i,t){return{x:i.x-t.x,y:i.y-t.y}}function Rp({point:i},t){return{point:i,delta:LS(i,ob(t)),offset:LS(i,hP(t)),velocity:dP(t,.1)}}function hP(i){return i[0]}function ob(i){return i[i.length-1]}function dP(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=ob(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>Yi(t)));)n--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&o.timestamp-s.timestamp>Yi(t)*2&&(s=i[1]);const c=Ti(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function pP(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?tn(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?tn(n,i,s.max):Math.min(i,n)),i}function US(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function mP(i,{top:t,left:n,bottom:s,right:o}){return{x:US(i.x,n,o),y:US(i.y,t,s)}}function NS(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function gP(i,t){return{x:NS(i.x,t.x),y:NS(i.y,t.y)}}function vP(i,t){let n=.5;const s=jn(i),o=jn(t);return o>s?n=Gl(t.min,t.max-s,i.min):s>o&&(n=Gl(i.min,i.max-o,t.min)),fa(0,1,n)}function _P(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const jm=.35;function xP(i=jm){return i===!1?i=0:i===!0&&(i=jm),{x:PS(i,"left","right"),y:PS(i,"top","bottom")}}function PS(i,t,n){return{min:OS(i,t),max:OS(i,n)}}function OS(i,t){return typeof i=="number"?i:i[t]||0}const yP=new WeakMap;class SP{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=_=>{n&&this.snapToCursor(tc(_).point),this.stopAnimation()},u=(_,v)=>{const{drag:y,dragPropagation:E,onDragStart:A}=this.getProps();if(y&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=KL(y),!this.openDragLock))return;this.latestPointerEvent=_,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),aa(x=>{let C=this.getAxisMotionValue(x).get()||0;if(la.test(C)){const{projection:D}=this.visualElement;if(D&&D.layout){const L=D.layout.layoutBox[x];L&&(C=jn(L)*(parseFloat(C)/100))}}this.originPoint[x]=C}),A&&je.update(()=>A(_,v),!1,!0),Im(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},h=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v;const{dragPropagation:y,dragDirectionLock:E,onDirectionLock:A,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=v;if(E&&this.currentDirection===null){this.currentDirection=EP(x),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",v.point,x),this.updateAxis("y",v.point,x),this.visualElement.render(),S&&je.update(()=>S(_,v),!1,!0)},m=(_,v)=>{this.latestPointerEvent=_,this.latestPanInfo=v,this.stop(_,v),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:_}=this.getProps();(_||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new rb(t,{onSessionStart:c,onStart:u,onMove:h,onSessionEnd:m,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:sb(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&je.postRender(()=>h(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!Gu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=pP(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;t&&uo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=mP(s.layoutBox,t):this.constraints=!1,this.elastic=xP(n),o!==this.constraints&&!uo(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&aa(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=_P(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!uo(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=bU(s,o.root,this.visualElement.getTransformPagePoint());let u=gP(o.layout.layoutBox,c);if(n){const h=n(SU(u));this.hasMutatedConstraints=!!h,h&&(u=CE(h))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},d=aa(g=>{if(!Gu(g,n,this.currentDirection))return;let _=m&&m[g]||{};u&&(_={min:0,max:0});const v=o?200:1e6,y=o?40:1e7,E={type:"inertia",velocity:s?t[g]:0,bounceStiffness:v,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,..._};return this.startAxisValueAnimation(g,E)});return Promise.all(d).then(h)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return Im(this.visualElement,t),s.start(Mg(t,s,0,n,this.visualElement,!1))}stopAnimation(){aa(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){aa(n=>{const{drag:s}=this.getProps();if(!Gu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:h}=o.layout.layoutBox[n],m=c.get()||0;c.set(t[n]-tn(u,h,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!uo(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};aa(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const m=h.get();o[u]=vP({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),aa(u=>{if(!Gu(u,t,null))return;const h=this.getAxisMotionValue(u),{min:m,max:d}=this.constraints[u];h.set(tn(m,d,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yP.set(this.visualElement,this);const t=this.visualElement.current,n=Bl(t,"pointerdown",d=>{const{drag:g,dragListener:_=!0}=this.getProps(),v=d.target,y=v!==t&&eU(v);g&&_&&!y&&this.start(d)});let s;const o=()=>{const{dragConstraints:d}=this.getProps();uo(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),s||(s=MP(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),je.read(o);const h=jl(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:g})=>{this.isDragging&&g&&(aa(_=>{const v=this.getAxisMotionValue(_);v&&(this.originPoint[_]+=d[_].translate,v.set(v.get()+d[_].translate))}),this.visualElement.render())}));return()=>{h(),n(),u(),m&&m(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=jm,dragMomentum:h=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:h}}}function FS(i){let t=!0;return()=>{if(t){t=!1;return}i()}}function MP(i,t,n){const s=ky(i,FS(n)),o=ky(t,FS(n));return()=>{s(),o()}}function Gu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function EP(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class bP extends Ds{constructor(t){super(t),this.removeGroupControls=Ai,this.removeListeners=Ai,this.controls=new SP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ai}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Cp=i=>(t,n)=>{i&&je.update(()=>i(t,n),!1,!0)};class TP extends Ds{constructor(){super(...arguments),this.removePointerDownListener=Ai}onPointerDown(t){this.session=new rb(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sb(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Cp(t),onStart:Cp(n),onMove:Cp(s),onEnd:(c,u)=>{delete this.session,o&&je.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Bl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let wp=!1;class AP extends Lt.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),wp&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ef.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,t.layoutDependency!==n&&u.setOptions({...u.options,layoutDependency:n}),wp=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||je.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Ag.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;wp=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function lb(i){const[t,n]=ZE(),s=Lt.useContext(sg);return rt.jsx(AP,{...i,layoutGroup:s,switchLayoutGroup:Lt.useContext(ib),isPresent:t,safeToRemove:n})}const RP={pan:{Feature:TP},drag:{Feature:bP,ProjectionNode:KE,MeasureLayout:lb}};function IS(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&je.postRender(()=>c(t,tc(t)))}class CP extends Ds{mount(){const{current:t}=this.node;t&&(this.unmount=QL(t,(n,s)=>(IS(this.node,s,"Start"),o=>IS(this.node,o,"End"))))}unmount(){}}class wP extends Ds{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ql(jl(this.node.current,"focus",()=>this.onFocus()),jl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function BS(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&je.postRender(()=>c(t,tc(t)))}class DP extends Ds{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=iU(t,(o,c)=>(BS(this.node,c,"Start"),(u,{success:h})=>BS(this.node,u,h?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:s?.tap===!1})}unmount(){}}const qm=new WeakMap,Dp=new WeakMap,LP=i=>{const t=qm.get(i.target);t&&t(i)},UP=i=>{i.forEach(LP)};function NP({root:i,...t}){const n=i||document;Dp.has(n)||Dp.set(n,{});const s=Dp.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(UP,{root:i,...t})),s[o]}function PP(i,t,n){const s=NP(t);return qm.set(i,n),s.observe(i),()=>{qm.delete(i),s.unobserve(i)}}const OP={some:0,all:1};class FP extends Ds{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:OP[o]},h=m=>{const{isIntersecting:d}=m;if(this.isInView===d||(this.isInView=d,c&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:g,onViewportLeave:_}=this.node.getProps(),v=d?g:_;v&&v(m)};return PP(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(IP(t,n))&&this.startObserver()}unmount(){}}function IP({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const BP={inView:{Feature:FP},tap:{Feature:DP},focus:{Feature:wP},hover:{Feature:CP}},zP={layout:{ProjectionNode:KE,MeasureLayout:lb}},VP={...cP,...BP,...RP,...zP},Fe=aP(VP,sP);const cb=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();const HP=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const GP=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());const zS=i=>{const t=GP(i);return t.charAt(0).toUpperCase()+t.slice(1)};var kP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const XP=i=>{for(const t in i)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const WP=Lt.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...h},m)=>Lt.createElement("svg",{ref:m,...kP,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:cb("lucide",o),...!c&&!XP(h)&&{"aria-hidden":"true"},...h},[...u.map(([d,g])=>Lt.createElement(d,g)),...Array.isArray(c)?c:[c]]));const Ri=(i,t)=>{const n=Lt.forwardRef(({className:s,...o},c)=>Lt.createElement(WP,{ref:c,iconNode:t,className:cb(`lucide-${HP(zS(i))}`,`lucide-${i}`,s),...o}));return n.displayName=zS(i),n};const jP=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],qP=Ri("arrow-up-right",jP);const YP=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ub=Ri("cpu",YP);const KP=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ZP=Ri("database",KP);const QP=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],JP=Ri("external-link",QP);const $P=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],tO=Ri("github",$P);const eO=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nO=Ri("menu",eO);const iO=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],VS=Ri("moon",iO);const aO=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],sO=Ri("network",aO);const rO=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],oO=Ri("server",rO);const lO=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],HS=Ri("sun",lO);const cO=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],uO=Ri("terminal",cO);const fO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hO=Ri("x",fO),dO=()=>{const i=["SOFTWARE ENGINEER","DEVOPS SPECIALIST","FULL-STACK DEVELOPER","SYSTEM ADMINISTRATOR"];return rt.jsxs("section",{className:"relative min-h-screen px-6 flex flex-col items-center justify-center overflow-hidden pt-32 z-10 bg-grid",children:[rt.jsxs(Fe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1,ease:[.16,1,.3,1]},className:"w-full max-w-7xl mx-auto flex flex-col items-center text-center relative z-10",children:[rt.jsxs(Fe.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"flex gap-4 mb-20 md:mb-24",children:[rt.jsxs("div",{className:"tech-tag text-slate-500",children:[rt.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow"}),"SYS.STATUS ",rt.jsx("span",{className:"text-emerald-500 ml-2",children:"ONLINE"})]}),rt.jsxs("div",{className:"tech-tag text-slate-500 hidden sm:flex",children:[rt.jsx(uO,{className:"w-3 h-3"}),"V_2.0.4.R"]})]}),rt.jsxs(Fe.div,{initial:{opacity:0,y:30,filter:"blur(10px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:1,delay:.4,ease:[.16,1,.3,1]},className:"relative inline-block",children:[rt.jsx("div",{className:"absolute -inset-4 bg-primary-500/10 blur-2xl rounded-full"}),rt.jsxs("span",{className:"relative text-[10px] md:text-sm font-bold tracking-[0.6em] uppercase mb-8 text-primary-500 bg-primary-500/10 px-6 py-2 rounded-sm border border-primary-500/30 flex items-center justify-center gap-3",children:[rt.jsx(ub,{className:"w-4 h-4"}),"Software & Infrastructure Engineering"]})]}),rt.jsxs(Fe.h1,{className:"text-5xl sm:text-7xl lg:text-8xl text-monumental mb-6 mt-8 relative flex justify-center break-words w-full",initial:{opacity:0,y:60},animate:{opacity:1,y:0},transition:{duration:1.2,delay:.5,ease:[.16,1,.3,1]},children:["FIKRI",rt.jsx("span",{className:"text-gradient",children:"_"})]}),rt.jsx(Fe.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.7},className:"h-8 md:h-12 overflow-hidden relative w-full mb-16 bg-slate-100 dark:bg-slate-900/50 rounded max-w-lg border border-slate-200 dark:border-slate-800",children:rt.jsx(Fe.div,{animate:{y:[0,-56,-112,-168,0]},transition:{duration:8,repeat:1/0,ease:"easeInOut"},className:"flex flex-col items-center",children:i.map(t=>rt.jsxs("div",{className:"text-[10px] md:text-sm lg:text-base font-mono font-bold tracking-[0.4em] text-slate-600 dark:text-slate-300 uppercase h-8 md:h-12 flex items-center justify-center",children:[rt.jsx("span",{className:"text-primary-500 mr-3",children:">"})," ",t]},t))})}),rt.jsxs(Fe.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.9,duration:.8},className:"flex flex-col sm:flex-row gap-6 items-center",children:[rt.jsx(Fe.div,{initial:{width:0},animate:{width:48},transition:{delay:1,duration:.8,ease:[.16,1,.3,1]},className:"h-[1px] bg-slate-300 dark:bg-slate-700"}),rt.jsxs("div",{className:"flex gap-4 items-center opacity-70",children:[rt.jsx(sO,{className:"w-4 h-4 text-primary-500"}),rt.jsx("p",{className:"text-xs font-mono font-medium tracking-[0.3em] text-slate-600 dark:text-slate-400 uppercase",children:"Building scalable apps & robust infrastructure."})]})]})]}),rt.jsx(Fe.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:1},className:"absolute left-10 top-1/2 -rotate-90 origin-left hidden lg:block",children:rt.jsxs("div",{className:"flex items-center gap-4 origin-left",children:[rt.jsx("div",{className:"w-16 h-[1px] bg-slate-300 dark:bg-slate-700"}),rt.jsx("span",{className:"text-[10px] font-mono tracking-[0.8em] text-slate-500 dark:text-slate-500 uppercase",children:"LAT: -6.200000 | LON: 106.816666"})]})}),rt.jsx(Fe.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:1},className:"absolute right-10 bottom-24 hidden lg:block",children:rt.jsxs("div",{className:"flex flex-col items-end gap-2",children:[rt.jsx("span",{className:"text-[9px] font-bold tracking-[0.4em] text-primary-500 animate-pulse-slow font-display",children:"SCROLL"}),rt.jsx(Fe.div,{initial:{height:0},animate:{height:96},transition:{delay:1.5,duration:1,ease:[.16,1,.3,1]},className:"w-[1px] bg-gradient-to-b from-primary-500 to-transparent"})]})})]})},pO=({isDarkMode:i,toggleDarkMode:t})=>{const[n,s]=Lt.useState(!1),[o,c]=Lt.useState(!1);Lt.useEffect(()=>{const h=()=>s(window.scrollY>20);return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const u=[{name:"WORKS",href:"#projects"},{name:"STACK",href:"#skills"},{name:"CONNECT",href:"#contact"}];return rt.jsxs("nav",{className:`fixed top-0 left-0 w-full z-[100] transition-[padding,background-color,backdrop-filter] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${n?"py-4 glass-morphism border-b border-slate-200/50 dark:border-white/5 shadow-lg":"py-10 bg-transparent"}`,children:[rt.jsxs("div",{className:"container mx-auto px-6 flex justify-between items-center",children:[rt.jsxs(Fe.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"text-2xl font-black tracking-tighter flex items-center gap-2",children:[rt.jsx("div",{className:"w-8 h-8 bg-slate-900 dark:bg-white rounded-full flex items-center justify-center",children:rt.jsx("div",{className:"w-3 h-3 bg-white dark:bg-slate-900 rounded-full"})}),rt.jsx("span",{className:`${i?"text-white":"text-slate-900"} font-display`,children:"FIKRI.DEV"})]}),rt.jsxs("div",{className:"hidden md:flex items-center gap-12",children:[u.map((h,m)=>rt.jsx(Fe.a,{href:h.href,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:m*.1},className:`text-[10px] font-bold uppercase tracking-[0.4em] transition-colors font-display ${i?"text-slate-300 hover:text-primary-400":"text-slate-900 hover:text-primary-600 text-shadow-sm"}`,children:h.name},h.name)),rt.jsx("button",{onClick:t,className:`p-3 rounded-full transition-all duration-300 ${i?"bg-white/10 text-white hover:bg-white/20":"bg-slate-100 text-slate-900 hover:bg-slate-200"}`,children:i?rt.jsx(HS,{size:18}):rt.jsx(VS,{size:18})})]}),rt.jsxs("div",{className:"md:hidden flex items-center gap-4",children:[rt.jsx("button",{onClick:t,className:i?"text-white":"text-slate-900",children:i?rt.jsx(HS,{size:20}):rt.jsx(VS,{size:20})}),rt.jsx("button",{onClick:()=>c(!o),className:i?"text-white":"text-slate-900",children:o?rt.jsx(hO,{size:24}):rt.jsx(nO,{size:24})})]})]}),rt.jsx(NN,{children:o&&rt.jsx(Fe.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 overflow-hidden",children:rt.jsx("div",{className:"flex flex-col p-6 gap-6",children:u.map(h=>rt.jsx("a",{href:h.href,onClick:()=>c(!1),className:`text-xs font-bold uppercase tracking-[0.4em] font-display ${i?"text-white":"text-slate-900"}`,children:h.name},h.name))})})})]})},mO=[{role:"Operating Systems",title:"SERVER OS",skills:["Oracle Linux","OLVM","KVM","Linux Server","Windows"],color:"from-blue-500/20",icon:rt.jsx(oO,{className:"w-8 h-8 md:w-16 md:h-16 mb-6 text-blue-500/70"})},{role:"Database Systems",title:"DATA ARCH",skills:["Oracle","PostgreSQL","MySQL","MongoDB","Redis","Firebase"],color:"from-emerald-500/20",icon:rt.jsx(ZP,{className:"w-8 h-8 md:w-16 md:h-16 mb-6 text-emerald-500/70"})},{role:"Development",title:"SOFTWARE",skills:["Java","Python","PHP","JavaScript","Rust","Dart","SQL","Docker"],color:"from-violet-500/20",icon:rt.jsx(ub,{className:"w-8 h-8 md:w-16 md:h-16 mb-6 text-violet-500/70"})}],gO=({group:i,index:t})=>rt.jsxs(Fe.div,{initial:{opacity:0,y:30,filter:"blur(10px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-50px"},whileHover:{y:-5,scale:1.02},className:`group relative p-8 md:p-10 glass-morphism rounded-[2rem] overflow-hidden cursor-default border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all duration-500 ${t===0?"md:col-span-2 md:row-span-2":"md:col-span-1 md:row-span-1 flex flex-col justify-end"}`,children:[rt.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${i.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}),rt.jsxs("div",{className:"relative z-10 h-full flex flex-col text-left",children:[i.icon,rt.jsxs("div",{className:"mt-auto",children:[rt.jsx("span",{className:"text-[10px] sm:text-xs font-mono font-bold tracking-[0.4em] text-primary-500 uppercase mb-3 block",children:i.role}),rt.jsx("h3",{className:`text-2xl sm:text-3xl ${t===0?"md:text-5xl lg:text-6xl":"md:text-3xl lg:text-4xl"} font-extrabold tracking-tighter mb-8 group-hover:translate-x-2 transition-transform duration-500 font-display break-words w-full`,children:i.title}),rt.jsx("div",{className:"flex flex-wrap gap-2",children:i.skills.map((n,s)=>rt.jsx(Fe.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.3+s*.05},className:"px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 hover:border-primary-500 hover:text-primary-500 transition-colors duration-300 backdrop-blur-sm",children:n},n))})]})]})]}),vO=()=>rt.jsx("section",{id:"skills",className:"py-20 px-6 pt-32 relative z-10",children:rt.jsx("div",{className:"max-w-7xl mx-auto w-full",children:rt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-12 items-start",children:[rt.jsxs("div",{className:"md:col-span-5 flex flex-col justify-center min-h-[50vh] md:sticky md:top-32",children:[rt.jsx(Fe.span,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"text-[10px] font-bold tracking-[0.5em] text-primary-500 uppercase mb-6 font-display",children:"CAPABILITIES"}),rt.jsxs(Fe.h2,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,ease:[.16,1,.3,1]},className:"text-5xl md:text-7xl lg:text-8xl text-monumental mb-8",children:["TECH",rt.jsx("br",{}),rt.jsx("span",{className:"text-gradient",children:"STACK"})]}),rt.jsx(Fe.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.3,duration:.6},className:"max-w-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed tracking-tight text-sm",children:"A robust arsenal of enterprise-grade tools, databases, and programming languages mastered for high-performance systems."})]}),rt.jsx("div",{className:"md:col-span-7 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto] gap-6",children:mO.map((i,t)=>rt.jsx(gO,{group:i,index:t},i.title))})]})})}),_O=[{title:"VIRTUALIZATION CORE",category:"INFRASTRUCTURE",description:"Enterprise virtualization clusters using Oracle Linux Virtualization Manager (OLVM) and KVM for high-availability workloads.",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",color:"from-blue-500/20 to-cyan-500/20",tech:["OLVM","KVM","ORACLE LINUX","DOCKER"]},{title:"DATA CLUSTERS",category:"DATABASE SYSTEMS",description:"Multi-node resilient database architectures ensuring zero data loss, high-speed caching, and automated failover.",image:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",color:"from-purple-500/20 to-indigo-500/20",tech:["ORACLE DB","POSTGRESQL","MYSQL","REDIS"]},{title:"SOFTWARE SERVICES",category:"SOFTWARE ENGINEERING",description:"Robust backend microservices and APIs engineered for performance, security, and extreme scalability.",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",color:"from-emerald-500/20 to-teal-500/20",tech:["JAVA","PYTHON","RUST","NODEJS"]}],xO=({project:i,index:t})=>{const n=t%2===0;return rt.jsxs(Fe.div,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:1,ease:[.16,1,.3,1]},className:`flex flex-col ${n?"md:flex-row":"md:flex-row-reverse"} items-center gap-12 md:gap-20 group relative border-t border-slate-200/50 dark:border-slate-800/50 pt-16 mt-16`,children:[rt.jsx(Fe.div,{initial:{opacity:0,scale:.95,x:n?-40:40},whileInView:{opacity:1,scale:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.2,ease:[.16,1,.3,1]},className:"w-full md:w-1/2 overflow-hidden rounded-[2rem] glass-morphism p-1 border border-slate-200/50 dark:border-slate-800/50",children:rt.jsxs(Fe.div,{className:"aspect-[4/3] rounded-[1.8rem] overflow-hidden flex items-center justify-center relative bg-slate-100 dark:bg-slate-900 transition-transform duration-1000 group",children:[rt.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700",style:{backgroundImage:`url(${i.image})`}}),rt.jsx("div",{className:"absolute inset-0 bg-grid opacity-30 mix-blend-overlay z-0"}),rt.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${i.color} opacity-40 mix-blend-multiply z-0 group-hover:opacity-20 transition-opacity duration-700`}),rt.jsx("div",{className:"absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"}),rt.jsxs("div",{className:"absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0",children:[rt.jsx("a",{href:"https://github.com/ziword",target:"_blank",rel:"noopener noreferrer","aria-label":"View Source on GitHub",title:"GitHub Repository",className:"p-4 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:text-primary-500 transition-colors pointer-events-auto cursor-pointer shadow-2xl border border-white/20",children:rt.jsx(tO,{className:"w-6 h-6 text-white dark:text-slate-200"})}),rt.jsx("a",{href:"https://github.com/ziword",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Live Site",title:"Live Preview",className:"p-4 bg-white/10 dark:bg-black/40 backdrop-blur-md rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:text-primary-500 transition-colors pointer-events-auto cursor-pointer shadow-2xl border border-white/20",children:rt.jsx(JP,{className:"w-6 h-6 text-white dark:text-slate-200"})})]})]})}),rt.jsxs(Fe.div,{initial:{opacity:0,x:n?40:-40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.4,ease:[.16,1,.3,1]},className:`w-full md:w-1/2 flex flex-col px-4 ${n?"items-start text-left":"items-end text-right"}`,children:[rt.jsxs("div",{className:"tech-tag mb-6 text-primary-500",children:["SYS.",i.category]}),rt.jsx("h3",{className:"text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6 transition-transform duration-500 font-display",children:i.title}),rt.jsx("p",{className:`text-sm md:text-base font-mono text-slate-600 dark:text-slate-400 mb-8 max-w-sm leading-relaxed tracking-tight ${n?"":"text-right"}`,children:i.description}),rt.jsx("div",{className:`flex flex-wrap gap-2 mb-10 ${n?"justify-start":"justify-end"}`,children:i.tech.map(s=>rt.jsx("span",{className:"px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-mono tracking-widest uppercase rounded text-slate-500 dark:text-slate-400",children:s},s))}),rt.jsx("div",{className:`w-20 h-0.5 bg-slate-200 dark:bg-slate-800 transition-all duration-700 ${n?"self-start":"self-end"}`})]})]})},yO=()=>rt.jsx("section",{id:"projects",className:"py-40 px-6 transition-colors duration-1000 pt-32 relative z-10",children:rt.jsxs("div",{className:"max-w-7xl mx-auto w-full",children:[rt.jsxs(Fe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:[.16,1,.3,1]},className:"mb-40 flex flex-col items-center text-center",children:[rt.jsx("span",{className:"text-[10px] font-bold tracking-[0.5em] text-primary-500 uppercase mb-8 font-display",children:"CASE STUDIES"}),rt.jsxs("h2",{className:"text-5xl md:text-7xl lg:text-8xl text-monumental leading-[0.8] mb-8 select-none",children:["WORK ",rt.jsx("span",{className:"text-gradient",children:"LOG"})]}),rt.jsx("p",{className:"max-w-md text-slate-600 dark:text-slate-400 font-medium tracking-tight text-sm",children:"Selected engineering breakthroughs and architectural prototypes."})]}),rt.jsx("div",{className:"flex flex-col gap-32 md:gap-40 lg:gap-56",children:_O.map((i,t)=>rt.jsx(xO,{project:i,index:t},i.title))})]})}),SO=()=>rt.jsx("footer",{id:"contact",className:"py-40 relative flex flex-col items-center justify-center pt-32 z-10",children:rt.jsxs("div",{className:"container mx-auto px-6 text-center",children:[rt.jsxs(Fe.div,{initial:{opacity:0,y:120,filter:"blur(20px)"},whileInView:{opacity:1,y:0,filter:"blur(0px)"},viewport:{once:!0,margin:"-100px"},className:"mb-40",children:[rt.jsxs("h2",{className:"text-5xl md:text-7xl lg:text-8xl text-monumental leading-[0.8] mb-8 select-none",children:["EVOL",rt.jsx("span",{className:"text-gradient",children:"VE?"})]}),rt.jsx(Fe.a,{href:"mailto:Muhammad.fikri.amd@gmail.com",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-block px-14 py-7 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-xs font-bold tracking-[0.4em] uppercase hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-colors duration-500 magnetic-hover font-display",children:"Initialize Contact"})]}),rt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-slate-200 dark:border-slate-800 w-full text-left overflow-hidden",children:[rt.jsxs(Fe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2,duration:.8},className:"space-y-6",children:[rt.jsx("span",{className:"text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-500 uppercase block font-display",children:"ID"}),rt.jsx("p",{className:"text-2xl font-extrabold tracking-tighter font-display uppercase",children:"FIKRI"}),rt.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm max-w-xs leading-relaxed",children:"Designing scalable applications and orchestrating robust digital infrastructures."})]}),rt.jsxs(Fe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.4,duration:.8},className:"space-y-6",children:[rt.jsx("span",{className:"text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-500 uppercase block font-display",children:"SOCIAL"}),rt.jsx("div",{className:"flex flex-wrap gap-x-8 gap-y-4",children:[{name:"Github",url:"https://github.com/ziword"},{name:"LinkedIn",url:"https://www.linkedin.com/in/ziword/"}].map((i,t)=>rt.jsxs(Fe.a,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.6+t*.1},href:i.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs font-bold tracking-widest uppercase text-slate-800 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors flex items-center gap-2 group font-display",children:[i.name," ",rt.jsx(qP,{className:"w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"})]},i.name))})]}),rt.jsxs(Fe.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.6,duration:.8},className:"space-y-6",children:[rt.jsx("span",{className:"text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-500 uppercase block font-display",children:"LOC"}),rt.jsx("p",{className:"text-2xl font-extrabold tracking-tighter font-display",children:"SURABAYA / ID"}),rt.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm font-medium",children:"UTC+07 — ASIA/SURABAYA"})]})]})]})});function MO(){const[i,t]=Lt.useState(!1);Lt.useEffect(()=>{i?(document.documentElement.classList.add("dark"),document.documentElement.style.colorScheme="dark"):(document.documentElement.classList.remove("dark"),document.documentElement.style.colorScheme="light")},[i]);const n=()=>t(s=>!s);return rt.jsxs("div",{className:"relative min-h-screen overflow-x-hidden",children:[rt.jsx(j3,{}),rt.jsx(pO,{isDarkMode:i,toggleDarkMode:n}),rt.jsxs("main",{className:"relative z-10",children:[rt.jsx(dO,{}),rt.jsx(vO,{}),rt.jsx(yO,{})]}),rt.jsx(SO,{})]})}b1.createRoot(document.getElementById("root")).render(rt.jsx(Lt.StrictMode,{children:rt.jsx(MO,{})}));
