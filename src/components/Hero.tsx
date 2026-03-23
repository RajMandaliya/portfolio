import { personal, stats } from "@/data/portfolio";
import { Github, Mail } from "lucide-react";

const primaryLangs = ["Rust", "Java", "Python", "Go"];
const secondaryLangs = ["TypeScript", "Kotlin", "C++"];

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-12 pt-24 pb-12 gap-12 relative overflow-hidden max-w-7xl mx-auto">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,255,87,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,87,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(232,255,87,0.06) 0%, transparent 70%)",
          top: "-100px",
          left: "-100px",
        }}
      />

      {/* Left: Text */}
      <div className="relative z-10">
        {personal.available && (
          <span className="inline-block text-[11px] tracking-widest uppercase text-accent border border-accent/30 px-3 py-1 rounded-full mb-6 animate-fade-up">
            Available for new roles
          </span>
        )}
        <h1
          className="font-display font-extrabold leading-none tracking-tight animate-fade-up"
          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", animationDelay: "0.1s" }}
        >
          {personal.name.split(" ")[0]}
          <br />
          <span className="text-accent">{personal.name.split(" ")[1]}</span>
        </h1>
        <p className="mt-6 text-text-dim text-sm max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {personal.tagline}
        </p>
        <div className="flex flex-wrap gap-3 mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-bg text-xs font-medium px-5 py-3 rounded-md hover:-translate-y-0.5 transition-all hover:shadow-[0_8px_24px_rgba(232,255,87,0.25)]"
          >
            <Github size={14} /> View GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-text-dim text-xs px-5 py-3 rounded-md border border-border hover:text-white hover:border-muted hover:-translate-y-0.5 transition-all"
          >
            <Mail size={14} /> Get in Touch
          </a>
        </div>
      </div>

      {/* Right: Stats card */}
      <div className="relative z-10 grid grid-cols-2 border border-border rounded-xl overflow-hidden bg-surface divide-x divide-y divide-border">
        {stats.map((s) => (
          <div key={s.label} className="p-7 hover:bg-[#161622] transition-colors">
            <div className="font-display font-extrabold text-accent" style={{ fontSize: "2.2rem", lineHeight: 1 }}>
              {s.value}
            </div>
            <div className="text-[11px] uppercase tracking-widest text-text-dim mt-2">{s.label}</div>
          </div>
        ))}
        {/* Languages row */}
        <div className="col-span-2 p-7 hover:bg-[#161622] transition-colors">
          <div className="text-[11px] uppercase tracking-widest text-text-dim mb-3">Primary Languages</div>
          <div className="flex flex-wrap gap-2">
            {primaryLangs.map((l) => (
              <span key={l} className="text-[11px] px-2 py-1 rounded bg-accent/8 text-accent border border-accent/15">
                {l}
              </span>
            ))}
            {secondaryLangs.map((l) => (
              <span key={l} className="text-[11px] px-2 py-1 rounded bg-accent2/8 text-accent2 border border-accent2/15">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
