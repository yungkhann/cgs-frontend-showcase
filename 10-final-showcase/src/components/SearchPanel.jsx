import { SearchIcon } from "./Icon.jsx";

const controlClass = "min-h-14 w-full bg-transparent px-4 text-paper focus:outline-none";

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
    <form className="mt-10 grid max-w-4xl gap-2 rounded-sm border border-white/15 bg-white/5 p-2 shadow-2xl md:grid-cols-[1fr_14rem_auto]" role="search" onSubmit={onSubmit}>
      <div className="flex items-center px-2 text-muted">
        <SearchIcon />
        <label className="sr-only" htmlFor="movie-query">Movie title</label>
        <input className={controlClass} id="movie-query" type="search"
          placeholder="Search by movie title" value={query}
          onChange={(event) => onQueryChange(event.target.value)} />
      </div>
      <div className="border-t border-white/10 md:border-l md:border-t-0">
        <label className="sr-only" htmlFor="movie-genre">Genre</label>
        <select className={controlClass} id="movie-genre" value={genre}
          onChange={(event) => onGenreChange(event.target.value)}>
          <option value="all">All genres</option>
          {genres.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <button
        className="min-h-14 rounded-sm bg-acid px-7 font-bold text-ink transition hover:bg-white disabled:cursor-wait disabled:opacity-60"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Searching…" : "Find a film"}
      </button>
    </form>
  );
}

export default SearchPanel;
