const colors = document.querySelector(".colors");
const colorDivs = document.querySelectorAll(".color-div");
const paintDivs = document.querySelectorAll(".paint-div");

colorDivs.forEach((colorDiv) => {
  colorDiv.addEventListener("click", () => {
    const backgroundColor = window.getComputedStyle(colorDiv).backgroundColor;
    paintDivs.forEach((paintDiv) => {
      paintDiv.addEventListener("click", () => {
        console.log("A TO-BE painted div is clicked");
        paintDiv.style.backgroundColor = backgroundColor;
      });
    });
  });
});
