

var tableXfree = [
    [[5,10],[10,10],[1,10],[1,2]],
    [[2,3],[5,10],[10,10],[2,10]],
    [[3,10],[3,0],[5,10],[10,10]],
    [[10,10],[0,10],[0,1],[5,10]],
]

var tableTfree = [
    [[0],[10],[2]],
    [[3],[0],[10]],
    [[10],[1],[0]],
]

function XFGenerator(){
    var carChoice = [0,1,2,3];
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    var first = tableXfree[a][b];
    var order = [];
    if( first[0] == 10 || first[0] == 5){
        XFGenerator();
        return;
    }
console.log(b,a);           //a = y; b = x
console.log("pole, které pojede jako první", first);
var index1 = carChoice.indexOf(a);
carChoice.splice(index1, 1);
var index2 = carChoice.indexOf(first[0]);
carChoice.splice(index2, 1);
var index3 = carChoice.indexOf(first[1]);
carChoice.splice(index3,1);
console.log("jako další může jet auto z řádku", carChoice);
order.push(a);
console.log("postupně pojedou", order);
return carChoice;
}
function tryThat(){
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 4);
    var tryIt = tableXfree[y][x];
      console.log(x, y);
      console.log(tryIt);

        
}
var carChoice = [];
XFGenerator();
    var x = 0;
    var y = 0;
tryThat();

    if(!carChoice.includes(y)){
       tryThat(); 
    }
    console.log(y);