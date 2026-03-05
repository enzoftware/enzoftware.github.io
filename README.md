# enzoftware.github.io

Personal portfolio of **Enzo Lizama Paredes** — Senior Mobile Engineer (Flutter & Android).

## Stack

- [Astro 4](https://astro.build) — static site generator
- [Bun](https://bun.sh) — runtime & package manager
- [React 18](https://react.dev) — interactive components
- [TypeScript](https://www.typescriptlang.org) — strict mode
- [Tailwind CSS v3](https://tailwindcss.com) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Mixpanel](https://mixpanel.com) — analytics (optional)

## Getting started

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Analytics (Mixpanel)

1. Copy the example env file:

   ```bash
   cp .env.example .env
   ```

2. Fill in your Mixpanel project token:

   ```
   PUBLIC_MIXPANEL_TOKEN=your_token_here
   ```

   If the token is missing or set to the placeholder value, analytics are silently skipped.

## GitHub API

Starred repositories and profile data are fetched from the GitHub API at **build time** — no client-side requests. If the API is unreachable during build, sensible defaults are used automatically.

## Project structure

```
src/
├── components/
│   ├── BentoGrid.tsx          # Grid layout orchestrator
│   ├── HeroCard.tsx           # Name, bio, CTA buttons
│   ├── PhotoCard.tsx          # Animated GitHub avatar
│   ├── SkillsCard.tsx         # Tech stack pills
│   ├── ExperienceCard.tsx     # Work history timeline
│   ├── FeaturedProjectsCard.tsx # hotelyn, android_iptv, FlutterConf
│   ├── StarredReposCard.tsx   # Live starred repos from GitHub
│   ├── SocialCard.tsx         # GitHub, LinkedIn, X, Hashnode
│   ├── ContactCard.tsx        # Email CTA
│   └── Analytics.tsx          # Mixpanel integration
├── layouts/
│   └── Layout.astro           # Base HTML, fonts, OG tags
├── pages/
│   └── index.astro            # Entry point, GitHub API fetch
└── styles/
    └── global.css             # Tailwind + responsive bento grid
public/
└── favicon.svg                # Custom SVG favicon
```

## Deployment

The site outputs static files to `dist/` and can be deployed to any static host. For GitHub Pages, push the `dist/` folder to the `gh-pages` branch, or configure a GitHub Actions workflow to build and deploy on push.
