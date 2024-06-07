import consumer from "channels/consumer";

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (data.content) {
      const messagesTable = document.getElementById("messages-table");
      const messageDiv = document.createElement("div");
      messageDiv.className = "message";

      const messageUserDiv = document.createElement("div");
      messageUserDiv.className = "message-user";
      messageUserDiv.textContent = data.username + ":";

      const messageContentDiv = document.createElement("div");
      messageContentDiv.className = "message-content";
      messageContentDiv.textContent = data.content;

      messageDiv.appendChild(messageUserDiv);
      messageDiv.appendChild(messageContentDiv);
      messagesTable.appendChild(messageDiv);
    }
  },
});
