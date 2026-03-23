import { skills } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader num="03" title="Skills" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className={`bg-surface border border-border rounded-xl p-7 ${group.category === "Concepts" ? "lg:col-span-3" : ""}`}
          >
            <div className="text-[11px] uppercase tracking-widest text-accent mb-4">{group.category}</div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-md border border-border bg-white/[0.03] text-text-dim hover:bg-accent/7 hover:border-accent/20 hover:text-accent transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
