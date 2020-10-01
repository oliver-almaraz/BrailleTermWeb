var rango = [0,0]; //Rango para generar un número/letra aleatorios.
var respuesta = "vacia"; //Lista para almacenar la última letra presentada.
var cajetines = [0,0,0,0,0,0]; //Lista que los checkboxes modifican


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
    34:{1:".",2:[0,0,1,0,0,0]},
    35:{1:",",2:[0,1,0,0,0,0]},
    36:{1:";",2:[0,1,1,0,0,0]},
    37:{1:":",2:[0,1,0,0,1,0]},
    38:{1:"?",2:[0,1,0,0,0,1]},
    39:{1:"!",2:[0,1,1,0,1,0]},
    40:{1:"(",2:[1,1,0,0,0,1]},
    41:{1:")",2:[0,0,1,1,1,0]},
    42:{1:"-",2:[0,0,1,0,0,1]},
    43:{1:"*",2:[0,0,1,0,1,0]},

    //Números (44-53)
    44:{1:"1",2:[1,0,0,0,0,0]},
    45:{1:"2",2:[1,1,0,0,0,0]},
    46:{1:"3",2:[1,0,0,1,0,0]},
    47:{1:"4",2:[1,0,0,1,1,0]},
    48:{1:"5",2:[1,0,0,0,1,0]},
    49:{1:"6",2:[1,1,0,1,0,0]},
    50:{1:"7",2:[1,1,0,1,1,0]},
    51:{1:"8",2:[1,1,0,0,1,0]},
    52:{1:"9",2:[0,1,0,1,0,0]},
    53:{1:"0",2:[0,1,0,1,1,0]}
}




function generarNumAleatorio(r1,r2) {
    //Retorna un número entero aleatorio entre r1 y r2 (ambos parámetros incluidos)
    return Math.floor(Math.random() * (r2 +1 - r1) ) + r1;
}
function generarLetra() {
    //Genera una letra al azar en el rango especificado.
    var num = generarNumAleatorio(rango[0],rango[1]);
    while (num === respuesta) {
        //Este bucle evitará presentar la misma letra dos veces seguidas.
        num = generarNumAleatorio(rango[0],rango[1]);
    }
    respuesta = num; //En 'respuesta' se almacena el valor que corresponde a la letra.
    document.getElementById("letra").innerHTML = respuestas[respuesta][1]; // y en la Label se muestra la letra.
    resetear();
}
function siguiente() {
    //Actualiza el rango según la opción seleccionada y genera una (nueva) letra
    var dropd_opciones = document.getElementById("opcion");
    var seleccion = dropd_opciones.options[dropd_opciones.selectedIndex].value;
    if (seleccion === "1a") {
        rango[0] = 1;
        rango[1] = 10;
    } else if (seleccion === "2a") {
        rango[0] = 11;
        rango[1] = 20;
    } else if (seleccion === "3a") {
        rango[0] = 21;
        rango[1] = 26;
    } else if (seleccion === "diacriticos") {
        rango[0] = 27;
        rango[1] = 33;
    } else if (seleccion === "puntuacion") {
        rango[0] = 34;
        rango[1] = 43;
    } else if (seleccion === "numeros") {
        rango[0] = 44;
        rango[1] = 53;
    } else if (seleccion === "1-2") {
        rango[0] = 1;
        rango[1] = 20;
    } else if (seleccion === "1-3") {
        rango[0] = 1;
        rango[1] = 26;
    } else if (seleccion === "1-4") {
        rango[0] = 1;
        rango[1] = 33;
    } else if (seleccion === "1-5") {
        rango[0] = 1;
        rango[1] = 43;
    } else if (seleccion === "1-6") {
        rango[0] = 1;
        rango[1] = 53;
    } else if (seleccion === "none selected") {
        rango[0] = 0;
        rango[1] = 0;
        document.getElementById("mensaje").innerHTML = "Por favor elige una o varias filas para repasar.";
    }
    generarLetra();
    document.getElementById("veredicto").innerHTML = "¿Cuál es el signo braille para esta letra,<br/>signo de puntucación o número?";
}
function cb(punto) {
    //Cada acción de un checkbox modifica la lista "cajetines"
    if (cajetines[punto - 1] === 0) {
        cajetines[punto - 1] = 1;
    } else if (cajetines[punto - 1] === 1) {
        cajetines[punto - 1] = 0;
    }
}
function evaluar() {
    //Primero evalúa la respuesta y muestra el veredicto, luego genera una nueva letra si la respuesta fue correcta.
    if (respuesta === "vacia") {
        document.getElementById("veredicto").innerHTML = "<em>Por favor elige una opción y presiona 'Siguiente'.</em><br/>";
    } else if (JSON.stringify(respuestas[respuesta][2])===JSON.stringify(cajetines)) {
        document.getElementById("veredicto").innerHTML = "¡La respuesta es <em>correcta</em>!<br/>"; 
    } else {
        document.getElementById("veredicto").innerHTML = "La respuesta es <strong>incorrecta</strong><br/>Prueba otra vez:";
    }
        
    var mensaje = document.getElementById("mensaje").innerHTML;
    if ( mensaje === "Por favor elige una o varias filas para repasar.") {
        document.getElementById("mensaje").innerHTML = " ";
    }
}
function resetear() {
    //Desmarca todas las checkboxes y resetea la lista "cajetines"
    var cajetinesInput = document.getElementById('cajetinesInput');
    var puntos = cajetinesInput.getElementsByTagName('input');
    for (var i=0; i<(puntos.length); i++) {
        puntos[i].checked = false;
    }

    cajetines = [0,0,0,0,0,0];
}

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
}

// Al presionar enter se activa evaluar().
document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        evaluar();
    } else if (event.key.toLowerCase() === 's') {
        // La tecla "s" activa "siguiente"
        siguiente();
    }
});

resetear();
