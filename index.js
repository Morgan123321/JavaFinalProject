const API_KEY = "e76cdb42";

function searchMovie(movieTitle) {
  fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
}

function showMovieCards (title){
    localStorage.setItem("id", id)
    window.location.href=`${window.location.origin}`/user.html
   
}
function userHTML(title) {
    return ` <div class="movie-card" onclick="showMovieCards()">
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>Year: ${movie.Year}</p>
      <p>Type: ${movie.Type}</p>
    </div>`
}
