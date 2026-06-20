const movieListEl = document.querySelector(".movie-list");
const movieTitle = localStorage.getItem("movieTitle");
const API_KEY = "e76cdb42";

async function onSearchChange(event) {
  const movieTitle = event.target.value;
  renderMovies(movieTitle);
}

async function renderMovies(movieTitle) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`
  );

  const moviesData = await response.json();

  if (!moviesData.Search) {
    movieListEl.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movieListEl.innerHTML = moviesData.Search
    .map((movie) => movieHTML(movie))
    .join("");
}

function movieHTML(movie) {
  return `
    <div class="movie-card">
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>Year: ${movie.Year}</p>
      <p>Type: ${movie.Type}</p>
    </div>
  `;
}


if (movieTitle) {
  renderMovies(movieTitle);
}