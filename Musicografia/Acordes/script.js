var cajetines = {    /* Lista que los checkboxes modifican */
    /* Derecha */
    1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0], 
    /* Izquierda */
    3:[0,0,0,0,0,0], 4:[0,0,0,0,0,0]
};

var numeroAnterior = 0; //Valor numérico de la nota actual

// Intervalos
const segunda = [0,0,1,1,0,0];
const tercera = [0,0,1,1,0,1];
const cuarta = [0,0,1,1,1,1];
const quinta = [0,0,1,0,1,0];
const sexta = [0,0,1,0,1,1];
const septima = [0,1,0,0,1,0];
const octava = [0,0,1,0,0,1];

// Alteraciones
const sostenido = [1,0,0,1,0,1];
const bemol = [1,1,0,0,0,1];
const becuadro = [1,0,0,0,0,1];

const respuestas = {
    1 : {1:segunda, 2:sexta, 3:quinta, 4:octava},
    2 : {1:cuarta, 2:sexta, 3:tercera, 4:septima},
    3 : {1:cuarta, 2:sexta, 3:tercera, 4:sexta},
    4 : {1:cuarta, 2:sexta, 3:tercera, 4:quinta},
    5 : {1:tercera, 2:sexta, 3:segunda, 4:cuarta},
    6 : {1:tercera, 2:cuarta, 3:tercera, 4:quinta},
    7 : {1:quinta, 2:octava, 3:segunda, 4:cuarta},
    8 : {1:sexta, 2:octava, 3:tercera, 4:cuarta},
    9 : {1:tercera, 2:sexta, 3:segunda, 4:octava},
    10 : {1:septima, 2:octava, 3:tercera, 4:quinta},
    11 : {1:sexta, 2:septima, 3:tercera, 4:cuarta},
    12 : {1:sexta, 2:octava, 3:tercera, 4:quinta},
    13 : {1:quinta, 2:octava, 3:sexta, 4:octava},
    14 : {1:quinta, 2:septima, 3:cuarta, 4:octava},

    15 : {1:bemol, 2:cuarta, 3:bemol, 4:tercera},
    16 : {1:bemol, 2:sexta, 3:bemol, 4:quinta},
    17 : {1:sostenido, 2:quinta, 3:becuadro, 4:quinta},
    18 : {1:becuadro, 2:quinta, 3:bemol, 4:quinta},
    19 : {1:bemol, 2:cuarta, 3:bemol, 4:quinta},
    20 : {1:bemol, 2:segunda, 3:bemol, 4:tercera},
    21 : {1:sostenido, 2:sexta, 3:sostenido, 4:tercera},
    22 : {1:sostenido, 2:septima, 3:becuadro, 4:tercera},
    23 : {1:sostenido, 2:octava, 3:becuadro, 4:tercera},
    24 : {1:becuadro, 2:cuarta, 3:bemol, 4:segunda}
}
function NumAleatorio() {
    //Retorna un número entero aleatorio entre 1 y 24
    return Math.floor(Math.random() * (25 - 1) ) + 1;
}
function evaluar() {
    if (JSON.stringify(respuestas[numeroAnterior][1])===JSON.stringify(cajetines[1]) &&
        JSON.stringify(respuestas[numeroAnterior][2])===JSON.stringify(cajetines[2])) {
            document.getElementById("veredictoDerecha").innerHTML = "¡La mano derecha es <em>correcta</em>!"; 
        } else {
            document.getElementById("veredictoDerecha").innerHTML = "La mano derecha es <strong>incorrecta</strong>";
        }
    if (JSON.stringify(respuestas[numeroAnterior][3])===JSON.stringify(cajetines[3]) &&
        JSON.stringify(respuestas[numeroAnterior][4])===JSON.stringify(cajetines[4])) {
            document.getElementById("veredictoIzquierda").innerHTML = "¡La mano izquierda es <em>correcta</em>!"; 
        } else {
            document.getElementById("veredictoIzquierda").innerHTML = "La mano izquierda es <strong>incorrecta</strong>";
        }
}
function resetear() {
    //Desmarca todas las checkboxes y resetea la lista "cajetines"
    var cajetinesInput = document.getElementById('cajetinesInput');
    var puntos = cajetinesInput.getElementsByTagName('input');
    for (var i=0; i<(puntos.length); i++) {
        puntos[i].checked = false;
    }
    cajetinesDerecha = {1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0]};
    cajetinesIzquierda = {1:[0,0,0,0,0,0], 2:[0,0,0,0,0,0]};
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

    document.getElementById("veredictoDerecha").innerHTML = "<em>¿Y ahora?</em>"
    document.getElementById("veredictoIzquierda").innerHTML = "⠀"
}

//Al abrir o recargar la página:
resetear() //Por si el navegador guardó la última jugada
siguiente()
document.getElementById("veredictoDerecha").innerHTML = "Escribe el signo correcto para cada intervalo, luego presiona <em>Evaluar</em>."
document.getElementById("veredictoIzquierda").innerHTML = "Cuando tu resultado sea correcto, presiona <em>Siguiente</em> para mostrar un nuevo acorde."
alert("Para la mano derecha, anota los intervalos con respecto a la nota superior de arriba abajo (la alteración va antes si está escrita).\nPara la izquierda, anótalos de abajo arriba con respecto a la nota inferior.\n\n(Para más información, hasta abajo en la página puedes encontrar el enlace al manual introductorio a la musicografía braille de la ONCE)");