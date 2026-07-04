import { HeartIcon } from "./Icon.jsx";

function Navbar({ favoriteCount, onShowFavorites, showingFavorites }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10" aria-label="Main navigation">
        <a className="font-display text-2xl font-bold tracking-tight" href="#top" aria-label="CineScope home">
          Cine<span className="text-acid">Scope</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-7">
          <a className="hidden text-sm font-semibold text-muted transition hover:text-acid sm:block" href="#collection">Discover</a>
          <button
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              showingFavorites
                ? "border-acid bg-acid text-ink"
                : "border-white/15 hover:border-acid hover:text-acid"
            }`}
            type="button"
            aria-pressed={showingFavorites}
            onClick={onShowFavorites}
          >
            <HeartIcon filled={showingFavorites} />
            <span className="hidden sm:inline">Favorites</span>
            <span className={`grid size-6 place-items-center rounded-full text-xs ${
              showingFavorites ? "bg-ink text-acid" : "bg-white/10"
            }`}>{favoriteCount}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
