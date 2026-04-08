import { personal } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { Mail, Github, BookOpen, Phone } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "rajmandaliya2249@gmail.com", href: "mailto:rajmandaliya2249@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/RajMandaliya", href: "https://github.com/RajMandaliya" },
  { icon: BookOpen, label: "Blog", value: "dev.to/rajmandaliya", href: "https://dev.to/rajmandaliya" },
  { icon: Phone, label: "Phone", value: "+1 201-626-0902", href: "tel:+12016260902" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader num="06" title="Contact" />
      <div className="bg-surface border border-border rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,255,87,0.04) 0%, transparent 70%)",
            right: "-100px",
            top: "-100px",
          }}
        />

        <div className="relative">
          <h2 className="font-display font-extrabold text-4xl leading-tight tracking-tight">
            Let&apos;s build
            <br />
            <span className="text-accent">something.</span>
          </h2>
          <p className="text-text-dim text-sm mt-4 leading-relaxed max-w-sm">
            Open to infrastructure, systems, and AI/ML storage roles. Whether it&apos;s Rust, distributed systems, or
            cloud-scale services — let&apos;s talk.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="inline-block mt-8 bg-accent text-bg text-xs font-medium px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,255,87,0.25)] transition-all"
          >
            Send an Email
          </a>
        </div>

        <div className="flex flex-col gap-3 relative">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-text-dim border border-border rounded-lg px-5 py-4 text-sm hover:text-white hover:border-accent/20 hover:bg-accent/[0.04] hover:translate-x-1 transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-accent/[0.08] flex items-center justify-center flex-shrink-0">
                <Icon size={15} className="text-accent" />
              </div>
              <div>
                <div className="text-white text-sm mb-0.5">{label}</div>
                <div className="text-xs text-text-dim">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
