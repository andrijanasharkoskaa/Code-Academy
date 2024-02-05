let messageEl = document.getElementById("messages");
let chatBtn = document.getElementById("chat-btn");
let askInput = document.getElementById("ask");

let chatMessages = [
  ["Today is Monday"],
  [
    "Front-end programming requires knowledge of HTML, CSS, JavaScript, React or Bootstrap",
  ],
];

function askQuestion() {
  "";

  // Display user input
  let userInput = document.createElement("li");
  userInput.innerText = askInput.value.toLowerCase();
  messageEl.appendChild(userInput);

  // Display messages that include the keyword specified by the user
  setTimeout(() => {
    const keyword = askInput.value.toLowerCase();
    chatMessages.forEach((message) => {
      if (message[0].toLowerCase().includes(keyword)) {
        let response = document.createElement("li");
        response.innerText = message[0];
        messageEl.appendChild(response);
      }
    });
  }, 1500);
}
