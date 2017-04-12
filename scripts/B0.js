img("images/autoB0.jpg",493,305 );
function img(src,width,height){
var img = document.createElement("img");
img.src = src;
img.width = width;
img.height = height;

document.body.appendChild(img);
}