const colors = document.querySelector(".colors");
const colorDivs = document.querySelectorAll(".color-div");
const paintDivs = document.querySelectorAll(".paint-div");

colorDivs.forEach((colorDiv) => {
  colorDiv.addEventListener("click", () => {
    console.log("a div was clicked");
  });
});

paintDivs.forEach((paintDiv) => {
  paintDiv.addEventListener("click", () => {
    console.log(" a TO-BE painted div is clicked");
  });
});
