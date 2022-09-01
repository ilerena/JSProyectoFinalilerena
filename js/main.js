class Jugadores{
    constructor(nombre,apellido,dni,puesto,altura,peso){
        this.nombre= nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.puesto=puesto;
        this.altura=altura;
        this.peso=peso;
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


function registro (){
    console.log("Debe registrarse como nuevo jugador");
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let dni = prompt("Ingrese su DNI");
    let puesto = parseInt(prompt("Ingrese su puesto (numero)"));
    let altura = parseInt(prompt("Ingrese su altura en cm"));
    let peso = parseInt(prompt("Ingrese su peso"));
    let nuevo_registro = new Jugadores(nombre, apellido, dni, puesto, altura, peso);
    plantel.push(nuevo_registro);
    console.log(`Bienvenido ${nombre}`);
    
}

function monitoreo (){
    let ultimo_partido = prompt("¿Jugaste el sabado? si o no");
    if (ultimo_partido == "si"){
    let minutos_ultimo_partido = parseInt(prompt("¿Cuantos Minutos jugaste el ultimo partido?"));
        if (minutos_ultimo_partido < 50){
            console.log("Puede entrenar normalmente!")
        } else{
            console.log("Debes hacer recuperacion en hielo antes de la practica del lunes");
        }
    } else {
    let lesion = prompt("¿Estuviste lesionado?");
        if (lesion == "si"){
        console.log("Continua con tu recuperación!");
        }  else {
        console.log("Te esperamos en practica!");
        }
    }
}


let bienvenido = prompt("Bienvenido, ingrese su dni");

function login (documento){
    return documento.dni == bienvenido; 
}

let nodo = plantel.find(login);

    
if (plantel.find(login)){    
    console.log("Bienvenido ",nodo.nombre,"! Debes realizar al monitoreo del ultimo partido!");
    monitoreo();
} else {
    registro();
    monitoreo();
}


let duda = prompt("Tenes Alguna duda?");
if (duda == "no"){
    console.log("Nos vemos en practica!!");

} else {
    console.log("Comunicate a la brevedad con alguno de los entrenadores");
}