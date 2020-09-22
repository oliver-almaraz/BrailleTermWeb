const respuestas = {
    //Primera fila (a-j // 1-10)
    1:{1:"a",2:[1,0,0,0,0,0]},
    2:{1:"b",2:[1,1,0,0,0,0]},
    3:{1:"c",2:[1,0,0,1,0,0]},
    4:{1:"d",2:[1,0,0,1,1,0]},
    5:{1:"e",2:[1,0,0,0,1,0]},
    6:{1:"f",2:[1,1,0,1,0,0]},
    7:{1:"g",2:[1,1,0,1,1,0]},
    8:{1:"h",2:[1,1,0,0,1,0]},
    9:{1:"i",2:[0,1,0,1,0,0]},
    10:{1:"j",2:[0,1,0,1,1,0]},

    //Segunda fila (k-t // 11-20)
    11:{1:"k",2:[1,0,1,0,0,0]},
    12:{1:"l",2:[1,1,1,0,0,0]},
    13:{1:"m",2:[1,0,1,1,0,0]},
    14:{1:"n",2:[1,0,1,1,1,0]},
    15:{1:"o",2:[1,0,1,0,1,0]},
    16:{1:"p",2:[1,1,1,1,0,0]},
    17:{1:"q",2:[1,1,1,1,1,0]},
    18:{1:"r",2:[1,1,1,0,1,0]},
    19:{1:"s",2:[0,1,1,1,0,0]},
    20:{1:"t",2:[0,1,1,1,1,0]},

    //Tercera fila (u-z // 21-26)
    21:{1:"u",2:[1,0,1,0,0,1]},
    22:{1:"v",2:[1,1,1,0,0,1]},
    23:{1:"w",2:[0,1,0,1,1,1]},
    24:{1:"x",2:[1,0,1,1,0,1]},
    25:{1:"y",2:[1,0,1,1,1,1]},
    26:{1:"z",2:[1,0,1,0,1,1]},

    //Signos diacríticos (27-33)
    27:{1:"ñ",2:[1,1,0,1,1,1]},
    28:{1:"á",2:[1,1,1,0,1,1]},
    29:{1:"é",2:[0,1,1,1,0,1]},
    30:{1:"í",2:[0,0,1,1,0,0]},
    31:{1:"ó",2:[0,0,1,1,0,1]},
    32:{1:"ú",2:[0,1,1,1,1,1]},
    33:{1:"ü",2:[1,1,0,0,1,1]},

    //Puntuación (34-43)
    34:{1:"-",2:[0,0,1,0,0,1]},
    35:{1:"*",2:[0,0,1,0,1,0]},
    36:{1:";",2:[0,1,1,0,0,0]},
    37:{1:":",2:[0,1,0,0,1,0]},
    38:{1:"?",2:[0,1,0,0,0,1]},
    39:{1:"!",2:[0,1,1,0,1,0]},
    40:{1:"(",2:[1,1,0,0,0,1]},
    41:{1:")",2:[0,0,1,1,1,0]},
    42:{1:".",2:[0,0,1,0,0,0]},
    43:{1:",",2:[0,1,0,0,0,0]},

    // Números
    44:{1:"0",2:[0,1,0,1,1,0]},
    45:{1:"1",2:[1,0,0,0,0,0]},
    46:{1:"2",2:[1,1,0,0,0,0]},
    47:{1:"3",2:[1,0,0,1,0,0]},
    48:{1:"4",2:[1,0,0,1,1,0]},
    49:{1:"5",2:[1,0,0,0,1,0]},
    50:{1:"6",2:[1,1,0,1,0,0]},
    51:{1:"7",2:[1,1,0,1,1,0]},
    52:{1:"8",2:[1,1,0,0,1,0]},
    53:{1:"9",2:[0,1,0,1,0,0]},

    // Signos matemáticos
    54:{1:"+",2:[0,1,1,0,1,0]},
    55:{1:"-",2:[0,0,1,0,0,1]},
    56:{1:"x",2:[0,1,1,0,0,1]},
    57:{1:"=",2:[0,1,1,0,1,1]},
    58:{1:"/",2:[0,1,0,0,1,1]}
}
var cajetines = {  //Lista que los checkboxes modifican
    1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 3:[0,0,0,0,0,0], 4:[0,0,0,0,0,0],
    5:[0,0,0,0,0,0], 6:[0,0,0,0,0,0], 7:[0,0,0,0,0,0], 8:[0,0,0,0,0,0],
    9:[0,0,0,0,0,0],10:[0,0,0,0,0,0],11:[0,0,0,0,0,0],12:[0,0,0,0,0,0],
   13:[0,0,0,0,0,0],14:[0,0,0,0,0,0],15:[0,0,0,0,0,0],16:[0,0,0,0,0,0],
   17:[0,0,0,0,0,0],18:[0,0,0,0,0,0],19:[0,0,0,0,0,0],20:[0,0,0,0,0,0],
   21:[0,0,0,0,0,0],22:[0,0,0,0,0,0],23:[0,0,0,0,0,0],24:[0,0,0,0,0,0],
   25:[0,0,0,0,0,0],26:[0,0,0,0,0,0],27:[0,0,0,0,0,0],28:[0,0,0,0,0,0]
}
function enviar() {
    var mayus = false;
    var numeri = false;

    for (var cajetin=1; cajetin<29; cajetin++) {
        //Para cada cajetín
        if (JSON.stringify(cajetines[cajetin])==="[0,0,0,0,0,0]") { // Cajetín vacío = espacio
            document.getElementById("outputRegleta28").value += "\ ";
            mayus = false;
            numeri = false;
        } else if (JSON.stringify(cajetines[cajetin])==="[0,0,1,1,1,1]") { // Numeral
            numeri = true;
            mayus = false;
        } else if (JSON.stringify(cajetines[cajetin])==="[0,0,0,1,0,1]") { //Mayus
            mayus = true;
            numeri = false;
        } 
        // Loops últimas opciones por eficiencia
        else if (numeri) {
            for (respuesta=42; respuesta<59; respuesta++) {
                if(JSON.stringify(respuestas[respuesta][2])===JSON.stringify(cajetines[cajetin])) {
                    document.getElementById("outputRegleta28").value += respuestas[respuesta][1];
                }
            }
        } else if (mayus) {
            for (respuesta=1; respuesta<34; respuesta++) {
                if(JSON.stringify(respuestas[respuesta][2])===JSON.stringify(cajetines[cajetin])) {
                    var str = respuestas[respuesta][1];
                    document.getElementById("outputRegleta28").value += str.toUpperCase();
                    mayus = false;
                }
            }
        } else {
            for (respuesta=1; respuesta<44; respuesta++) {
                if(JSON.stringify(respuestas[respuesta][2])===JSON.stringify(cajetines[cajetin])) {
                    document.getElementById("outputRegleta28").value += respuestas[respuesta][1];
                }
            }
        }
    }
    document.getElementById("outputRegleta28").value += "\n";
    document.getElementById("mensaje").innerHTML = "";
}
function cb(cajetin, punto) {
    //Cada acción de un checkbox modifica la lista "cajetines"
    if (cajetines[cajetin][punto - 1] === 0) {
        cajetines[cajetin][punto - 1] = 1;
    } else if (cajetines[cajetin][punto - 1] === 1) {
        cajetines[cajetin][punto - 1] = 0;
    }
}
function desmarcar() {
    //Desmarca todas las checkboxes y resetea la lista "cajetines"
    var regletaInput = document.getElementById('regletaInput28');
    var puntos = regletaInput.getElementsByTagName('input');
    for (var i=0; i<puntos.length; i++) {
        puntos[i].checked = false;
    }
    cajetines = {
        1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 3:[0,0,0,0,0,0], 4:[0,0,0,0,0,0],
        5:[0,0,0,0,0,0], 6:[0,0,0,0,0,0], 7:[0,0,0,0,0,0], 8:[0,0,0,0,0,0],
        9:[0,0,0,0,0,0],10:[0,0,0,0,0,0],11:[0,0,0,0,0,0],12:[0,0,0,0,0,0],
       13:[0,0,0,0,0,0],14:[0,0,0,0,0,0],15:[0,0,0,0,0,0],16:[0,0,0,0,0,0],
       17:[0,0,0,0,0,0],18:[0,0,0,0,0,0],19:[0,0,0,0,0,0],20:[0,0,0,0,0,0],
       21:[0,0,0,0,0,0],22:[0,0,0,0,0,0],23:[0,0,0,0,0,0],24:[0,0,0,0,0,0],
       25:[0,0,0,0,0,0],26:[0,0,0,0,0,0],27:[0,0,0,0,0,0],28:[0,0,0,0,0,0]
    }
}
function limpiar() {
    document.getElementById("outputRegleta28").value = ""
}

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
}

// Al presionar enter después de escribir en la casilla de input se activa "enviar()".
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        enviar();
    }
});

limpiar();