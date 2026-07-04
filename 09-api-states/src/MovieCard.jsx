import { getPosterClass } from "./posterStyles.js";

function MovieCard({ movie }) {
  return (
    <article>
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
      </div>
      <div className="py-5">
        <p className="text-xs uppercase tracking-widest text-muted">{movie.year} · {movie.genre}</p>
        <h2 className="mt-2 font-display text-2xl">{movie.title}</h2>
      </div>
    </article>
  );
}

export default MovieCard;
