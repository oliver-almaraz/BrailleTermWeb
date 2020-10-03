document.addEventListener("keyup", function(event) {
    document.getElementById("output").innerHTML = event.key.toLowerCase();
});