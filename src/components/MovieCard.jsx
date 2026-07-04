import { ArrowIcon, HeartIcon } from "./Icon.jsx";

function MovieCard({ movie, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <article className="movie-card">
      <button className="poster-button" type="button" onClick={() => onOpen(movie)}>
        <div
          className={`poster poster--${movie.art}`}
          style={movie.poster ? { backgroundImage: `url("${movie.poster}")` } : undefined}
          role="img"
          aria-label={`${movie.title} poster artwork`}
        >
          {!movie.poster && (
            <div className="poster__type">
              <span>{movie.genre}</span>
              <strong>{movie.title}</strong>
              <small>{movie.year}</small>
            </div>
          )}
          <span className="poster__view">View details <ArrowIcon /></span>
        </div>
      </button>
      <div className="movie-card__body">
        <div>
          <p>{movie.year} · {movie.genre}</p>
          <h3>{movie.title}</h3>
        </div>
        <button
          className="favorite-button"
          type="button"
          aria-label={`${isFavorite ? "Remove" : "Add"} ${movie.title} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(movie.id)}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className="rating-row">
        <span className="star">★</span>
        <strong>{movie.rating ?? "—"}</strong>
        <span className="rating-row__label">{movie.rating ? "/ 10" : "Not rated"}</span>
      </div>
    </article>
  );
}

export default MovieCard;
