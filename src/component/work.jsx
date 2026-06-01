import { useState } from "react";

// TODO: replace DUMMY_PROJECTS with API fetch
// import { projectsAPI } from "../api";
// useEffect(() => {
//   projectsAPI.getAll().then(res => setProjects(res.data));
// }, []);

const DUMMY_PROJECTS = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, Stripe payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop",
    technicalWin: "Reduced checkout latency by 60% using Redis caching and optimistic UI updates.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubLink: "https://github.com",
    projectUrl: "https://myproject.com",
  },
  {
    id: "2",
    title: "AI Chat Assistant",
    description:
      "An intelligent conversational AI powered by GPT with custom training data and multi-language support.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop",
    technicalWin: "Implemented streaming responses with token-level rendering, cutting perceived latency by 80%.",
    techStack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Docker"],
    githubLink: "https://github.com",
    projectUrl: "https://myproject.com",
  },
  {
    id: "3",
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop boards, real-time updates and team chat.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop",
    technicalWin: "Built real-time sync using Socket.io rooms — zero polling, instant board updates across all clients.",
    techStack: ["React", "Express", "Socket.io", "Redis", "TypeScript"],
    githubLink: "https://github.com",
    projectUrl: "https://myproject.com",
  },
  {
    id: "4",
    title: "Crypto Dashboard",
    description:
      "Real-time crypto portfolio tracker with live charts, price alerts, and multi-exchange support.",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&auto=format&fit=crop",
    technicalWin: "Unified 3 exchange WebSocket feeds into a single normalized stream with less than 50ms delay.",
    techStack: ["React", "Vite", "Binance API", "Recharts", "Zustand"],
    githubLink: "https://github.com",
    projectUrl: "https://myproject.com",
  },
  {
    id: "5",
    title: "StageLink Platform",
    description:
      "A talent marketplace targeting the African entertainment and events market with booking and payments.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop",
    technicalWin: "Designed a multi-role auth system supporting artists, event planners, and admins in one codebase.",
    techStack: ["React", "Node.js", "MongoDB", "Cloudinary"],
    githubLink: "https://github.com",
    projectUrl: "https://myproject.com",
  },
  {
    id: "6",
    title: "Hostel Management System",
    description:
      "Full backend-connected hostel management system with room booking, payments, and occupancy tracking.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop",
    technicalWin: "Built a JWT-secured REST API with role-based access control for students, staff, and admin.",
    techStack: ["TypeScript", "Express", "MongoDB", "JWT"],
    githubLink: "https://github.com",
    projectUrl: "https://myproject.com",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

// ─── Browser Mockup ───────────────────────────────────────────────────────────
function BrowserMockup({ image, title }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1a2e]">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#12121f] border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] text-white/30 font-mono truncate">
          {title.toLowerCase().replace(/\s+/g, "")}.app
        </span>
      </div>
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden
        ${hovered
          ? "border-white/20 bg-white/5 shadow-xl shadow-black/40 -translate-y-1"
          : "border-white/8 bg-white/[0.03]"
        }`}
      style={{ backdropFilter: "blur(12px)" }}
    >
      {/* Browser mockup */}
      <div className="p-4 pb-0">
        <BrowserMockup image={project.image} title={project.title} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">

        {/* Title + links */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-white leading-snug">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>
            )}
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed">
          {project.description}
        </p>

        {/* Technical Win */}
        {project.technicalWin && (
          <div className="rounded-xl border-l-2 border-[#2a9d90] bg-[#2a9d90]/8 px-4 py-3">
            <p className="text-[10px] font-bold tracking-widest text-[#2a9d90] uppercase mb-1.5 flex items-center gap-1.5">
              <TrophyIcon />
              Technical Win
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              {project.technicalWin}
            </p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Work Section ─────────────────────────────────────────────────────────────
export default function Work() {
  // TODO: swap DUMMY_PROJECTS with real API data like this:
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   projectsAPI.getAll()
  //     .then(res => setProjects(res.data))
  //     .catch(err => console.error(err));
  // }, []);

  const projects = DUMMY_PROJECTS;

  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase mb-3">
              Selected Projects
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Case studies,{" "}
              <span className="text-white/40">not just screenshots.</span>
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors whitespace-nowrap"
          >
            View all repos
            <ExternalLinkIcon />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
