"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colorsA=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ],
        notRepeated = {};

    console.log( 'цветов: ' + colorsCount );

    for (var i = 1; i <= colorsCount; i++) {
        var n = randomDiap(1,7);

        if (!(colorsA[n] in notRepeated)) {
            notRepeated[colorsA[n]] = colorsA[n];
        } else {
            i--;
        }
    }

    console.log(Object.keys(notRepeated).toString());
}

mood(3);