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
    <div className="app" id="top">
      <Navbar
        favoriteCount={favoriteIds.length}
        showingFavorites={favoritesOnly}
        onShowFavorites={() => setFavoritesOnly((current) => !current)}
      />

      <main>
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow">Curated stories. Unforgettable nights.</p>
            <h1>Find your next<br /><em>favorite film.</em></h1>
            <p className="hero__copy">
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
            <p className="search-hint">
              {hasOmdbKey
                ? "Search submits live to OMDb. Filters update instantly."
                : "Demo mode · add VITE_OMDB_API_KEY for live title search"}
            </p>
          </div>
        </section>

        <section className="collection" id="collection" aria-labelledby="collection-title">
          <div className="collection-heading">
            <div>
              <p className="eyebrow">{sourceLabel}</p>
              <h2 id="collection-title">
                {favoritesOnly ? "Your favorites" : "Worth your time"}
              </h2>
            </div>
            <div className="collection-tools">
              <p aria-live="polite">
                <strong>{visibleMovies.length}</strong>
                {visibleMovies.length === 1 ? " film" : " films"}
              </p>
              <label className="sr-only" htmlFor="sort-movies">Sort movies</label>
              <select
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
            <div className="loading-state" role="status">
              <span className="loader" />
              <p>Searching the archive…</p>
            </div>
          )}

          {status === "error" && (
            <div className="error-state" role="alert">
              <p>{errorMessage}</p>
              <button type="button" onClick={resetCollection}>Return to collection</button>
            </div>
          )}

          {status === "ready" && visibleMovies.length > 0 && (
            <div className="movie-grid">
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

      <footer className="site-footer">
        <a className="brand" href="#top">Cine<span>Scope</span></a>
        <p>Made for people who still watch the credits.</p>
        <p>React · Vite · Plain CSS</p>
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
