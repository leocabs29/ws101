function drop() {
    var drop = document.getElementById("dropthis");
    if (drop.style.display === "none" || drop.style.display === "") {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";
    }
}
