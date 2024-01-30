let moviesDB = document.querySelector(".movies-db");
let leftDiv = document.querySelector(".left-div");
const movieList = document.getElementById("movie-list");

let movies = [
  { title: "Movie 1", rating: 4 },
  { title: "Movie 2", rating: 3 },
  { title: "Movie 3", rating: 2 },
  { title: "Movie 4", rating: 5 },
  { title: "Movie 5", rating: 5 },
  { title: "Movie 6", rating: 1 },
];

function enterMovie() {
  let movieTitle = document.getElementById("movie").value;
  let rating = document.getElementById("rating").value;

  const movieItem = document.createElement("li");
  movieItem.innerHTML = `${movieTitle}   <span>${rating}</span>`;
  movieList.appendChild(movieItem);
  console.log(movieItem);
}

function addExistingMovies() {
  movies.map((movie) => {});
}
