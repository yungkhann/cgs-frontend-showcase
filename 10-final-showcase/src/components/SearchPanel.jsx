import { SearchIcon } from "./Icon.jsx";

function SearchPanel({
  query,
  genre,
  genres,
  isLoading,
  onQueryChange,
  onGenreChange,
  onSubmit,
}) {
  return (
    <form className="search-panel" role="search" onSubmit={onSubmit}>
      <div className="search-field">
        <SearchIcon />
        <label className="sr-only" htmlFor="movie-query">Movie title</label>
        <input
          id="movie-query"
          type="search"
          placeholder="Search by movie title"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
      <div className="select-field">
        <label className="sr-only" htmlFor="movie-genre">Genre</label>
        <select
          id="movie-genre"
          value={genre}
          onChange={(event) => onGenreChange(event.target.value)}
        >
          <option value="all">All genres</option>
          {genres.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <button className="search-button" type="submit" disabled={isLoading}>
        {isLoading ? "Searching…" : "Find a film"}
      </button>
    </form>
  );
}

export default SearchPanel;
