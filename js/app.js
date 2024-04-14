//-----------------poner visible y esconder el menu---------------
const nav = document.querySelector("#nav");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () =>{
    nav.classList.add("visible");
   
});

cerrarMenu.addEventListener("click", () =>{
    nav.classList.remove("visible");
});
document.addEventListener('click', (event)=>{
    
    if (event.target !== abrirMenu && !abrirMenu.contains(event.target)){
        nav.classList.remove("visible");  
    }         
});
//-----------------poner visible la tarjeta de presentacion
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

//-------------ocultar la tarjeta de presentacion cuando da clic en cualquier parte de la pantalla excepto en el boton para evitar el error de no cerrar ni abrir
document.addEventListener('click', (event)=>{
    if (event.target !== quienesSomos && !quienesSomos.contains(event.target)){
        perfilEvelyn.classList.remove("mostrarPerfil");  
    }         
});
//------------------Slider o carrusel de imagenes----------------
 let banner = document.querySelector(".banner");
 let images = banner.querySelectorAll("img");
 let index = 1;

 setInterval(function () {
    let porcentage = index * -100;
    banner.style.transform = "translateX("+ porcentage + "%)";
   
    index++;
    if(index > (images.length-1)){
        index = 0;        
    }    
 }, 3000);














