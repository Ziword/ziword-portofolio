import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Database,
  Globe,
  Cpu,
  Radio,
  Server,
  Smartphone,
  Shield,
  Truck,
  Box,
  Mail,
  Scan,
  Navigation,
  BarChart3,
  MessageSquare,
  Layers,
  Container,
  Building2,
  CreditCard,
  CheckSquare,
  type LucideIcon,
} from "lucide-react";

import workhubImg from '../assets/images/projects/workhub.svg';
import nexusPayImg from '../assets/images/projects/nexus_pay.svg';
import shippingTrackingImg from '../assets/images/projects/shipping_tracking.svg';
import pakijanganImg from '../assets/images/projects/pakijangan_ku.svg';
import hotelBandungImg from '../assets/images/projects/hotel_bandung.svg';
import hermesImg from '../assets/images/projects/hermes.svg';
import openclawImg from '../assets/images/projects/openclaw.svg';
import llmRoutingImg from '../assets/images/projects/llm_routing.svg';
import ptMerakRagImg from '../assets/images/projects/pt_merak_rag.svg';
import oracleDbImg from '../assets/images/projects/oracle_db.svg';
import oracleEbsImg from '../assets/images/projects/oracle_ebs.svg';
import fleetImg from '../assets/images/projects/fleet.svg';
import lidarImg from '../assets/images/projects/lidar.svg';
import iotImg from '../assets/images/projects/iot.svg';
import infraImg from '../assets/images/projects/infra.svg';
import whatsappImg from '../assets/images/projects/whatsapp.svg';
import carbonioImg from '../assets/images/projects/carbonio.svg';
import faceImg from '../assets/images/projects/face.svg';
import mapImg from '../assets/images/projects/map.svg';
import plcImg from '../assets/images/projects/plc.svg';
import rfidImg from '../assets/images/projects/rfid.svg';
import odooImg from '../assets/images/projects/odoo.svg';
import habaImg from '../assets/images/projects/haba.svg';
import healthImg from '../assets/images/projects/health.svg';

interface Project {
  title: string;
  category: string;
  categoryLabel: string;
  date: string;
  description: string;
  image: string;
  color: string;
  accentColor: string;
  tech: string[];
  icon: LucideIcon;
  impact?: string;
  githubUrl?: string;
  liveUrl?: string;
  isInternal?: boolean;
  status?: string;
}

const projects: Project[] = [
  {
    title: "MERAK WORKHUB",
    category: "enterprise",
    categoryLabel: "OPERATIONS & WORKFORCE",
    date: "Nov 2026",
    description:
      "Architected an end-to-end operational platform and field task management system for PT Merak Jaya Beton. Features role-aware Kanban dispatch, offline shift routine synchronization, multi-sheet Excel reporting, and automated in-app OTA APK streaming across multi-plant operations.",
    image: workhubImg,
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
    tech: ["Flutter", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Oracle EBS SSO", "Docker"],
    icon: CheckSquare,
    impact: "Multi-Plant Operations",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "NEXUS PAY — QRIS & SNAP BI GATEWAY",
    category: "software",
    categoryLabel: "FINANCIAL INFRASTRUCTURE",
    date: "Oct — Nov 2026",
    description:
      "Engineered high-throughput QRIS payment gateway and Bank Indonesia SNAP BI compliant service. Implemented dynamic EMVCo Tag 54 injection, Redis atomic nominal locking with automated three-layer expiration sweeping, and double-entry multi-tenant ledger accounting with ACID row-level locking.",
    image: nexusPayImg,
    color: "from-violet-500/20 to-indigo-500/20",
    accentColor: "text-violet-400",
    tech: ["Go", "Node.js", "TypeScript", "PostgreSQL", "Redis", "EMVCo QRIS", "Docker"],
    icon: CreditCard,
    impact: "High-Throughput Gateway",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "UNIVERSAL SHIPPING TRACKING PLATFORM",
    category: "software",
    categoryLabel: "MARITIME & LOGISTICS",
    date: "Oct 2026",
    description:
      "Architected multi-carrier tracking gateway normalizing container, air waybill, and postal telemetry across domestic and global carriers. Implemented ISO 6346 check-digit verification, 3-state circuit breakers, BullMQ background workers, HMAC-SHA256 webhooks, and adaptive Redis caching.",
    image: shippingTrackingImg,
    color: "from-sky-500/20 to-blue-500/20",
    accentColor: "text-sky-400",
    tech: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    icon: Container,
    impact: "ISO 6346 & Resilient Sync",
    githubUrl: "https://github.com/Ziword/shipping-tracking-platform",
  },
  {
    title: "AI RAG SYSTEM - PT MERAK JAYA BETON",
    category: "ai",
    categoryLabel: "ARTIFICIAL INTELLIGENCE",
    date: "Jul 2026",
    description:
      "Led the further development and scaling of an advanced Retrieval-Augmented Generation (RAG) AI assistant for PT Merak Jaya Beton. Optimized vector database ingestion for company SOPs and concrete mix designs to ensure highly accurate contextual answers and faster knowledge retrieval.",
    image: ptMerakRagImg,
    color: "from-indigo-500/20 to-purple-500/20",
    accentColor: "text-indigo-400",
    tech: ["Python", "LangChain", "LLM", "Pinecone", "FastAPI"],
    icon: Cpu,
    impact: "Knowledge Automation",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "UHF RFID INVENTORY SYSTEM",
    category: "iot",
    categoryLabel: "AUTOMATION & IoT",
    date: "Jun — Aug 2026",
    description:
      "Spearheaded R&D PoC and production rollout of automated UHF RFID inventory tracking system, enabling automated vehicle inventory scanning and real-time warehouse stock tracking.",
    image: rfidImg,
    color: "from-sky-500/20 to-blue-500/20",
    accentColor: "text-sky-400",
    tech: [
      "UHF RFID",
      "RFID Tags",
      "IoT Ingestion",
      "Python/Node.js",
      "Oracle DB",
    ],
    icon: Scan,
    impact: "Automated Tracking",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "CARBONIO EMAIL MIGRATION",
    category: "infra",
    categoryLabel: "EMAIL INFRASTRUCTURE",
    date: "Jul 2026",
    description:
      "Led end-to-end migration of corporate email from legacy hMailServer to Carbonio CE. Managed OS provisioning, High Availability clustering, DNS configuration, and strict security protocols (DKIM, SPF, DMARC, PTR) with zero downtime.",
    image: carbonioImg,
    color: "from-indigo-500/20 to-blue-500/20",
    accentColor: "text-indigo-400",
    tech: [
      "Carbonio CE",
      "Linux",
      "HA Clustering",
      "DNS",
      "DKIM",
      "SPF",
      "DMARC",
    ],
    icon: Mail,
    impact: "Zero Downtime",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "PAKIJANGAN KU",
    category: "mobile",
    categoryLabel: "HYBRID E-COMMERCE / UMKM",
    date: "Jul 2026",
    description:
      "Developed a hybrid mobile E-Commerce application to support local MSMEs (UMKM) in Kelurahan Pakijangan, Pasuruan. Engineered the front-end using Flutter for responsive cross-platform capabilities and architected a RESTful backend API with Laravel and MySQL.",
    image: pakijanganImg,
    color: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-orange-400",
    tech: ["Flutter", "Laravel", "MySQL", "REST API", "Mobile App"],
    icon: Smartphone,
    impact: "Local UMKM Support",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "OPENCLAW AI FRAMEWORK",
    category: "ai",
    categoryLabel: "ARTIFICIAL INTELLIGENCE",
    date: "May — Jul 2026",
    description:
      "Contributed to the core development and scaling of OpenClaw, an open-source AI integration framework. Engineered new modules for large language model orchestrations, data extraction, and deterministic automation pipelines.",
    image: openclawImg,
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
    tech: ["TypeScript", "Node.js", "AI Automation", "API Integration"],
    icon: Radio,
    impact: "Open Source",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "HERMES AUTONOMOUS AGENT",
    category: "ai",
    categoryLabel: "ARTIFICIAL INTELLIGENCE",
    date: "May — Jul 2026",
    description:
      "Led the advanced development and optimization of an autonomous AI agent capable of executing complex multi-step workflows. Focused on enhancing its dynamic planning capabilities and expanding external API integrations to streamline automated problem-solving.",
    image: hermesImg,
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-400",
    tech: ["Python", "LLMs", "Agentic AI", "LangChain"],
    icon: Cpu,
    impact: "Autonomous AI",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "AI LLM ROUTING API",
    category: "ai",
    categoryLabel: "ARTIFICIAL INTELLIGENCE",
    date: "May — Jul 2026",
    description:
      "Spearheaded the ongoing development of an intelligent LLM routing gateway API. Optimized the dynamic prompt-routing algorithms to better select AI models based on cost, context window, and latency, maximizing overall efficiency.",
    image: llmRoutingImg,
    color: "from-violet-500/20 to-fuchsia-500/20",
    accentColor: "text-violet-400",
    tech: ["FastAPI", "Go", "OpenAI API", "Anthropic API", "Redis"],
    icon: Server,
    impact: "Latency & Cost Optimization",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "LiDAR DRONE VOLUMETRIC SURVEYING",
    category: "research",
    categoryLabel: "INDUSTRIAL R&D",
    date: "Jan — Apr 2026",
    description:
      "Pioneered industrial stockpile volume measurement using LiDAR-equipped drones (UAVs), replacing manual surveying with high-precision 3D point cloud processing. Standardized SOPs adopted across multiple company sites.",
    image: lidarImg,
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "text-violet-400",
    tech: [
      "LiDAR Sensor",
      "Drone (UAV)",
      "Point Cloud",
      "GIS",
      "Volumetric Analysis",
    ],
    icon: Navigation,
    impact: "Multi-Site Adoption",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "IoT SENSOR ECOSYSTEM",
    category: "iot",
    categoryLabel: "IoT & EMBEDDED",
    date: "Sept — Dec 2025",
    description:
      "Engineered enterprise IoT ecosystem: FMCW radar silo level sensors, IoT door-lock HRIS integration with biometric smart access control, and solar-powered GPS fuel monitoring sensors with real-time dashboards.",
    image: iotImg,
    color: "from-cyan-500/20 to-sky-500/20",
    accentColor: "text-cyan-400",
    tech: [
      "FMCW Radar",
      "GPS",
      "RFID",
      "WebSockets",
      "Next.js",
      "React.js",
    ],
    icon: Radio,
    impact: "100+ Sensors",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "BANDUNG PERMAI HOTEL JEMBER",
    category: "enterprise",
    categoryLabel: "HOSPITALITY SYSTEM",
    date: "Jan — May 2025",
    description:
      "Developed an end-to-end hospitality management system for Bandung Permai Hotel. Architected full booking flows, payment processing, detailed reports, and an integrated cafe POS application.",
    image: hotelBandungImg,
    color: "from-sky-500/20 to-blue-500/20",
    accentColor: "text-sky-400",
    tech: ["Laravel", "PostgreSQL", "Redis", "Payment API"],
    icon: Building2,
    impact: "End-to-End Hotel System",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "ORACLE DB 19C MIGRATION",
    category: "enterprise",
    categoryLabel: "ENTERPRISE SYSTEMS",
    date: "Feb 2025",
    description:
      "Led enterprise-critical Oracle Database upgrade from 12c to 19c and Oracle E-Business Suite R12 migration (12.2.4 → 12.2.14) with zero data loss. Developed rollback strategies, RMAN/DataPump backup routines, and disaster recovery plans.",
    image: oracleDbImg,
    color: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-orange-400",
    tech: ["Oracle 12c/19c", "EBS R12", "PL/SQL", "DataPump", "RMAN", "Linux"],
    icon: Database,
    impact: "Zero Data Loss",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "INFRASTRUCTURE MODERNIZATION",
    category: "infra",
    categoryLabel: "DATA CENTER",
    date: "Dec 2024 — Mar 2025",
    description:
      "Led end-to-end data center modernization: NAS/SAN storage integration, hypervisor deployment (OLVM, OVM, VMware), VM provisioning, containerized microservices architecture, and Nginx load balancing eliminating single points of failure across plant servers.",
    image: infraImg,
    color: "from-slate-500/20 to-zinc-500/20",
    accentColor: "text-slate-400",
    tech: [
      "OLVM / OVM",
      "VMware",
      "Docker",
      "Linux",
      "NAS/SAN",
      "Nginx",
      "Load Balancing",
    ],
    icon: Server,
    impact: "Zero Unplanned Downtime",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "ORACLE EBS ENTERPRISE WEB PORTAL",
    category: "enterprise",
    categoryLabel: "ENTERPRISE MIDDLEWARE",
    date: "Jan 2022 — Nov 2024",
    description:
      "Architected unified internal web application and custom RESTful API middleware integrated with Oracle EBS R12 across AP, AR, Inventory, Order Management, and Manufacturing modules. Features real-time operational reporting, warehouse stock tracking, and multi-level approval workflows, reducing query execution latency by 45%.",
    image: oracleEbsImg,
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-400",
    tech: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Oracle EBS R12",
      "Oracle DB",
      "REST API",
    ],
    icon: Globe,
    impact: "45% Faster Queries",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "ENTERPRISE WHATSAPP GATEWAY",
    category: "software",
    categoryLabel: "MESSAGING PLATFORM",
    date: "Aug 2024",
    description:
      "Spearheaded enterprise WhatsApp Gateway Portal development with high-throughput Node.js messaging queue, React wizard-driven UI, automating stakeholder communications with deep Oracle ERP and HRIS integration.",
    image: whatsappImg,
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-400",
    tech: [
      "Node.js",
      "Express.js",
      "React.js",
      "Message Queue",
      "Oracle ERP",
      "REST API",
    ],
    icon: MessageSquare,
    impact: "Automated Comms",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "PRIVATE OSRM MAP SERVER",
    category: "infra",
    categoryLabel: "GEOSPATIAL INFRASTRUCTURE",
    date: "Aug 2023",
    description:
      "Deployed Open Source Routing Machine (OSRM) map server on Linux for internal spatial data and routing requests, replacing expensive third-party Google Maps API dependencies, achieving significant cost savings.",
    image: mapImg,
    color: "from-teal-500/20 to-cyan-500/20",
    accentColor: "text-teal-400",
    tech: [
      "OSRM",
      "Linux",
      "OpenStreetMap",
      "Spatial Data",
      "Routing Engine",
    ],
    icon: Navigation,
    impact: "Cost Savings",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "CONTAINERIZED ODOO ERP",
    category: "enterprise",
    categoryLabel: "ERP & PROJECT MGMT",
    date: "May — Jul 2023",
    description:
      "Executed containerized deployment of Odoo ERP via Docker, including database setup and development of a custom Project Management module featuring interactive Gantt chart visualization.",
    image: odooImg,
    color: "from-purple-500/20 to-indigo-500/20",
    accentColor: "text-purple-400",
    tech: [
      "Odoo / OpenERP",
      "Docker",
      "PostgreSQL",
      "Python",
      "Gantt Chart",
    ],
    icon: Container,
    impact: "Custom Modules",
    isInternal: true,
  },
  {
    title: "'HABA' E-COMMERCE PLATFORM",
    category: "software",
    categoryLabel: "FULL-STACK APPLICATION",
    date: "2022 — 2023",
    description:
      "Architected and launched the 'Haba' retail/grocery E-Commerce application with NestJS/PostgreSQL backend, payment gateway integrations, distributed inventory logic, OpenAPI/Swagger docs, and Vue.js + Android clients.",
    image: habaImg,
    color: "from-pink-500/20 to-rose-500/20",
    accentColor: "text-pink-400",
    tech: [
      "NestJS",
      "PostgreSQL",
      "Vue.js",
      "Android Java",
      "OpenAPI",
      "Payment Gateways",
    ],
    icon: Box,
    impact: "Web + Mobile",
    githubUrl: "https://github.com/ziword",
  },
  {
    title: "PLC-TO-ERP IoT BRIDGE",
    category: "iot",
    categoryLabel: "INDUSTRIAL IoT",
    date: "Mar — Apr 2022",
    description:
      "Engineered a synchronous Python Modbus/TCP data pipeline connecting factory floor PLC machinery and digital weighbridge indicators directly to Oracle EBS and PostgreSQL databases. Eliminates manual weighbridge key-ins, enforces fixed-point shrinkage validation, and slashed raw material recording discrepancies by 98%.",
    image: plcImg,
    color: "from-amber-500/20 to-yellow-500/20",
    accentColor: "text-amber-400",
    tech: ["Python", "Django", "PLC", "Modbus/TCP", "Oracle DB", "PostgreSQL", "IoT"],
    icon: Cpu,
    impact: "98% Loss Cut",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "ANDROID FACE RECOGNITION ATTENDANCE",
    category: "mobile",
    categoryLabel: "MOBILE & AI",
    date: "Dec 2021 — Feb 2022",
    description:
      "Designed enterprise Android attendance app featuring facial detection and recognition algorithms (MVP architecture), streamlining employee check-ins and eliminating time-logging fraud across the organization.",
    image: faceImg,
    color: "from-rose-500/20 to-pink-500/20",
    accentColor: "text-rose-400",
    tech: [
      "Android (Java/Kotlin)",
      "Face Detection",
      "Face Recognition",
      "MVP Architecture",
    ],
    icon: Smartphone,
    impact: "Fraud Eliminated",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "REAL-TIME FLEET MONITORING",
    category: "iot",
    categoryLabel: "TELEMATICS PLATFORM",
    date: "Dec 2021 — Jan 2022",
    description:
      "Designed real-time fleet telematics platform featuring live GPS tracking, fuel analytics, speed monitoring, geofencing polygons, live vehicle marker rendering, and automated reporting with high-frequency geospatial time-series data.",
    image: fleetImg,
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
    tech: [
      "Next.js",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "TimescaleDB",
      "Google Maps API",
    ],
    icon: Truck,
    impact: "Real-Time Tracking",
    isInternal: true,
    status: "Active Maintaining",
  },
  {
    title: "BE-HEALTH APPLICATION",
    category: "mobile",
    categoryLabel: "HEALTHCARE TECH",
    date: "Prior to 2021",
    description:
      "Innovative healthcare technology application recognized with an Intellectual Property Copyright certification for its contribution to healthcare innovation and technology advancement.",
    image: healthImg,
    color: "from-red-500/20 to-rose-500/20",
    accentColor: "text-red-400",
    tech: ["Healthcare Tech", "Mobile/Web Application", "IP Copyrighted"],
    icon: Shield,
    impact: "IP Copyrighted",
    githubUrl: "https://github.com/ziword",
  },
];

const categories = [
  { key: "all", label: "All Projects", count: projects.length },
  {
    key: "ai",
    label: "Artificial Intelligence",
    count: projects.filter((p) => p.category === "ai").length,
  },
  {
    key: "enterprise",
    label: "Enterprise",
    count: projects.filter((p) => p.category === "enterprise").length,
  },
  {
    key: "iot",
    label: "IoT & Hardware",
    count: projects.filter((p) => p.category === "iot").length,
  },
  {
    key: "infra",
    label: "Infrastructure",
    count: projects.filter((p) => p.category === "infra").length,
  },
  {
    key: "software",
    label: "Software",
    count: projects.filter((p) => p.category === "software").length,
  },
  {
    key: "mobile",
    label: "Mobile & R&D",
    count: projects.filter(
      (p) => p.category === "mobile" || p.category === "research"
    ).length,
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
}> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.2 } }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16 group relative`}
    >
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 overflow-hidden rounded-[2rem] glass-morphism p-1 border border-slate-200/50 dark:border-slate-800/50"
      >
        <div
          className={`aspect-[16/10] rounded-[1.8rem] overflow-hidden flex items-center justify-center relative bg-slate-100 dark:bg-slate-900 group`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay z-0" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 mix-blend-multiply z-0 group-hover:opacity-20 transition-opacity duration-700`}
          />

          {/* Project Number Badge */}
          <div className="absolute top-6 left-6 z-20">
            <span className="text-[10px] font-mono font-bold tracking-widest text-white/60 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Impact Badge */}
          {project.impact && (
            <div className="absolute top-6 right-6 z-20">
              <span
                className={`text-[10px] font-mono font-bold tracking-widest ${project.accentColor} bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10`}
              >
                ◆ {project.impact}
              </span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
            {project.isInternal ? (
              <span className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-white text-xs font-semibold tracking-widest border border-white/20">
                INTERNAL PROJECT
              </span>
            ) : (
              <>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Source on GitHub"
                    title="GitHub Repository"
                    className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white hover:text-slate-900 transition-colors cursor-pointer shadow-2xl border border-white/20"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Live Site"
                    title="Live Preview"
                    className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white hover:text-slate-900 transition-colors cursor-pointer shadow-2xl border border-white/20"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                )}
              </>
            )}
          </div>


        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-1/2 flex flex-col px-2 md:px-4 ${isEven ? "items-start" : "items-end"} text-left`}
      >
        {/* Category & Date */}
        <div
          className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? "" : "flex-row-reverse"}`}
        >
          <span className="text-xs font-semibold text-primary-500 tracking-wide">
            {project.categoryLabel}
          </span>
          <span className="text-xs font-medium text-black dark:text-slate-400">
            {project.date}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-4 transition-transform duration-500 font-display leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-black dark:text-slate-400 mb-6 max-w-md leading-relaxed"
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${isEven ? "justify-start" : "justify-end"}`}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-[11px] font-medium rounded-md text-black dark:text-slate-400 hover:bg-primary-500/15 hover:text-primary-500 transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Decorative Line */}
        <div
          className={`w-16 h-0.5 bg-gradient-to-r from-primary-400 to-transparent dark:from-primary-500 dark:to-transparent transition-all duration-700 group-hover:w-24 ${isEven ? "self-start" : "self-end bg-gradient-to-l"}`}
        />
      </motion.div>
    </motion.div>
  );
};

/* ── Stats Banner ── */
const StatsBanner: React.FC = () => {
  const stats = [
    { label: "PROJECTS DELIVERED", value: `${projects.length}+`, suffix: "" },
    { label: "YEARS EXPERIENCE", value: "5+", suffix: "" },
    { label: "DATA INTEGRITY", value: "100", suffix: "%" },
    { label: "QUERY LATENCY CUT", value: "-45", suffix: "%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="glass-morphism rounded-2xl p-6 text-center hover:border-primary-500/30 transition-all duration-500 group cursor-default"
        >
          <div className="text-3xl md:text-4xl font-bold font-display tracking-tight text-gradient mb-2">
            {stat.value}
            <span className="text-primary-400">{stat.suffix}</span>
          </div>
          <div className="text-[11px] font-medium tracking-wide text-black dark:text-slate-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : activeCategory === "mobile"
        ? projects.filter(
            (p) => p.category === "mobile" || p.category === "research"
          )
        : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-32 px-6 transition-colors duration-1000 pt-32 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-primary-500 uppercase mb-6">
            Projects
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.85] mb-8 select-none font-display">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-lg text-black dark:text-slate-400 font-medium text-sm leading-relaxed">
            {projects.length} mission-critical projects spanning enterprise ERP,
            IoT ecosystems, infrastructure modernization, and full-stack
            application engineering.
          </p>
        </motion.div>

        {/* Stats */}
        <StatsBanner />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-20"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border ${
                activeCategory === cat.key
                  ? "bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/25"
                  : "bg-white/5 dark:bg-black/20 text-black dark:text-slate-400 border-slate-300 dark:border-slate-800 hover:border-primary-500/50 hover:text-primary-500"
              }`}
            >
              {cat.label}
              <span
                className={`ml-2 text-[9px] ${activeCategory === cat.key ? "text-white/70" : "text-black dark:text-slate-500"}`}
              >
                ({cat.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Filtered Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700" />
          <span className="text-xs font-medium text-black dark:text-slate-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
          <div className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700" />
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-24 md:gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <BarChart3 className="w-5 h-5 text-primary-500" />
            <span className="text-xs font-semibold tracking-wide text-primary-500">
              End of Projects
            </span>
          </div>
          <p className="text-sm text-black dark:text-slate-400 max-w-md font-medium mb-8 leading-relaxed">
            Each project represents real-world production systems serving
            enterprise users, processing live data, and running mission-critical
            operations.
          </p>
          <Layers className="w-4 h-4 text-black dark:text-slate-400 animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
};
