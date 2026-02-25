# Iron Forge Fitness

> Forge Your Strongest Self

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## About

Founded by Olympic athlete Marcus Steel, Iron Forge Fitness offers world-class training in Denver. HIIT, CrossFit, Yoga, Spin, Boxing classes. Personal training. Free 7-day trial.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action
- Pricing plans display
- Customer testimonials
- Image gallery showcase

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |

## Pages

- **Home** (`/`) — hero, about, featured-classes, pricing, team-preview, testimonials, gallery, cta-banner
- **About** (`/about`) — page-hero, story, values, stats, cta-banner
- **Classes** (`/classes`) — page-hero, class-categories, schedule, cta-banner
- **Trainers** (`/trainers`) — page-hero, team-grid, cta-banner
- **Gallery** (`/gallery`) — page-hero, gallery-masonry, video-section, cta-banner
- **Join** (`/signup`) — page-hero, registration-form, benefits-sidebar
- **Contact** (`/contact`) — page-hero, contact-details, map, contact-form, cta-banner

## Project Structure

```
├── .env.example
├── _build_errors/
│   └── parse-errors.txt
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   ├── newsletter/
│   │   │   └── route.ts
│   │   ├── schedule/
│   │   │   └── route.ts
│   │   └── signup/
│   │       └── route.ts
│   ├── classes/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   └── trainers/
│       └── page.tsx
├── components.json
├── components/
│   ├── CTABanner.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroAurora.tsx
│   ├── Navbar.tsx
│   ├── PricingTable.tsx
│   ├── StatsCounter.tsx
│   ├── TeamGrid.tsx
│   ├── TestimonialsAnimated.tsx
│   └── ui/
│       ├── animated-testimonials.tsx
│       ├── avatar.tsx
│       ├── backgrounds/
│       │   ├── aurora-background.tsx
│       │   └── meteors.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── text/
│       │   └── text-generate-effect.tsx
│       └── textarea.tsx
├── lib/
│   ├── email.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validators.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#FF6B00](https://via.placeholder.com/15/FF6B00/000000?text=+) | `#FF6B00` |
| Secondary | ![#1A1A1A](https://via.placeholder.com/15/1A1A1A/000000?text=+) | `#1A1A1A` |
| Accent | ![#FF8C33](https://via.placeholder.com/15/FF8C33/000000?text=+) | `#FF8C33` |
| Background | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | `#FFFFFF` |

## Typography

- **Headings:** Montserrat
- **Body:** Inter

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mm2jkqkd.git

# Navigate to the project
cd proj_mm2jkqkd

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mm2jkqkd)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
