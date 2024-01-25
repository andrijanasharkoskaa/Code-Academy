const colors = document.querySelector(".colors");
const colorDivs = document.querySelectorAll(".color-div");

colorDivs.forEach((colorDiv) => {
  colorDiv.addEventListener("click", () => {
    console.log("a div was clicked");
  });
});
