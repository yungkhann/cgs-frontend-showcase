import { curatedMovies } from "./data/movies.js";
import { getPosterClass } from "./posterStyles.js";

function App() {
  return (
    <main className="min-h-screen bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">
              Curated collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl">Worth your time</h1>
          </div>
          <p className="text-muted"><strong className="text-paper">{curatedMovies.length}</strong> films</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {curatedMovies.map((movie) => (
            <article className="group" key={movie.id}>
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
              </div>
              <div className="border-t border-white/10 pt-4 text-sm text-muted">
                <span className="text-acid">★</span>{" "}
                <strong className="text-paper">{movie.rating}</strong> / 10
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
