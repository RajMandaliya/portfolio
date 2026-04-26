import { projects } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { Star, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader num="02" title="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-xl p-7 flex flex-col gap-3 hover:border-accent/25 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-200 group relative overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-start relative">
              <div className="flex items-center gap-2 text-accent2 text-[11px] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                {p.lang}
              </div>
              <ExternalLink size={14} className="text-text-dim group-hover:text-accent transition-colors" />
            </div>

            <div className="font-display font-bold text-xl relative">{p.name}</div>
            {p.period && (
              <div className="text-[11px] text-text-dim relative">{p.period}</div>
            )}
            <p className="text-text-dim text-sm leading-relaxed flex-1 relative">{p.description}</p>

            <div className="flex flex-wrap gap-1.5 relative">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded border border-border bg-white/[0.03] text-text-dim"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1 text-text-dim text-xs relative">
              <Star size={12} className="text-accent" /> {p.stars} stars
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
