import { curatedMovies } from "./data/movies.js";

function App() {
  return (
    <main className="collection">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">Curated collection</p>
          <h1>Worth your time</h1>
        </div>
        <p><strong>{curatedMovies.length}</strong> films</p>
      </div>

      <div className="movie-grid">
        {curatedMovies.map((movie) => (
          <article className="movie-card" key={movie.id}>
            <div
              className={`poster poster--${movie.art}`}
              role="img"
              aria-label={`${movie.title} poster artwork`}
            >
              <div className="poster__type">
                <span>{movie.genre}</span>
                <strong>{movie.title}</strong>
                <small>{movie.year}</small>
              </div>
            </div>
            <div className="movie-card__body">
              <div>
                <p>{movie.year} · {movie.genre}</p>
                <h2>{movie.title}</h2>
              </div>
            </div>
            <div className="rating-row">★ <strong>{movie.rating}</strong> / 10</div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default App;
