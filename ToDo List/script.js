const list = document.getElementById("list");
const btn = document.getElementById("btn");
// const xButton = document.querySelectorAll(".fa-xmark");

const userInput = document.getElementById("user-input");

const parent = document.querySelector(".todo");

function addToDoItem() {
  const newItem = document.createElement("li");
  newItem.classList.add("list-item");
  newItem.id = "list-item";
  newItem.innerHTML = `${userInput.value} <i class="fa-solid fa-xmark" onclick="removeItem()"></i> <i class="fa-solid fa-pencil" onclick="editItem()"></i>`;
  list.appendChild(newItem);
  userInput.value = "";
}
btn.addEventListener("click", addToDoItem);

function removeItem() {}
function editItem() {}
// const todos = [{ id: 0, title: "hello" }];
// localStorage.setItem("item", JSON.stringify(todos));

// var storedTodos = JSON.parse(localStorage.getItem("item"));
// localStorage.clear();

console.log(storedTodos);

window.onload = function () {
  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form submissions
    document.getElementById("list").addEventListener("submit", function () {
      // Get the value of the name field.
      var item = document.getElementById("list-item").value;

      // Save the name in localStorage.
      localStorage.setItem("item", item);
    });
  }
};
