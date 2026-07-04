import { useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

function App() {
  const [query, setQuery] = useState("");

  const visibleMovies = curatedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-ink text-paper">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_25%,rgba(217,255,87,0.13),transparent_32%)]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-acid">Your first interactive feature</p>
          <h1 className="font-display text-5xl leading-[0.92] tracking-tight md:text-7xl">
            Find your next<br /><em className="font-normal text-acid">favorite film.</em>
          </h1>
          <div className="mt-10 max-w-2xl rounded-sm border border-white/15 bg-white/5 p-2 shadow-2xl">
            <label className="sr-only" htmlFor="movie-query">Movie title</label>
            <input
              className="w-full bg-transparent px-5 py-4 text-lg text-paper placeholder:text-muted focus:outline-none"
              id="movie-query"
              type="search"
              placeholder="Search by movie title"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-8">
          <h2 className="font-display text-4xl md:text-5xl">Worth your time</h2>
          <p className="text-muted" aria-live="polite">
            <strong className="text-paper">{visibleMovies.length}</strong> films
          </p>
        </div>
        {visibleMovies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-dashed border-white/20 px-6 py-20 text-center">
            <h3 className="font-display text-3xl">No films found</h3>
            <p className="mt-3 text-muted">Try a shorter title.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
