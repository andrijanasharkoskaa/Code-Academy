const days = document.querySelectorAll(".day");

// Add click event listener to each day
days.forEach((day) => {
  day.addEventListener("click", () => {
    // Remove the 'selected' class from all days
    days.forEach((d) => d.classList.remove("selected"));

    // Add the 'selected' class to the clicked day
    day.classList.add("selected");
  });
});
