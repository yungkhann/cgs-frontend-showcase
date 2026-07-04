import { useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

function App() {
  const [query, setQuery] = useState("");

  const visibleMovies = curatedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Your first interactive feature</p>
          <h1>Find your next<br /><em>favorite film.</em></h1>
          <div className="search-panel">
            <div className="search-field">
              <label className="sr-only" htmlFor="movie-query">Movie title</label>
              <input
                id="movie-query"
                type="search"
                placeholder="Search by movie title"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="collection-heading">
          <h2>Worth your time</h2>
          <p aria-live="polite"><strong>{visibleMovies.length}</strong> films</p>
        </div>
        <div className="movie-grid">
          {visibleMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
