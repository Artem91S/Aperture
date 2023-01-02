const images = document.querySelectorAll(".slider");
let counter = 1;
let timerId =setInterval(showPhoto ,3000)
   function showPhoto(){
    images.forEach( elem => elem.classList.remove("show"));
    images[counter].classList.add("show");
    if(counter === images.length-1)counter = 0;
    else counter++; 
}