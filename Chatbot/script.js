let chatboxIcon = document.getElementById("chatbox-icon");
let chatbotContainer = document.getElementById("chatbot-container");
let exitBtn = document.getElementById("exit-header");

function openChat() {
  chatbotContainer.classList.toggle("display-class-none");
}

function closeChat() {
  chatbotContainer.classList.add("display-class-none");
}
