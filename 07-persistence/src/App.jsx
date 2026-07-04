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
    <div className="min-h-screen bg-ink text-paper">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <span className="font-display text-2xl font-bold">Cine<span className="text-acid">Scope</span></span>
          <button
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              favoritesOnly ? "border-acid bg-acid text-ink" : "border-white/15 hover:border-acid hover:text-acid"
            }`}
            type="button"
            aria-pressed={favoritesOnly}
            onClick={() => setFavoritesOnly((current) => !current)}
          >
            {favoritesOnly ? "Show all" : "Favorites"} ({favoriteIds.length})
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">Synchronize React with the browser</p>
        <h1 className="mb-12 font-display text-4xl md:text-5xl">
          {favoritesOnly ? "Your favorites" : "All movies"}
        </h1>
        {visibleMovies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie}
                isFavorite={favoriteIds.includes(movie.id)}
                onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-dashed border-white/20 px-6 py-20 text-center">
            <h2 className="font-display text-3xl">Your watchlist is waiting</h2>
            <p className="mt-3 text-muted">Save a few discoveries and they will appear here.</p>
            <button className="mt-7 rounded-sm bg-acid px-5 py-3 font-bold text-ink"
              type="button" onClick={() => setFavoritesOnly(false)}>
              Explore the collection
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
