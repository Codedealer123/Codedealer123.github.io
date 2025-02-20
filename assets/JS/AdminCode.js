document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") { 
        document.getElementById("myLink").href = "/home/Admin";
        console.log("Admin Access Granted!"); // Debugging log
    }
});