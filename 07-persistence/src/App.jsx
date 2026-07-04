import { useEffect, useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

const STORAGE_KEY = "cinescope-favorites";

function getSavedFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function App() {
  const [favoriteIds, setFavoriteIds] = useState(getSavedFavorites);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const visibleMovies = favoritesOnly
    ? curatedMovies.filter((movie) => favoriteIds.includes(movie.id))
    : curatedMovies;

  const toggleFavorite = (movieId) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(movieId)
        ? currentIds.filter((id) => id !== movieId)
        : [...currentIds, movieId],
    );
  };

  return (
    <div className="app">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <span className="brand">Cine<span>Scope</span></span>
          <button type="button" className="favorites-link"
            aria-pressed={favoritesOnly}
            onClick={() => setFavoritesOnly((current) => !current)}>
            {favoritesOnly ? "Show all" : "Favorites"} ({favoriteIds.length})
          </button>
        </nav>
      </header>

      <main className="collection">
        <p className="eyebrow">Synchronize React with the browser</p>
        <h1>{favoritesOnly ? "Your favorites" : "All movies"}</h1>
        {visibleMovies.length > 0 ? (
          <div className="movie-grid">
            {visibleMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}
                isFavorite={favoriteIds.includes(movie.id)}
                onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Your watchlist is waiting</h2>
            <p>Save a few discoveries and they will appear here.</p>
            <button type="button" onClick={() => setFavoritesOnly(false)}>
              Explore the collection
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
