

let formularioRegistro = document.getElementById("register");
let inputRegistroUser = document.getElementById("userRegister")
let inputRegistroPass = document.getElementById("passRegister");
let formularioIngresar = document.getElementById("login");
let inputLoginUser = document.getElementById("user");
let inputLoginPass = document.getElementById("pass");
let divError = document.getElementById("error")
let nuevoUsuario = document.getElementById("nuevoUsuario");

nuevoUsuario.addEventListener("click", ()=>{
    
})


class Usuarios {
    constructor(usuario, contraseña){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}
let usuarios = [];

formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputRegistroPass != "" && inputRegistroUser != ""){
        let nuevoUsuario = new Usuarios (inputRegistroUser.value, inputRegistroPass.value);
        usuarios.push(nuevoUsuario);
        Swal.fire((`Usuario "${inputRegistroUser.value}" creado correctamente`));

    }
})


formularioIngresar.addEventListener("submit", (e) => {
    e.preventDefault();
    let us = inputLoginUser.value;
    let ps = inputLoginPass.value;
    error.innerHTML="";  
    for (let user of usuarios){
        if (us == user.usuario  && ps == user.contraseña){
            localStorage.setItem("usuario", user.usuario)
            window.location.href = "monitoreo.html";
        } else {
            error.innerHTML = "<p> Acceso incorrecto, intente nuevamente </p>"
            divError.append(error);
        }

    }

})