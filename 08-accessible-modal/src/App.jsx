import { useCallback, useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";
import MovieModal from "./MovieModal.jsx";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const closeModal = useCallback(() => setSelectedMovie(null), []);

  return (
    <main className="min-h-screen bg-ink px-5 py-16 text-paper md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-acid">Conditional UI and lifecycle cleanup</p>
        <h1 className="mb-12 font-display text-4xl md:text-5xl">Open a movie</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {curatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </main>
  );
}

export default App;
