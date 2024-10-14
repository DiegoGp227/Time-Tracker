const sendButtomForm = document.getElementById("sendButtomPort");
let portObject;

async function getDatesForm(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const portName = document.getElementById("portName").value;
    const sport = document.getElementById("sport").value;
    const altitude = document.getElementById("altitude").value;
    const distance = document.getElementById("distance").value;
    const maximumInclination = document.getElementById("maximumInclination").value;
    const averageInclination = document.getElementById("averageInclination").value;
    const ubication = document.getElementById("ubication").value;

    // Crear el objeto de actividad
    portObject = {
        portName: portName,
        sport: sport,
        altitude: altitude,
        distance: distance,
        maximumInclination: maximumInclination,
        averageInclination: averageInclination,
        ubication: ubication,
    };
}

async function sendPort(portObject) {
    console.log(portObject)
    const response = await fetch("http://localhost:3000/api/port", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(portObject),
    });

    const data = await response.json();
    return data;
}
sendButtomForm.addEventListener("click", async  (event) => {
    getDatesForm(event);
    sendPort(portObject);
    console.log(portObject)
})