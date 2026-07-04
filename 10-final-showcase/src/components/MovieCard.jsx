import { getPosterClass } from "../posterStyles.js";
import { ArrowIcon, HeartIcon } from "./Icon.jsx";

function MovieCard({ movie, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <article className="group">
      <button className="block w-full text-left" type="button" onClick={() => onOpen(movie)}>
        <div
          className={`relative aspect-[2/3] overflow-hidden rounded-sm bg-cover bg-center ${getPosterClass(movie.art)}`}
          style={movie.poster ? { backgroundImage: `url("${movie.poster}")` } : undefined}
          role="img"
          aria-label={`${movie.title} poster artwork`}
        >
          {!movie.poster && (
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-black/10 p-6">
              <span className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-acid">{movie.genre}</span>
              <strong className="font-display text-3xl leading-none">{movie.title}</strong>
              <small className="mt-3 text-white/70">{movie.year}</small>
            </div>
          )}
          <span className="absolute inset-x-4 bottom-4 flex translate-y-20 items-center justify-center gap-2 rounded-sm bg-acid px-4 py-3 text-sm font-bold text-ink transition-transform group-hover:translate-y-0 group-focus-within:translate-y-0">
            View details <ArrowIcon />
          </span>
        </div>
      </button>
      <div className="flex items-start justify-between gap-4 py-5">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted">{movie.year} · {movie.genre}</p>
          <h3 className="mt-2 font-display text-2xl">{movie.title}</h3>
        </div>
        <button
          className={`grid size-11 shrink-0 place-items-center rounded-full border transition ${
            isFavorite
              ? "border-acid bg-acid text-ink"
              : "border-white/20 hover:border-acid hover:text-acid"
          }`}
          type="button"
          aria-label={`${isFavorite ? "Remove" : "Add"} ${movie.title} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(movie.id)}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>
      <div className="border-t border-white/10 pt-4 text-sm text-muted">
        <span className="text-acid">★</span>{" "}
        <strong className="text-paper">{movie.rating ?? "—"}</strong>{" "}
        <span>{movie.rating ? "/ 10" : "Not rated"}</span>
      </div>
    </article>
  );
}

export default MovieCard;
