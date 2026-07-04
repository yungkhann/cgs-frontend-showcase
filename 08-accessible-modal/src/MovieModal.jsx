import { useEffect, useRef } from "react";
import { getPosterClass } from "./posterStyles.js";

function MovieModal({ movie, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid overflow-y-auto bg-black/80 p-4 backdrop-blur-sm md:place-items-center md:p-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="relative my-auto grid w-full max-w-5xl overflow-hidden rounded-sm border border-white/15 bg-zinc-950 shadow-2xl md:grid-cols-[0.85fr_1.15fr]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-black/70 text-2xl transition hover:bg-acid hover:text-ink"
          aria-label="Close movie details"
          onClick={onClose}
        >
          ×
        </button>
        <div className={`min-h-72 p-8 md:min-h-[36rem] ${getPosterClass(movie.art)}`}>
          <div className="flex h-full flex-col justify-end">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-acid">{movie.genre}</span>
            <strong className="mt-3 font-display text-4xl">{movie.title}</strong>
          </div>
        </div>
        <div className="p-7 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-acid">{movie.year} · {movie.runtime}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl" id="modal-title">{movie.title}</h2>
          <p className="mt-5 font-display text-xl italic text-white/80">{movie.tagline}</p>
          <p className="mt-7 leading-7 text-muted">{movie.overview}</p>
          <dl className="mt-8 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-2">
            <div><dt className="text-xs uppercase tracking-widest text-muted">Director</dt><dd className="mt-2">{movie.director}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted">Rating</dt><dd className="mt-2 text-acid">★ {movie.rating} / 10</dd></div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default MovieModal;
