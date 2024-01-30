let searchBar = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");

let cities = [...document.getElementsByClassName("city")];

function search() {
  let searchValue = searchBar.value.toLowerCase();

  let filteredCities = cities.filter((city) => {
    let cityName = city.textContent.toLowerCase();
    return cityName.includes(searchValue);
  });

  cities.forEach((city) => {
    city.style.display = "none";
  });

  filteredCities.forEach((city) => {
    city.style.display = "block";
  });
}

searchBtn.addEventListener("click", search);
