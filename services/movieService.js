/**
 * Movie Service
 * Handles all movie data operations with server-side fetching
 */

import moviesData from '../data/movies.json';

/**
 * Get all movies from the dataset
 * @returns {Array} Array of all movie objects
 */
export function getAllMovies() {
  return moviesData;
}

/**
 * Get a single movie by its URL slug
 * Used for dynamic routing in /movies/[slug]
 * @param {string} slug - The URL-friendly slug of the movie
 * @returns {Object|null} Movie object or null if not found
 */
export function getMovieBySlug(slug) {
  return moviesData.find(movie => movie.slug === slug) || null;
}

/**
 * Get all movie slugs for reference
 * @returns {Array} Array of slug strings
 */
export function getAllMovieSlugs() {
  return moviesData.map(movie => movie.slug);
}

/**
 * Get movies by genre
 * @param {string} genre - Genre to filter by
 * @returns {Array} Array of movies matching the genre
 */
export function getMoviesByGenre(genre) {
  return moviesData.filter(movie => 
    movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
  );
}

/**
 * Get featured movies (top rated)
 * @param {number} count - Number of movies to return
 * @returns {Array} Array of top-rated movies
 */
export function getFeaturedMovies(count = 3) {
  return [...moviesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}
