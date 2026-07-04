function MovieCard({ movie }) {
  return (
    <article className="movie-card">
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
  );
}

export default MovieCard;
