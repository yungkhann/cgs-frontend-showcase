import { useState } from "react";
import { curatedMovies } from "./data/movies.js";
import { hasOmdbKey, searchOmdb } from "./services/omdb.js";
import MovieCard from "./MovieCard.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(curatedMovies);
  const [status, setStatus] = useState("ready");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = query.trim();
    if (!hasOmdbKey || searchTerm.length < 2) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const results = await searchOmdb(searchTerm);
      setMovies(results);
      setStatus("ready");
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong.");
      setStatus("error");
    }
  };

  const reset = () => {
    setMovies(curatedMovies);
    setQuery("");
    setStatus("ready");
    setErrorMessage("");
  };

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Asynchronous JavaScript</p>
          <h1>Search the<br /><em>movie archive.</em></h1>
          <form className="search-panel" role="search" onSubmit={handleSearch}>
            <div className="search-field">
              <label className="sr-only" htmlFor="movie-query">Movie title</label>
              <input id="movie-query" type="search" value={query}
                placeholder="Search by movie title"
                onChange={(event) => setQuery(event.target.value)} />
            </div>
            <button className="search-button" type="submit"
              disabled={!hasOmdbKey || status === "loading"}>
              {status === "loading" ? "Searching…" : "Find a film"}
            </button>
          </form>
          <p className="search-hint">
            {hasOmdbKey
              ? "Live OMDb search is ready."
              : "Add VITE_OMDB_API_KEY to enable live search."}
          </p>
        </div>
      </section>

      <section className="collection" aria-live="polite">
        {status === "loading" && (
          <div className="loading-state" role="status">
            <span className="loader" />
            <p>Searching the archive…</p>
          </div>
        )}
        {status === "error" && (
          <div className="error-state" role="alert">
            <p>{errorMessage}</p>
            <button type="button" onClick={reset}>Return to collection</button>
          </div>
        )}
        {status === "ready" && movies.length === 0 && (
          <div className="empty-state">
            <h2>No films found</h2>
            <p>Try a shorter title.</p>
            <button type="button" onClick={reset}>Reset</button>
          </div>
        )}
        {status === "ready" && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
