const list = document.getElementById("list");
const btn = document.getElementById("btn");
const xButton = document.querySelectorAll(".fa-xmark");

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "New Item" + `<i class="fa-solid fa-xmark"></i>`;

  list.append(newItem);
});

function remove(button) {
  var listItem = button.parentNode;

  var todoList = document.getElementById("list");
  todoList.removeChild(listItem);
}
