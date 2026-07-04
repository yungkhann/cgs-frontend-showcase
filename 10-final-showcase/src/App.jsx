import { useCallback, useEffect, useMemo, useState } from "react";
import EmptyState from "./components/EmptyState.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MovieModal from "./components/MovieModal.jsx";
import Navbar from "./components/Navbar.jsx";
import SearchPanel from "./components/SearchPanel.jsx";
import { curatedMovies } from "./data/movies.js";
import { hasOmdbKey, searchOmdb } from "./services/omdb.js";

function getSavedFavorites() {
  try {
    return JSON.parse(localStorage.getItem("cinescope-favorites")) ?? [];
  } catch {
    return [];
  }
}

function App() {
  const [catalog, setCatalog] = useState(curatedMovies);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [favoriteIds, setFavoriteIds] = useState(getSavedFavorites);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [status, setStatus] = useState("ready");
  const [errorMessage, setErrorMessage] = useState("");
  const [sourceLabel, setSourceLabel] = useState("Curated collection");

  useEffect(() => {
    localStorage.setItem("cinescope-favorites", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const genres = useMemo(
    () => [...new Set(catalog.map((movie) => movie.genre))].sort(),
    [catalog],
  );

  const visibleMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = catalog.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(normalizedQuery);
      const matchesGenre = genre === "all" || movie.genre === genre;
      const matchesFavorite = !favoritesOnly || favoriteIds.includes(movie.id);
      return matchesTitle && matchesGenre && matchesFavorite;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
      if (sortBy === "newest") return Number(b.year) - Number(a.year);
      return 0;
    });
  }, [catalog, favoriteIds, favoritesOnly, genre, query, sortBy]);

  const toggleFavorite = (movieId) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(movieId)
        ? currentIds.filter((id) => id !== movieId)
        : [...currentIds, movieId],
    );
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = query.trim();

    if (!hasOmdbKey || searchTerm.length < 2) return;

    setStatus("loading");
    setErrorMessage("");
    setFavoritesOnly(false);
    setGenre("all");

    try {
      const results = await searchOmdb(searchTerm);
      setCatalog(results);
      setSourceLabel("Live results from OMDb");
      setStatus("ready");
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const resetCollection = () => {
    setCatalog(curatedMovies);
    setQuery("");
    setGenre("all");
    setFavoritesOnly(false);
    setErrorMessage("");
    setStatus("ready");
    setSourceLabel("Curated collection");
  };

  const closeModal = useCallback(() => setSelectedMovie(null), []);

  return (
    <div className="min-h-screen bg-ink text-paper" id="top">
      <Navbar
        favoriteCount={favoriteIds.length}
        showingFavorites={favoritesOnly}
        onShowFavorites={() => setFavoritesOnly((current) => !current)}
      />

      <main>
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_75%_25%,rgba(217,255,87,0.13),transparent_32%)]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-acid">
              Curated stories. Unforgettable nights.
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              Find your next<br /><em className="font-normal text-acid">favorite film.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Search a thoughtful collection of cinema, save what catches your eye,
              and make tonight’s choice a good one.
            </p>
            <SearchPanel
              query={query}
              genre={genre}
              genres={genres}
              isLoading={status === "loading"}
              onQueryChange={setQuery}
              onGenreChange={setGenre}
              onSubmit={handleSearch}
            />
            <p className="mt-4 text-sm text-muted">
              {hasOmdbKey
                ? "Search submits live to OMDb. Filters update instantly."
                : "Demo mode · add VITE_OMDB_API_KEY for live title search"}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
          id="collection" aria-labelledby="collection-title">
          <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">{sourceLabel}</p>
              <h2 className="font-display text-4xl md:text-5xl" id="collection-title">
                {favoritesOnly ? "Your favorites" : "Worth your time"}
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-muted" aria-live="polite">
                <strong className="text-paper">{visibleMovies.length}</strong>
                {visibleMovies.length === 1 ? " film" : " films"}
              </p>
              <label className="sr-only" htmlFor="sort-movies">Sort movies</label>
              <select
                className="rounded-sm border border-white/15 bg-ink px-4 py-3 text-sm focus:border-acid focus:outline-none"
                id="sort-movies"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="rating">Highest rated</option>
                <option value="newest">Newest first</option>
              </select>
            </div>
          </div>

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
              <button className="mt-6 rounded-sm bg-paper px-5 py-3 font-bold text-ink"
                type="button" onClick={resetCollection}>Return to collection</button>
            </div>
          )}

          {status === "ready" && visibleMovies.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isFavorite={favoriteIds.includes(movie.id)}
                  onToggleFavorite={toggleFavorite}
                  onOpen={setSelectedMovie}
                />
              ))}
            </div>
          )}

          {status === "ready" && visibleMovies.length === 0 && (
            <EmptyState favoritesOnly={favoritesOnly} onReset={resetCollection} />
          )}
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <a className="font-display text-2xl font-bold text-paper" href="#top">
          Cine<span className="text-acid">Scope</span>
        </a>
        <p>Made for people who still watch the credits.</p>
        <p>React · Vite · Tailwind CSS</p>
      </footer>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isFavorite={favoriteIds.includes(selectedMovie.id)}
          onClose={closeModal}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}

export default App;
