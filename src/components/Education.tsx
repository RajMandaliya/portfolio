import { education } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader num="04" title="Education" />
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((edu) => (
          <div key={edu.degree} className="bg-surface border border-border rounded-xl p-8">
            <div className="font-display font-bold text-xl">{edu.degree}</div>
            <div className="text-accent text-sm mt-1">
              {edu.school}, {edu.location}
            </div>
            <div className="text-text-dim text-xs mt-1">{edu.year}</div>
            <div className="flex flex-wrap gap-2 mt-5">
              {edu.courses.map((c) => (
                <span key={c} className="text-[11px] px-2 py-1 rounded border border-border bg-white/[0.03] text-text-dim">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
