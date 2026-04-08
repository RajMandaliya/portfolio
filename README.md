# Raj Mandaliya — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Lucide React**. One-click deploy to Vercel.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ✏️ Updating Content

Everything lives in one file:

```
src/data/portfolio.ts
```

Edit it to update your name, experience, projects, skills, education, certifications, and contact info. No other files need to change.

---

## 🌐 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import repo
3. Click **Deploy** — zero config needed

Every `git push` after that auto-deploys.

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css         # Tailwind + global styles
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Assembles all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionHeader.tsx
└── data/
    └── portfolio.ts        # ← Edit this to update content
```

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) App Router + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- [Framer Motion](https://www.framer.com/motion/) (installed, ready to use)

---

## 📝 License

MIT — free to use and adapt.
