const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");

// Simulated users
const users = ["meey_li", "gamer_dude", "pixel_master", "crafting_queen"];

// Function to add a message to the chat
function addMessage(user, message, self = false) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    if (self) messageElement.classList.add("self");

    const profilePic = document.createElement("img");
    profilePic.src = self ? "pp03.png" : "pp01.png";
    profilePic.alt = "Profile Pic";
    profilePic.classList.add("profile-pic");

    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");

    const userName = document.createElement("div");
    userName.classList.add("user-name");
    userName.textContent = user;

    const messageText = document.createElement("p");
    messageText.textContent = message;

    messageContent.appendChild(userName);
    messageContent.appendChild(messageText);
    messageElement.appendChild(profilePic);
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to send a message
function sendMessage() {
    const message = chatInput.value;
    if (message.trim() !== "") {
        addMessage("You", message, true);
        chatInput.value = "";

        // Simulate a response from another user
        setTimeout(() => {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            const responses = ["That's cool!", "Nice idea!", "I agree!", "Let's build something!", "What do you think about the new update?"];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomUser, randomResponse);
        }, 1000); // Simulate a delay
    }
}