# Raj Mandaliya — Portfolio

A personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployable to Vercel in one click.

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customizing Your Content

All portfolio content lives in a **single file**:

```
src/data/portfolio.ts
```

Edit that file to update:
- Personal info (name, email, GitHub, LinkedIn, etc.)
- Work experience
- Projects
- Skills
- Education

No other files need to change for content updates.

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — zero configuration needed

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeader.tsx
└── data/
    └── portfolio.ts      # ← Edit this file to update content
```

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — Icons
- [Framer Motion](https://www.framer.com/motion/) — ready to use for animations

---

## 📝 License

MIT — free to use and adapt.
