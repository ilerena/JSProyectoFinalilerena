//// BOUTIQUE /////
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
