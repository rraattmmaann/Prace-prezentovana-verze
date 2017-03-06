// alert("Nazdar");
// generator of car positioning and vectors
base();

function base(){
generatorA();
generatorB();
generatorC();
generatorD();
}



function generatorA(){
	x1 = 3;
	y1 = 1;
	x2 = 0;
	y2 = 0;
	
	x2 = Math.floor(Math.random() * 4);
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
	var a1 = (y2 - y1);
	var	b1 = (x2 - x1);
	//c1 = a1 * x1 + b1 * y1
	
	console.log(a1, b1);
	return [a1, b1];
	}

function generatorB(){
	x1 = 4;
	y1 = 3;
	x2 = 0;
	y2 = 0;
	
	
	x2 = Math.floor(Math.random() * 4);
	switch(x2){
  case 1:
    x2 = 1;
	y2 = 3;
    break;
  case 2:
    x2 = 2;
	y2 = 1;
    break;	
  case 3:
    x2 = 3;
	y2 = 4;
    break;
	default:
	x2 = 0;
	y2 = 0;
	}
	var a2 = y2 - y1;
	var b2 = x2 - x1;
	//c1 = a1 * x1 + b1 * y1
	
	console.log(a2, b2);
	return [a2, b2];
}

function generatorC(){
	x1 = 2;
	y1 = 4;
	x2 = 0;
	y2 = 0;
	
	
	x2 = Math.floor(Math.random() * 4);
	switch(x2){
  case 1:
    x2 = 1;
	y2 = 3;
    break;
  case 2:
    x2 = 2;
	y2 = 1;
    break;	
  case 3:
    x2 = 4;
	y2 = 2;
    break;
	default:
	x2 = 0;
	y2 = 0;
	}
	var a3 = y2 - y1;
	var b3 = x2 - x1;
	//c1 = a1 * x1 + b1 * y1
	console.log(a3, b3);
	return [a3, b3];
}

function generatorD(){
	x1 = 1;
	y1 = 2;
	x2 = 0;
	y2 = 0;
	
	x2 = Math.floor(Math.random() * 4);
	switch(x2){
  case 1:
    x2 = 2;
	y2 = 1;
    break;
  case 2:
    x2 = 3;
	y2 = 4;
    break;	
  case 3:
    x2 = 4;
	y2 = 2;
    break;
	default:
	x2 = 0;
	y2 = 0;
	}
	var a4 = y2 - y1;
	var b4 = x2 - x1;
	//c1 = a1 * x1 + b1 * y1
	console.log(a4, b4);
	return [a4, b4];
}	



