# Lab Derivative

AI Knowledge Management Research and Development Lab specializing in generative ontologies and agentic infrastructure.

## Project Structure

```
lab-derivative/
├── frontend/          # React + Vite frontend application
├── backend/           # Backend services (coming soon)
├── content/
│   └── posts/         # Markdown blog posts
├── docs/              # Project documentation
│   ├── WORKFLOW.md    # Development workflow guide
│   ├── CONTENT-GUIDE.md  # Content creation guidelines
│   └── DEV-GUIDE.md   # Developer documentation
└── .github/
    └── workflows/     # CI/CD pipelines
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Install Dependencies

```bash
cd frontend
npm install
```

### Run Development Server

```bash
cd frontend
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
cd frontend
npm run build
```

The production build will be output to `frontend/dist/`.

### Preview Production Build

```bash
cd frontend
npm run preview
```

## Environment Variables

If you need API access, create a `.env.local` file in the `frontend/` directory:

```
GEMINI_API_KEY=your_api_key_here
```

## Documentation

- [Workflow Guide](docs/WORKFLOW.md) - Development workflow and Git practices
- [Content Guide](docs/CONTENT-GUIDE.md) - Guidelines for creating content
- [Developer Guide](docs/DEV-GUIDE.md) - Technical documentation for developers

## CI/CD

This project uses GitHub Actions for continuous integration. The CI pipeline:

- Runs on every push to `main` and on pull requests
- Installs dependencies and builds the frontend
- Uploads build artifacts

## License

Proprietary - All rights reserved.
