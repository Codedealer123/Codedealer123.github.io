function addContact() {
  const email = document.getElementById("newContactEmail").value;
  const userRef = db.collection("users").doc(auth.currentUser.uid);
  userRef.set({ contacts: firebase.firestore.FieldValue.arrayUnion(email) }, { merge: true });
}

function loadContacts() {
  const list = document.getElementById("contactsList");
  db.collection("users").doc(auth.currentUser.uid).onSnapshot(doc => {
    list.innerHTML = "";
    if (doc.exists && doc.data().contacts) {
      doc.data().contacts.forEach(email => {
        const li = document.createElement("li");
        li.innerText = email;
        list.appendChild(li);
      });
    }
  });
}
auth.onAuthStateChanged(user => {
  if (user) loadContacts();
});