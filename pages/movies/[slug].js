/**
 * Dynamic Movie Page
 * Displays detailed information about a single movie
 * Uses getServerSideProps for SSR with full SEO implementation
 * 
 * Route: /movies/[slug]
 * Example: /movies/inception, /movies/the-dark-knight
 */

import SEO from '../../components/SEO';
import MovieDetails from '../../components/MovieDetails';
import { getMovieBySlug, getAllMovies } from '../../services/movieService';
import styles from '../../styles/MoviePage.module.css';
import Link from 'next/link';

/**
 * Generate JSON-LD structured data for a movie
 * Uses Schema.org Movie type for rich search results
 * @param {Object} movie - Movie data object
 * @returns {Object} JSON-LD structured data
 */
function generateMovieJsonLd(movie) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        name: movie.title,
        description: movie.description,
        image: movie.posterUrl,
        datePublished: movie.releaseYear.toString(),
        genre: movie.genre,
        duration: `PT${movie.runtime}M`,
        director: {
            '@type': 'Person',
            name: movie.director
        },
        actor: movie.cast.map(actor => ({
            '@type': 'Person',
            name: actor
        })),
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: movie.rating.toString(),
            bestRating: '10',
            worstRating: '1',
            ratingCount: '1000' // Placeholder count
        },
        review: {
            '@type': 'Review',
            reviewRating: {
                '@type': 'Rating',
                ratingValue: movie.rating.toString(),
                bestRating: '10'
            },
            author: {
                '@type': 'Organization',
                name: 'CineVerse'
            }
        }
    };
}

export default function MoviePage({ movie, relatedMovies }) {
    // Handle case where movie is not found
    if (!movie) {
        return (
            <div className={styles.notFound}>
                <h1>Movie Not Found</h1>
                <p>Sorry, we couldn't find the movie you're looking for.</p>
                <Link href="/" className={styles.backLink}>
                    ← Back to Home
                </Link>
            </div>
        );
    }

    // Generate dynamic SEO data
    const seoTitle = `${movie.title} (${movie.releaseYear}) - Review & Rating`;
    const seoDescription = `${movie.title} (${movie.releaseYear}) - ${movie.description} Directed by ${movie.director}. Rating: ${movie.rating}/10. Watch now and discover why it's a must-see film.`;
    const jsonLd = generateMovieJsonLd(movie);

    return (
        <>
            <SEO
                title={seoTitle}
                description={seoDescription}
                ogImage={movie.posterUrl}
                ogType="video.movie"
                jsonLd={jsonLd}
            />

            <div className={styles.container}>
                {/* Breadcrumb Navigation */}
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span className={styles.separator}>/</span>
                    <Link href="/#movies">Movies</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{movie.title}</span>
                </nav>

                {/* Movie Details */}
                <MovieDetails movie={movie} />

                {/* Related Movies Section */}
                {relatedMovies && relatedMovies.length > 0 && (
                    <section className={styles.relatedSection}>
                        <h2 className={styles.relatedTitle}>You May Also Like</h2>
                        <div className={styles.relatedGrid}>
                            {relatedMovies.map((relatedMovie) => (
                                <Link
                                    key={relatedMovie.id}
                                    href={`/movies/${relatedMovie.slug}`}
                                    className={styles.relatedCard}
                                >
                                    <div
                                        className={styles.relatedPoster}
                                        style={{ backgroundImage: `url(${relatedMovie.posterUrl})` }}
                                    >
                                        <div className={styles.relatedOverlay}>
                                            <span className={styles.relatedRating}>
                                                ★ {relatedMovie.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className={styles.relatedName}>{relatedMovie.title}</h3>
                                    <p className={styles.relatedYear}>{relatedMovie.releaseYear}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back Link */}
                <div className={styles.backSection}>
                    <Link href="/" className={styles.backLink}>
                        ← Browse All Movies
                    </Link>
                </div>
            </div>
        </>
    );
}

/**
 * Server-Side Rendering
 * Fetches movie data on each request based on the URL slug
 * This ensures the page is fully rendered on the server for SEO
 */
export async function getServerSideProps(context) {
    const { slug } = context.params;

    // Fetch the movie by slug on the server
    const movie = getMovieBySlug(slug);

    // If movie not found, return 404
    if (!movie) {
        return {
            notFound: true,
        };
    }

    // Get related movies (same genre, excluding current movie)
    const allMovies = getAllMovies();
    const relatedMovies = allMovies
        .filter(m =>
            m.id !== movie.id &&
            m.genre.some(g => movie.genre.includes(g))
        )
        .slice(0, 3);

    return {
        props: {
            movie,
            relatedMovies,
        },
    };
}
