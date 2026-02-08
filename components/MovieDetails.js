/**
 * MovieDetails Component
 * Displays full movie information on detail pages
 * Includes all data needed for SEO structured data
 */

import styles from '../styles/MovieDetails.module.css';

export default function MovieDetails({ movie }) {
    const {
        title,
        releaseYear,
        genre,
        director,
        cast,
        rating,
        runtime,
        description,
        plot,
        posterUrl
    } = movie;

    // Format runtime as hours and minutes
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    return (
        <article className={styles.details}>
            {/* Hero Section with Poster */}
            <div className={styles.hero}>
                <div
                    className={styles.backdrop}
                    style={{ backgroundImage: `url(${posterUrl})` }}
                />
                <div className={styles.heroContent}>
                    <div className={styles.posterContainer}>
                        <div
                            className={styles.poster}
                            style={{ backgroundImage: `url(${posterUrl})` }}
                        >
                            <div className={styles.posterFallback}>
                                <span>🎬</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroInfo}>
                        {/* h1 for SEO - main page heading */}
                        <h1 className={styles.title}>{title}</h1>

                        <div className={styles.meta}>
                            <span className={styles.year}>{releaseYear}</span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.runtime}>{formatRuntime(runtime)}</span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.rating}>
                                <span className={styles.star}>★</span> {rating}/10
                            </span>
                        </div>

                        <div className={styles.genres}>
                            {genre.map((g, index) => (
                                <span key={index} className={styles.genre}>{g}</span>
                            ))}
                        </div>

                        <p className={styles.tagline}>{description}</p>
                    </div>
                </div>
            </div>

            {/* Movie Information */}
            <div className={styles.content}>
                {/* Plot Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Plot Summary</h2>
                    <p className={styles.plot}>{plot}</p>
                </section>

                {/* Cast & Crew Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Cast & Crew</h2>

                    <div className={styles.crewGrid}>
                        <div className={styles.crewItem}>
                            <h3 className={styles.crewLabel}>Director</h3>
                            <p className={styles.crewName}>{director}</p>
                        </div>

                        <div className={styles.crewItem}>
                            <h3 className={styles.crewLabel}>Top Cast</h3>
                            <ul className={styles.castList}>
                                {cast.map((actor, index) => (
                                    <li key={index} className={styles.castMember}>{actor}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Movie Stats */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Movie Details</h2>
                    <div className={styles.statsGrid}>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Release Year</span>
                            <span className={styles.statValue}>{releaseYear}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Runtime</span>
                            <span className={styles.statValue}>{formatRuntime(runtime)}</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Rating</span>
                            <span className={styles.statValue}>★ {rating}/10</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statLabel}>Genres</span>
                            <span className={styles.statValue}>{genre.join(', ')}</span>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
}
