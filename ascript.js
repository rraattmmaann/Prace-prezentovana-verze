var tableXfree = [
    [[5,10],[10,10],[1,10],[1,2]],
    [[2,3],[5,10],[10,10],[2,10]],
    [[3,10],[3,0],[5,10],[10,10]],
    [[10,10],[0,10],[0,1],[5,10]],
]
var base = XFGenerator();
secondOne(base);



function XFGenerator(){
    var carChoice = [0,1,2,3];
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    var first = tableXfree[a][b];
    console.log(b,a);
    var order = [];
    if( first[0] == 5){
        return XFGenerator();
    }else{
      
    }
    console.log("pole, které pojede jako první", first); 
    //zde se vyřadí auta, pro ktará nemá smysl průjezd po průjezdu 
    //auta vybraného
    var index1 = a;
    carChoice.splice(index1, 1);
    var i2 = first[0]; 
    var index2 = carChoice.indexOf(first[0]);
    if(i2 !== 10){
        carChoice.splice(index2, 1);
    }
    var i3 = first[1];
    var index3 = carChoice.indexOf(i3);
    if(i3 !== 10){
        carChoice.splice(index3,1);
    }
    console.log("může jet jako další řádek", carChoice);
    order.push(a);
    console.log(order);
    var base = [order,carChoice];
    console.log(base);
    return base;
}

function secondOne(base){
    var carChoice = base[1];
    var order = base[0];
    console.log("dosavadní pořadí", order);
    console.log(carChoice);
    var r1 = 0;
    if(order.valueOf(order[0]) == 0){
        var r1 = 3;
    }else{
        var r1 = order.valueOf(order[0]);
        r1--;
    }
    console.log(r1);
    var delR1 = carChoice.indexOf(r1);
    carChoice.splice(delR1,1);
    r2 = Math.floor(Math.random()*4);
    var car2 = tableXfree[r1][r2];
    console.log(r1);
    console.log(car2);
     if(car2[0] == 10){
         order.push(r1);
        
     }else if(car2[0] == 5){
       var car3 = carChoice.valueOf(carChoice[0]);
       var car31 = tableXfree.indexOf(tableXfree[][][]
     }else{
        order.push(r1);
     }  
     console.log(order);
    // SPLIT
 //    var base
}
