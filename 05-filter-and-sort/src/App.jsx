import { useMemo, useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

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
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Combine independent controls</p>
          <h1>Explore the<br /><em>collection.</em></h1>
          <div className="search-panel">
            <div className="search-field">
              <label className="sr-only" htmlFor="movie-query">Movie title</label>
              <input id="movie-query" type="search" value={query}
                placeholder="Search by movie title"
                onChange={(event) => setQuery(event.target.value)} />
            </div>
            <div className="select-field">
              <label className="sr-only" htmlFor="movie-genre">Genre</label>
              <select id="movie-genre" value={genre}
                onChange={(event) => setGenre(event.target.value)}>
                <option value="all">All genres</option>
                {genres.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="collection-heading">
          <h2>Worth your time</h2>
          <div className="collection-tools">
            <p><strong>{visibleMovies.length}</strong> films</p>
            <label className="sr-only" htmlFor="sort-movies">Sort movies</label>
            <select id="sort-movies" value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="rating">Highest rated</option>
              <option value="newest">Newest first</option>
            </select>
          </div>
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
