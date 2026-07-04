import { useCallback, useState } from "react";
import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";
import MovieModal from "./MovieModal.jsx";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const closeModal = useCallback(() => setSelectedMovie(null), []);

  return (
    <main className="collection">
      <p className="eyebrow">Conditional UI and lifecycle cleanup</p>
      <h1>Open a movie</h1>
      <div className="movie-grid">
        {curatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onOpen={setSelectedMovie} />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </main>
  );
}

export default App;
