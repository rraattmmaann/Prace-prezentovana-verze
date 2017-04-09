var tableXfree = [
    [[5,10],[10,10],[1,10],[1,2]],
    [[2,3],[5,10],[10,10],[2,10]],
    [[3,10],[3,0],[5,10],[10,10]],
    [[10,10],[0,10],[0,1],[5,10]],
]
var base = XFGenerator();
secondOne(base);
if(0 < base[0].lenght){

}else{
    thirdOne(base);
}
var carChoice = base[1]
if(0 < carChoice.lenght){

}else{
    lastOne(base);
}


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
    order.push(a);
    var base = [order,carChoice];
    return base;
}

function secondOne(base){
    var carChoice = base[1];
    var order = base[0];
    console.log("dosavadní pořadí", order);
    console.log("další může jet", carChoice);
    var cLength = carChoice.length;
    if(cLength !== 1){  //r1 určuje, který řádek pojede jako další (ten o jedno míň)
        var r1 = 0;
    if(order.valueOf(order[0]) == 0){
        var r1 = 3;
    }else{
        var r1 = order.valueOf(order[0]);
        r1--;
    }
    var delR1 = carChoice.indexOf(r1); //vymaže druhé auto z carChoice
    carChoice.splice(delR1,1);
    r2 = Math.floor(Math.random()*4);   //vybere, kam pojede 2. auto
    var car2 = tableXfree[r1][r2];
    console.log("pole druhého auta", r2, r1);                //políčko, popisující druhé auto
    console.log(car2);
    console.log("jako další pojede carChoice", carChoice);
     if(car2[0] == 10){             //no a tady řešíme, co dál, když druhé auto
         order.push(r1);            //nejede, nebo jede v pravo
         var posl = carChoice[0];   //takže nejdříve, když jede v pravo
         var posledni = posl.valueOf(posl[0]);
         order.push(posledni);
         var polePosledni = [order[0],posledni];  
         carChoice.splice(0,1);      
     }else if(car2[0] == 5 && carChoice.length < 2){
        console.log("issue");
        console.log(carChoice);
       var car3 = carChoice.indexOf(carChoice[0]);
       console.log(car3);
       order.push(carChoice[0]);
       carChoice.splice(car3, 1);
      // console.log(carChoice);
      // console.log(order);   
     }
     else{
        if(car2[0] == 5 && carChoice.length == 2){
            var car3 = carChoice.indexOf(carChoice[0]);
            carChoice.splice(car3,0);
        }else{
            order.push(r1);
        }
     } 
    }else{
        order.push(carChoice[0]); 
        carChoice.splice(0,1);
        //je třeba náhodně vybrat, jestli pojede l/r
    } 
    

     console.log("zatím jedou první dva v pořadí", order);
         // SPLIT
 //    var base
    base = [order, carChoice];
    return base;
    

}

function thirdOne(base){
    var carChoice = base[1];
    var order = base[0];
    console.log("jako třetí a čtvrté mohou jet",carChoice);
    console.log("zatím jedou", order);
    var f1 = 0 ;
    var f2 = 0 ;
    console.log(carChoice);
    var count = carChoice.length;   //počet aut, která ještě mohou jet
    console.log(count);
    if(count == 0){
        //draw(base);
    }else if(count == 1){
        f1 = carChoice.valueOf(carChoice[0]);
        f2 = Math.floor(Math.random()*4);
        var car4 = tableXfree[f2][f1];
        console.log(f2, f1);
        console.log(car4);
        if(car4[0] == 5){
            carChoice.splice(0,1);
        }else{
            order.push(carChoice[0]);
            carChoice.splice(0,1);
        }
    }else{
        console.log(carChoice);
        fb = carChoice[1];  //auto, které jede jako třetí
        console.log("řádek jedoucí jako třetí",fb);
       f2 = Math.floor(Math.random() * 4);
       console.log("tabulková pozice třetího jedoucího", f2, fb);
       var car4 = tableXfree[fb][f2];
        if(car4[0] == 5 || car4[0] == 10){
            carChoice.splice(1,1);
            console.log("wtf");
        }else{
            console.log(carChoice);
            order.push(fb);
            carChoice.splice(1,1);
       }
    }
   // if(0 < carChoice.length){
   //     lastOne(base);
   // }
    console.log("pořadí", order);
    console.log(carChoice);
    base = [order, carChoice];
    return base;
}
function lastOne(base){
    carChoice = base[1];
    order = base[0];
    var ge1 = carChoice[0];
    var g1 = carChoice.indexOf(ge1);
    var g2 = Math.floor(Math.random()*4);
    var car5 = tableXfree[g2][g1];
    console.log(carChoice);
    console.log(order);
    console.log(ge1, g1, g2);
    console.log(car5);
    if(ge1 == undefined){

    }else{
    if(car5[0] == 5){
        carChoice.splice(0,1);
    }else{
        order.push(g1);
        carChoice.splice(0,1);
    }
    }
    var base = [order, carChoice];
    console.log(order);
    return base;
}
var order = base[0];
var carChoice = base[1];
console.log(order);
console.log(carChoice);
