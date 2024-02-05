let messageEl = document.getElementById("messages");
let chatBtn = document.getElementById("chat-btn");
let askInput = document.getElementById("ask").value;

let chatMessages = [
  "Today is Monday",
  "Front-end programming requires knowledge of HTML, CSS, JavaScript, React or Bootstra",
];

function askChatbot() {
  chatMessages.forEach((message) => {
    if (askInput.includes("front-end programming")) {
      let response = document.createElement("li");
      response.innerText = message[1];
      messageEl.appendChild(response);
    }
  });
}
