# Gaurav Mishra - Java Backend Developer Portfolio

A developer portfolio for Gaurav Mishra, focused on **Java Backend Development**, distributed systems, and backend engineering architectures.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Mermaid.js**.

---

## Tech Stack & Architecture

- **Core Framework**: React 18 + TypeScript (Strict Type Safety)
- **Bundler & Tooling**: Vite 6 (Optimized Vendor & Mermaid Chunking)
- **Styling**: Tailwind CSS (Dark Theme, Accessible Focus Indicators, Reduced-Motion Support)
- **Routing**: React Router DOM 6 (Client-side routing with deep case study URLs)
- **Diagrams**: Mermaid.js (Dynamic architectural topology rendering)
- **Icons**: Lucide React

---

## Getting Started

### 1. Development Mode
Run the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 2. Production Build
Type-check with the TypeScript compiler and build optimized production assets:
```bash
npm run build
```
Production assets are output to the `/dist` directory.

### 3. Production Preview
Locally preview the production build:
```bash
npm run preview
```
Open your browser at the local preview URL (default: `http://localhost:4173`).

---

## Project Directory Structure

```
PORTFOLIYO/
|-- dist/                   # Production distribution build
|-- public/                 # Static public assets
|-- src/
|   |-- assets/             # Profile photograph (gaurav-mishra.jpg)
|   |-- components/         # Reusable presentation and layout components
|   |   |-- AboutMe.tsx
|   |   |-- BackendStatusIndicator.tsx
|   |   |-- Certifications.tsx
|   |   |-- Contact.tsx
|   |   |-- Education.tsx
|   |   |-- Experience.tsx
|   |   |-- FeaturedProjects.tsx
|   |   |-- Footer.tsx
|   |   |-- Hero.tsx
|   |   |-- MermaidDiagram.tsx
|   |   |-- MyThinking.tsx
|   |   |-- Navbar.tsx
|   |   `-- TechnicalSkills.tsx
|   |-- data/               # Centralized portfolio data and case study content
|   |   |-- portfolioData.ts
|   |   `-- projectCaseStudies.ts
|   |-- pages/              # Route views
|   |   |-- HomePage.tsx
|   |   `-- CaseStudyPage.tsx
|   |-- styles/             # Tailwind and global stylesheets
|   |   `-- index.css
|   |-- App.tsx             # Root router configuration
|   |-- main.tsx            # Application entrypoint
|   `-- vite-env.d.ts       # TypeScript module declarations
|-- index.html              # HTML entrypoint with metadata
|-- package.json            # Node project manifest
|-- tailwind.config.js      # Custom theme and color tokens
|-- tsconfig.json           # TypeScript configuration
`-- vite.config.ts          # Vite build and chunking configuration
```

---

## Project Context & Safety Boundaries

Project case studies and architecture diagrams reflect the actual implemented designs of the SafeWalk and NGOConnect projects based on static source inspection. The original SafeWalk and NGOConnect application repositories, configurations, tests, and databases remain completely isolated and unmodified.
