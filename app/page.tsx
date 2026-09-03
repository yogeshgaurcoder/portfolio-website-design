"use client"

import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Play,
  Send,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react"
import { useState } from "react"

const skills = [
  ["SQL", "Advanced querying & reporting", Database],
  ["Python", "Automation & data workflows", Terminal],
  ["Power BI", "Dashboards & storytelling", BarChart3],
  ["Tableau", "Interactive analytics", BarChart3],
  ["Advanced Excel", "Reporting & modeling", FileSpreadsheet],
  ["AWS", "Athena · Glue · S3", Zap],
]

const experience = [
  {
    date: "11/2019 — Present",
    role: "Senior Data Analyst",
    company: "Clear Demand India Pvt. Ltd.",
    note: "formerly Bungee Tech",
    current: true,
    points: [
      "Optimised complex SQL queries, improving reporting efficiency by 30% and reducing query execution time.",
      "Developed interactive Power BI dashboards, reducing manual reporting effort by 40% and improving KPI visibility.",
      "Automated data workflows using Python, saving 10+ hours per week and minimising manual processing errors.",
      "Processed and analysed 1M+ row datasets using AWS Athena and S3, improving query performance and accessibility.",
      "Identified data trends that improved decision-making efficiency by 25% across business units.",
      "Partnered with stakeholders and cross-functional teams on requirements, data governance and reporting consistency.",
    ],
  },
  {
    date: "10/2018 — 10/2019",
    role: "MIS Executive",
    company: "Eshopbox Ecommerce Pvt. Ltd.",
    points: [
      "Generated automated daily MIS reports, improving reporting efficiency by 20%.",
      "Reduced manual effort using VLOOKUP, Pivot Tables and complex Excel formulas.",
      "Performed data cleaning and analysis to extract actionable insights for operations teams.",
      "Developed MIS reports highlighting key performance metrics for decision-making.",
    ],
  },
  {
    date: "12/2017 — 09/2018",
    role: "EDP Analyst",
    company: "Wardrogue India Pvt. Ltd.",
    points: [
      "Generated daily performance reports using Excel for data-driven decision-making.",
      "Performed web data scraping and cleaning to improve data accuracy and usability.",
      "Maintained and updated backend databases to ensure data integrity.",
      "Supported budgeting and financial planning through data analysis.",
    ],
  },
  {
    date: "02/2017 — 10/2017",
    role: "Data Consultant · Contractual",
    company: "RMS Risk Management Solutions",
    points: [
      "Analysed, cleansed and enhanced datasets provided by reinsurance clients to meet quality standards.",
      "Applied differentiated coding for account pricing based on occupancy codes from Schedule of Values.",
      "Scrubbed and analysed COPE data: Construction, Occupancy, Protection and Exposure.",
      "Developed dashboards for tracking performance against key reinsurance metrics.",
    ],
  },
]

const education = [
  ["Master of Business Administration (MBA)", "University of Delhi", "11/2025"],
  ["Bachelor of Computer Applications (BCA)", "Indira Gandhi National Open University (IGNOU)", "12/2022"],
  ["Diploma in Engineering — Information Technology", "Board of Technical Education, Delhi", "08/2016"],
]

const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "End-to-end Power BI dashboard tracking revenue, sales trends and KPIs across business units, reducing manual reporting turnaround time by 40%.",
    icon: BarChart3,
    tags: ["Power BI", "KPIs", "Reporting"],
  },
  {
    title: "SQL Data Analysis & Optimisation",
    description: "Complex multi-join analysis on large datasets to identify business trends, with query optimisation techniques reducing average execution time by 30%.",
    icon: Database,
    tags: ["SQL", "Query Optimisation", "Analytics"],
  },
]

const certifications = [
  "Certificate of Completion in Tableau — 365 Data Science",
  "Certificate in SQL and Excel — LinkedIn",
]


export default function Page() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="site-shell">
      <div className="noise" />
      <div className="grid-bg" />
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Home">
            <span className="brand-mark">YG</span>
            <span>YOGESH <span className="brand-dot">GAUR.</span></span>
          </button>
          <div className={`nav-links ${open ? "open" : ""}`}>
            {[["about", "About"], ["skills", "Stack"], ["experience", "Experience"], ["projects", "Projects"], ["education", "Education"], ["contact", "Contact"]].map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
          </div>
          <div className="nav-actions">
            <a className="icon-link" href="https://www.linkedin.com/in/yogeshgauryt/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
            <a className="resume-btn" href="/Yogesh_Gaur_Resume.pdf" download><Download size={16}/> Resume</a>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
          </div>
        </nav>
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            <span className="pulse"/> SENIOR DATA ANALYST <span className="eyebrow-line"/> DELHI, INDIA
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>
            DATA <span>DRIVEN.</span><br/>DECISIONS <span>SHARP.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="hero-text">
            I turn messy datasets into clear dashboards, reliable reporting and actionable business insight — with SQL, Python, Power BI, Tableau, Excel and AWS.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 }} className="hero-buttons">
            <button className="primary-btn" onClick={() => go("experience")}>Explore my work <ArrowUpRight size={18}/></button>
            <button className="ghost-btn" onClick={() => go("contact")}>Let's connect <Mail size={17}/></button>
          </motion.div>
          <div className="hero-meta"><span><CheckCircle2 size={15}/> 8+ years of experience in retail pricing & e-commerce analytics</span><span><MapPin size={15}/> New Delhi, India</span></div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15 }} className="hero-visual">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="data-card">
            <div className="window-bar"><span/><span/><span/><small>analytics.engine</small></div>
            <div className="terminal-code"><p><i>01</i> <b>SELECT</b> insight, value</p><p><i>02</i> <b>FROM</b> business_data</p><p><i>03</i> <b>WHERE</b> quality = <em>true</em></p><p><i>04</i> <b>GROUP BY</b> decision</p><p><i>05</i> <b>ORDER BY</b> impact <em>DESC</em>;</p></div>
            <div className="mini-chart"><div className="chart-head"><span>DATA SIGNAL</span><strong>+ INSIGHT</strong></div><div className="bars">{[35,54,42,72,61,88,78,96,82,100].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)}</div></div>
            <div className="floating-pill pill-one"><BrainCircuit size={16}/> Clean data</div>
            <div className="floating-pill pill-two"><Zap size={16}/> Automate</div>
          </div>
        </motion.div>
        <button className="scroll-cue" onClick={() => go("about")}><span>SCROLL TO DISCOVER</span><ArrowDown size={16}/></button>
      </section>

      <section className="marquee"><div>{["SQL", "PYTHON", "POWER BI", "TABLEAU", "EXCEL", "AWS", "DATA ANALYSIS", "AUTOMATION"].map((x,i)=><span key={i}>{x} <b>✦</b></span>)}</div></section>

      <section id="about" className="section container">
        <div className="section-kicker">01 / PROFILE</div>
        <div className="about-grid">
          <div><h2>ANALYTICS WITH<br/><span>INTENT.</span></h2></div>
          <div className="about-copy"><p className="lead">Highly skilled in data analysis, statistical techniques, visualization and database management — focused on making information useful.</p><p>My work spans data collection, cleaning, validation, reporting and visualization. I enjoy building methodical processes that keep data accurate, explain complex datasets simply, and help stakeholders make better decisions.</p><div className="quote"><Sparkles size={18}/><span>“Reliable data. Clear story. Better decision.”</span></div></div>
        </div>
      </section>

      <section id="skills" className="section section-dark">
        <div className="container"><div className="section-kicker">02 / TOOLKIT</div><div className="section-title-row"><h2>THE <span>STACK</span></h2><p>Tools I use to move from raw data → trusted insight.</p></div>
          <div className="skill-grid">{skills.map(([name, desc, Icon], i) => { const C = Icon as any; return <motion.div whileHover={{ y:-7 }} transition={{duration:.2}} className="skill-card" key={name as string}><div className="skill-top"><span>0{i+1}</span><C size={22}/></div><h3>{name as string}</h3><p>{desc as string}</p><div className="skill-line"><span/></div></motion.div>})}</div>
        </div>
      </section>

      <section id="experience" className="section container">
        <div className="section-kicker">03 / CAREER</div><div className="section-title-row"><h2>EXPERIENCE <span>IN MOTION</span></h2><p>A progression from operational reporting to senior-level analytics, automation and visualization.</p></div>
        <div className="timeline">{experience.map((job,i)=><motion.article initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.05}} className="job" key={job.role}><div className="job-marker"><span>{String(i+1).padStart(2,"0")}</span></div><div className="job-main"><div className="job-head"><div><span className="job-date">{job.date}</span><h3>{job.role}</h3><p>{job.company}{job.note ? ` · ${job.note}` : ""}</p></div>{job.current && <span className="current">CURRENT</span>}</div><ul>{job.points.map(p=><li key={p}><CheckCircle2 size={15}/>{p}</li>)}</ul></div></motion.article>)}</div>
      </section>

      <section className="impact section-dark"><div className="container"><div className="impact-grid"><div><div className="section-kicker">04 / WHAT I DO</div><h2>FROM DATA<br/><span>TO CLARITY.</span></h2></div><div className="impact-list">{[["01","Analyze","Find patterns, trends and the signal inside complex datasets."],["02","Visualize","Build dashboards, charts and reports people can actually use."],["03","Validate","Protect data quality through cleansing, checks and reliable processes."],["04","Automate","Use Python and repeatable workflows to reduce manual effort."]].map(x=><div className="impact-item" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><ArrowUpRight size={18}/></div>)}</div></div></div></section>

      <section id="projects" className="section section-dark"><div className="container"><div className="section-kicker">05 / KEY PROJECTS</div><div className="section-title-row"><h2>SELECTED <span>WORK.</span></h2><p>Projects highlighted directly from my latest professional resume.</p></div><div className="skill-grid project-grid">{projects.map((project,i)=>{const C=project.icon;return <motion.article whileHover={{y:-7}} className="skill-card project-card" key={project.title}><div className="skill-top"><span>0{i+1}</span><C size={22}/></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></motion.article>})}</div></div></section>

      <section id="education" className="section container"><div className="section-kicker">06 / EDUCATION</div><div className="education-grid"><div><h2>BUILT ON<br/><span>FOUNDATION.</span></h2><p>Formal education in business administration, computer applications and information technology, backed by hands-on analytics experience.</p></div><div className="edu-list">{education.map((e,i)=><div className="edu-card" key={e[0]}><span>0{i+1}</span><div><h3>{e[0]}</h3><p>{e[1]}</p></div><strong>{e[2]}</strong></div>)}<div className="cert-box"><div className="cert-icon"><Sparkles/></div><div><small>CERTIFICATIONS — KEPT FROM PREVIOUS VERSION</small>{certifications.map(c=><p key={c}><CheckCircle2 size={14}/>{c}</p>)}</div></div></div></div></section>

      <section className="section container"><div className="section-kicker">07 / INTERNSHIP</div><div className="internship-card"><div><span>CONCOR · GOVT. OF INDIA ENTERPRISE</span><h2>Database Management Systems</h2><p>4-Month Internship · Container Corporation of India Ltd. (CONCOR), New Delhi</p></div><Database size={28}/></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><div><div className="section-kicker">06 / CONTACT</div><h2>LET'S BUILD<br/><span>SOMETHING USEFUL.</span></h2><p>Open to conversations around data analytics, reporting, business intelligence and automation.</p></div><div className="contact-card"><a href="mailto:contactyogesh247@gmail.com"><span><Mail size={19}/></span><div><small>EMAIL</small><strong>contactyogesh247@gmail.com</strong></div><ArrowUpRight/></a><a href="tel:+918800279561"><span><Send size={19}/></span><div><small>PHONE</small><strong>+91 8800279561</strong></div><ArrowUpRight/></a><div className="contact-location"><MapPin size={19}/><div><small>BASED IN</small><strong>New Delhi, India</strong></div></div></div></div></section>

      <footer><div className="container footer-row"><div><span className="brand-mark">YG</span> <strong>YOGESH GAUR</strong></div><span>DATA ANALYST · SQL · PYTHON · BI</span><a href="/Yogesh_Gaur_Resume.pdf" download>Download Resume <Download size={14}/></a></div></footer>
    </main>
  )
}
