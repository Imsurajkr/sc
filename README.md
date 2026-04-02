# Supreme Court Observer

An independent legal journalism platform for reporting, analysis, and data on the Supreme Court of India. Built with Astro and Tailwind CSS.

## Features

- **Cases** — 12 landmark cases with status tracking (pending/decided), bench composition, and tags
- **Judges** — Directory of sitting and retired Supreme Court judges with stats
- **Analysis** — Editorial articles across Analysis, Court Data, and Hearing Reports categories
- **Glossary** — A-Z legal terminology reference
- **About** — Mission, values, and team

## Tech Stack

- [Astro](https://astro.build/) v5
- [Tailwind CSS](https://tailwindcss.com/) v4
- Astro Content Collections (cases, judges, articles, glossary)
- Vanilla JS for client-side filtering and search

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── content/
│   ├── cases/        # Markdown files for each case
│   ├── judges/       # JSON files for each judge
│   ├── articles/     # Markdown files for articles
│   └── glossary/     # Markdown files for glossary terms
├── components/
│   ├── cards/        # CaseCard, JudgeCard, ArticleCard
│   ├── global/       # Navigation, Footer
│   └── ui/           # Badge, PageHeader
├── layouts/          # BaseLayout, ArticleLayout
├── pages/            # All routes
└── styles/           # global.css (Tailwind v4 theme)
```

## Adding Content

**New case** — add a `.md` file to `src/content/cases/` with frontmatter:
```yaml
---
title: "Case Title"
status: pending # or decided
petitioner: "Party A"
respondent: "Party B"
description: "Brief description."
bench: ["Judge One", "Judge Two"]
tags: ["tag-one", "tag-two"]
nextHearing: "June 1, 2026"
filedDate: "January 1, 2023"
---
```

**New judge** — add a `.json` file to `src/content/judges/`:
```json
{
  "name": "Justice Full Name",
  "status": "sitting",
  "designation": "Judge, Supreme Court of India",
  "appointedDate": "2022-01-01",
  "pendingCases": 40,
  "judgments": 150,
  "bio": "Brief biography.",
  "initials": "FN"
}
```

## License

MIT
