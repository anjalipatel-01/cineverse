# CineVerse - Next.js SEO Project

A server-side rendered Next.js website demonstrating programmatic SEO pages for movies.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![SSR](https://img.shields.io/badge/Rendering-SSR-blue?style=flat-square)
![SEO](https://img.shields.io/badge/SEO-Optimized-green?style=flat-square)

## 🎬 Project Overview

CineVerse is a movie information website built to demonstrate:
- **Server-Side Rendering (SSR)** using `getServerSideProps`
- **Programmatic SEO** with dynamic meta tags and structured data
- **Clean, Responsive UI** with modern design principles
- **Proper Project Architecture** following Next.js best practices

## 📁 Project Structure

```
cineverse/
├── pages/
│   ├── _app.js              # Global layout wrapper
│   ├── index.js             # Home page (movie listings)
│   └── movies/
│       └── [slug].js        # Dynamic movie detail page (SSR)
├── components/
│   ├── SEO.js               # Reusable SEO component
│   ├── Layout.js            # Main layout wrapper
│   ├── Header.js            # Navigation header
│   ├── Footer.js            # Site footer
│   ├── MovieCard.js         # Movie card for listings
│   └── MovieDetails.js      # Movie details component
├── data/
│   └── movies.json          # Static movie dataset (6 movies)
├── services/
│   └── movieService.js      # Data fetching utilities
├── styles/
│   ├── globals.css          # Global styles & CSS variables
│   ├── Layout.module.css    # Layout styles
│   ├── Header.module.css    # Header styles
│   ├── Footer.module.css    # Footer styles
│   ├── Home.module.css      # Home page styles
│   ├── MovieCard.module.css # Movie card styles
│   ├── MovieDetails.module.css
│   └── MoviePage.module.css
└── public/
    └── images/              # Movie posters (placeholder)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd cineverse

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.



## Live :
https://coruscating-profiterole-4b4948.netlify.app/
