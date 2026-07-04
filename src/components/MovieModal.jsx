import { useEffect, useRef } from "react";
import { CloseIcon, HeartIcon } from "./Icon.jsx";

function MovieModal({ movie, isFavorite, onClose, onToggleFavorite }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.classList.add("modal-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section
        className="movie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal-close"
          aria-label="Close movie details"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <div
          className={`modal-art poster--${movie.art}`}
          style={movie.poster ? { backgroundImage: `url("${movie.poster}")` } : undefined}
        >
          <span>{movie.genre}</span>
          <strong>{movie.title}</strong>
        </div>
        <div className="modal-content">
          <p className="eyebrow">{movie.year} · {movie.runtime}</p>
          <h2 id="modal-title">{movie.title}</h2>
          <p className="modal-tagline">{movie.tagline}</p>
          <p className="modal-overview">{movie.overview}</p>
          <dl>
            <div><dt>Director</dt><dd>{movie.director}</dd></div>
            <div><dt>Rating</dt><dd>{movie.rating ? `★ ${movie.rating} / 10` : "Not rated"}</dd></div>
          </dl>
          <button
            className="modal-favorite"
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(movie.id)}
          >
            <HeartIcon filled={isFavorite} />
            {isFavorite ? "Saved to favorites" : "Add to favorites"}
          </button>
        </div>
      </section>
    </div>
  );
}

export default MovieModal;
