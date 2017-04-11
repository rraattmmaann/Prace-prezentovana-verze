var tableXfree = [
    [[5,10],[10,10],[1,10],[1,2]],
    [[2,3],[5,10],[10,10],[2,10]],
    [[3,10],[3,0],[5,10],[10,10]],
    [[10,10],[0,10],[0,1],[5,10]],
]
var carChoice = [0,1,2,3];
var order = 0;
var base = first();

//console.log(base[0], base[1], base[2]);
if(base[1] !== undefined){
    nextOne(base);
}
third(base);
lastOne(base);

function first(){
    var order = [];
    var carChoice = [0,1,2,3];
    var a = Math.floor(Math.random()*4);
    var b = Math.floor(Math.random()*4);
    if(a == b){
        return first();
    }
    var firstCar = tableXfree[a][b];
    var tablePosition = [b,a];
    console.log(b,a);
    console.log(firstCar);
    //console.log(carChoice);
    var index1 = firstCar[0];
    var i1 = carChoice[index1];
    //console.log(i1);
    if(i1 == undefined || i1 == -1){

    }else{
        carChoice.splice(i1,1);
    }
    //console.log(carChoice);
    var index2 = firstCar[1];
    var i2 = carChoice.indexOf(index2);
    //console.log(i2);
    if(i2 == undefined || i2 == -1){

    }else{
        carChoice.splice(i2,1);
    }
    //console.log(carChoice);
    var i3 = carChoice.indexOf(a);
    //console.log(i3);
    if(i3 == undefined || i3 == -1){

    }else{
        carChoice.splice(i3,1);
    }

    console.log("jako druhé a dál může jet", carChoice);
    order.push(a);
    //console.log(order);
    //console.log(tablePosition);
    tblPosition = [b,a];
    var base = [order, carChoice, tablePosition];
    return base;
}

function nextOne(base){
    var order = base[0];
    var carChoice = base[1];
    var last = base[2];
    //console.log(last);
    if(order.valueOf(order[0]) == 0){
        var r1 = 3;
    }else{
        var r1 = order.valueOf(order[0]);
        r1--;
    }
    console.log(order);
    //console.log(carChoice);
    //console.log(last);
    console.log("řádek, kterej pojede", r1);
    if(r1 == 3){
        var rx = 0;
    }else{
        var rx = r1 + 1;
    }
    var options = [0,1,2,3];
    options.splice(r1,1);
   // console.log(options);
   // console.log(rx);
    var rxx = options.indexOf(rx);
    options.splice(rxx,1);
   // console.log(options);
    var t1 = Math.floor(Math.random()*2);
    if(t1 == 0){
        var tx = options[0];
    }else{
        var tx = options[1];
    }
   // console.log(tx, r1);
    var carValue = tableXfree[r1][tx];
    console.log(carValue);
    order.push(r1);
    var y = carChoice.indexOf(r1);
    carChoice.splice(y,1);
    var thisCar = [tx, r1];
    last.push(thisCar);
    console.log("pořadí",order);
    console.log("výběr aut 3. a 4.",carChoice);
    console.log(last);
    base = order, carChoice, thisCar;
    console.log(base);
    return base;
}
//
//
//  ==============================================
//
//
function third(base){
    console.log("====================");
    var a = base[0][0];
    var b = base[0][1];
    console.log(a);
    var order = [a,b]
    console.log(order);
    var carChoice = base[1];
    var last = base[2];
    console.log("order",order);
    console.log("carChoice",carChoice);
    var z1 = carChoice[0];
        //console.log(z1);
    if(z1 == undefined){
        console.log("wtf");
    }else{
        if(a == 0){
            var r1 = 3;
            console.log("1");
        }else{
            var r1 = a;
            r1--;
            //console.log("2");
            //console.log(r1);
        }
        
        //console.log(last);
        console.log("řádek, kterej pojede", z1);
        var options = [0,1,2,3];
        console.log(options);
        console.log(z1);
        options.splice(z1,1);
        if(z1 == 3){
            var rx = 0;
        }else{
            var rx = z1 + 1;
        }
        console.log(options);
        console.log(rx);
        var rxx = options.indexOf(rx);
        console.log(rxx);
        options.splice(rxx,1);
        console.log(options);
        var t1 = Math.floor(Math.random()*2);
        if(t1 == 0){
            var tx = options[0];
        }else{
            var tx = options[1];
        }
        console.log(z1, tx);
        var carValue = tableXfree[z1][tx];
        console.log(carValue);
        order.push(z1);
        carChoice.splice(0,1);
        var thisCar = [z1, tx];
        last.push(thisCar);
        console.log(order);
        console.log(carChoice);
        console.log(last); 

    } //toto řeší případ, že už by nebylo žádné další auto v carChoice
    base = [order, carChoice, last]
    console.log(base);
    return base;
}

function lastOne(base){
    console.log("====================");
    var a = base[0][0];
    var b = base[0][1];
    console.log(a);
    var order = [a,b]
    console.log(order);
    var carChoice = base[1];
    var last = base[2];
    console.log("order",order);
    console.log("carChoice",carChoice);
    var z1 = carChoice[0];
        //console.log(z1);
    if(z1 == undefined){
        console.log("wtf");
    }else{
        if(a == 0){
            var r1 = 3;
            console.log("1");
        }else{
            var r1 = a;
            r1--;
            //console.log("2");
            //console.log(r1);
        }
        
        //console.log(last);
        console.log("řádek, kterej pojede", z1);
        var options = [0,1,2,3];
        console.log(options);
        console.log(z1);
        options.splice(z1,1);
        if(z1 == 3){
            var rx = 0;
        }else{
            var rx = z1 + 1;
        }
        console.log(options);
        console.log(rx);
        var rxx = options.indexOf(rx);
        console.log(rxx);
        options.splice(rxx,1);
        console.log(options);
        var t1 = Math.floor(Math.random()*2);
        if(t1 == 0){
            var tx = options[0];
        }else{
            var tx = options[1];
        }
        console.log(z1, tx);
        var carValue = tableXfree[z1][tx];
        console.log(carValue);
        order.push(z1);
        carChoice.splice(0,1);
        var thisCar = [z1, tx];
        last.push(thisCar);
        console.log(order);
        console.log(carChoice);
        console.log(last); 

    } //toto řeší případ, že už by nebylo žádné další auto v carChoice
    base = [order, carChoice, last]
    console.log(base);
    return base;


}