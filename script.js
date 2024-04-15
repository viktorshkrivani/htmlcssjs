function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showDescription() {
    var description = document.getElementById("description");
    description.style.display = "block";
}

function hideDescription() {
    var description = document.getElementById("description");
    description.style.display = "none";
}