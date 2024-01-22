const list = document.getElementById("list");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "New Item";

  list.append(newItem);
});
