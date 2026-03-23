import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-12 text-center text-text-dim text-xs tracking-wide">
      <p>
        Designed &amp; built by {personal.name} · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
