/**
 * SEO Component
 * Reusable component for managing page-level SEO metadata
 * Includes: title, meta description, OpenGraph tags, and JSON-LD structured data
 */

import Head from 'next/head';

/**
 * SEO Component Props:
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string} ogImage - OpenGraph image URL
 * @param {string} ogType - OpenGraph type (website, video.movie, etc.)
 * @param {string} canonicalUrl - Canonical URL for the page
 * @param {Object} jsonLd - JSON-LD structured data object
 */
export default function SEO({
    title,
    description,
    ogImage = '/images/og-default.svg',
    ogType = 'website',
    canonicalUrl,
    jsonLd
}) {
    // Site-wide defaults
    const siteName = 'CineVerse';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </Head>
    );
}
