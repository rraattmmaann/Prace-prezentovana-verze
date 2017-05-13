
/**
 * základní tabulka popisující přednosti mezi vozidly
 */
var tableXfree = [
    [[5, 10], [10, 10], [1, 10], [1, 2]],
    [[2, 3], [5, 10], [10, 10], [2, 10]],
    [[3, 10], [3, 0], [5, 10], [10, 10]],
    [[10, 10], [0, 10], [0, 1], [5, 10]],
]

/**
 * pomocné pole, pomocí kterého jsou převáděny hodnoty
 * (polohy aut) v první tabulce na zobrazované obrázky
 */
var table = [
    [100, 1, 2, 3],
    [4, 100, 5, 6],
    [7, 8, 100, 9],
    [10, 11, 12, 100],
]

/**
 * všechny auta s jejich id a pozicí
 */
var cars = [
    { id: "A2", position: 1 },
    { id: "A1", position: 2 },
    { id: "A0", position: 3 },
    { id: "B0", position: 4 },
    { id: "B2", position: 5 },
    { id: "B1", position: 6 },
    { id: "C1", position: 7 },
    { id: "C0", position: 8 },
    { id: "C2", position: 9 },
    { id: "D2", position: 10 },
    { id: "D1", position: 11 },
    { id: "D0", position: 12 },
];

//základní neznámé potřebné pro základní funkce generující
//pořadí průjezdu křižovatkou
var base;
var base1;
var base2;
var resultsArray;

//var typkrizovatky = 0;
console.log("0");

function start() {
    var typkrizovatky = Math.floor(Math.random() * 2);
    if (typkrizovatky == 0) {

        console.log("a taky tudy!!!!!!!!!!!!!");
        hide();
        Tkrizovatka1();
        document.getElementById("nula").style.visibility = "hidden";
    } else {

        console.log("kurva vole normální křižovatka už");
        document.getElementById("dva").style.visibility = "hidden";
        document.getElementById("nula").style.visibility = "visible";
        nextExercise();
    }
}

function Tkrizovatka1() {
    document.getElementById("dva").style.visibility = "visible";
    var prvni = Math.floor(Math.random() * 3);
    console.log("1");
    if (prvni == 0) {
        var prvniSmer = Math.floor(Math.random() * 2) + 1;
        if (prvniSmer == 1) {

            var tretiSmer = Math.floor(Math.random() * 2);
            if (tretiSmer == 0) {
                var tblPosition = 4;
                show(tblPosition);
                var tblPosition = 1;
                show(tblPosition);
                var tblPosition = 8;                      
                show(tblPosition);
                var resultsArray = [0, 2, 1];
                console.log(resultsArray, "1");
                return resultsArray;
            } else {
                var tblPosition = 1;
                show(tblPosition);
                var tblPosition = 8;                        //již vyzkoušena devítka
                show(tblPosition);
                var resultsArray = [0, 2];
                console.log(resultsArray, "2");
                return resultsArray;
            }
        } else {
            var tblPosition = 2;
            show(tblPosition);
            var tblPosition = 8;
            show(tblPosition);
            var resultsArray = [0, 2];
            console.log(resultsArray, "3");
            return resultsArray;
        }
    } else if (prvni == 1) {
        var prvniSmer = Math.floor(Math.random() * 2);
        if (prvniSmer == 0) {
            var tblPosition = 4;
            show(tblPosition);
            var tblPosition = 2;
            show(tblPosition);
            var resultsArray = [0, 2];
            console.log(resultsArray, "4");
            return resultsArray;
        } else {
            var treti = Math.floor(Math.random() * 2);
            if (treti == 0) {
                var tblPosition = 5;
                show(tblPosition);
                var tblPosition = 2;
                show(tblPosition);
                var resultsArray = [1, 0]
                console.log(resultsArray, "5");
                return resultsArray;
            } else {
                var tblPosition = 5;
                show(tblPosition);
                var tblPosition = 2;
                show(tblPosition);
                var tblPosition = 8;
                show(tblPosition);
                var resultsArray = [1, 0, 2];
                console.log(resultsArray, "6");
                return resultsArray;
            }
        }
    } else {
        var prvniSmer = Math.floor(Math.random() * 2);
        if (prvniSmer == 0) {
            var treti = Math.floor(Math.random() * 2);
            if (treti == 0) {
                var tblPosition = 7;
                show(tblPosition);
                var tblPosition = 4;
                show(tblPosition);
                var resultsArray = [2, 1];
                console.log(resultsArray, "7");
                return resultsArray;
            }
            var tblPosition = 7;
            show(tblPosition);
            var tblPosition = 2;
            show(tblPosition);
            var tblPosition = 4;
            show(tblPosition);
            var resultsArray = [2, 1, 0];
            console.log(resultsArray, "8");
            return resultsArray;
        } else {
            var tblPosition = 8;
            show(tblPosition);
            var tblPosition = 4;
            show(tblPosition);
            var tblPosition = 2;
            show(tblPosition);
            var resultsArray = [2, 1, 0];
            console.log(resultsArray, "9");
            return resultsArray;
        }


    }
}


/**
 * Hlavní funkce kterou se pouští generátor pořadí průjezdu
 */
function nextExercise() {

    hide();
    document.getElementById("nula").style.visibility = "visible";
    base = first();
    console.log(base, "base");
    base1 = second(base);
    console.log(base1, "base1");
    base2 = third(base1);
    console.log(base2, "base2");
    resultsArray = lastOne(base2);
    console.log(resultsArray);
}

// Při prvním načtení stránky se spustí nový příklad
//nextExercise()
//start()

/**
 * funkce první - zde je náhodně vybráno pole z zabulky tableXfree
 * if na začátku funkce vyřazuje případy, kdy by auto z křižovatky
 * vyjíždělo stejným vězdem, kterým do ní přijelo.
 */
function first() {
    var order = [];
    var carChoice = [0, 1, 2, 3];
    var a = Math.floor(Math.random() * 4);
    var b = Math.floor(Math.random() * 4);
    if (a == b) {
        return first();
    }
    //neznámé a,b určují pozici, která bude vybrána v úvodní tabulce
    var firstCar = tableXfree[a][b];
    var tablePosition = [b, a];
    var index1 = firstCar[0];
    //tato část kódu eliminuje z carChoice auta, která jsou již
    //vyřazena z pořadí průjezdu křižovatkou
    var i1 = carChoice[index1];
    if (i1 == undefined || i1 == -1) {
    } else {
        carChoice.splice(i1, 1);
    }
    var index2 = firstCar[1];
    var i2 = carChoice.indexOf(index2);
    if (i2 == undefined || i2 == -1) {
    } else {
        carChoice.splice(i2, 1);
    }
    var i3 = carChoice.indexOf(a);
    if (i3 == undefined || i3 == -1) {
    } else {
        carChoice.splice(i3, 1);
    }
    //funkce show() společně s tblPosition se stará o zobrazení
    //vybraného vozidla na webové stránce
    var tblPosition = table[a][b];
    show(tblPosition);
    order.push(a);
    var base = [order, carChoice];
    return base;
}

/**
 * nextOne() vybírá na základě neznámé order - pořadí aut, která
 * byla zatím vybrána auto, které může křižovatkou projíždět jako druhé
 */
function second(base) {
    var order = base[0];
    var carChoice = base[1];
    //určuje, které auto může jet další
    if (order.valueOf(order[0]) == 0) {
        var r1 = 3;
    } else {
        var r1 = order[0];
        r1--;
    }
    //určuje jakým směrem může vybrané auto jet
    //aby se jeho dráha jízdy křížila z již projíždějícími auty
    //tj. aby jim musel dát přednost a tím pádem bylo jisté, že pojede
    //až po nich.
    var ccl = carChoice.length;
    if (ccl == 1) {
        var possible = [0, 1, 2, 3];
        var u0 = order[0];
        possible.splice(u0, 1);
        var u1 = carChoice[0];
        var u = possible.indexOf(u1);
        possible.splice(u, 1);
        var o = Math.floor(Math.random() * 2);
        if (o == 0) {
            var u3 = possible[0];
        } else {
            var u3 = possible[1];
        }
    }
    if (r1 == 3) {
        var rx = 0;
    } else {
        var rx = r1 + 1;
    }
    var options = [0, 1, 2, 3];
    options.splice(r1, 1);
    var rxx = options.indexOf(rx);
    options.splice(rxx, 1);
    var t1 = Math.floor(Math.random() * 2);
    if (t1 == 0) {
        var tx = options[0];
    } else {
        var tx = options[1];
    }
    //zde je tedy dáno pomocí indexů r1 a tx, které pole má být
    //vybráno z úvodní tabulky.
    console.log("poloha 2. pole", tx, r1);
    var carValue = tableXfree[r1][tx];
    console.log("hodnota 2.pole", carValue);
    order.push(r1);
    var y = carChoice.indexOf(r1); //smaže z carChoice samo sebe
    if (r1 == undefined || r1 == -1) {

    } else {
        carChoice.splice(y, 1);
    }
    console.log(carChoice); //po smazání prvního auta(+ aut na něm záviských)
    //+ po smazání 2. auta samotného
    var y1 = carValue[0];
    var y11 = carChoice.indexOf(y1);
    if (y11 == undefined || y11 == -1) {

    } else {
        carChoice.splice(y11, 1);
    }
    var y2 = carValue[1];
    var y22 = carChoice.indexOf(y2);
    if (y22 == undefined || y22 == -1) {

    } else {
        carChoice.splice(y22, 1);
    }
    //opět funkce show(), která zobrazí druhé projíždějící auto
    var tblPosition = table[r1][tx];
    show(tblPosition);
    var base1 = [order, carChoice];
    return base1;
}

/**
 * jak už název napovídá, funkce vybírá třetí projíždějící auto
 * funguje velmi podobným způsobem jako funkce předchozí
 */
function third(base1) {
    var a = base1[0][0];
    var b = base1[0][1];
    var order = [a, b]
    var carChoice = base1[1];
    console.log("order", order);
    console.log("carChoice", carChoice);
    var az1 = carChoice.length;
    var z1 = carChoice[0];
    if (z1 == undefined) {
        //tento if řeší případ, kdy křižovatkou projíždí pouze
        //dvě vozidla
    } else {
        if (a == 0) {
            var r1 = 3;
        } else {
            var r1 = a;
            r1--;
        }
        console.log("řádek, kterej pojede", z1);
        var options = [0, 1, 2, 3];
        options.splice(z1, 1);
        if (z1 == 3) {
            var rx = 0;
        } else {
            var rx = z1 + 1;
        }
        //zde je opět vybíráno, jakým směrem se může vydat třetí vybrané auto
        var rxx = options.indexOf(rx);
        options.splice(rxx, 1);
        var t1 = Math.floor(Math.random() * 2);
        if (t1 == 0) {
            var tx = options[0];
        } else {
            var tx = options[1];
        }
        console.log("pozice třetího", tx, z1);
        var carValue = tableXfree[z1][tx];
        console.log("hodnota třetího", carValue);
        order.push(z1);

        carChoice.splice(0, 1);
        var thisCar = [z1, tx];
        console.log("order", order);
        var tblPosition = table[z1][tx];
        console.log(tblPosition);
        show(tblPosition);
    }
    var base2 = [order, carChoice];

    console.log(base);
    console.log(base[0][2]);
    return base2;
}

/**
 * poslední z hlavních funkcí
 * za předpokladu, že carChoice ještě stá
 * poslední auto projíždějící křižovatkou
 */
function lastOne(base2) {
    var a = base[0][0];
    var c = base2[0][2];
    var order = base2[0];
    var carChoice = base2[1];
    var last = base2[2];
    console.log("order", order);
    console.log("carChoice", carChoice);
    var z1 = carChoice[0];
    //opět if řešící, jestli bude funkce přeskočena, nebo jestli
    //se bude rozhodovat o posledním projíždějícím autě
    if (z1 == undefined) {
    } else {
        if (a == 0) {
            var r1 = 3;
        } else {
            var r1 = a;
            r1--;

        }
        //opět rozhodování na základě dalších projíždějících aut, kam
        //toto vozidlo pojede. Ve výsledku to znamená, že auto nepojede
        // doprava a rozhoduje se jestli pojede rovně, nebo vlevo.
        console.log("řádek, kterej pojede", z1);
        var options = [0, 1, 2, 3];
        options.splice(z1, 1);
        if (z1 == 3) {
            var rx = 0;
        } else {
            var rx = z1 + 1;
        }
        var rxx = options.indexOf(rx);
        options.splice(rxx, 1);
        var t1 = Math.floor(Math.random() * 2);
        if (t1 == 0) {
            var tx = options[0];
        } else {
            var tx = options[1];
        }
        console.log("pozice 4. auta", tx, z1);
        var carValue = tableXfree[z1][tx];
        console.log("tabuková hodnota 4.auta", carValue);
        order.push(z1);
        carChoice.splice(0, 1);
        var thisCar = [z1, tx];
        var tblPosition = table[z1][tx];
        show(tblPosition);
    }

    if (order.length == 4) {
        var treti = order[2];
        order[2] = order[3];
        order[3] = treti;
    }

    var resultsArray = order;
    console.log(resultsArray);
    return resultsArray;


}

function setCarVisibility(id, visible) {
    document.getElementById(id).style.visibility = visible ? "visible" : "hidden";
}

function showCar(id) {
    setCarVisibility(id, true);
}

function hideCar(id) {
    setCarVisibility(id, false);
}

/**
 * funkce zařizující že za pomocí tabulky table bude 
 */
function show(tablePosition) {
    var position = tablePosition;
    // najde auto s danou pozicí
    var car = cars.find(function (car) { return car.position === position });
    console.log(car);
    showCar(car.id);
}

/**
 * než je vygenerován další příklad - tak musí nejdříve být skryta auta
 * z příkladu předchozího
 */
function hide() {
    cars.forEach(function (car) {
        hideCar(car.id);
    })
}

/**
 * funkce převádějící čísla (řádky v tableXfree) na označení jednotlivých aut
 */
function getColorNameByNumber(number) {
    switch (number) {
        case 0: return 'Červené'
        case 1: return 'Zelené'
        case 2: return 'Modré'
        case 3: return 'Růžové'
    }
}

/**
 * funkce řešící vypsání pořadí průjezdu - za účelem vypsání řešení na 
 * webovou stránku
 */
function result() {
    var solutionText = document.getElementById('solution_text');
    var colorNumbers = resultsArray;
    //vypisuje do html
    solutionText.innerHTML = 'Řešení: ' + colorNumbers.map(getColorNameByNumber);
}