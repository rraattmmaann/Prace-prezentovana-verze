/* alert("Hello World!"); */


function Tjunction(){				//funkce pro jednotlivé křižovatky
  alert("křižovatka typu T");		// pravděpodobně zde budou další 
									//switche, které budou odkazovat
									//na specifické případy
}

function TjunctionSideA(){
  alert("Křižovatka typu T z boku");
  	
}

function Xjunction(){
  alert("Křižovatka typu X");
  	
}

function roundabout(){
  alert("Kruhový objezd");
  
}
function TjunctionSideB(){
	alert("Křižovatka typu T z boku druhého");
		
}
 var blem = choice();
function choice(){
      var choice = junctionChoice();

function junctionChoice(choice){     //výběr jednotlivého typu křižovatky
	var choice = 0;
	choice = Math.floor(Math.random() * 7) + 1;
	choice = 4; 					//POZOR!! kurvitko za účelem testování umístění vozidel na kruháku
	return choice;
}
/* alert(choice); */
switch(choice){
  case 1:
    XjunctionFree();
    break;
  case 2:
    XjunctionPreference();
    break;	
  case 3:
    TjunctionFree();
    break;
  case 4:
    TjunctionPreference();
    break;  
  case 5:
	roundabout();
	break;
  case 6;
	XjunctionPolice();
	break;
  case 7;
	TjunctionPolice();
	break;
}
 
}

var t1 = [
	[0,1,2],
	[2,0,1],
	[1,2,0],
];

 var t2 = [
	[0,1,1],
	[3,0,2],
	[1,2,0],
 ]

 var t3 = [
	[0,1,2],
	[1,0,1],
	[1,3,0],
 ]
 
 var x0 = [
	[0,1,2,3], //pozn 3.
	[3,0,1,2],
	[2,3,0,1], //pozn. 1.
	[1,2,4,0], //pozn. 3.
]

 var xpp1 = [
	[0,3,4,4],
	[3,0,2,3],
	[2,2,0,1],
	[1,1,1,0],
]

 var xp1 = [
	[0,1,2,2],
	[1,0,1,1],
	[4,4,0,3],
	[2,3,3,0],
]

 var xp2 = [
	[0,1,1,1],
	[4,0,3,4],
	[3,3,0,2],
	[1,2,2,0],
]

 var xp3 = [
	[0,3,4,4],
	[3,0,2,3],
	[2,2,0,1],
	[1,1,1,0],
]
 var xp4 = [
	[0,2,3,3],
	[2,0,1,2],
	[1,1,0,1],
	[3,4,4,0],
]

/*
 var xp3 = [
	[,,,],
	[,,,],
	[,,,],
	[,,,],
]
*/