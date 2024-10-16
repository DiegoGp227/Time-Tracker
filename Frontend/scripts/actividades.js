//// Maneja el cerrar y abrir los menu expandibles
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


//// Agrega rows al la tabla de actividades
var dataTable;
// llama las actividades del backend 
function getDataTable() {
    fetch("http://localhost:3000/api/activity", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            dataTable = data;
            addRowsTable(dataTable);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}
// Añade la informacion que se trajo a la tabla
function addRowsTable(dataTable) {
    tbody.innerHTML = "";

    dataTable.forEach(item => {
        tbody.innerHTML += `
      <tr>
          <td>${item.sportId}</td>
          <td>${item.port_id}</td>
          <td>${item.activity_date}</td>
          <td>${item.activity_time}</td>
          <td>${item.average_speed}</td>
          <td>${item.activity_name}</td>
      </tr>
    `;
    });
}
// Establece que al recargar la pagina llame las funciones anteriores para agregar las actividades a la tabla
document.addEventListener("DOMContentLoaded", function () {
    getDataTable();
});


//// Obtiene los datos del formulario, opera la velocidad y crea el JSON
function getDatesForm(event) {
    event.preventDefault();
    const date = document.getElementById("date").value;
    const sport = document.getElementById("sport").value;
    const activityName = document.getElementById("activityName").value; // corregido
    const time = document.getElementById("time").value; // Asegúrate que esto sea un string como "02:32:12"
    const port = document.getElementById("port").value;

    // Trae la distancia del puerto
    fetch(`http://localhost:3000/api/passes/${port}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            const distance = data;
            console.log(distance.distance)

            // Calcular la velocidad promedio
            const hours = timeToHours(time);
            const averageSpeed = speedCalculation(distance.distance, hours);

            // Crea el objeto JSON para enviar
            const activityObject = {
                userId: 1,
                sportId: sport,
                portId: port,
                activityDate: date,
                activityTime: time,
                averageSpeed: averageSpeed,
                activityName: activityName
            };

            // Reiniciar el formulario
            document.getElementById("formActivity").reset();

            // Retornar el objeto para usarlo después
            sendFormActivities(activityObject);
            console.log(activityObject);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

// Envía el JSON al servidor para que se procese
function sendFormActivities(activityObject) {
    fetch("http://localhost:3000/api/activity", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(activityObject)
    })
        .then(response => response.json()) 
        .then(data => console.log('Success:', data))  
        .catch((error) => console.error('Error:', error)); 
}

// Trae el boton 
const sendButtonForm = document.getElementById("sendButtomForm");

// Maneja el click del boton para captar, operar y enviar los datos del form
sendButtonForm.addEventListener("click", (event) => {
    getDatesForm(event); 
});
