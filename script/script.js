const images = document.querySelectorAll(".slide");
let counter = 1;
let timerId =setInterval(showPhoto ,3000)
   function showPhoto(){
    images.forEach( elem => elem.classList.remove("show"));
    images[counter].classList.add("show");
    if(counter === images.length-1)counter = 0;
    else counter++; 
}
const btn = document.querySelector('.navigat__btn');
  const menu = document.querySelector('.conteiner__menu');
  const lines =document.querySelector('.lines');
  const crossLines=  document.querySelector('.cross-lines'); 
  btn.addEventListener('click', ()=>{
      menu.classList.toggle('active-menu');
      lines.classList.toggle('active-menu');
      crossLines.classList.toggle('active-menu');
  })