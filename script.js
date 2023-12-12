function drop() {
    var drop = document.getElementById("dropthis");
    if (drop.style.display === "none" || drop.style.display === "") {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";
    }
}


//modal box javascript here

var modal = document.getElementById("myModal");
var btn = document.getElementById("signupbtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
 modal.style.display = "block";
}

span.onclick = function() {
 modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
    modal.style.display = "none";
 }
}