import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  color: string;
}

const experiences: Experience[] = [
  {
    role: "Supervisor — Research, Database & System Administration",
    company: "PT Merak Jaya Beton",
    location: "Surabaya, East Java",
    period: "Aug 2024 – Present",
    type: "CURRENT",
    highlights: [
      "Lead and supervise the IT Research, Database & System Administration division — managing team operations, mentoring staff, and establishing engineering standards across all technical functions.",
      "Architect and manage enterprise infrastructure including hypervisor environments (OLVM, OVM, VMware), virtual machines, containerized services (Docker), NAS/SAN storage integration, and full server provisioning from ground-up deployment to production-ready systems.",
      "Administer and optimize multi-engine database environments (Oracle DB, PostgreSQL, MySQL, MariaDB, SQL Server, MongoDB, Firebase, Redis) — ensuring high availability, security hardening, and peak performance.",
      "Lead enterprise-critical Oracle Database upgrades (12c → 19c) and Oracle E-Business Suite R12 migrations (12.2.4 → 12.2.14) — ensuring zero data loss and minimal downtime.",
      "Pioneer LiDAR-based drone volumetric scanning for industrial stockpile measurement — standardizing surveying procedures and delivering precise calculations.",
      "Spearhead enterprise WhatsApp Gateway Portal development — enabling automated messaging for stakeholder communications with deep ERP and HRIS integration.",
      "Lead IoT and embedded systems initiatives: smart door-lock HRIS integration, FMCW radar-based silo level controllers, and GPS-enabled solar fuel monitoring sensors with real-time dashboards.",
      "Execute comprehensive security hardening across web and mobile applications — including server reconfiguration, vulnerability patching, source code remediation, and proactive threat monitoring.",
      "Oversee ERP lifecycle management for Oracle EBS R12 and Odoo — handling upgrades, custom module development, and end-user support.",
      "Lead technical code reviews, automated CI/CD pipeline improvements, and scheduled disaster recovery and RMAN/PITR restore verification drills while mentoring junior software engineers across full-stack and database domains.",
      "Collaborate with C-level executives and department heads to translate business requirements into scalable IT solutions, enabling data-driven decision-making and process optimization.",
    ],
    color: "from-primary-500/20 to-violet-500/20",
  },
  {
    role: "Software Engineer",
    company: "PT Merak Jaya Beton",
    location: "Surabaya, East Java",
    period: "Nov 2021 – Aug 2024",
    type: "FULL-TIME",
    highlights: [
      "Delivered end-to-end full-stack solutions across web, mobile, and desktop platforms using React.js, Next.js, Express.js, Django, and Android Java.",
      "Designed and developed comprehensive enterprise web application deeply integrated with Oracle EBS R12 API across AP, AR, Inventory, Order Management, and Manufacturing modules — eliminating cross-departmental data silos.",
      "Built a Real-Time GPS Fleet Monitoring Platform using Next.js, Socket.io, Express.js, and MongoDB, featuring live vehicle tracking, fuel analytics, speed monitoring, and client-facing APIs.",
      "Developed enterprise Android Attendance System with Face Detection & Recognition (MVP architecture), enhancing security and accuracy of employee attendance verification.",
      "Architected OSRM-based open-source map server as a cost-effective Google Maps API alternative, achieving significant operational cost savings.",
      "Created PLC-to-ERP integration using Python (Django), enabling real-time production data synchronization between factory floor machines and Oracle E-Business Suite.",
      "Implemented UHF RFID technology for automated vehicle inventory scanning, reducing manual effort and improving supply chain data accuracy.",
      "Led Odoo ERP implementation including database architecture, containerized deployment, and custom Project Management module development with Gantt chart visualization.",
      "Conducted systematic security audits, identifying and remediating vulnerabilities to strengthen organizational cybersecurity posture.",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "PT Todis Karya Anak Bangsa",
    location: "Surabaya, East Java",
    period: "Aug 2022 – Jun 2023",
    type: "FREELANCE",
    highlights: [
      "Analyzed client requirements and designed scalable full-stack architectures using NestJS, PostgreSQL, Android Java, and Vue.js for multiple concurrent projects.",
      "Designed and launched the 'Haba' E-Commerce Application for retail and grocery, integrating secure payment gateways, real-time order tracking, and personalized recommendations.",
      "Collaborated cross-functionally with UX/UI designers and project managers to deliver cohesive, user-centric products within tight deadlines.",
    ],
    color: "from-amber-500/20 to-orange-500/20",
  },
];

const education = {
  degree: "Associate Degree (D3) in Information Systems",
  institution: "Institut Teknologi dan Bisnis STIKOM Surabaya",
  gpa: "3.84 / 4.00",
  honors: "Cum Laude",
  graduation: "Nov 2021",
};

const certifications = [
  "AWS Cloud Practitioner Essentials — Amazon Web Services (AWS, Nov 2026)",
  "Agile Explorer — IBM (Sep 2026)",
  "Oracle Data Center Operations Foundations — Oracle (Training, Oct 2026)",
  "Certified Android Developer — Java & Kotlin",
  "Intellectual Property Copyright — Be-Health Application",
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 pt-32 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Side - Sticky Header */}
          <div className="md:col-span-5 flex flex-col justify-center min-h-[40vh] md:sticky md:top-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-wide text-primary-500 uppercase mb-6"
            >
              CAREER TRAJECTORY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.85] mb-8 font-display"
            >
              WORK
              <br />
              <span className="text-gradient">PATH</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-sm text-black dark:text-slate-400 font-medium leading-relaxed text-sm"
            >
              5+ years of transforming business operations through technology —
              from full-stack engineering and enterprise ERP integration to
              infrastructure architecture, IoT innovation, and AI systems.
              Currently leading a division and collaborating with C-level
              executives to drive data-driven decisions.
            </motion.p>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 glass-morphism rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50"
            >
              <span className="text-xs font-semibold text-primary-500 tracking-wide uppercase mb-3 block">
                EDUCATION
              </span>
              <h4 className="text-sm font-bold font-display tracking-tight mb-1">
                {education.degree}
              </h4>
              <p className="text-xs text-black dark:text-slate-400 font-medium mb-2">
                {education.institution}
              </p>
              <div className="flex gap-3 items-center">
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  GPA {education.gpa}
                </span>
                <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                  {education.honors}
                </span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-4 glass-morphism rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50"
            >
              <span className="text-xs font-semibold text-primary-500 tracking-wide uppercase mb-3 block">
                CERTIFICATIONS
              </span>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-2">
                    <ArrowUpRight className="w-3 h-3 text-primary-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-black dark:text-slate-300 font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Timeline */}
          <div className="md:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-500 via-slate-300 to-transparent dark:via-slate-700 hidden md:block" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 z-10 hidden md:flex items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary-500 animate-pulse-slow" : "bg-slate-400"}`}
                    />
                  </div>

                  {/* Card */}
                  <div className="md:ml-16 glass-morphism rounded-[2rem] p-8 border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all duration-500 overflow-hidden relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                    />

                    <div className="relative z-10">
                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border ${
                            exp.type === "CURRENT"
                              ? "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
                              : exp.type === "FREELANCE"
                                ? "text-amber-500 border-amber-500/30 bg-amber-500/10"
                                : "text-primary-500 border-primary-500/30 bg-primary-500/10"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Role */}
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tighter mb-2 font-display group-hover:translate-x-1 transition-transform duration-500">
                        {exp.role}
                      </h3>

                      {/* Company & Meta */}
                      <div className="flex flex-wrap items-center gap-4 mb-5">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3 text-primary-500" />
                          <span className="text-xs font-bold text-primary-500 font-display">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-black dark:text-slate-400" />
                          <span className="text-[11px] font-medium text-black dark:text-slate-400">
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-black dark:text-slate-400" />
                          <span className="text-[11px] font-medium text-black dark:text-slate-400">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((h, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + j * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary-500 mt-2 shrink-0" />
                            <span className="text-sm text-black dark:text-slate-300 font-medium leading-relaxed">
                              {h}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
