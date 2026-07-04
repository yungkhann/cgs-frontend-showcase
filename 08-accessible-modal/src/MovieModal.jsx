import { useEffect, useRef } from "react";

function MovieModal({ movie, onClose }) {
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
    <div className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <section className="movie-modal" role="dialog" aria-modal="true"
        aria-labelledby="modal-title">
        <button ref={closeButtonRef} type="button" className="modal-close"
          aria-label="Close movie details" onClick={onClose}>
          ×
        </button>
        <div className={`modal-art poster--${movie.art}`}>
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
            <div><dt>Rating</dt><dd>★ {movie.rating} / 10</dd></div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default MovieModal;
