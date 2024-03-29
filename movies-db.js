let moviesDB = document.querySelector(".movies-db");
let leftDiv = document.querySelector(".left-div");
const movieList = document.getElementById("movie-list");

let movies = [
  { title: "Shawshank Redemption", rating: 5 },
  { title: "Interstellar", rating: 5 },
  { title: "Ice Age", rating: 4 },
  { title: "Oppenheimer", rating: 5 },
  { title: "The Theory of Everything", rating: 5 },
  { title: "Saw", rating: 1 },
  { title: "Scary Movie 1", rating: 2 },
  { title: "Barbie", rating: 3 },
  { title: "Little Man", rating: 3 },
  { title: "Twilight", rating: 2 },
];

function enterMovie() {
  let movieTitle = document.getElementById("movie").value;
  let rating = document.getElementById("rating").value;

  const movieItem = document.createElement("li");
  movieItem.classList.add("movie-item");
  movieItem.innerHTML = `<span class="movie-title">Movie Title:</span> ${movieTitle}   <span class="my-rating" class="rate">Rating: ${rating} <i class="fa-solid fa-star"></i></span>`;
  movieList.appendChild(movieItem);
  console.log(movieItem);
}

function addExistingMovies() {
  movies.map((movie) => {
    const movieItem = document.createElement("li");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `<span class="movie-title">Movie Title:</span> ${movie.title}   <span id="my-rating" class="my-rating">Rating: ${movie.rating} <i class="fa-solid fa-star"></i></span>`;
    movieList.appendChild(movieItem);
  });
}
addExistingMovies();

function filterMovies() {
  movieList.innerHTML = "";
  let selectedRating = document.getElementById("filter-movies").value;

  const filteredMovies = movies.filter(
    (movie) => movie.rating === parseInt(selectedRating)
  );

  filteredMovies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `<span class="movie-title">Movie Title:</span> ${movie.title}   <span class="my-rating" class="rate">Rating: ${movie.rating} <i class="fa-solid fa-star"></i></span>`;
    movieList.appendChild(movieItem);
  });
  console.log(filteredMovies);
}

function sortMovies() {
  let sortValue = document.getElementById("sort-movies").value;
  console.log("Sort Order:", sortValue);

  if (sortValue === "Ascending") {
    movies.sort(function (a, b) {
      return a.rating - b.rating;
    });
  } else if (sortValue === "Descending") {
    movies.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }

  displayMovies();
}

function displayMovies() {
  let movieList = document.getElementById("movie-list");

  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.classList.add("movie-item");
    movieItem.innerHTML = `<span class="movie-title">Movie Title:</span> ${movie.title}   <span class="my-rating" class="rate">Rating: ${movie.rating} <i class="fa-solid fa-star"></i></span>`;
    movieList.appendChild(movieItem);
  });
}
