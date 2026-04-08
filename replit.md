# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Portfolio (`artifacts/portfolio`) — Preview path: `/`

A premium personal portfolio and freelance business website for a Melbourne-based web developer.

**Pages:**
- `/` — Home: hero, services preview, project showcase, process, testimonials, blog preview
- `/about` — About: personal story, skills, experience, values
- `/projects` — Projects: 6 sample projects with filtering
- `/services` — Services: 6 service cards with detailed descriptions
- `/contact` — Contact: lead capture form with react-hook-form + zod validation
- `/blog` — Blog index: 5 SEO-focused articles
- `/blog/:slug` — Individual blog post article pages

**Blog posts (with full article content):**
1. How a Small Business Website Should Be Structured
2. WordPress vs Custom Website: Which Is Right for Your Business?
3. Why Website Speed Matters for SEO and Conversions
4. What Makes a Good Landing Page?
5. Signs Your Business Website Needs a Redesign

**SEO features:**
- react-helmet-async for per-page dynamic meta tags
- JSON-LD structured data (Person + LocalBusiness schema) in index.html
- Open Graph + Twitter Card meta tags
- robots.txt and sitemap.xml in public/
- Semantic HTML throughout

**Design:**
- Dark premium theme (near-black background, warm bronze/copper accent)
- Google Fonts: Outfit (display) + Inter (body)
- framer-motion scroll animations and transitions
- Mobile-responsive with hamburger nav

**Tech:** React, Vite, TypeScript, Tailwind CSS, framer-motion, wouter, react-hook-form, zod, react-helmet-async, react-markdown, lucide-react
