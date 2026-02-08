/**
 * Home Page
 * Displays all movies in a responsive grid
 * Uses getServerSideProps for SSR
 */

import SEO from '../components/SEO';
import MovieCard from '../components/MovieCard';
import { getAllMovies } from '../services/movieService';
import styles from '../styles/Home.module.css';

// SEO metadata for the home page
const homePageSEO = {
  title: 'Best Movie Reviews & Ratings 2024',
  description: 'Discover top-rated movies with CineVerse. Browse our collection of the best movies to watch, including classic films, award winners, and must-see cinema. Find your next favorite movie today!',
  ogImage: '/images/og-home.svg'
};

// JSON-LD for the website (Organization schema)
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CineVerse',
  description: 'Your ultimate destination for movie reviews, ratings, and recommendations',
  url: 'https://cineverse.vercel.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://cineverse.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function Home({ movies }) {
  return (
    <>
      <SEO
        title={homePageSEO.title}
        description={homePageSEO.description}
        ogImage={homePageSEO.ogImage}
        jsonLd={websiteJsonLd}
      />

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Discover the Best Movies to Watch
            </h1>
            <p className={styles.heroSubtitle}>
              Explore our curated collection of top-rated films, from timeless classics
              to modern masterpieces. Find your next favorite movie with CineVerse.
            </p>
          </div>
          <div className={styles.heroBackground} />
        </section>

        {/* Movies Section */}
        <section id="movies" className={styles.moviesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Top Rated Movies</h2>
            <p className={styles.sectionSubtitle}>
              Browse our handpicked selection of the highest-rated films
            </p>
          </div>

          <div className={styles.moviesGrid}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why CineVerse?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⭐</span>
              <h3>Expert Ratings</h3>
              <p>Trusted movie ratings from film enthusiasts and critics</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎬</span>
              <h3>Curated Collection</h3>
              <p>Handpicked selection of the best movies across all genres</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>📱</span>
              <h3>Easy to Browse</h3>
              <p>Clean, responsive design for all your devices</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/**
 * Server-Side Rendering
 * Fetches all movies on each request for SSR
 * This ensures the page is fully rendered on the server for SEO
 */
export async function getServerSideProps() {
  // Fetch movies on the server
  const movies = getAllMovies();

  return {
    props: {
      movies,
    },
  };
}
