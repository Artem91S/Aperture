// const image_count = 4;
// const interval = 2000; //пауза
// const time_out = 15; //скорость смены картинки
// let i = 4;
// let timeout;
// let opacity = 100;
// function change_image() {
// opacity--;
// let j = i + 1;
// let current_image = 'img_' + i;
// if (i == image_count) j = 1;
// const next_image = 'img_' + j;
// document.getElementById(current_image).style.opacity=opacity/100;
// document.getElementById(current_image).style.filter='alpha(opacity='+opacity+')';
// document.getElementById(next_image).style.opacity= (100-opacity)/100;
// document.getElementById(next_image).style.filter=' alpha(opacity='+(100-opacity)+')';
// timeout = setTimeout("change_image()", time_out);
// if (opacity==1) {
// opacity = 100;
// clearTimeout(timeout);
// i++;
// if (i>image_count) i=1;
// timeout = setTimeout("change_image()", interval);
// }
// }
// change_image()

