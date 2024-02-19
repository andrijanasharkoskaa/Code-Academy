window.onload = function () {
  let rightSection = document.getElementById("right-section");
  if (window.location.href.includes("location.html")) {
    rightSection.style.backgroundImage = "url('assets/city.gif')";
  } else if (window.location.href.includes("hourly-rate.html")) {
    rightSection.style.backgroundImage = "url('assets/hourly-rate.gif')";
    rightSection.style.backgroundImage.position = "right";
  }
};

let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  windows.location.href = "hourly-rate.html";
});

const url =
  "https://countryapi.io/api/all?apikey=bvZGgLNMFo7Htrbeg9NWhEDju7O7iEGDZI8ffQZx";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bvZGgLNMFo7Htrbeg9NWhEDju7O7iEGDZI8ffQZx",
    Authorization: "Bearer bvZGgLNMFo7Htrbeg9NWhEDju7O7iEGDZI8ffQZx",
  },
};
let countries = document.getElementById("countries");
async function fetchData() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    for (const countryCode in result) {
      if (Object.hasOwnProperty.call(result, countryCode)) {
        const country = result[countryCode];
        let newCountry = document.createElement("li");
        countries.appendChild(newCountry);
        newCountry.innerText = country.name;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();

let searchInput = document.getElementById("search-input");
