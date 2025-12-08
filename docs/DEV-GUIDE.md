# Developer Guide

This document provides technical guidance for developers working on the Lab Derivative project.

## Project Structure

```
lab-derivative/
├── frontend/          # React + Vite application
│   ├── components/    # React components
│   ├── App.tsx        # Main app component
│   ├── index.tsx      # Entry point
│   └── ...
├── backend/           # Backend services (TBD)
├── content/           # Content files
│   └── posts/         # Markdown blog posts
├── docs/              # Documentation
└── .github/           # GitHub Actions workflows
```

## Frontend

The frontend is built with:

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icons

### Key Files

- `frontend/App.tsx` - Main application component
- `frontend/components/` - Reusable UI components
- `frontend/types.ts` - TypeScript type definitions

### Adding New Components

1. Create a new file in `frontend/components/`
2. Export the component
3. Import and use in `App.tsx` or other components

## Environment Variables

Create a `.env.local` file in `frontend/` with:

```
GEMINI_API_KEY=your_api_key_here
```

## Code Style

- Use TypeScript for all new code
- Follow React best practices (functional components, hooks)
- Keep components small and focused
- Use meaningful variable and function names

---

*TODO: Expand this guide as the project grows.*

