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
/*  
let ingresoUsuario = document.getElementById("botonIngreso");
ingresoUsuario.addEventListener("click", ingreso);
function ingreso (){
    let mensaje = document.getElementById("mensaje");
    let bienvenido = document.getElementById("dni_usuario_ingreso");
    let comprobacion = documentos.includes(parseInt(bienvenido.value));

    if (comprobacion) {
        function datos (usuario){
            return usuario.dni == bienvenido.value 
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
*/

let nuevo_jugador = document.getElementById("submitRegistro");
nuevo_jugador.addEventListener("click", registro);
function registro (){
    let dni = document.getElementById("dni_registro");
    let nombre = document.getElementById("nombre_registro");
    let apellido = document.getElementById("apellido_registro");
    let puesto = document.getElementById("puesto_registro");
    let altura = document.getElementById("altura_registro");
    let peso = document.getElementById("peso_registro");

    let nuevo_registro = new Jugadores(nombre, apellido, dni, puesto, altura, peso);
    plantel.push(nuevo_registro);
    console.log(`Bienvenido al sistema ${nombre}. Ya sos oficialmente parte del plantel!`);
    
}
console.log(plantel);

/*

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
*/

/*

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

*/