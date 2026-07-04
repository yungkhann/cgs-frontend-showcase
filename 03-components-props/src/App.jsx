import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

function App() {
  return (
    <main className="min-h-screen bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">Reusable UI</p>
            <h1 className="font-display text-4xl md:text-5xl">Worth your time</h1>
          </div>
          <p className="text-muted"><strong className="text-paper">{curatedMovies.length}</strong> films</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {curatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
