
let monitoreo_partido = document.getElementById("submitMonitoreo");
monitoreo_partido.addEventListener("click", monitoreo);
function monitoreo (){
    let mensajeRegistro = document.getElementById("mensajeRegistro");
    let ultimo_partido = document.getElementById("jugo");
    if (ultimo_partido.value == "si"){
    let minutos_ultimo_partido = document.getElementById("minutosjugados");
        if (minutos_ultimo_partido.value < 50){
            let parrafo = document.createElement("p");
        parrafo.innerText = `Puede entrar normalmente!`;
        mensajeRegistro.append(parrafo);
        } else{
            let parrafo = document.createElement("p");
        parrafo.innerText = `Debes hacer recuperacion en hielo antes de la practica del lunes`;
        mensajeRegistro.append(parrafo);
        }
    } else {
    let lesion = document.getElementById("lesion");
        if (lesion.value == "si"){
            let parrafo = document.createElement("p");
            parrafo.innerText = `Continua con tu recuperación !`;
            mensajeRegistro.append(parrafo);
        }  else {
            let parrafo = document.createElement("p");
            parrafo.innerText = `Te esperamos en practica!`;
            mensajeRegistro.append(parrafo);
        }
    }
}
