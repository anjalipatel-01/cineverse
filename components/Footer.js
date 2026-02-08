/**
 * Footer Component
 * Site footer with copyright and links
 */

import styles from '../styles/Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>🎬 CineVerse</span>
                        <p className={styles.tagline}>
                            Your ultimate destination for movie reviews and ratings
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#movies">Browse Movies</a></li>
                        </ul>
                    </div>

                    <div className={styles.info}>
                        <h4>About</h4>
                        <p>
                            CineVerse provides comprehensive movie information,
                            reviews, and ratings to help you discover your next favorite film.
                        </p>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>© {currentYear} CineVerse. All rights reserved.</p>
                    <p className={styles.disclaimer}>
                        This is a demo project showcasing Next.js SSR and SEO capabilities.
                    </p>
                </div>
            </div>
        </footer>
    );
}
