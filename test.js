// alert("Nazdar");
base();
var a = generatorA();
//var b = generatorB();
//var c = generatorC();
//var d = generatorD();

function generatorA(){
	x1 = 3;
	y1 = 3;
	x2 = 0;
	y2 = 0;
	
	x2 = Math.floor(Math.random() * 3);
	switch(x2){
  case 1:
    x2 = 1;
	y2 = 3;
    break;
  case 2:
    x2 = 4;
	y2 = 2;
    break;	
  case 3:
    x2 = 3;
	y2 = 4;
    break;
  default:
	x2 = 0;
	y2 = 0;
	}
}
function base(){

generatorA();
alert(y2);
}	

function generatorB(){
	x1 = 3;
	y1 = 3;
	x2 = 0;
	y2 = 0;
	
	
	x2 = Math.floor(Math.random() * 3) + 1;
	switch(x2){
  case 1:
    x2 = 1;
	y2 = 3;
    break;
  case 2:
    x2 = 4;
	y2 = 2;
    break;	
  case 3:
    x2 = 3;
	y2 = 4;
    break;
	default:
	x2 = 0;
	y2 = 0;
	}
}

function generatorC(){
	x1 = 3;
	y1 = 3;
	x2 = 0;
	y2 = 0;
	
	
	x2 = Math.floor(Math.random() * 3) + 1;
	switch(x2){
  case 1:
    x2 = 1;
	y2 = 3;
    break;
  case 2:
    x2 = 4;
	y2 = 2;
    break;	
  case 3:
    x2 = 3;
	y2 = 4;
    break;
	default:
	x2 = 0;
	y2 = 0;
	}
}

function generatorD(){
	x1 = 3;
	y1 = 3;
	x2 = 0;
	y2 = 0;
	
	x2 = Math.floor(Math.random() * 3) + 1;
	switch(x2){
  case 1:
    x2 = 1;
	y2 = 3;
    break;
  case 2:
    x2 = 4;
	y2 = 2;
    break;	
  case 3:
    x2 = 3;
	y2 = 4;
    break;
	default:
	x2 = 0;
	y2 = 0;
	}
}	
	
	
	/*
	if(x2 = 1){
		y2 = 3;
		return x2;
		return y2;
	}else{
	if(x2 = 2){
		x2 = 4;
		y2 = 2;
		return x2;
		return y2;
	}else{
	if(x2 = 3){
		y2 = 4;
		return x2;
		return y2;
	}else{
		return 0;
	}
	}
	}
}
*/
/*
function generatorB(){
	var b = [4, 3, x4, y4];
	x2 = Math.floor(Math.random() * 3);
	if(x4 = 1){
		y4 = 3;
	}
	if(x4 = 2){
		y4 = 1;
	}else{
		return 0;
	}
}
function generatorC(){
	var c = [2, 4, x6, y6];
	x6 = Math.floor(Math.random() * 3);
	if(x6 = 1){
		y6 = 3;
	}
	if(x6 = 2){
		y6 = 1;
	}
	if(x6 = 3){
		x6 = 4;
		y6 = 2;
	}else{
	return 0;
	}
}
function generatorD(){
	var d = [1, 3, x8, y8];
	x8 = Math.floor(Math.random() * 3);	
	if(x8 = 1){
		x8 = 4;
		y8 = 2;
		return x8;
		return y8;
	}
	if(x8 = 2){
		y8 = 1;
		return x8;
		return y8;
	}else{
		return 0;
	}
}
*/

