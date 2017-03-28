

var tableXfree = [
    [[0,10],[10,10],[2,10],[2,3]],
    [[3,4],[0,10],[10,10],[3,10]],
    [[4,10],[4,1],[0,10],[10,10]],
    [[10,10],[1,10],[1,2],[0,10]],
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
    if( first == 10 || first == 0){
        XFGenerator();
        return;
    }
console.log(a,b);
console.log(first); 
delete carChoice[b];
console.log(carChoice);
delete carChoice[first[0]];
delete carChoice[first[1]];
console.log(carChoice);
order.push(b);
console.log(order);
/*
while(carchoice != undefined){
    
} 
*/  
}

XFGenerator();
