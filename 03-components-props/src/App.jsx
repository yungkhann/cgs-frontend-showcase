import { curatedMovies } from "./data/movies.js";
import MovieCard from "./MovieCard.jsx";

function App() {
  return (
    <main className="collection">
      <div className="collection-heading">
        <div>
          <p className="eyebrow">Curated collection</p>
          <h1>Worth your time</h1>
        </div>
        <p><strong>{curatedMovies.length}</strong> films</p>
      </div>

      <div className="movie-grid">
        {curatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default App;
