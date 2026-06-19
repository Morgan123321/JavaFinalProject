
const movieListEl = document.querySelector('.movie-list')
const id = localStorage.getItem("id")

async function onSearchChange (event){
   const id = event.target.value;
   renderMovies(id)


async function renderMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(movieTitle)}&apikey=${API_KEY}`)
    const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.map(movie=>movieHTML(movie)).join('');
}

function movieHTML(movie) {
    return
     `<div class="movie-card">
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>Year: ${movie.Year}</p>
      <p>Type: ${movie.Type}</p>
    </div>`
}
renderMovies(id);