function perfil() {
    const menuPerfil = document.getElementById("menuPerfil")
    if (menuPerfil.style.display === "flex") {
        menuPerfil.style.display = "none";
    } else {
        menuPerfil.style.display = "flex";
    }
}



document.addEventListener("click", function (e) {
    if (menuPerfil.style.display === "flex" && !menuPerfil.contains(e.target) && !e.target.closest('button')) {
        menuPerfil.style.display = "none";
    }
})
