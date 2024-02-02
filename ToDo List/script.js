const list = document.getElementById("list");
const btn = document.getElementById("btn");
const userInput = document.getElementById("user-input");

function addToDoItem() {
  const newItem = document.createElement("li");
  newItem.classList.add("list-item");
  newItem.innerHTML = `<span>${userInput.value}</span> <i class="fa-solid fa-check" onclick="complete(this)"> </i> <i class="fa-solid fa-pencil" onclick="editItem(this)"></i> <i class="fa-solid fa-xmark" onclick="removeItem(this)">`;
  list.appendChild(newItem);

  saveToLocalStorage(userInput.value);

  userInput.value = "";
}

btn.addEventListener("click", addToDoItem);

function removeItem(element) {
  element.parentElement.remove();

  removeFromLocalStorage(element.parentElement.innerText.trim());
}

function editItem() {}

function saveToLocalStorage(item) {
  const storedItems = JSON.parse(localStorage.getItem("todos")) || [];

  storedItems.push(item);

  localStorage.setItem("todos", JSON.stringify(storedItems));
}

function removeFromLocalStorage(item) {
  const storedItems = JSON.parse(localStorage.getItem("todos")) || [];

  const updatedItems = storedItems.filter((todo) => todo !== item);

  localStorage.setItem("todos", JSON.stringify(updatedItems));
}

window.onload = function () {
  const storedItems = JSON.parse(localStorage.getItem("todos")) || [];
  storedItems.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.classList.add("list-item");
    newItem.innerHTML = `<span>${userInput.value}</span> <i class="fa-solid fa-check" onclick="complete(this)">  <i class="fa-solid fa-pencil" onclick="editItem(this)"></i> <i class="fa-solid fa-xmark" onclick="removeItem(this)"></i>`;
    list.appendChild(newItem);
  });
};

function complete(element) {
  if (element) {
    element.parentElement.classList.toggle("completed");
  }
}
localStorage.clear();
