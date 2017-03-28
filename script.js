

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
delete carChoice[a];
console.log(carChoice);
delete carChoice[first[0]];
delete carChoice[first[1]];
console.log("jako další může jet auto z řádku", carChoice);
order.push(a);
console.log("postupně pojedou", order);
/*
while(carchoice != undefined){
    
} 
*/  
}

XFGenerator();
