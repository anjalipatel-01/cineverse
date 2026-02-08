/**
 * Header Component
 * Site navigation header with responsive design
 */

import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo/Brand */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🎬</span>
                    <span className={styles.logoText}>CineVerse</span>
                </Link>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>
                        Home
                    </Link>
                    <Link href="/#movies" className={styles.navLink}>
                        Movies
                    </Link>
                </nav>
            </div>
        </header>
    );
}
