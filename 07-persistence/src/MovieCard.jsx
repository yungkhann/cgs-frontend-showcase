import { getPosterClass } from "./posterStyles.js";

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article>
      <div
        className={`relative aspect-[2/3] overflow-hidden rounded-sm ${getPosterClass(movie.art)}`}
        role="img"
        aria-label={`${movie.title} poster artwork`}
      >
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-black/10 p-6">
          <span className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-acid">{movie.genre}</span>
          <strong className="font-display text-3xl leading-none">{movie.title}</strong>
          <small className="mt-3 text-white/70">{movie.year}</small>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 py-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">{movie.year} · {movie.genre}</p>
          <h2 className="mt-2 font-display text-2xl">{movie.title}</h2>
        </div>
        <button
          className={`grid size-11 shrink-0 place-items-center rounded-full border text-xl transition ${
            isFavorite ? "border-acid bg-acid text-ink" : "border-white/20 hover:border-acid hover:text-acid"
          }`}
          type="button"
          aria-pressed={isFavorite}
          aria-label={`${isFavorite ? "Remove" : "Add"} ${movie.title} ${isFavorite ? "from" : "to"} favorites`}
          onClick={() => onToggleFavorite(movie.id)}
        >
          <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
