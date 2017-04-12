var x = 0;
var y = 0;
var tryIt = 0;
var carChoice = [];
//var order = [];

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
    if( first[0] == 5){
        XFGenerator();
        return;
    }
console.log(b,a);           //a = y; b = x
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
console.log("jako další může jet auto z řádku", carChoice);
order.push(a);
console.log("postupně pojedou", order);
//return carChoice;
return carChoice;
}


function nextOne(order, carChoice){
    this.order = order;
    this.carChoice = carChoice;
    console.log(carChoice);
    var wTry = this.carChoice.length;
    console.log(wTry);
    var q = Math.floor(Math.random()*4);
    var w = Math.floor(Math.random()*wTry);
    var nextCar = tableXfree[q][w];
    console.log(q, w);
    console.log(nextCar);
    console.log(this.order);

   
   
   
   
   
   
    if(this.order[this.order.length-1] == w){
        nextOne();
    }
   
    var lastOne = order[order.length-1];


    console.log(q, w);
  
    console.log(lastOne);

}    

//XFGenerator();

nextOne(XFGenerator());