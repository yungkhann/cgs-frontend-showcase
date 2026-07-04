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
    <main className="min-h-screen bg-ink text-paper">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_25%,rgba(217,255,87,0.13),transparent_32%)]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-acid">Asynchronous JavaScript</p>
          <h1 className="font-display text-5xl leading-[0.92] tracking-tight md:text-7xl">
            Search the<br /><em className="font-normal text-acid">movie archive.</em>
          </h1>
          <form className="mt-10 flex max-w-3xl flex-col gap-3 sm:flex-row" role="search" onSubmit={handleSearch}>
            <label className="sr-only" htmlFor="movie-query">Movie title</label>
            <input
              className="min-h-14 flex-1 rounded-sm border border-white/15 bg-white/5 px-5 text-paper placeholder:text-muted focus:border-acid focus:outline-none"
              id="movie-query"
              type="search"
              value={query}
              placeholder="Search by movie title"
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              className="min-h-14 rounded-sm bg-acid px-7 font-bold text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              type="submit"
              disabled={!hasOmdbKey || status === "loading"}
            >
              {status === "loading" ? "Searching…" : "Find a film"}
            </button>
          </form>
          <p className="mt-4 text-sm text-muted">
            {hasOmdbKey ? "Live OMDb search is ready." : "Add VITE_OMDB_API_KEY to enable live search."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24" aria-live="polite">
        {status === "loading" && (
          <div className="grid min-h-64 place-items-center text-center" role="status">
            <div>
              <span className="mx-auto block size-10 animate-spin rounded-full border-2 border-white/15 border-t-acid" />
              <p className="mt-5 text-muted">Searching the archive…</p>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="rounded-sm border border-red-400/40 bg-red-400/10 px-6 py-12 text-center" role="alert">
            <p>{errorMessage}</p>
            <button className="mt-6 rounded-sm bg-paper px-5 py-3 font-bold text-ink" type="button" onClick={reset}>Return to collection</button>
          </div>
        )}
        {status === "ready" && movies.length === 0 && (
          <div className="rounded-sm border border-dashed border-white/20 px-6 py-20 text-center">
            <h2 className="font-display text-3xl">No films found</h2>
            <p className="mt-3 text-muted">Try a shorter title.</p>
            <button className="mt-6 rounded-sm bg-acid px-5 py-3 font-bold text-ink" type="button" onClick={reset}>Reset</button>
          </div>
        )}
        {status === "ready" && movies.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
