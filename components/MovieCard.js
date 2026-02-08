/**
 * MovieCard Component
 * Displays a movie in card format for listings
 * SEO-friendly with proper heading hierarchy
 */

import Link from 'next/link';
import styles from '../styles/MovieCard.module.css';

export default function MovieCard({ movie }) {
    const { slug, title, releaseYear, genre, rating, description, posterUrl } = movie;

    return (
        <article className={styles.card}>
            <Link href={`/movies/${slug}`} className={styles.cardLink}>
                {/* Movie Poster */}
                <div className={styles.posterWrapper}>
                    <div
                        className={styles.poster}
                        style={{ backgroundImage: `url(${posterUrl})` }}
                    >
                        {/* Fallback gradient for missing images */}
                        <div className={styles.posterFallback}>
                            <span className={styles.posterIcon}>🎬</span>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <span className={styles.star}>★</span>
                        <span>{rating}</span>
                    </div>
                </div>

                {/* Movie Info */}
                <div className={styles.info}>
                    {/* h3 for proper heading hierarchy (h1 is page title, h2 is section) */}
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.year}>{releaseYear}</p>
                    <div className={styles.genres}>
                        {genre.slice(0, 2).map((g, index) => (
                            <span key={index} className={styles.genre}>{g}</span>
                        ))}
                    </div>
                    <p className={styles.description}>
                        {description.length > 100
                            ? `${description.substring(0, 100)}...`
                            : description}
                    </p>
                </div>
            </Link>
        </article>
    );
}
