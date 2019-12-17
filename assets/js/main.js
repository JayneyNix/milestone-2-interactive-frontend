var modal = document.getElementById("serviceModal");
var btn = document.getElementById("services");
var span = document.getElementsByClassName("close")[0];
var footer = document.getElementsByClassName("btnclose")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

footer.onclick = function() {
    modal.style.display = "none";
}

