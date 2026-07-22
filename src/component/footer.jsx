import { useState } from "react";
// import { Copy, Check, Linkedin, Twitter } from "lucide-react";
import { FaGithub ,FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyAll } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


const colors = {
  background: "#F9F9FA",
  foreground: "#0E1629",
  card: "#FFFFFF",
  primary: "#4A3FE3",
  primaryForeground: "#FFFFFF",
  primaryGlow: "#766DF7",
  mutedForeground: "#64748B",
  border: "#DFE4EB",
};

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "utmostechnology@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // clipboard unavailable, fail silently
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className=" w-full flex items-center justify-center p-6"
      style={{ background: colors.background }}
    >
      <style>{`
        .mesh-card {
          background-image:
            radial-gradient(at 20% 20%, hsla(244, 90%, 70%, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(174, 72%, 60%, 0.12) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(244, 75%, 57%, 0.08) 0px, transparent 50%);
        }
        .email-btn {
          background-color: ${colors.primary};
          color: ${colors.primaryForeground};
          transition: background-color 0.2s ease, transform 0.15s ease;
        }
        .email-btn:hover { background-color: ${colors.primaryGlow}; }
        .email-btn:active { transform: scale(0.98); }
        .email-btn:focus-visible {
          outline: 2px solid ${colors.primary};
          outline-offset: 2px;
        }
        .icon-btn {
          background-color: ${colors.card};
          border: 1px solid ${colors.border};
          color: ${colors.mutedForeground};
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }
        .icon-btn:hover {
          color: ${colors.primary};
          border-color: ${colors.primary};
          transform: translateY(-2px);
        }
        .icon-btn:focus-visible {
          outline: 2px solid ${colors.primary};
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .email-btn, .icon-btn { transition: none; }
          .icon-btn:hover { transform: none; }
        }
      `}</style>

      <div
        className="mesh-card w-full  rounded-3xl px-6 sm:px-10 py-14 sm:py-20 text-center"
        style={{
          backgroundColor: colors.card,
          border: `1px solid ${colors.border}`,
          boxShadow: "0 1px 2px rgba(14, 22, 41, 0.04)",
        }}
      >
        <p
          className="font-mono text-xs sm:text-sm uppercase mb-5"
          style={{ color: colors.primary, letterSpacing: "0.2em" }}
        >
          // 06 — Let's talk
        </p>

        <h2
          className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
          style={{ color: colors.foreground }}
        >
          Let's build something{" "}
          <span style={{ color: colors.primary }}>robust</span> together.
        </h2>

        <p
          className="mt-5 text-base sm:text-lg max-w-md mx-auto"
          style={{ color: colors.mutedForeground }}
        >
          Open to junior/mid full-stack roles, freelance projects, and
          open-source collaboration.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={handleCopy}
            className="email-btn inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-3 text-sm font-medium"
          >
            {copied ? <FaCheck size={16} /> : <MdCopyAll size={16} />}
            <span>{copied ? "Copied!" : email}</span>
          </button>

          <div className="flex items-center gap-2">
            <a href="https://github.com/daredre31" aria-label="GitHub" className="icon-btn w-11 h-11 flex items-center justify-center rounded-xl">
              <FaGithub size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="icon-btn w-11 h-11 flex items-center justify-center rounded-xl">
              <FaLinkedin size={18} />
            </a>
            <a href="https://x.com/Datdre_tech" aria-label="Twitter" className="icon-btn w-11 h-11 flex items-center justify-center rounded-xl">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
