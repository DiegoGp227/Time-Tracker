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


// const sendButtomForm = document.getElementById("sendButtomForm");

// let activityObject = {};
// let distance = 12.5

// // function timeToHours(time) {
// //     const timeParts = time.split(":"); // Divide la cadena en partes
// //     const hours = parseInt(timeParts[0]) || 0; // Convierte a número o usa 0 si no es válido
// //     const minutes = parseInt(timeParts[1]) || 0; // Convierte a número o usa 0 si no es válido
// //     const seconds = parseInt(timeParts[2]) || 0; // Convierte a número o usa 0 si no es válido
    
// //     return hours + minutes / 60 + seconds / 3600; // Devuelve el tiempo en horas
// // }

// // function speedCalculation(distance,time) {
// //     return speed = distance/time;
// // }


// ////Obtiene los datos del form

// function getDatesForm(event) {
//     event.preventDefault();
//     const date = document.getElementById("date").value;
//     const sport = document.getElementById("sport").value;
//     const activityName = document.getElementById("activityName").value;
//     const time = document.getElementById("time").value;
//     const port = document.getElementById("port").value;
    
//     const speed = 23;
//     const distance = 10;

//     activityObject = {
//         userId:1,
//         sportId: sport,
//         portId: port,
//         activityDate: date,
//         activityTime: time,
//         averageSpeed : speed,
//         activityName: activityName
//     };
    
//     document.getElementById("formActivity").reset();
// }

// function sendFormActivities (activityObject) {
//     fetch("http://localhost:3000/activity", {
//         method:"post",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(activityObject)
//     })
// }

// sendButtomForm.addEventListener("click", (event) => {
//     getDatesForm(event);
//     // speedCalculation(distance,time)
//     sendFormActivities(activityObject)
// });

// Expandable profile picture
function perfil() {
    const menuPerfil = document.getElementById("menuPerfil");
    menuPerfil.style.display = (menuPerfil.style.display === "flex") ? "none" : "flex";
}

function menuForm() {
    const menuForm = document.getElementById("menuForm");
    menuForm.style.display = (menuForm.style.display === "flex") ? "none" : "flex";
}

document.addEventListener("click", function (e) {
    const menuPerfil = document.getElementById("menuPerfil");
    const menuForm = document.getElementById("menuForm");

    if (menuPerfil.style.display === "flex" && !menuPerfil.contains(e.target) && !e.target.closest('button')) {
        menuPerfil.style.display = "none";
    }
    
    if (menuForm.style.display === "flex" && !menuForm.contains(e.target) && !e.target.closest('button')) {
        menuForm.style.display = "none";
    }
});

const sendButtomForm = document.getElementById("sendButtomForm");

let distance = 12.5;

// Function to obtain the data from the form
function getDatesForm(event) {
    event.preventDefault();
    const date = document.getElementById("date").value;
    const sport = document.getElementById("sport").value;
    const activityName = document.getElementById("activityName").value; // corregido
    const time = document.getElementById("time").value; // Asegúrate que esto sea un string como "02:32:12"
    const port = document.getElementById("port").value;

    // Calcular la velocidad aquí
    const timeInHours = timeToHours(time); // Usa esta función para convertir el tiempo
    const averageSpeed = speedCalculation(distance, timeInHours); // Calcular la velocidad

    const activityObject = {
        userId: 1,
        sportId: sport,
        portId: port,
        activityDate: date,
        activityTime: time,
        averageSpeed: averageSpeed, // Se calcula aquí
        activityName: activityName
    };
    
    // Reiniciar el formulario
    document.getElementById("formActivity").reset();
    
    return activityObject; // Retornar el objeto para usarlo después
}

// Convierte el tiempo a horas
function timeToHours(time) {
    const timeParts = time.split(":");
    const hours = parseInt(timeParts[0]) || 0;
    const minutes = parseInt(timeParts[1]) || 0;
    const seconds = parseInt(timeParts[2]) || 0;

    return hours + minutes / 60 + seconds / 3600;
}

// Calcula la velocidad
function speedCalculation(distance, time) {
    return distance / time; // Calcula y retorna la velocidad
}

// Función para enviar actividades
function sendFormActivities(activityObject) {
    fetch("http://localhost:3000/api/activity", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(activityObject)
    })
    .then(response => response.json())  // Procesar la respuesta como JSON
    .then(data => console.log('Success:', data))  // Manejar la respuesta exitosa
    .catch((error) => console.error('Error:', error));  // Capturar errores
}


sendButtomForm.addEventListener("click", (event) => {
    const activityObject = getDatesForm(event); // Obtener el objeto aquí
    if (activityObject) { // Verifica que el objeto no esté vacío
        sendFormActivities(activityObject);
    }
});
