import { useMemo, useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

const controlClass = "min-h-14 rounded-sm border border-white/15 bg-white/5 px-5 text-paper focus:border-acid focus:outline-none";

function App() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const genres = [...new Set(curatedMovies.map((movie) => movie.genre))].sort();

  const visibleMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = curatedMovies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(normalizedQuery);
      const matchesGenre = genre === "all" || movie.genre === genre;
      return matchesTitle && matchesGenre;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.year - a.year;
      return 0;
    });
  }, [genre, query, sortBy]);

  return (
    <main className="min-h-screen bg-ink text-paper">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_25%,rgba(217,255,87,0.13),transparent_32%)]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-acid">Combine independent controls</p>
          <h1 className="font-display text-5xl leading-[0.92] tracking-tight md:text-7xl">
            Explore the<br /><em className="font-normal text-acid">collection.</em>
          </h1>
          <div className="mt-10 grid max-w-4xl gap-3 md:grid-cols-[1fr_14rem]">
            <label className="sr-only" htmlFor="movie-query">Movie title</label>
            <input className={controlClass} id="movie-query" type="search"
              value={query} placeholder="Search by movie title"
              onChange={(event) => setQuery(event.target.value)} />
            <label className="sr-only" htmlFor="movie-genre">Genre</label>
            <select className={controlClass} id="movie-genre" value={genre}
              onChange={(event) => setGenre(event.target.value)}>
              <option value="all">All genres</option>
              {genres.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl md:text-5xl">Worth your time</h2>
          <div className="flex items-center gap-5">
            <p className="text-muted"><strong className="text-paper">{visibleMovies.length}</strong> films</p>
            <label className="sr-only" htmlFor="sort-movies">Sort movies</label>
            <select className="rounded-sm border border-white/15 bg-ink px-4 py-3 text-sm"
              id="sort-movies" value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="rating">Highest rated</option>
              <option value="newest">Newest first</option>
            </select>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
