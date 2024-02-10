window.onload = function () {
  let rightSection = document.getElementById("right-section");
  if (window.location.href.includes("location.html")) {
    rightSection.style.backgroundImage = "url('assets/city.gif')";
  } else if (window.location.href.includes("hourly-rate.html")) {
    rightSection.style.backgroundImage = "url('assets/hourly-rate.gif')";
  }
};

let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  windows.location.href = "hourly-rate.html";
});
