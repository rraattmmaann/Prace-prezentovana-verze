var typkrizovatky = Math.floor(Math.random() * 7);
var typkrizovatky = 0;
console.log("0");
switch (typkrizovatky) {
    case 0:
        //hide();
        Tkrizovatka1();
        ;
    case 1:
    // nextExercise();
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
                //show(1);
                //show(6);
                //show(7);
                var resultsArray = [0, 2, 1];
                console.log(resultsArray, "1");
                return resultsArray;
            } else {
                //show(1);
                //show(7);
                var resultsArray = [0, 2];
                console.log(resultsArray, "2");
                return resultsArray;
            }
        } else {
            //show(1);
            //show(7);
            var resultsArray = [0, 2];
            console.log(resultsArray, "3");
            return resultsArray;
        }
    } else if (prvni == 1) {
        var prvniSmer = Math.floor(Math.random() * 2);
        if (prvniSmer == 0) {
            //show(6);
            //show(3);
            var resultsArray = [0, 2];
            console.log(resultsArray, "4");
            return resultsArray;
        } else {
            var treti = Math.floor(Math.random() * 2);
            if (treti == 0) {
                //show(5);
                //show(3);
                var resultsArray = [1, 0]
                console.log(resultsArray, "5");
                return resultsArray;
            } else {
                //show(5);
                //show(3);
                //show(7);
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
                //show(8);
                //show(6);
                var resultsArray = [2, 1];
                console.log(resultsArray, "7");
                return resultsArray;
            }
            //show(8);
            //show(6);
            //show(3);
            var resultsArray = [2, 1, 0];
            console.log(resultsArray, "8");
            return resultsArray;
        }
        var druhy = Math.floor(Math.random() * 2);
        if (druhy == 1) {
            //show(7);
            //show(6);
            //show(3);
            var resultsArray = [2, 1, 0];
            console.log(resultsArray, "9");
            return resultsArray;
        }
        //show(7);
        //show(3);
        var resultsArray = [2, 0];
        console.log(resultsArray, "10");
        return resultsArray;
    }


}
