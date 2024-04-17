//------------------Slider o carrusel de imagenes videos instagram----------------
let videos = document.querySelector(".videos");
    
    let totalVideos = videos.querySelectorAll("blockquote");
    let index2 = 1;

    setInterval(function () {
        let porcentage = index2 * - 100;
        videos.style.transform = "translateX("+ porcentage + "%)";
        
        index2 ++;
        if(index2 > (totalVideos.length-1)){
            index2 = 0;        
        }    

    }, 3000);

   