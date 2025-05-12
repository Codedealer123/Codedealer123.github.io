function sendMessage() {
  const msg = document.getElementById("chatInput").value;
  db.collection("messages").add({
    sender: auth.currentUser.email,
    message: msg,
    timestamp: Date.now()
  });
}

db.collection("messages").orderBy("timestamp").onSnapshot(snapshot => {
  const chat = document.getElementById("chatMessages");
  chat.innerHTML = "";
  snapshot.forEach(doc => {
    const div = document.createElement("div");
    div.className = "chat-message";
    div.innerText = doc.data().sender + ": " + doc.data().message;
    chat.appendChild(div);
  });
});