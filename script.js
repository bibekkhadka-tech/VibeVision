document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotIcon = document.getElementById("chatbot-icon");
  
    // Show chatbot and preload welcome message
    chatbotIcon.addEventListener("click", function () {
      chatbotContainer.classList.remove("hidden");
      chatbotIcon.style.display = "none";
  
      // Show welcome message if chatbot is opened for the first time
      if (!chatbotMessages.hasChildNodes()) {
        appendMessage("bot", "👋 Hello! I'm Vibe Vision's assistant. Ask me about our services, pricing, contact info, or anything else.");
      }
    });
  
    // Hide chatbot
    closeBtn.addEventListener("click", function () {
      chatbotContainer.classList.add("hidden");
      chatbotIcon.style.display = "flex";
    });
  
    // Send message
    sendBtn.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const userMessage = chatbotInput.value.trim();
      if (userMessage) {
        appendMessage("user", userMessage);
        chatbotInput.value = "";
        getBotResponse(userMessage);
      }
    }
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
    function getBotResponse(userMessage) {
      const msg = userMessage.toLowerCase();
      let botMessage = "❓ Sorry, I didn't understand that. Try asking about pricing, contact, or our services.";
  
      if (msg.includes("hello") || msg.includes("hi")) {
        botMessage = "Hey there! How can I help you today?";
      } else if (msg.includes("contact") || msg.includes("email")) {
        botMessage = "📧 You can reach us at info@vibesvisionproduction.com.au.";
      } else if (msg.includes("price") || msg.includes("pricing")) {
        botMessage = "💰 Our pricing depends on your project needs. Send us an email and we'll send you a quote!";
      } else if (msg.includes("services") || msg.includes("what do you do") || msg.includes("offer")) {
        botMessage = "🎥 We offer media production services like videography, photography, and social media content creation.";
      } else if (msg.includes("location") || msg.includes("where are you")) {
        botMessage = "📍 We're based in Australia, but we also handle remote projects!";
      } else if (msg.includes("thank")) {
        botMessage = "😊 You're very welcome!";
      }
  
      appendMessage("bot", botMessage);
    }
  });
  function toggleContactFields() {
    var selectedOption = document.getElementById("contactOption").value;
    var emailField = document.getElementById("emailField");
    var phoneField = document.getElementById("phoneField");

    // Hide both fields initially
    emailField.style.display = "none";
    phoneField.style.display = "none";

    // Display the selected field
    if (selectedOption === "email") {
      emailField.style.display = "block";
    } else if (selectedOption === "phone") {
      phoneField.style.display = "block";
    }
  }



  