var tableXfree = [
    [[5,10],[10,10],[1,10],[1,2]],
    [[2,3],[5,10],[10,10],[2,10]],
    [[3,10],[3,0],[5,10],[10,10]],
    [[10,10],[0,10],[0,1],[5,10]],
]
var carChoice = XFGenerator();
nextOne(carChoice);



function XFGenerator(){
    var carChoice = [0,1,2,3];
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    var first = tableXfree[a][b];
    console.log(b,a);
    var order = [];
    if( first[0] == 5){
        console.log("returned");
        XFGenerator();
        //return;
    }else{
        
    }
    console.log("pole, které pojede jako první", first);
var index1 = a;
carChoice.splice(index1, 1);
var index2 = first[0];
if(index2 !== 10)
carChoice.splice(index2, 1);
var index3 = first[1];
if(index3 !== 10){
carChoice.splice(index3,1);
}
    console.log("může jet jako další řádek", carChoice);
    return carChoice;
}

function nextOne(carChoice){
    carChoice1 = carChoice;
    console.log(carChoice1);
    /*
    var r1 = Math.floor(Math.random()*carChoice.length)
    var r2 = Math.floor(Math.random()*4);
    var r1 = tableXfree[r2][r1][0];
    console.log(r1, r2);
    */
}


//XFGenerator();
//while(carChoice !== undefined){
    
//}
