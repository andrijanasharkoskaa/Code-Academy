document.addEventListener("DOMContentLoaded", function () {
  let dateValueElement = document.querySelector(".date-value");
  let numberedDays = document.querySelectorAll(".numbered-days");

  numberedDays.forEach(function (day) {
    day.addEventListener("click", function () {
      let selectedDate = this.textContent;

      dateValueElement.textContent =
        "Selected Date:  " + selectedDate + " December";

      this.classList.add("active");
    });
  });
});
