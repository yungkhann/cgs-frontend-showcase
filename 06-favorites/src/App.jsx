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
    <div className="app">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <span className="brand">Cine<span>Scope</span></span>
          <p>Favorites: <strong>{favoriteIds.length}</strong></p>
        </nav>
      </header>
      <main className="collection">
        <p className="eyebrow">Lift state to the shared parent</p>
        <h1>Choose your favorites</h1>
        <div className="movie-grid">
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
