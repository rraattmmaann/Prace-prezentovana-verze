img("images/autoD2.jpg",380,230 );
function img(src,width,height){
var img = document.createElement("img");
img.src = src;
img.width = width;
img.height = height;

document.body.appendChild(img);
}