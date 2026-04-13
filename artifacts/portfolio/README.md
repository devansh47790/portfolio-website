# Portfolio Website

A premium personal portfolio and freelance business website for a Melbourne-based web developer.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## Folder & File Structure

```
artifacts/portfolio/
│
├── public/                         # Static files served directly (no processing)
│   ├── favicon.svg                 # Browser tab icon
│   ├── opengraph.jpg               # Social share image (used for og:image meta tag)
│   ├── robots.txt                  # Tells search engines what to crawl
│   ├── sitemap.xml                 # List of all pages for search engines
│   └── images/
│       ├── hero-bg.png             # Background image on the homepage hero
│       ├── about-texture.png       # Background texture on the About page
│       ├── project-1.png           # Project thumbnail — Tradesperson booking site
│       ├── project-2.png           # Project thumbnail — Boutique skincare brand
│       ├── project-3.png           # Project thumbnail — Law firm redesign
│       ├── project-4.png           # Project thumbnail — SaaS landing page
│       ├── project-5.png           # Project thumbnail — Restaurant website
│       └── project-6.png           # Project thumbnail — Finance dashboard
│
├── src/                            # All source code lives here
│   │
│   ├── main.tsx                    # Entry point — mounts the React app into index.html
│   ├── App.tsx                     # Root component — sets up routing and page layout
│   ├── index.css                   # Global styles — theme colours, fonts, dark mode
│   │
│   ├── pages/                      # One file per page of the website
│   │   ├── home.tsx                # Home page — hero, services, projects, process, blog preview
│   │   ├── about.tsx               # About page — story, skills, experience, values
│   │   ├── projects.tsx            # Projects page — showcase of 6 sample projects
│   │   ├── services.tsx            # Services page — 6 service cards with descriptions
│   │   ├── contact.tsx             # Contact page — lead form with validation
│   │   ├── blog.tsx                # Blog index — list of all 5 blog posts
│   │   ├── blog-post.tsx           # Blog article template — renders a single post
│   │   └── not-found.tsx           # 404 page — shown for any unknown URL
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Top navigation bar — logo, links, mobile menu
│   │   │   └── Footer.tsx          # Site footer — links, location, copyright
│   │   │
│   │   └── ui/
│   │       ├── SEO.tsx             # Sets page title and meta tags per route
│   │       └── PageTransition.tsx  # Wraps pages with fade-in animation
│   │
│   ├── data/                       # All website content lives here — easy to edit
│   │   ├── projects.ts             # Array of 6 projects (title, description, tags, image)
│   │   ├── services.ts             # Array of 6 services (name, description, features)
│   │   └── blog.ts                 # Array of 5 blog posts (title, slug, excerpt, full content)
│   │
│   ├── hooks/
│   │   └── use-mobile.tsx          # Detects if the user is on a mobile screen
│   │
│   └── lib/
│       └── utils.ts                # Utility function for combining CSS class names
│
└── index.html                      # HTML shell — loads the app, has SEO meta tags and JSON-LD schema
```

---

## The Files You Will Edit Most

If you want to update the website content, these are the only files you need to touch:

| What you want to change | File to edit |
|---|---|
| Your projects | `src/data/projects.ts` |
| Your services | `src/data/services.ts` |
| Blog posts and article content | `src/data/blog.ts` |
| Home page copy and layout | `src/pages/home.tsx` |
| About page copy | `src/pages/about.tsx` |
| Contact details | `src/pages/contact.tsx` |
| Colours and fonts | `src/index.css` |
| Navigation links | `src/components/layout/Navbar.tsx` |
| Footer content | `src/components/layout/Footer.tsx` |
| Your name, location, SEO schema | `index.html` |
| Sitemap URLs | `public/sitemap.xml` |
| Project images | `public/images/` |

---

## Running Locally

```bash
# Install dependencies (Git Bash on Windows)
pnpm install

# Start the development server
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
```

Open **http://localhost:3000** in your browser.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React | UI framework |
| TypeScript | Type-safe JavaScript |
| Vite | Dev server and build tool |
| Tailwind CSS | Styling via utility classes |
| Framer Motion | Animations and transitions |
| Wouter | Client-side routing |
| react-hook-form + Zod | Contact form with validation |
| react-helmet-async | Dynamic SEO meta tags per page |
| react-markdown | Renders blog article content |
| Lucide React | Icons |
