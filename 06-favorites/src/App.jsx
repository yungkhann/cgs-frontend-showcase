import { useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

function App() {
  const [favoriteIds, setFavoriteIds] = useState([]);

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
          <p className="rounded-full border border-white/15 px-4 py-2 text-sm">
            Favorites: <strong className="text-acid">{favoriteIds.length}</strong>
          </p>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">Lift state to the shared parent</p>
        <h1 className="mb-12 font-display text-4xl md:text-5xl">Choose your favorites</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {curatedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favoriteIds.includes(movie.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
