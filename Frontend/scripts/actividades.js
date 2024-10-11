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


const sendButtomForm = document.getElementById("sendButtomForm");

let datesObjet = {};

////Obtiene los datos del form
function getDatesForm(event) {
    
    event.preventDefault();
    const date = document.getElementById("date").value;
    const sport = document.getElementById("sport").value;
    const nameActivity = document.getElementById("nameActivity").value;
    const time = document.getElementById("time").value;
    const velocity = document.getElementById("velocity").value;
    const port = document.getElementById("port").value;
    
    activityObject = {
        date: date,
        sport: sport,
        nameActivity: nameActivity,
        time: time,
        velocity: velocity,
        port: port
    };

    document.getElementById("formActivity").reset();
}

sendButtomForm.addEventListener("click", (event) => {
    getDatesForm(event);
    
    fetch("http://localhost:3000/activity", {
        method:"post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(activityObject)
    })
});


// // Llamamos a la función para enviar la actividad
// sendActivity();

// console.log(jsonDataActivity);

// // Datos a enviar al servidor
// const data = {
//     key1: "valor1",
//     key2: "valor2"
// };

// // Función para enviar datos al servidor
// async function sendData() {
//     try {
//         const response = await fetch('http://localhost:3000/activity', { // URL del servidor
//             method: 'POST', // Tipo de solicitud
//             headers: {
//                 'Content-Type': 'application/json', // Tipo de contenido
//             },
//             body: JSON.stringify(data) // Convertir los datos a JSON
//         });

//         if (response.ok) {
//             const result = await response.json(); // Convertir la respuesta a JSON
//             console.log('Datos enviados:', result); // Mostrar resultado
//         } else {
//             console.error('Error al enviar los datos:', response.status); // Manejar errores
//         }
//     } catch (error) {
//         console.error('Error en la solicitud:', error); // Manejar errores de conexión
//     }
// }

// // Llamar a la función para enviar datos
// sendData();














// //Añadir acrividades a la tabla

// let rows = [];

// function newRow() {
//     // Obtener los valores del formulario
//     const date = document.getElementById("date").value;
//     const sport = document.getElementById("sport").value;
//     const nameActivity = document.getElementById("nameActivity").value;
//     const time = document.getElementById("time").value;
//     const velocity = document.getElementById("velocity").value;
//     const port = document.getElementById("port").value;

//     // Agregar la nueva fila al array
//     rows.push({
//         date: date,
//         sport: sport,
//         nameActivity: nameActivity,
//         time: time,
//         velocity: velocity,
//         port: port,
//     });

//     // Inyectar las filas en el contenedor
//     injectrow();

//     // Limpiar el formulario después de agregar la fila
//     document.getElementById("formActivity").reset();
// }


// // Llamamos a la función para enviar la actividad
// sendActivity();


// console.log(dataActivity)

// function injectrow() {
//     const tbody = document.getElementById("tbody");
//     tbody.innerHTML = ""; // Limpiar el contenido del tbody antes de inyectar nuevas filas

//     // Recorrer las filas y añadirlas al tbody
//     rows.forEach((row) => {
//         const rowLet = document.createElement("tr");
//         rowLet.innerHTML = `
//             <td>${row.date}</td>
//             <td>${row.sport}</td>
//             <td>${row.name}</td>
//             <td>${row.time}</td>
//             <td>${row.velocity}</td>
//             <td>${row.port}</td>
//         `;
//         tbody.appendChild(rowLet);
//     });
// }

// // Ejecutar la función cuando la página cargue
// window.onload = injectrow;

// const form = document.getElementById('formActivity');
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Evitar la recarga de la página
//     newRow();
// });
