let messageEl = document.getElementById("messages");
let chatBtn = document.getElementById("chat-btn");
let askInput = document.getElementById("ask");
let chat = document.getElementById("chat");

let chatMessages = [
  ["Today is Monday"],
  [
    "Front-end programming requires knowledge of HTML, CSS, JavaScript, React or Bootstrap",
  ],
];

function askQuestion() {
  let userInput = document.createElement("li");
  userInput.classList.add("response", "incoming");
  userInput.innerText = askInput.value.toLowerCase();
  messageEl.appendChild(userInput);

  setTimeout(() => {
    const keyword = askInput.value.toLowerCase();
    chatMessages.forEach((message) => {
      if (message[0].toLowerCase().includes(keyword)) {
        let response = document.createElement("li");
        response.classList.add("response", "outgoing");
        response.innerText = message[0];
        messageEl.appendChild(response);
      }
    });
  }, 1500);
}
let close = document.getElementById("close");
function closeChat() {
  chat.style.display = "none";
  let exitIcon = document.getElementsById("exit-icon");
  exitIcon.innerHTML = "";
}
function openChat() {
  chat.style.display = "block";
  closes.style.display = "none";
}
