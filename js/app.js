
const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () =>{
    nav.classList.add("visible");
});

cerrarMenu.addEventListener("click", () =>{
    nav.classList.remove("visible");
});

const perfilEvelyn =document.querySelector("#perfilEvelyn");
const quienesSomos =document.querySelector("#quienesSomos");
const iconoQuienesSomos =document.querySelector("#iconoQuienesSomos")

quienesSomos.addEventListener("click", ()=>{
    const estilo = window.getComputedStyle(perfilEvelyn);
    if(estilo.display === "none" ){
        perfilEvelyn.classList.add("mostrarPerfil");
    }else{
        perfilEvelyn.classList.remove("mostrarPerfil");
    }    
});
document.addEventListener('click', (event)=>{
    if (event.target !== quienesSomos && !quienesSomos.contains(event.target)){
        perfilEvelyn.classList.remove("mostrarPerfil");  
    }
         
});

$(document).foundation()








