if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

function showNotification(message) {
  if (Notification.permission === "granted") {
    new Notification("New Message", {
      body: message,
      icon: "icon.png"
    });
  }
}