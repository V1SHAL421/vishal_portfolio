"use client"

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin, Briefcase, GraduationCap, Rocket, Brain, Calendar, ArrowRight } from "lucide-react";

export default function Portfolio() {
// ======== QUICK CUSTOMIZATION ========
// Edit the content in the config below; no need to touch the components.
const CONFIG = {
  name: "Vishal Kumar",
  role: "Software/AI Engineer",
  location: "London, UK",
  tagline:
    "I like to build distributed systems and solve complex problems.",
  headshot: "/profile_pic.jpeg",
  email: "vishalmkumar3@gmail.com",
  links: {
    github: "https://github.com/V1SHAL421",
    linkedin: "https://www.linkedin.com/in/vishal-kumar-6b5694269/",
    // resume: "/Vishal-Kumar-CV.pdf",
  },
  highlights: [
    // { label: "Amazon", value: "AI Automation Team for Supply Chain -> Agentic AI Text-to-SQL." },
    // { label: "Amadeus", value: "Software Development Engineer Intern -> ETL & Event‑Driven systems" },
    // { label: "Denr (Fintech)", value: "Co‑founder and CTO -> React Native/Golang mobile application" },
    // { label: "MSci Computer Science in King's College London", value: "First Class Honours (2021-2025)" },
    { label: "Amazon", value: "Data Engineer Intern • Agentic AI Text-to-SQL" },
    { label: "Amadeus", value: "Software Engineer Intern • ETL and Event-Driven Systems" },
    { label: "Denr (Fintech)", value: "Co‑founder • React Native/Golang mobile application" },
    { label: "King's College London", value: "First Class Honours • 2025" },
  ],
  software_skills: [
    "C++",
    "Python",
    "Java",
    "TypeScript/Node",
    "AWS",
    "Azure",
    "Kafka",
    "Terraform",
    "PostgreSQL",
    "Golang",
    "Linux",
    "Unix",
    "Docker",
    "Kubernetes",
    "Rust",
    "HTML/CSS"
  ],
  ai_ml_skills: [
    "Pandas",
    "scikit-learn",
    "XGBoost",
    "PyTorch",
    "Hypothesis testing",
    "A/B testing",
    "Matplotlib",
    "Seaborn",
    "Q-Learning",
    "Computer Vision",
    "Neural Networks",
    "Reinforcement Learning",
    "Deep Learning",
    "OpenCV",
    "NumPy",
    "LLMs / RAG / Agents / MCP / Fine-Tuning / Transformers"
  ],
  metrics: [
    { kpi: "Latency cut", value: "-60%", detail: "Text-To-SQL"},
    { kpi: "Ventures", value: "2", detail: "Co-founded" },
    { kpi: "Scored", value: "92%", detail: "IBM Project" },
  ],
  projects: [
    {
      title: "C++ Limit Order Book",
      blurb:
        "Modern C++ engine with lock‑free SPSC ring buffers.",
      tags: ["C++", "Concurrency", "Google Test"],
      link: "https://github.com/V1SHAL421/limit-order-book-system",
    },
    {
      title: "IBM Skills Build Enhancement - Client: IBM",
      blurb:
        "Developed gamification features and evaluated using LLMs - finetuned using HyperOpt and LoRA.",
      tags: ["LLMs", "PyTorch", "PostgreSQL", "Node.js", "React"],
      link: "https://github.com/V1SHAL421/gamification-evaluation",
    },
    {
      title: "Stock Ticker ETL Pipeline",
      blurb:
        "Constructed an ETL Pipeline to ingest ticker data from Yahoo! Finance's API into a data lake and then transform the data before loading it into a data warehouse for querying.",
      tags: ["Python", "AWS S3", "AWS Glue", "PySpark", "Redshift", "CDK", "IAM", "Pytest"],
      link: "https://github.com/V1SHAL421/stock-ticker-etl-pipeline",
    },
    {
      title: "Research Project - Accuracy or Interpretability",
      blurb:
        "Benchmarked Linear Regression, Ridge Regression, and XGBoost on the Ames Housing dataset across 100 randomized runs; evaluated log-RMSE, RMSE, and R2",
      tags: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
      link: "https://github.com/V1SHAL421/house-price-prediction",
    },
    {
      title: "Merton Moves",
      blurb:
        "A gamification hub with an AI-based search tool designed to encourage a young target demographic in Merton borough to be more active.",
      tags: ["AWS", "Client Relations", "Stakeholder Management", "Flutter"],
      link: "https://github.com/BJalleh26/six-guys"
    },
    {
      title: "Internal Admin Dashboard",
      blurb:
        "A web application monitoring and providing metrics on users on a lending application.",
      tags: ["Spring Boot", "AngularJS", "Docker", "Kubernetes", "Terraform"],
      link: "https://github.com/V1SHAL421/internal-admin-dashboard"
    }
  ],
  experience: [
    {
      company: "Amazon",
      role: "Data Engineer Intern",
      period: "2025",
      summary:
        "Designed an agentic Text-to-SQL pipeline to reduce financial reporting latency.",
      bullets: [
        "Implementing a production-grade, agentic AI Text-to-SQL pipeline, reducing financial reporting latency by automating queries across 100M+ rows, cutting analyst workflow time by 60%.",
        "Designing documents to evaluate architectural trade-offs.",
      ],
    },
    {
      company: "CoolEat (Foodtech)",
      role: "Co‑founder / Full-Stack Engineer",
      period: "2024–2025",
      summary:
        "Led a team of 6 to construct the MVP of our web application to reduce food waste.",
      bullets: [
        "Developed a web application for three different user flows involving Stripe payment.",
        "Pitched to accelerators, clients and external stakeholders.",
      ],
    },
    {
      company: "Amadeus IT Group",
      role: "Software Development Engineer Intern",
      period: "2024",
      summary:
        "Built a proof-of-concept passenger-facing web application with real-time messaging via WebSockets, an Azure pipeline, and airline system integration.",
      bullets: [
        "Designed an event-driven architecture bridging on-prem authentication with Azure IAM.",
        "Engineered an ETL pipeline to streamline billing calculations for the Azure pipeline.",
      ],
    },
    {
      company: "Denr (Fintech)",
      role: "Co‑founder / Full-Stack Engineer",
      period: "2023–2024",
      summary:
        "Led a team of 7 to construct the MVP of our mobile application for our two-sided marketplace.",
      bullets: [
        "Developed the Golang API, WebSockets-based notification service, and React Native UI.",
        "Constructed a Next.js web application, presenting our company's values and processes for user acquisition.",
      ],
    },
    {
      company: "10zyme",
      role: "App Developer Intern",
      period: "2023–2024",
      summary:
        "Constructed an app to help HPV patients through access to diagnostics and professional consultants.",
      bullets: [
        "Developed the UI using React Native within a team of 8.",
        "Set up CI/CD pipelines using Github Actions and policies for pull request approvals encouraging shared responsibility for production code.",
        "Balanced work alongside two other startups."
      ],
    },
    {
      company: "FoodCLUB",
      role: "Back End Developer Intern",
      period: "2023",
      summary:
        "Engineered the backend of V2 of the mobile application while tackling critical MVP tickets.",
      bullets: [
        "Engineered backend APIs in Node.js/Express for mobile CRUD operations, designing PostgreSQL schemas and DynamoDB tables with global secondary indexes to optimize query performance and retrieval speed.",
        "Implemented a Socket.IO-based messaging system with reconnection logic, enabling real-time chat and active-user tracking.",
        "Migrated session tracking from PostgreSQL to Redis with TTL-based caching, reducing user lookup latency by 90% and ensuring scalable real-time updates"
      ],
    },
    {
      company: "NxTuitions",
      role: "AI Engineer Intern",
      period: "2022-2023",
      summary:
        "Collaborated in an artificial intelligence project that plans to improve educational services where students' attention profiles are monitored and shared with parents through their progress reports.",
      bullets: [
        "Built an eye-tracking and blink-rate monitoring pipeline and triggered screenshots upon >5s absence to support progress reports.",
        "Experimented with Deep Learning models in Keras for eye-tracking and applied data augmentation to expand a limited dataset, prevent underfitting and improve generalisation.",
      ],
    },
  ],

  education: [
    {
      school: "King’s College London (MSci Computer Science)",
      period: "2021–2025",
      detail: "First Class Honours",
    },
  ],
  writing: [
    {
      title: "Accuracy or Interpretability? Benchmarking Linear Models Against XGBoost on Structured Data",
      href: "https://medium.com/@vishalmkumar3/accuracy-or-interpretability-benchmarking-linear-models-against-xgboost-on-structured-data-6dbd0f8aee67",
    },
  ],
};

// ======== UI HELPERS ========
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-12 sm:py-16">
    <Container>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <a href={`#top`} className="text-sm underline-offset-4 hover:underline">Back to top</a>
      </div>
      {children}
    </Container>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <Badge className="rounded-full px-3 py-1 text-[0.72rem]">{children}</Badge>
);

// ======== MAIN COMPONENT ========
  const initials = useMemo(() => CONFIG.name.split(" ").map((n) => n[0]).join("").slice(0, 2), [CONFIG.name]);

  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Skip to content</a>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src={CONFIG.headshot} alt={CONFIG.name} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{CONFIG.name}</p>
                <p className="text-xs text-muted-foreground">{CONFIG.role}</p>
              </div>
            </div>
            <nav className="hidden items-center gap-6 sm:flex">
              {[
                ["Experience", "experience"],
                ["Projects", "projects"],
                ["Writing", "writing"],
                ["Contact", "contact"],
              ].map(([label, href]) => (
                <a key={href} href={`#${href}`} className="text-sm text-muted-foreground transition hover:text-foreground">
                  {label}
                </a>
              ))}
              {/* <a href={CONFIG.links.resume} className="inline-flex items-center text-sm underline-offset-4 hover:underline">
                <Download className="mr-1 h-4 w-4" /> Resume
              </a> */}
            </nav>
            <div className="flex items-center gap-2">
              <IconLink href={CONFIG.links.github} label="GitHub"><Github className="h-5 w-5" /></IconLink>
              <IconLink href={CONFIG.links.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></IconLink>
              <IconLink href={`mailto:${CONFIG.email}`} label="Email"><Mail className="h-5 w-5" /></IconLink>
              {/* <IconLink href={CONFIG.links.website} label="Website"><Globe className="h-5 w-5" /></IconLink> */}
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-muted/40 to-transparent py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold leading-tight sm:text-4xl">
                {CONFIG.tagline}
              </motion.h1>
              <p className="mt-4 text-muted-foreground">
                Currently working in the Amazon AI Automation Team for Supply Chain after completing my MSci in Computer Science.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {CONFIG.software_skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {CONFIG.ai_ml_skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild size="lg">
                  <a href="#projects">See Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                {/* <Button asChild variant="outline" size="lg">
                  <a href={CONFIG.links.resume}><Download className="mr-2 h-4 w-4" /> Download CV</a>
                </Button> */}
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                {CONFIG.highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-2 rounded-full border bg-background px-3 py-1">
                    <span className="font-medium">{h.label}</span>
                    <span>:</span>
                    <span>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <ShowcaseCard />
            </div>
          </div>
        </Container>
      </section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" subtitle="My career journey">
        <div className="grid gap-6 md:grid-cols-2">
          {CONFIG.experience.map((e) => (
            <Card key={e.company} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><Briefcase className="h-5 w-5" />{e.company}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="h-4 w-4" />{e.period}</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-foreground">
                  <span className="font-medium">{e.role}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{e.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="Personal and university projects.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.projects.map((p) => (
            <Card key={p.title} className="group h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><Rocket className="h-5 w-5" />{p.title}</span>
                  <a href={p.link} aria-label={`Open ${p.title}`} className="opacity-70 transition group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
                <CardDescription>{p.blurb}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* WRITING */}
      <Section id="writing" title="Writing" subtitle="Blogs and papers.">
        <div className="grid gap-4 sm:grid-cols-2">
          {CONFIG.writing.map((w) => (
            <a key={w.title} href={w.href} className="rounded-2xl border p-5 transition hover:bg-muted/50">
              <h3 className="font-medium">{w.title}</h3>
              <p className="mt-1 inline-flex items-center text-sm text-muted-foreground">Read more <ExternalLink className="ml-1 h-4 w-4" /></p>
            </a>
          ))}
        </div>
      </Section>

      {/* EDUCATION & METRICS */}
      <Section id="about" title="About" subtitle="A quick snapshot.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5" />Education</CardTitle>
              {/* <CardDescription>Grounded theory, applied rigor.</CardDescription> */}
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {CONFIG.education.map((ed) => (
                  <li key={ed.school}>
                    <p className="font-medium">{ed.school}</p>
                    <p className="text-muted-foreground">{ed.period} — {ed.detail}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" />Key metrics</CardTitle>
              <CardDescription>Impact at a glance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {CONFIG.metrics.map((m) => (
                  <div key={m.kpi} className="rounded-xl border bg-background p-4 text-center">
                    <div className="text-xl font-semibold">{m.value}</div>
                    <div className="text-xs text-muted-foreground">{m.kpi}</div>
                    <div className="mt-1 text-[0.7rem] text-muted-foreground">{m.detail}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Happy to have a chat!">
        <Card className="overflow-hidden">
          <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium">Open to Software/AI Engineer roles</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Backend / Full-Stack / AI Systems
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {CONFIG.location}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> {CONFIG.email}</span>
              </div>
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <a href={`mailto:${CONFIG.email}`}><Mail className="mr-2 h-4 w-4" /> Email me</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={CONFIG.links.linkedin}><Linkedin className="mr-2 h-4 w-4" /> Connect</a>
                </Button>
              </div>
            </div>
            {/* <div className="rounded-xl border bg-muted/30 p-4 text-sm">
              <p className="font-medium">What I’m great at</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Turning ambiguous problems into measurable deliverables</li>
                <li>Shipping observability and guardrails by default</li>
                <li>Balancing performance with product velocity</li>
              </ul>
              <p className="mt-4 font-medium">What I’m learning next</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Advanced cache‑aware data structures</li>
                <li>LLM evaluation & reliability at scale</li>
                <li>Trading systems — market data ingestion</li>
              </ul>
            </div> */}
          </CardContent>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm">
              <a className="underline-offset-4 hover:underline" href="#experience">Experience</a>
              <a className="underline-offset-4 hover:underline" href="#projects">Projects</a>
              <a className="underline-offset-4 hover:underline" href="#writing">Writing</a>
              <a className="underline-offset-4 hover:underline" href="#contact">Contact</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

// ======== SMALL PARTS ========
function IconLink({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition hover:bg-muted/50"
    >
      {children}
    </a>
  );
}

function ShowcaseCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Recent work</CardTitle>
        {/* <CardDescription>Shipped, measured, iterated.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="rounded-xl border bg-background p-4">
          <p className="text-sm"><span className="font-medium">Amazon FP&A Text-To-SQL Agentic AI Chatbot:</span> Scoped, designed and implemented a production-grade internal tool for financial analysis and deep dives reducing data retrieval time by 85%</p>
        </div>
        <div className="rounded-xl border bg-background p-4">
          <p className="text-sm"><span className="font-medium">Containerized Gogs & VNC Development Environment:</span> A fully containerized Debian-based Gogs Git server with built-in VNC/noVNC access, Firefox, and helper scripts for automated setup, testing, and data management.</p>
        </div>
        {/* <div className="rounded-xl border bg-background p-4">
          <p className="text-sm"><span className="font-medium">Text2SQL:</span> guardrailed Bedrock agents with eval harness + drift alerts; reduced manual ops load.</p>
        </div>
        <div className="rounded-xl border bg-background p-4">
          <p className="text-sm"><span className="font-medium">Denr:</span> Kafka‑based ledger service with idempotency and observability baked in.</p>
        </div> */}
      </CardContent>
    </Card>
  );
}