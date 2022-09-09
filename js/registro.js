class Jugadores{
    constructor(nombre,apellido,dni,puesto,altura,peso){
        this.nombre= nombre;
        this.apellido= apellido;
        this.dni= dni;
        this.puesto= puesto;
        this.altura= altura;
        this.peso= peso;
        this.minutos_acumulados=0;
    }
}

let plantel = []; 
let documentos = [];


let jugador1 = new Jugadores("ignacio", "lerena", 38054175, 4, 187, 115);
plantel.push(jugador1);
jugador2 = new Jugadores("Lucas", "Clarens", 35441839, 2, 180, 100);
plantel.push(jugador2);
jugador3 = new Jugadores("Joaco", "Moine", 40111222, 5, 190, 110);
plantel.push(jugador3);

for (let docs of plantel){
    documentos.push(docs.dni);
}



let nuevo_jugador = document.getElementById("formNuevoRegistro");
nuevo_jugador.addEventListener("submit", (e) => {
    e.preventDefault();
    let dni = parseInt(document.getElementById("dni_registro").value);
    let nombre = document.getElementById("nombre_registro").value;
    let apellido = document.getElementById("apellido_registro").value;
    let puesto = parseInt(document.getElementById("puesto_registro").value);
    let altura = parseInt(document.getElementById("altura_registro").value);
    let peso = parseInt(document.getElementById("peso_registro").value);

    let comprobacion = documentos.includes(dni);
    let divMensajeRegistrado = document.getElementById("divMensajeRegistrado");
    let mensajeRegistrado = document.createElement("p");

    if (comprobacion){
        mensajeRegistrado.innerHTML = `Usted ya esta registrado
                                    <button><a href="monitoreo.html">Regresar al inicio</a></button>`;
        divMensajeRegistrado.append(mensajeRegistrado);                            
    } else {
        let nuevo_registro = new Jugadores(nombre, apellido, dni, puesto, altura, peso);
        plantel.push(nuevo_registro);
        mensajeRegistrado.innerText = `Bienvenido al sistema ${nombre}. Ya sos oficialmente parte del plantel!`;
        divMensajeRegistrado.append(mensajeRegistrado);
    }
})