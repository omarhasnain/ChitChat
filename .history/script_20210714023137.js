var settingsmenu = document.querySelector(".dropdown");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("dropdown-height");
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
}