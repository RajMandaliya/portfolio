"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/85 backdrop-blur-xl" : ""
      }`}
    >
      <span className="font-display font-extrabold text-accent tracking-tight text-lg">RM_</span>
      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-text-dim text-xs uppercase tracking-widest hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
