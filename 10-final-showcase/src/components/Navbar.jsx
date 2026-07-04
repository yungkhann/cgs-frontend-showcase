import { HeartIcon } from "./Icon.jsx";

function Navbar({ favoriteCount, onShowFavorites, showingFavorites }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="CineScope home">
          Cine<span>Scope</span>
        </a>
        <div className="nav-actions">
          <a href="#collection">Discover</a>
          <button
            className="favorites-link"
            type="button"
            aria-pressed={showingFavorites}
            onClick={onShowFavorites}
          >
            <HeartIcon filled={showingFavorites} />
            Favorites
            <span>{favoriteCount}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
