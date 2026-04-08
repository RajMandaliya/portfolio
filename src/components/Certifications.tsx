import { certifications } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader num="05" title="Certifications" />
      <div className="grid md:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="bg-surface border border-border rounded-xl p-7 flex gap-4 items-start hover:border-accent/20 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
              <BadgeCheck size={18} className="text-accent" />
            </div>
            <div>
              <div className="font-display font-bold text-base leading-snug">{cert.name}</div>
              <div className="text-text-dim text-xs mt-1">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
