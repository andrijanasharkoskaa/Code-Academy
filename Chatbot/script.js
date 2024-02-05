let messageEl = document.getElementById("messages");
let chatBtn = document.getElementById("chat-btn");
let askInput = document.getElementById("ask");

let chatMessages = [
  ["Today is Monday"],
  [
    "Front-end programming requires knowledge of HTML, CSS, JavaScript, React or Bootstra",
  ],
];

function askQuestion() {
  messageEl.innerHTML = "";
  let userInput = document.createElement("li");
  userInput.innerText = askInput.value.toLowerCase();
  messageEl.appendChild(userInput);
  setTimeout(() => {
    chatMessages.forEach((message) => {
      if (askInput.value.toLowerCase().includes("today")) {
        let response = document.createElement("li");
        response.innerText = message[0];
        messageEl.appendChild(response);
      }
    });
  }, 1500);
}

// function appendEl(message) {}
