let messageEl = document.getElementById("messages");
let askInput = document.getElementById("ask");
let chat = document.getElementById("chat");
let exitIcon = document.getElementById("exit-icon");

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
    chatMessages.forEach((message) => {
      if (message[0].toLowerCase().includes(keyword)) {
        let response = document.createElement("li");
        const keyword = askInput.value.toLowerCase();

        response.classList.add("response", "outgoing");
        response.innerText = message[0];
        messageEl.appendChild(response);
      }
      //  else {
      //   response.innerText = "Please enter a valid question";
      // }
    });
  }, 1500);
}

function closeChat() {
  chat.style.display = "none";
  exitIcon.style.display = "none";
  document.getElementById("chat-icon").style.display = "block";
  chat.style.border = "none";
}

function openChat() {
  chat.style.display = "block";
  exitIcon.style.display = "block";
  document.getElementById("chat-icon").style.display = "none";
}
