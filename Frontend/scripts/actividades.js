//expandable profile picture
function perfil() {
    const menuPerfil = document.getElementById("menuPerfil")
    if (menuPerfil.style.display === "flex") {
        menuPerfil.style.display = "none";
    } else {
        menuPerfil.style.display = "flex";
    }
}

function menuForm() {
    const menuForm = document.getElementById("menuForm")
    if (menuForm.style.display === "flex") {
        menuForm.style.display = "none";
    } else {
        menuForm.style.display = "flex";
    }
}

document.addEventListener("click", function (e) {
    let menuForm = document.getElementById("menuForm")
    if (menuPerfil.style.display === "flex" && !menuPerfil.contains(e.target) && !e.target.closest('button')) {
        menuPerfil.style.display = "none";
    }

    if (menuForm.style.display === "flex" && !menuForm.contains(e.target) && !e.target.closest('button'))
        menuForm.style.display = "none";
})

//Add new activity to the table

let rows = [];

function newRow() {
    // Obtener los valores del formulario
    const date = document.getElementById("date").value;
    const sport = document.getElementById("sport").value;
    const name = document.getElementById("name").value;
    const time = document.getElementById("time").value;
    const velocity = document.getElementById("velocity").value;
    const port = document.getElementById("port").value;

    // Agregar la nueva fila al array
    rows.push({
        date: date,
        sport: sport,
        name: name,
        time: time,
        velocity: velocity,
        port: port,
    });

    // Inyectar las filas en el contenedor
    injectrow();

    // Limpiar el formulario después de agregar la fila
    document.getElementById("formActivity").reset();
}

function injectrow() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; // Limpiar el contenido del tbody antes de inyectar nuevas filas

    // Recorrer las filas y añadirlas al tbody
    rows.forEach((row) => {
        const rowLet = document.createElement("tr");
        rowLet.innerHTML = `
            <td>${row.date}</td>
            <td>${row.sport}</td>
            <td>${row.name}</td>
            <td>${row.time}</td>
            <td>${row.velocity}</td>
            <td>${row.port}</td>
        `;
        tbody.appendChild(rowLet);
    });
}

// Ejecutar la función cuando la página cargue
window.onload = injectrow;

const form = document.getElementById('formActivity');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar la recarga de la página
    newRow();
});
