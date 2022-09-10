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
let carrito = [];


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

    const precioArticulo = document.createElement("h3");
    precioArticulo.textContent = `$${articulo.precio}`;
    precioArticulo.classList.add("precio_articulo");

    const btn_agregar = document.createElement("button");
    btn_agregar.textContent = "Agregar al carrito";
    btn_agregar.classList.add("btn_agregar");

    btn_agregar.onclick = ()=> {comprar(articulo)};

    divArticulo.appendChild(imagenArticulo);
    divArticulo.appendChild(tituloArticulo);
    divArticulo.appendChild(precioArticulo);
    divArticulo.appendChild(btn_agregar);

    contenedor_articulos.appendChild(divArticulo);
    })
}

function comprar (articulo){
    let name = articulo.nombre;
    let price = articulo.precio;
    let image = articulo.img;
    let ID = articulo.id;
    let comprado ={
        id : ID,
        nombre: name,
        precio: price,
        imagen: image,
        cantidad: 1
    }

    let carritoIds = [];
    for (ID of carrito){
        carritoIds.push(ID.id);
    }

    if (carritoIds.includes(comprado.id)){
        console.log("ya agrego ese producto");
    } else {
        carrito.push(comprado);
    }
    let carrito_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carrito_JSON);

    mostrarCarrito ();
}


function mostrarCarrito (){
    let carrito = localStorage.getItem("carrito");
    carrito = JSON.parse(carrito);
    let fila = document.createElement("tr");
    
    
    for (producto of carrito){
        fila.innerHTML = `<td><img src="${producto.imagen}"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td><button class="btn-danger borrar_elemento">Borrar</button></td>`
        let tabla = document.getElementById("tbody");
        tabla.append(fila);

        let botones_borrar = document.querySelectorAll(".borrar_elemento");
        for (let boton of botones_borrar){
            boton.addEventListener("click", (e)=>{
                e.target.parentNode.parentNode.remove();
            })
        }
    }
}

