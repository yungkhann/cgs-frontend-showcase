import { getPosterClass } from "./posterStyles.js";

function MovieCard({ movie, onOpen }) {
  return (
    <article className="group">
      <button className="block w-full text-left" type="button" onClick={() => onOpen(movie)}>
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
          <span className="absolute inset-x-4 bottom-4 translate-y-20 rounded-sm bg-acid px-4 py-3 text-center text-sm font-bold text-ink transition-transform group-hover:translate-y-0 group-focus-within:translate-y-0">
            View details →
          </span>
        </div>
      </button>
      <div className="py-5">
        <p className="text-xs uppercase tracking-widest text-muted">{movie.year} · {movie.genre}</p>
        <h2 className="mt-2 font-display text-2xl">{movie.title}</h2>
      </div>
    </article>
  );
}

export default MovieCard;
