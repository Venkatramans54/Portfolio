# Venkatraman Portfolio

Personal portfolio site for Venkatraman Sundararajan, built as a React application with Vite and deployed to Vercel.

## Overview

This project is a single-page portfolio focused on experience, impact highlights, projects, and contact information. It is intentionally static and does not require a backend, API keys, or server-side rendering.

The UI uses motion, layered gradients, self-hosted fonts, and responsive sections to keep the site lightweight while still feeling polished.

## Features

- Responsive single-page portfolio layout
- Hero section with motion-driven visual treatment
- Skills and experience timeline
- Education, achievements, and projects sections
- Cursor-reactive atmosphere in Hero and Footer
- Scroll-aware navigation and back-to-top control
- Self-hosted `Poppins` fonts
- Static deployment-ready configuration for Vercel

## Tech Stack

### Core

- React 19
- Vite 7
- JavaScript (ES modules)

### UI And Styling

- Tailwind CSS 3
- Framer Motion
- React Icons

### Animation

- `react-lottie-player` using the light player build
- Local Lottie JSON assets
- `smoothscroll-polyfill`

### Tooling

- PostCSS
- Autoprefixer

## Project Structure

```text
.
├── src/
│   ├── assets/         # Images, SVGs, logos, and local fonts
│   ├── components/     # Reusable UI sections and controls
│   ├── constants/      # Portfolio content and section data
│   ├── lotties/        # Lottie animation JSON files
│   ├── lib/            # Small utility helpers
│   ├── App.jsx         # Main page composition
│   ├── index.css       # Global styles and custom effects
│   ├── main.jsx        # App entry point
│   └── style.js        # Shared layout utility strings
├── vercel.json         # Vercel build/output configuration
├── vite.config.js      # Vite config and bundle chunking
└── package.json        # Scripts and dependencies
```

## Local Setup

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Start The Dev Server

```bash
npm run dev
```

By default, Vite serves the app locally at:

```text
http://localhost:5173/
```

## Available Scripts

### `npm run dev`

Starts the local development server with hot reload.

### `npm run build`

Creates the production build in `dist/`.

### `npm run preview`

Serves the production build locally for a final check.

## Content Model

Most of the portfolio content is managed from:

- `src/constants/index.js`

That includes:

- navigation items
- social links
- resume and CTA links
- skills
- experience entries
- projects
- achievements

This makes it easy to update portfolio content without changing layout components.

## Styling Notes

- Global styles live in `src/index.css`
- Tailwind utility classes are used throughout components
- `Poppins` is self-hosted from `src/assets/fonts`
- Motion and visual polish are handled with Framer Motion and layered CSS gradients

## Build And Deployment

### Production Build

```bash
npm run build
```

### Vercel Deployment

This repo is configured for static deployment on Vercel.

`vercel.json` uses:

- framework: `vite`
- build command: `npm run build`
- output directory: `dist`

For most cases, you can import the GitHub repository into Vercel and deploy without additional configuration.

## Environment Variables

This project currently does not require environment variables.

There are no API keys or backend secrets required for the portfolio to run.

## Notes

- The site is designed to be fully static
- Fonts are served locally instead of loading from Google Fonts at runtime
- The Lottie setup uses the light player import to avoid the previous `eval` warning path in builds

## License

This repository is for personal portfolio use unless you choose to add a separate license.
