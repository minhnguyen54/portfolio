# Minh Nguyen Portfolio

A responsive React/Vite portfolio website presenting Minh Nguyen's technical skills, professional background, featured browser projects, resume, contact form, and optional Gemini-powered chatbot.

## Overview

This is a single-page portfolio application built to give recruiters, hiring managers, and academic reviewers a quick view of Minh Nguyen's front-end development work and background. The site highlights practical JavaScript projects, military leadership experience, education, and a direct path to view the resume or start a conversation.

The app is configured for GitHub Pages deployment with the `/portfolio/` base path. If the repository name changes, update `base` in `vite.config.js` before deploying.

## Features

- Responsive navigation with mobile menu support
- Animated introduction section with profile image and resume access
- Interactive skill cards for frontend, backend, and developer tooling
- Work experience and education section with card interactions
- Featured project gallery with screenshots, technology tags, and live links
- Contact form that opens a prepared email draft
- Optional Gemini chatbot controlled by an environment variable
- ESLint and production build scripts for release checks

## Tech Stack

- React 19
- Vite 6
- JavaScript
- CSS
- ESLint
- GitHub Pages deployment via GitHub Actions
- Optional Google Gemini API integration

## Requirements

- Node.js 18 or newer
- npm 9 or newer
- Gemini API key only if chatbot responses should be enabled

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

Deployment happens through GitHub Actions after changes are pushed to `main`.

## Environment Variables

Create `.env` from `.env.example` for local development.

| Variable              | Required | Purpose                                                                                                 |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `VITE_GEMINI_API_KEY` | No       | Enables chatbot calls to the Gemini API. Leave empty to keep the portfolio usable without AI responses. |

Do not commit real API keys. Vite exposes `VITE_` variables to browser code, so use a restricted key and monitor API usage.

## Project Structure

```text
.
├── public/
│   ├── alien-game.png
│   ├── mythology-game.png
│   ├── profile.jpg
│   ├── resume.pdf
│   └── spiderman-game.png
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Background.jsx
│   │   ├── ChatBot.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── *.css
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Future Improvements

- Add project case-study pages with goals, implementation details, and lessons learned.
- Add automated UI tests for rendering key sections and validating contact behavior.
- Move chatbot calls behind a backend or serverless function for stricter API key protection.
- Add Open Graph metadata and a custom social preview image.
- Add analytics or lightweight event tracking after publishing.

## Author

Minh Nguyen

- GitHub: [minhnguyen54](https://github.com/minhnguyen54)
- Focus: Computer Science, front-end development, JavaScript projects, and software engineering fundamentals.
