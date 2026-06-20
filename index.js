const API_KEY = "e76cdb42";
let movies = [];


function searchMovie(movieTitle) {
  fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
function displayMovies(movieList) {
  const movieListEl = document.querySelector(".movie-list");

  movieListEl.innerHTML = movieList
    .map((movie) => userHTML(movie))
    .join("");
}

function filterMovies() {
  const filterValue = document.getElementById("filter").value;

  if (filterValue === "az") {
    movies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filterValue === "za") {
    movies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (filterValue === "newest") {
    movies.sort((a, b) => Number(b.Year) - Number(a.Year));
  } else if (filterValue === "oldest") {
    movies.sort((a, b) => Number(a.Year) - Number(b.Year));
  }

  displayMovies(movies);
}
      const movieListEl = document.querySelector(".movie-list");
      if(!data.Search) {
        movieListEl.innerHTML="<p>No moviesfound.<p>";
        return;
     }

     movies = data.Search;
     displayMovies(movies);
    })
    .catch((error) => {
   console.error("Something went wrong:", error);
  movieListEl.innerHTML = "<p>Something went wrong. Please try again.</p>";
});
}

function showMovieCards(imdbID) {
  localStorage.setItem("id", imdbID);
  window.location.href = `${window.location.origin}/user.html`;
}

function userHTML(movie) {
  return `
    <div class="movie-card" onclick="showMovieCards('${movie.imdbID}')">
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>Year: ${movie.Year}</p>
      <p>Type: ${movie.Type}</p>
    </div>
  `;
}