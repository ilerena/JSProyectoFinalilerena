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

function ingreso (){
    let mensaje = document.getElementById("mensaje");
    let bienvenido = document.getElementById("dni_usuario");
    let bienvenido_num = parseInt(bienvenido.value);
    let comprobacion = documentos.includes(bienvenido_num);

    if (comprobacion) {
        function datos (usuario){
            return usuario.dni == bienvenido_num 
        }  
        let nodo = plantel.find (datos);

        let parrafo = document.createElement("p");
        parrafo.innerText = `Bienvenido al sistema ${nodo.nombre}
                            Debes realizar el monitoreo del ultimo partido`;
        mensaje.append(parrafo);
    } else {
        document.body.innerHTML =   `<div id="error">
                                    <h2> El usuario ${bienvenido.value} aún no esta registrado como jugador <h2>
                                    <p> Para poder realizar el monitoreo primero debe registrarse<p>
                                    <button><a href="registro.html">Registro</a></button>
                                    <button><a href="monitoreo.html">Regresar al inicio</a></button>
                                    <div>`
    }
    
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




///// BOUTIQUE /////
const articulos = [
    {id:1, nombre:"Short", precio:2500, img: "../img/boutique/short.jpg"},
    {id:2, nombre:"Camiseta", precio:4500, img: "../img/boutique/camiseta.jpg"},
    {id:3, nombre:"Medias", precio:1500, img: "../img/boutique/medias.jpg"},
    {id:4, nombre:"Casco", precio:2000, img:"../img/boutique/casco.jpg"},
    {id:5, nombre:"Protector", precio:1800, img: "../img/boutique/protector.jpg"},
    {id:6, nombre:"Cintas", precio:700, img: "../img/boutique/cintas.jpg"},
    {id:7, nombre:"Botines", precio:15000, img: "../img/boutique/botines.jpg"}
]

let contenedor_articulos = document.querySelector(".contenedor_articulos");
let contenedor_compra = document.querySelector(".contenedor_compra");
let listadoFavoritos = [];


document.addEventListener("DOMContentLoaded", function(){
    mostrarArticulos();
})

function mostrarArticulos() {
    articulos.forEach(function(articulo){
    const divArticulo = document.createElement("div");
    divArticulo.classList.add("card");

    const imagenArticulo = document.createElement("img");
    imagenArticulo.src = articulo.img;
    imagenArticulo.className = "imagen-articulo";        

    const tituloArticulo = document.createElement("h2");
    tituloArticulo.textContent = articulo.nombre;
    tituloArticulo.classList.add("titulo_articulo");

    const btn_agregar = document.createElement("button");
    btn_agregar.textContent = "Agregar al carrito";
    btn_agregar.classList.add("btn_agregar");

    btn_agregar.onclick = ()=> {comprar(articulo.id);}

    divArticulo.appendChild(imagenArticulo);
    divArticulo.appendChild(tituloArticulo);
    divArticulo.appendChild(btn_agregar);

    contenedor_articulos.appendChild(divArticulo);
    })
}

function comprar (id){
    const articuloComprado = articulos.find( 
        function(articulo){
        return articulo.id === id;
    });
    
    if (listadoFavoritos.includes(articuloComprado)){
        console.log("Ya incluiste este producto");
    } else {
    listadoFavoritos.push(articuloComprado);
    }
    mostrarArticulosComprados(listadoFavoritos);
}

function mostrarArticulosComprados(comprados){
        contenedor_compra.innerHTML = "";
        comprados.forEach(function(articulo){
        const divArticulo = document.createElement("div");
        divArticulo.classList.add("card");
    
        const imagenArticulo = document.createElement("img");
        imagenArticulo.src = articulo.img;
        imagenArticulo.className = "imagen-articulo";        
    
        const tituloArticulo = document.createElement("h2");
        tituloArticulo.textContent = articulo.nombre;
        tituloArticulo.classList.add("titulo_articulo");
    
        divArticulo.appendChild(imagenArticulo);
        divArticulo.appendChild(tituloArticulo);
    
        contenedor_compra.appendChild(divArticulo);
        })
}

