const apiKey = "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"; // ⚠️ Don't use this in production
const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message to log
  addMessage("You", message);
  userInput.value = "";

  // Call OpenAI API
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful AI help desk assistant." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content.trim();
  addMessage("AI", reply);
}

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}
