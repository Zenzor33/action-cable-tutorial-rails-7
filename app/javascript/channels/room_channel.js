import consumer from "channels/consumer";

function scrollToBottom() {
  const messagesTableNew = document.getElementById("messages");
  messagesTableNew.scrollTop = messagesTableNew.scrollHeight;
}

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (data.message) {
      console.log(data.message);
      const messagesTable = document.getElementById("messages-table");
      // const messageDiv = document.createElement("div");
      // messageDiv.className = "message";
      // messageDiv.innerHTML = data.message;
      // const messageDiv = document.createElement("div");
      // messageDiv.className = "message";

      // const messageUserDiv = document.createElement("div");
      // messageUserDiv.className = "message-user";
      // messageUserDiv.textContent = data.username + ":";

      // const messageContentDiv = document.createElement("div");
      // messageContentDiv.className = "message-content";
      // messageContentDiv.textContent = data.message;

      // messageDiv.appendChild(messageUserDiv);
      // messageDiv.appendChild(messageContentDiv);
      // messagesTable.appendChild(messageDiv);

      messagesTable.insertAdjacentHTML("beforeend", data.message);

      scrollToBottom();
    }
  },
});

document.addEventListener("turbo:load", () => {
  const messageForm = document.getElementById("message_form");
  const messageContent = document.getElementById("message_content");

  scrollToBottom();

  messageContent.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      messageForm.requestSubmit();
    }
  });
});
