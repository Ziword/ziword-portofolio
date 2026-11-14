import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Monitor, Server, Brain, Cloud, Database } from 'lucide-react'

const skillGroups = [
  {
    role: "Development",
    title: "LANGUAGES & RUNTIME",
    skills: ["Java", "Python", "PHP", "JavaScript", "TypeScript", "C++", "VB.NET", "Rust", "Dart", "Go", "SQL", "PL/SQL"],
    color: "from-blue-500/20",
    icon: <Code2 className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-6 text-blue-500/70" />
  },
  {
    role: "Client-Side",
    title: "FRONTEND & MOBILE",
    skills: ["React", "Next.js", "Vue.js", "Flutter", "Tailwind CSS", "Bootstrap", "Android (Java/Kotlin)", "HTML5/CSS3"],
    color: "from-emerald-500/20",
    icon: <Monitor className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-6 text-emerald-500/70" />
  },
  {
    role: "Server-Side",
    title: "BACKEND & API",
    skills: ["Node.js", "NestJS", "Laravel", "FastAPI", "Express.js", "Serverless", "Apache Kafka", "Microservices", "Socket.io", "REST/GraphQL"],
    color: "from-violet-500/20",
    icon: <Server className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-6 text-violet-500/70" />
  },
  {
    role: "Intelligence",
    title: "AI & DATA SCIENCE",
    skills: ["LangChain", "OpenAI API", "Pinecone", "Qdrant", "RAG Architecture", "LLM Routing", "Vector DB", "Python ML"],
    color: "from-amber-500/20",
    icon: <Brain className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-6 text-amber-500/70" />
  },
  {
    role: "Operations",
    title: "INFRA & DEVOPS",
    skills: ["Docker", "OLVM / OVM", "VMware", "Linux Server", "CI/CD Pipelines", "Grafana", "Prometheus", "Zabbix", "Jest (Automated Tests)", "Security Hardening", "IoT Integration", "Nginx", "Carbonio", "OSRM"],
    color: "from-cyan-500/20",
    icon: <Cloud className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-6 text-cyan-500/70" />
  },
  {
    role: "Data Systems",
    title: "DATABASE & STORAGE",
    skills: ["Oracle 12c/19c", "PostgreSQL", "Prisma ORM", "MySQL", "MongoDB", "Redis", "Elasticsearch", "TimescaleDB", "Firebase", "SQLite"],
    color: "from-rose-500/20",
    icon: <Database className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 mb-6 text-rose-500/70" />
  }
]

const SkillCard: React.FC<{ group: typeof skillGroups[0] }> = ({ group }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group relative p-6 md:p-8 glass-morphism rounded-[2rem] overflow-hidden cursor-default border border-slate-200/50 dark:border-slate-800/50 hover:border-primary-500/30 transition-all duration-500 flex flex-col justify-end`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${group.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative z-10 h-full flex flex-col text-left">
        {group.icon}
        <div className="mt-auto">
          <span className="text-xs font-semibold text-primary-500 tracking-wide uppercase mb-3 block">
            {group.role}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-extrabold tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500 font-display break-words w-full">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, i) => (
              <motion.span 
                key={skill} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.03 }}
                className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold text-black dark:text-white bg-slate-100 dark:bg-white/[0.05] hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-500 transition-colors duration-300 backdrop-blur-sm shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 pt-32 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12 lg:col-span-3 flex flex-col justify-center min-h-[50vh] md:sticky md:top-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-wide text-primary-500 uppercase mb-6"
            >
              CAPABILITIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.85] mb-8 font-display"
            >
              TECH<br />
              <span className="text-gradient">STACK</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-sm text-black dark:text-slate-400 font-medium leading-relaxed text-sm"
            >
              Enterprise-grade systems, multi-engine databases, and modern programming languages field-tested in high-throughput production environments.
            </motion.p>
          </div>

          <div className="md:col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
