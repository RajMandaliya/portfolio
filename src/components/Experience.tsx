import { experience } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader num="01" title="Experience" />
      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <div
            key={job.company}
            className="bg-surface border border-border rounded-xl p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-4 hover:border-accent/20 hover:translate-x-1 transition-all duration-200"
          >
            <div>
              <div className="font-display font-bold text-xl">{job.company}</div>
              <div className="text-accent text-xs tracking-wide mt-1">{job.role}</div>
            </div>
            <div className="text-right">
              <div className="text-text-dim text-xs">{job.period}</div>
              <div className="text-text-dim text-[11px] mt-0.5">{job.location}</div>
            </div>
            <ul className="md:col-span-2 mt-2 flex flex-col gap-2">
              {job.bullets.map((b, i) => (
                <li key={i} className="text-text-dim text-sm leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent">
                  {b}
                </li>
              ))}
            </ul>
            <div className="md:col-span-2 flex flex-wrap gap-2 mt-2">
              {job.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded border border-border bg-white/[0.03] text-text-dim">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
