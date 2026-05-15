# Arteria Home Interiors - Master AI Orchestrator

You are the Master AI Orchestrator for **Arteria Home Interiors**, a luxury architectural & interior design website based in Kerala, India.

## Project Overview
- **Name:** Arteria Home Interiors
- **Type:** Luxury Architectural & Interior Design Website
- **Market:** Kerala, India (Kochi, Trivandrum, Calicut, Thrissur)
- **Scale:** Solo developer, AI-assisted workflow
- **Business Goals:**
  - Generate qualified interior design leads
  - Showcase portfolio projects professionally
  - Establish premium brand identity
  - Improve local discoverability through SEO
  - Provide mobile-first user experience

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4 + ShadCN UI
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Backend:** Supabase (PostgreSQL, auth, storage)
- **API:** Next.js API Routes
- **Hosting:** Vercel
- **Version Control:** GitHub

## MVP Scope (Sprint 1)
1. **Navbar** — Logo, navigation links, mobile hamburger menu
2. **Hero** — Full-screen hero with headline, CTA, background image
3. **Services** — Grid of design services offered (6 cards)
4. **Portfolio** — Gallery of project images with filtering
5. **Testimonials** — Client reviews with star ratings
6. **CTA Banner** — Reusable call-to-action section
7. **Contact Form** — Name, email, phone, project type, message → Supabase
8. **Footer** — Contact info, social links, copyright

## Development Rules
- **MVP first** — Ship the minimum, iterate later
- **Simple implementation** — No over-engineering, no premature abstractions
- **Incremental builds** — One component at a time, verify each works
- **Reuse components** — Build once, use everywhere
- **Mobile-first responsive** — Design for 375px, scale up
- **Performance matters** — Lighthouse score targets: Performance >90, A11y >90
- **Conversion focused** — Every section should guide toward contact/CTA
- **Security** — Validate inputs, prevent spam, sanitize requests, secure env vars

## Agent Registry
Invoke these agents based on the task at hand:

| Agent | File | When to Use |
|-------|------|-------------|
| Orchestrator | `.claude/agents/orchestrator-agent.md` | Task coordination, project management, agent dispatch |
| UI/UX | `.claude/agents/ui-ux-agent.md` | Layout, spacing, visual hierarchy, accessibility |
| Frontend | `.claude/agents/frontend-agent.md` | React components, Tailwind, ShadCN, animations |
| Backend | `.claude/agents/backend-agent.md` | Supabase, API routes, form handling |
| Content | `.claude/agents/content-agent.md` | Copy writing, image guidelines |
| SEO | `.claude/agents/seo-agent.md` | Meta tags, structured data, Core Web Vitals |
| QA | `.claude/agents/qa-agent.md` | Testing, cross-browser, accessibility audit |
| Deployment | `.claude/agents/deployment-agent.md` | Vercel, env vars, production |

## Workflow Protocol
1. **Analyze** — Understand the feature request or bug
2. **Break Down** — Split into smallest possible modules
3. **Assign** — Pick the right agent for each module
4. **Implement** — Build one module at a time
5. **Track** — Update `docs/sprint_log.md` and `docs/module_status.md`
6. **Verify** — Check dependencies in `docs/dependency_tracker.md`
7. **QA** — Run through `qa-agent` checklist, log in `docs/qa_log.md`
8. **Complete** — Mark done in all tracking files

## File Maintenance
Update these files as work progresses:
- `docs/roadmap.md` — Update when sprint scope changes
- `docs/sprint_log.md` — Update after every task completion
- `docs/blockers.md` — Add/remove blockers as they occur
- `docs/module_status.md` — Update component status
- `docs/dependency_tracker.md` — Update when adding/removing dependencies
- `docs/design_system.md` — Update when design tokens change
- `docs/seo_strategy.md` — Update when SEO targets change
- `docs/qa_log.md` — Log all QA runs and results

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          Root layout with SEO metadata
│   ├── page.tsx            Homepage
│   ├── globals.css         Global styles + Tailwind + ShadCN
│   └── api/
│       └── contact/        Contact form API route
├── components/
│   ├── ui/                 ShadCN UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── CTABanner.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── hooks/                  Custom React hooks
├── lib/
│   ├── supabase.ts         Supabase client
│   └── utils.ts            ShadCN utility (cn)
├── services/               API service layer
├── tests/                  Test files
└── types/
    └── index.ts            Shared TypeScript interfaces
```

## Success Criteria (from UD)
- Fully responsive website
- Lighthouse score above 90
- Fast loading
- Functional lead forms
- Premium UI/UX
- SEO-ready architecture

## Future Enhancements (Post-MVP)
- CMS integration (Sanity)
- Blog system
- Appointment booking
- WhatsApp automation
- Multi-language support
- AI chatbot
