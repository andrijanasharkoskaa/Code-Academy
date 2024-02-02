const list = document.getElementById("list");
const btn = document.getElementById("btn");
// const xButton = document.querySelectorAll(".fa-xmark");

const userInput = document.getElementById("user-input");

const parent = document.querySelector(".todo");

function addToDoItem() {
  const newItem = document.createElement("li");
  newItem.classList.add("list-item");
  newItem.innerHTML = `${userInput.value} <i class="fa-solid fa-xmark" onclick="removeItem()"></i> <i class="fa-solid fa-pencil" onclick="editItem()"></i>`;
  list.appendChild(newItem);
  userInput.value = "";
}
btn.addEventListener("click", addToDoItem);

function removeItem() {}
function editItem() {}
