
const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () =>{
    nav.classList.add("visible");
});

cerrarMenu.addEventListener("click", () =>{
    nav.classList.remove("visible");
});

const perfilEvelyn =document.querySelector("#perfilEvelyn")
const quienesSomos =document.querySelector("#quienesSomos");

quienesSomos.addEventListener("click", ()=>{
    perfilEvelyn.classList.add("mostrarPerfil");
});
document.addEventListener('click', (event)=>{
    if (event.target !== quienesSomos)
        perfilEvelyn.classList.remove("mostrarPerfil");   
});

$(document).foundation()








