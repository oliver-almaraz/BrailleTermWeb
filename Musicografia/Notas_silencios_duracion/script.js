var cajetines = [0,0,0,0,0,0]; //Lista que los checkboxes modifican
var numeroAnterior = 0; //Valor numérico de la nota actual

const respuestas = {
    1 : [1,0,1,1,1,1], //Do redonda...
    2 : [1,0,1,0,1,1],
    3 : [1,1,1,1,0,1],
    4 : [1,1,1,1,1,1],
    5 : [1,1,1,0,1,1],
    6 : [0,1,1,1,0,1],
    7 : [0,1,1,1,1,1], //Si redonda

    8 : [1,0,1,1,1,0], //Do blanca...
    9 : [1,0,1,0,1,0],
    10 : [1,1,1,1,0,0],
    11 : [1,1,1,1,1,0],
    12 : [1,1,1,0,1,0],
    13 : [0,1,1,1,0,0],
    14 : [0,1,1,1,1,0],

    15 : [1,0,0,1,1,1], //Do negra
    16 : [1,0,0,0,1,1],
    17 : [1,1,0,1,0,1],
    18 : [1,1,0,1,1,1],
    19 : [1,1,0,0,1,1],
    20 : [0,1,0,1,0,1],
    21 : [0,1,0,1,1,1],

    22 : [1,0,0,1,1,0], //Do corchea
    23 : [1,0,0,0,1,0],
    24 : [1,1,0,1,0,0],
    25 : [1,1,0,1,1,0],
    26 : [1,1,0,0,1,0],
    27 : [0,1,0,1,0,0],
    28 : [0,1,0,1,1,0],

    29 : [1,0,1,1,1,1], //Do semicorchea (es igual a Do redonda)
    30 : [1,0,1,0,1,1],
    31 : [1,1,1,1,0,1],
    32 : [1,1,1,1,1,1],
    33 : [1,1,1,0,1,1],
    34 : [0,1,1,1,0,1],
    35 : [0,1,1,1,1,1],

    36 : [1,0,1,1,0,0], //Silencio de redonda
    37 : [1,0,1,0,0,1], //S. de blanca
    38 : [1,1,1,0,0,1], //S. de negra
    39 : [1,0,1,1,0,1], //S. de corchea
    40 : [1,0,1,1,0,0]  //S. de semicorchea (igual que el de redonda)
}

function NumAleatorio() {
    //Retorna un número entero aleatorio entre 1 y 40
    return Math.floor(Math.random() * (41 - 1) ) + 1;
}
function evaluar() {
    if(JSON.stringify(respuestas[numeroAnterior])===JSON.stringify(cajetines)) {
        document.getElementById("veredicto").innerHTML = "¡La respuesta es <em>correcta</em>!"; 
    } else {
        document.getElementById("veredicto").innerHTML = "La respuesta es <strong>incorrecta</strong>";
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
function cb(punto) {
    //Cada acción de un checkbox modifica la lista "cajetines"
    if (cajetines[punto - 1] === 0) {
        cajetines[punto - 1] = 1;
    } else if (cajetines[punto - 1] === 1) {
        cajetines[punto - 1] = 0;
    }
}
function siguiente() {
    var num = NumAleatorio();
    while (num === numeroAnterior) {
        //Este bucle evitará presentar la misma letra dos veces seguidas.
        num = NumAleatorio()
    }
    numeroAnterior = num;
    document.getElementById("imagen").src = 'Notas/' + num + '.svg';
    resetear();

    document.getElementById("veredicto").innerHTML = "<em>¿Y ahora?</em>"
}

//Al abrir o recargar la página:
resetear() //Por si el navegador guardó la última jugada
siguiente()
document.getElementById("veredicto").innerHTML = "Escribe el signo braille correcto para cada nota, luego presiona <em>Evaluar</em> o 'Enter'.\
    <br/>Para mostrar una nueva letra presiona <em>Siguiente</em> o 's'."

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) /*Enter*/{
        evaluar();
    } else if (event.keyCode === 83 /*s*/) {
        // La tecla "s" activa "siguiente"
        siguiente();
    }
});