const API_KEY = "e76cdb42";

function searchMovie(movieTitle) {
  fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const movieListEl = document.querySelector(".movie-list");
      if(!data.Search) {
        movieListEl.innerHTML="<p>No moviesfound.<p>";
        return;
     }

      movieListEl.innerHTML = data.Search
        .map((movie) => userHTML(movie))
        .join("");
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
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