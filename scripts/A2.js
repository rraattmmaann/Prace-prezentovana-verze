img("images/autoA2.jpg",336,338 );
function img(src,width,height){
var img = document.createElement("img");
img.src = src;
img.width = width;
img.height = height;

document.body.appendChild(img);
}