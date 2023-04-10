document.getElementById("b_menu").addEventListener("click", mostrar_menu);

document.getElementById("back-menu").addEventListener("click", ocultar_menu);

nav = document.getElementsByClassName("navegacion");
background_menu = document.getElementById("back-menu");

function mostrar_menu() {
    navegacion.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu() {
    navegacion.style.right = "-500px";
    background_menu.style.display = "none";
    
}

