document.addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    
    let cursor = document.createElement("div");
    cursor.classList.add("cursor-effect");
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 500);
});
