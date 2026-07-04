const API_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const hasOmdbKey = Boolean(API_KEY);

export async function searchOmdb(searchTerm) {
  if (!API_KEY) return null;

  const params = new URLSearchParams({
    apikey: API_KEY,
    s: searchTerm,
    type: "movie",
  });
  const response = await fetch(`${API_URL}?${params}`);

  if (!response.ok) {
    throw new Error("The movie service is unavailable right now.");
  }

  const data = await response.json();
  if (data.Response === "False") {
    if (data.Error === "Movie not found!") return [];
    throw new Error(data.Error || "The movie search could not be completed.");
  }

  return data.Search.map((movie, index) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: Number.parseInt(movie.Year, 10) || movie.Year,
    genre: "Movie",
    rating: null,
    runtime: "Details on IMDb",
    director: "OMDb result",
    tagline: "A live result from the Open Movie Database.",
    overview: "Add the movie-details endpoint as the next course challenge to retrieve the complete plot, cast, runtime, and rating.",
    poster: movie.Poster !== "N/A" ? movie.Poster : null,
    art: `remote-${index % 4}`,
  }));
}
