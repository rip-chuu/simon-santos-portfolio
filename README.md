# Simon Santos — Instructional Design Portfolio

The portfolio of Simon Angelo Santos, an instructional designer and learning experience designer focused on human, practical, and active learning.

## What is included

- A responsive editorial homepage
- A project index and four reusable case-study pages
- Editable project content in `content/projects.ts`
- Structured media folders in `public/images/projects/`
- Accessibility features, reduced-motion support, and keyboard-friendly navigation
- Social sharing metadata and a custom Open Graph image

## Editing portfolio content

Project titles, order, visibility, featured status, metrics, descriptions, tools, and case-study content are kept in `content/projects.ts`. Update that file to change the portfolio without changing component logic.

To add project media, create a folder under `public/images/projects/` using the project's slug. The case-study template includes ready-made areas for screenshots, diagrams, before/after comparisons, captions, embedded media, and metrics.

## Local development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

## Deployment

The repository includes a `vercel-build` script for Vercel and a validated Sites-compatible build. No database, backend, or authentication is required.
