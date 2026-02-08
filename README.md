# CineVerse - Next.js SSR SEO Assessment Project

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

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Data Domain: Movies

### Why Movies?
1. **Rich Structured Data**: Movies have well-defined Schema.org types with multiple properties
2. **High SEO Potential**: Clear keyword opportunities (movie reviews, ratings, cast info)
3. **Compelling UI**: Allows for visually engaging cards with posters, ratings, and metadata
4. **Relatable Content**: Universal appeal makes the demo intuitive to understand

### Data Structure

```javascript
{
  id: string,           // Unique identifier
  slug: string,         // SEO-friendly URL slug
  title: string,        // Movie title
  releaseYear: number,  // Year of release
  genre: string[],      // Array of genres
  director: string,     // Director name
  cast: string[],       // Array of cast members
  rating: number,       // Rating out of 10
  runtime: number,      // Duration in minutes
  description: string,  // Short description
  plot: string,         // Full plot summary
  posterUrl: string     // Poster image URL
}
```

### Movies Included
1. The Shawshank Redemption (1994)
2. Inception (2010)
3. The Dark Knight (2008)
4. Pulp Fiction (1994)
5. Forrest Gump (1994)
6. The Godfather (1972)

## 🔄 Server-Side Rendering (SSR)

### Implementation

All pages use `getServerSideProps` exclusively (no `getStaticProps` or client-side rendering):

```javascript
// pages/movies/[slug].js
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const movie = getMovieBySlug(slug);
  
  if (!movie) {
    return { notFound: true };
  }
  
  return {
    props: { movie }
  };
}
```

### Why SSR?
- **Fresh Data**: Content is fetched on each request
- **SEO Benefits**: Full HTML returned to crawlers on first request
- **Dynamic Content**: Perfect for personalized or frequently updated content
- **No Build-Time Dependencies**: Pages work with any data source

### Verification
1. View page source (Ctrl+U) on any movie page
2. Verify all movie content is present in the initial HTML
3. Check Network tab - HTML response contains full content

## 🔍 SEO Implementation

### 1. Dynamic Title Tags
```html
<title>Inception (2010) - Review & Rating | CineVerse</title>
```

### 2. Meta Description
```html
<meta name="description" content="Inception (2010) - A thief who steals corporate secrets through dream-sharing technology..." />
```

### 3. OpenGraph Tags
```html
<meta property="og:type" content="video.movie" />
<meta property="og:title" content="Inception (2010) - Review & Rating | CineVerse" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/images/inception.jpg" />
```

### 4. JSON-LD Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Movie",
  "name": "Inception",
  "description": "A thief who steals corporate secrets...",
  "datePublished": "2010",
  "genre": ["Sci-Fi", "Action", "Thriller"],
  "director": {
    "@type": "Person",
    "name": "Christopher Nolan"
  },
  "actor": [
    { "@type": "Person", "name": "Leonardo DiCaprio" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "8.8",
    "bestRating": "10"
  }
}
```

### 5. SEO-Friendly URLs
- `/movies/the-shawshank-redemption`
- `/movies/inception`
- `/movies/the-dark-knight`

### 6. Semantic Headings
- `<h1>`: Movie title (one per page)
- `<h2>`: Section titles (Plot Summary, Cast & Crew)
- `<h3>`: Subsection titles (Director, Top Cast)

## 📊 Keyword Research

### Research Tools Used
- **Google Keyword Planner**: For search volume and competition data
- **Ubersuggest**: For long-tail keyword suggestions
- **Google Trends**: For seasonal search patterns

### Target Keywords (10)

| Keyword | Volume | Difficulty | Usage |
|---------|--------|------------|-------|
| movie reviews | High | High | Homepage title, meta |
| best movies to watch | High | Medium | Homepage hero, description |
| [movie title] review | Medium | Low | Movie page title |
| [movie title] rating | Medium | Low | Movie page content |
| [movie title] cast | Medium | Low | Movie page headings |
| top rated movies 2024 | High | Medium | Homepage content |
| classic movies to watch | Medium | Low | Genre filtering |
| [director] movies | Medium | Low | Movie page content |
| [actor name] movies | Medium | Low | Cast section |
| movie recommendations | High | Medium | Related movies section |

### Keyword Placement Strategy

1. **Title Tags**: Primary keyword + movie name + brand
   - Example: "Inception (2010) - Review & Rating | CineVerse"

2. **Meta Descriptions**: Natural inclusion of secondary keywords
   - Example: "Watch Inception... Rating: 8.8/10. Discover why it's a must-see film."

3. **H1 Headings**: Movie title (exact match for movie-specific searches)
   - Example: "Inception"

4. **H2 Headings**: Section keywords
   - "Plot Summary", "Cast & Crew", "Movie Details"

5. **Body Content**: Natural keyword density
   - Director name, cast names, genre terms, rating mentions

## 🎨 UI/UX Design

### Design Principles
- **Dark Theme**: Modern, cinema-inspired aesthetic
- **Glassmorphism**: Subtle transparency effects
- **Micro-Animations**: Hover effects, transitions
- **Responsive Grid**: Adapts from mobile to desktop

### Features
- Responsive movie card grid
- Hero section with gradient backgrounds
- Star ratings with visual indicators
- Genre tags with color coding
- Related movies suggestions
- Breadcrumb navigation

### Responsive Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🚀 Deployment (Vercel)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add in Vercel dashboard under Settings > Environment Variables

### Vercel Features Used
- Automatic SSR support
- Edge caching for static assets
- Automatic HTTPS
- Preview deployments for PRs

## ✅ Verification Checklist

- [x] SSR with `getServerSideProps` (no `getStaticProps`)
- [x] Dynamic `<title>` tags on all pages
- [x] Dynamic meta descriptions
- [x] OpenGraph metadata (og:title, og:description, og:image)
- [x] JSON-LD structured data (Movie schema)
- [x] SEO-friendly URLs (/movies/[slug])
- [x] Proper heading hierarchy (h1, h2, h3)
- [x] 6 dynamic movie pages (exceeds minimum of 3)
- [x] Responsive design (mobile + desktop)
- [x] Clean project structure
- [x] Well-commented code

## 📝 Architecture Decisions

1. **JavaScript over TypeScript**: Chosen for simplicity and faster development
2. **CSS Modules over Tailwind**: More explicit styling, no additional dependencies
3. **Local JSON over API**: Eliminates external dependencies, ensures reliability
4. **Single SEO Component**: Centralized, reusable metadata management
5. **Service Layer**: Separation of concerns between data and presentation

## 📜 License

This project is created for assessment purposes.

---

Built with ❤️ using Next.js
