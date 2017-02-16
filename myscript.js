/* alert("Hello World!"); */


function Tjunction(){				//funkce pro jednotlivé křižovatky
  alert("křižovatka typu T");		// pravděpodobně zde budou další 
	draw();								//switche, které budou odkazovat
									//na specifické případy
}

function TjunctionSide(){
  alert("Křižovatka typu T z boku");
  draw();	
}

function Xjunction(){
  alert("Křižovatka typu X");
  draw();	
}

function roundabout(){
  alert("Kruhový objezd");
  draw();
  /*		var a = 0;
		var positions = [];
  for(i = 0; i < 2; i++){
		a = Math.floor(Math.random() * 2) + 1;
		if(a = 1)
			//situace s nějakym autem - vymyslet
		
		else
	*/		
}
function draw(){
		 var canvas = document.getElementById("background");
		 var ctx = canvas.getContext("2d");
		  ctx.fillStyle = 'rgb(200,0,0)'
		  ctx.fillRect(10, 10, 55, 50);
        }
      
		//vykreslí pozadí a auto (auta)

 var blem = choice();
function choice(){
      var choice = junctionChoice();

function junctionChoice(choice){     //výběr jednotlivého typu křižovatky
	var choice = 0;
	choice = Math.floor(Math.random() * 4) + 1;
	return choice;
}
/* alert(choice); */
switch(choice){
  case 1:
    Tjunction();
    break;
  case 2:
    TjunctionSide();
    break;
  case 3:
    Xjunction();
    break;
  case 4:
    roundabout();
    break;    
}
 
}