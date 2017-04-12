img("images/autoC0.jpg",338,261 );
function img(src,width,height){
var img = document.createElement("img");
img.src = src;
img.width = width;
img.height = height;

document.body.appendChild(img);
}
