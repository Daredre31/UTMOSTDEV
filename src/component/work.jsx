import { useState } from "react";

// TODO: replace PROJECTS with API fetch
// import { projectsAPI } from "../api";
// useEffect(() => {
//   projectsAPI.getAll().then(res => setProjects(res.data));
// }, []);

const PROJECTS = [
  {
    id: "SYS/01",
    status: "live",
    statusLabel: "Piloted",
    title: "HostelOS",
    subtitle: "Hostel management system",
    problem:
      "Hostels were running room allocation, complaints, and access on spreadsheets and group chats. HostelOS replaces that with one system for admins, heads of hostel, and students — each seeing only what their role permits.",
    build:
      "JWT access/refresh rotation with httpOnly cookies, Redis-backed sessions, and RBAC across three roles. Complaint and notification pipeline, task management, CI/CD on GitHub Actions. Demoed live at school and currently in pilot.",
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "React", "Tailwind"],
    github: "https://github.com/daredre31",
  },
  {
    id: "SYS/02",
    status: "dev",
    statusLabel: "In development",
    title: "Support chat",
    subtitle: "Real-time customer support system",
    problem:
      "Built for the support layer of a portfolio-facing product — visitors need a live line to a human without the delay of email, and conversations need to survive reconnects and reloads.",
    build:
      "Socket.io for the transport layer, Redis pub/sub so socket rooms scale past a single instance, BullMQ handling background jobs like offline notifications, Prisma over MongoDB for typed data access, JWT for authenticated sessions.",
    stack: ["Socket.io", "Node.js", "Redis", "BullMQ", "Prisma", "JWT"],
    github: "https://github.com/daredre31",
  },
  {
    id: "SYS/03",
    status: "dev",
    statusLabel: "In development",
    title: "Content platform",
    subtitle: "Admin-driven CMS",
    problem:
      "Editors need to draft, review, and publish content without waiting on a developer for every change — and without stepping on each other's edits.",
    build:
      "Role-based publishing workflow (draft, review, publish) with a REST API separating the authoring surface from the read path, so content changes don't require a redeploy.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
    github: "https://github.com/daredre31",
  },
  {
    id: "SYS/04",
    status: "shipped",
    statusLabel: "V1 · shipped",
    title: "DayFlow",
    subtitle: "Task management app",
    problem:
      "An early project built to get comfortable shipping a full CRUD app end to end — create, prioritize, and track daily tasks without the overhead of a full project management tool.",
    build:
      "Straightforward React frontend over a Node/Express API, MongoDB for persistence. First project where auth, state, and data flow all had to come together in one working app.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/daredre31",
  },
];

const COMING_SOON = [
  {
    title: "StageLink",
    note: "Talent marketplace for the African entertainment and events market — booking, payments, multi-role auth for artists, planners, and admins.",
  },
  {
    title: "SignalForge",
    note: "Real-time trading signal engine — Binance WebSocket feeds, Redis pub/sub, BullMQ, an SMC rule engine, multi-tenant API key auth.",
  },
];

// Category -> tech pill color, kept consistent so the same tag always
// reads the same color across every project (category, not decoration).
const STACK_COLORS = {
  "Node.js": "bg-tech-purple text-foreground",
  TypeScript: "bg-tech-purple text-foreground",
  Express: "bg-tech-purple text-foreground",
  MongoDB: "bg-tech-green text-foreground",
  Redis: "bg-tech-green text-foreground",
  Prisma: "bg-tech-green text-foreground",
  React: "bg-tech-blue text-foreground",
  Tailwind: "bg-tech-blue text-foreground",
  "Socket.io": "bg-tech-amber text-foreground",
  BullMQ: "bg-tech-amber text-foreground",
  JWT: "bg-tech-amber text-foreground",
};
const DEFAULT_TAG_COLOR = "bg-tech-slate text-foreground";

const STATUS_STYLES = {
  live: { dot: "bg-accent", text: "text-accent" },
  dev: { dot: "bg-primary", text: "text-primary" },
  shipped: { dot: "bg-muted-foreground/50", text: "text-muted-foreground" },
};

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const s = STATUS_STYLES[project.status];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-200"
      style={{
        boxShadow: hovered
          ? "0 8px 30px -8px rgba(118, 109, 247, 0.35)"
          : "0 1px 2px rgba(14, 22, 41, 0.03)",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-10">
        <div className="flex md:flex-col justify-between md:justify-start gap-3 md:gap-5">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground mb-2">
              {project.id}
            </p>
            <span className="inline-flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
              <span className={`text-[11px] font-mono uppercase tracking-wider ${s.text}`}>
                {project.statusLabel}
              </span>
            </span>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:hidden items-center gap-1.5 text-muted-foreground hover:text-primary text-[12px] font-mono transition-colors"
          >
            <GithubIcon />
            repo
          </a>

          <div className="hidden md:flex flex-wrap gap-1.5 mt-auto">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className={`text-[11px] font-mono px-2 py-1 rounded-md ${
                  STACK_COLORS[tag] || DEFAULT_TAG_COLOR
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-muted-foreground hover:text-primary text-[12px] font-mono transition-colors flex-shrink-0 mt-1"
            >
              <GithubIcon />
              repo
            </a>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            {project.problem}
          </p>

          <div className="rounded-xl bg-secondary border-l-2 border-accent pl-4 pr-4 py-3">
            <p className="text-[10px] font-mono tracking-widest text-accent uppercase mb-1.5">
              Build notes
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-xl">
              {project.build}
            </p>
          </div>

          <div className="flex md:hidden flex-wrap gap-1.5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className={`text-[11px] font-mono px-2 py-1 rounded-md ${
                  STACK_COLORS[tag] || DEFAULT_TAG_COLOR
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  // TODO: swap PROJECTS with real API data, same shape as above.
  const projects = PROJECTS;

  return (
    <section className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-[12px] text-muted-foreground mb-3">
            <span className="text-primary">$</span> cat ./projects.json --active
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Systems I've built,{" "}
            <span className="text-muted-foreground">not screenshots of them.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-5">
            Queued
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMING_SOON.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-dashed border-border bg-secondary/50 px-5 py-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    Queued
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
