const list = document.getElementById("list");
const btn = document.getElementById("btn");
// const xButton = document.querySelectorAll(".fa-xmark");

// const toDoItems = [
//   "Cook",
//   "Work",
//   "Clean",
//   "Wash my car",
//   "Study",
//   "Plan for the upcoming trip",
// ];

// let currentIndex = 0;

// btn.addEventListener("click", function () {
//   if (currentIndex < toDoItems.length) {
//     const newItem = document.createElement("li");
//     newItem.innerHTML = `${toDoItems[currentIndex]} <i class="fa-solid fa-xmark" onclick="remove(this)"></i>`;
//     list.appendChild(newItem);
//     currentIndex++;
//   }
// });

// function remove(button) {
//   const listItem = button.parentNode;
//   list.removeChild(listItem);
// }
const userInput = document.getElementById("user-input");
const parent = document.querySelector(".todo");

btn.addEventListener("click", fun);

function fun() {
  const newItem = document.createElement("li");
  newItem.innerHTML = userInput.value;
  list.appendChild(newItem);
}

const secondList = document.getElementById("second-list");
console.log(secondList.children);
