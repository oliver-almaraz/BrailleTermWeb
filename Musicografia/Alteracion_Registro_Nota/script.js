var cajetines = {1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 3:[0,0,1,0,0,1]}; //Lista que los checkboxes modifican
var numeroAnterior = 0; //Valor numérico de la nota actual

// Notas (los puntos 3 y 6 siempre seleccionados porque se refieren a la duración)
const c = [1,0,1,1,1,1];
const d = [1,0,1,0,1,1];
const e = [1,1,1,1,0,1];
const f = [1,1,1,1,1,1];
const g = [1,1,1,0,1,1];
const a = [0,1,1,1,0,1];
const b = [0,1,1,1,1,1];

// Alteraciones
const natural = [0,0,0,0,0,0];
const sostenido = [1,0,0,1,0,1];
const bemol = [1,1,0,0,0,1];
const becuadro = [1,0,0,0,0,1];

// Registros (octava, Do central = 5)
const reg3 = [0,0,0,1,1,0];
const reg4 = [0,0,0,1,1,1];
const reg5 = [0,0,0,0,1,0];
const reg6 = [0,0,0,1,0,1];
const reg7 = [0,0,0,0,1,1];

const respuestas = {
    1 : {1:natural, 2:reg3, 3:c},
    2 : {1:sostenido, 2:reg3, 3:c},
    3 : {1:natural, 2:reg3, 3:d},
    4 : {1:becuadro, 2:reg3, 3:e},
    5 : {1:natural, 2:reg3, 3:e},
    6 : {1:natural, 2:reg3, 3:f},
    7 : {1:sostenido, 2:reg3, 3:f},
    8 : {1:natural, 2:reg3, 3:g},
    9 : {1:bemol, 2:reg3, 3:a},
    10 : {1:natural, 2:reg3, 3:a},
    11 : {1:becuadro, 2:reg3, 3:a},
    12 : {1:natural, 2:reg3, 3:b},

    13 : {1:natural, 2:reg4, 3:c},
    14 : {1:becuadro, 2:reg4, 3:d},
    15 : {1:natural, 2:reg4, 3:d},
    16 : {1:sostenido, 2:reg4, 3:d},
    17 : {1:natural, 2:reg4, 3:e},
    18 : {1:natural, 2:reg4, 3:f},
    19 : {1:bemol, 2:reg4, 3:g},
    20 : {1:natural, 2:reg4, 3:g},
    21 : {1:becuadro, 2:reg4, 3:g},
    22 : {1:natural, 2:reg4, 3:a},
    23 : {1:sostenido, 2:reg4, 3:a},
    24 : {1:natural, 2:reg4, 3:b},

    25 : {1:natural, 2:reg5, 3:c},
    26 : {1:becuadro, 2:reg5, 3:c},
    27 : {1:natural, 2:reg5, 3:d},
    28 : {1:bemol, 2:reg5, 3:e},
    29 : {1:natural, 2:reg5, 3:e},
    30 : {1:natural, 2:reg5, 3:f},
    31 : {1:sostenido, 2:reg5, 3:f},
    32 : {1:natural, 2:reg5, 3:g},
    33 : {1:bemol, 2:reg5, 3:a},
    34 : {1:natural, 2:reg5, 3:a},
    35 : {1:becuadro, 2:reg5, 3:a},
    36 : {1:natural, 2:reg5, 3:b},

    37 : {1:natural, 2:reg6, 3:c},
    38 : {1:becuadro, 2:reg6, 3:d},
    39 : {1:natural, 2:reg6, 3:d},
    40 : {1:sostenido, 2:reg6, 3:d},
    41 : {1:natural, 2:reg6, 3:e},
    42 : {1:natural, 2:reg6, 3:f},
    43 : {1:bemol, 2:reg6, 3:g},
    44 : {1:natural, 2:reg6, 3:g},
    45 : {1:becuadro, 2:reg6, 3:g},
    46 : {1:natural, 2:reg6, 3:a},
    47 : {1:bemol, 2:reg6, 3:b},
    48 : {1:natural, 2:reg6, 3:b},

    49 : {1:natural, 2:reg7, 3:c}
}

function NumAleatorio() {
    //Retorna un número entero aleatorio entre 1 y 49
    return Math.floor(Math.random() * (50 - 1) ) + 1;
}
function evaluar() {
    if(JSON.stringify(respuestas[numeroAnterior][1])===JSON.stringify(cajetines[1])) {
        document.getElementById("veredictoAlteracion").innerHTML = "¡La alteración es <em>correcta</em>!"; 
    } else {
        document.getElementById("veredictoAlteracion").innerHTML = "La alteración es <strong>incorrecta</strong>";
    }
    if(JSON.stringify(respuestas[numeroAnterior][2])===JSON.stringify(cajetines[2])) {
        document.getElementById("veredictoOctava").innerHTML = "¡La octava es <em>correcta</em>!"; 
    } else {
        document.getElementById("veredictoOctava").innerHTML = "La octava es <strong>incorrecta</strong>";
    }
    if(JSON.stringify(respuestas[numeroAnterior][3])===JSON.stringify(cajetines[3])) {
        document.getElementById("veredictoNota").innerHTML = "¡La nota es <em>correcta</em>!"; 
    } else {
        document.getElementById("veredictoNota").innerHTML = "La nota es <strong>incorrecta</strong>";
    }
}
function resetear() {
    //Desmarca todas las checkboxes y resetea la lista "cajetines"
    var cajetinesInput = document.getElementById('cajetinesInput');
    var puntos = cajetinesInput.getElementsByTagName('input');
    for (var i=0; i<16; i++) {
        puntos[i].checked = false;
    }
    puntos[16].checked = true;
    puntos[17].checked = true;
    cajetines = {1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 3:[0,0,1,0,0,1]};
}
function cb(cajetin, punto) {
    //Cada acción de un checkbox modifica la lista "cajetines"
    if (cajetines[cajetin][punto - 1] === 0) {
        cajetines[cajetin][punto - 1] = 1;
    } else if (cajetines[cajetin][punto - 1] === 1) {
        cajetines[cajetin][punto - 1] = 0;
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

    document.getElementById("veredictoAlteracion").innerHTML = "⠀"
    document.getElementById("veredictoOctava").innerHTML = "<em>¿Y ahora?</em>"
    document.getElementById("veredictoNota").innerHTML = "⠀"
}

//Al abrir o recargar la página:
resetear() //Por si el navegador guardó la última jugada
siguiente()
document.getElementById("veredictoAlteracion").innerHTML = "Escribe el signo braille correcto para cada nota, luego presiona <em>Evaluar</em> o 'Enter'."
document.getElementById("veredictoOctava").innerHTML = "Cuando tu resultado sea correcto, presiona <em>Siguiente</em> o la tecla para punto ' <em>.</em> ' para mostrar una nueva nota."
document.getElementById("veredictoNota").innerHTML = "Si la nota no tiene ninguna alteración, deja el primer cajetín vacío."

document.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        evaluar();
    } else if (event.key === '.') {
        // La tecla "." activa "siguiente"
        siguiente();
    }
});