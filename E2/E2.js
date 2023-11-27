
function Factura() {
    var nomPaciente = document.querySelector("#nm-p").value;
    var costoConsulta = parseFloat(document.querySelector("#cost-c").value);
    var costoHospitalizacion = parseFloat(document.querySelector("#cost-d").value);
    var diasHospitalizado = parseInt(document.querySelector("#dias-h").value);
    var costosVarios = parseFloat(document.querySelector("#cost-v").value);
    var costoMedicamentos = parseFloat(document.querySelector("#cost-m").value);
    var deducciones = parseFloat(document.querySelector("#deduc").value);

    var gastoTotal = costoConsulta + (costoHospitalizacion * diasHospitalizado) + costosVarios + costoMedicamentos;
    var gTDeducciones = gastoTotal - deducciones;

    console.log(gastoTotal);
    console.log(gTDeducciones);

    var table = document.createElement("table");
    table.setAttribute("border", "1");

    var thead = table.insertRow();
    thead.insertCell(0).textContent = null;
    thead.insertCell(1).textContent = "Consulta";
    thead.insertCell(2).textContent = "Hospitalización";
    thead.insertCell(3).textContent = "Varios";
    thead.insertCell(4).textContent = "Medicamentos";
    thead.insertCell(5).textContent = "Deducciones";
    thead.insertCell(6).textContent = "Gasto Total";
    thead.insertCell(7).textContent = " Total \n (despues de Deducciones)";

    var fila = table.insertRow();
    fila.insertCell(0).textContent = "Costo";
    fila.insertCell(1).textContent = costoConsulta;
    fila.insertCell(2).textContent = costoHospitalizacion;
    fila.insertCell(3).textContent = costosVarios;
    fila.insertCell(4).textContent = costoMedicamentos;
    fila.insertCell(5).textContent = deducciones;
    fila.insertCell(6).textContent = null;
    fila.insertCell(7).textContent = null;

    var fila = table.insertRow();
    fila.insertCell(0).textContent = "Dias";
    fila.insertCell(1).textContent = null;
    fila.insertCell(2).textContent = diasHospitalizado;
    fila.insertCell(3).textContent = null;
    fila.insertCell(4).textContent = null;
    fila.insertCell(5).textContent = null;
    fila.insertCell(6).textContent = null;
    fila.insertCell(7).textContent = null;

    var fila = table.insertRow();
    fila.insertCell(0).textContent = "Total \n (despues de Deducciones)";
    fila.insertCell(1).textContent = null;
    fila.insertCell(2).textContent = null;
    fila.insertCell(3).textContent = null;
    fila.insertCell(4).textContent = null;
    fila.insertCell(5).textContent = null;
    fila.insertCell(6).textContent = gastoTotal;
    fila.insertCell(7).textContent = gTDeducciones;

    var paciente = document.createElement("p");
    paciente.className = "paciente"
    paciente.textContent = "Nombre del paciente: " + nomPaciente;

    document.body.appendChild(paciente);
    document.body.appendChild(table);

    document.querySelector('.cont_p').style.display = "none";
    document.querySelector('body').style.alignItems = "normal";
}
