var numeroAnterior = 0; //Valor numérico de la nota actual
var contador = 0; //Solo muestra las instrucciones la primera vez.

// Notas (en corcheas)
const c = "fjk";
const d = "fk";
const e = "dfj";
const f = "dfjk";
const g = "dfk";
const a = "dj";
const b = "djk";

// Alteraciones
const sostenido = "fjl";
const bemol = "dfl";
const becuadro = "fl";

// Registros (octava, Do central = 5)
const reg3 = "kj";
const reg4 = "ljk";
const reg5 = "k";
const reg6 = "jl";
const reg7 = "kl";

const respuestas = {
    1 : {1:`${reg3}${c}`, 2:"Do 3"},
    2 : {1:`${sostenido}${reg3}${c}`, 2:"Do sostenido 3"},
    3 : {1:`${reg3}${d}`, 2: "Re 3"},
    4 : {1:`${becuadro}${reg3}${e}`, 2:"Mi becuadro 3"},
    5 : {1:`${reg3}${e}`, 2:"Mi 3"},
    6 : {1:`${reg3}${f}`, 2:"Fa 3"},
    7 : {1:`${sostenido}${reg3}${f}`, 2:"Fa sostenido 3"},
    8 : {1:`${reg3}${g}`, 2:"Sol 3"},
    9 : {1:`${bemol}${reg3}${a}`, 2:"La bemol 3"},
    10 : {1:`${reg3}${a}`, 2:"La 3"},
    11 : {1:`${becuadro} ${reg3}${a}`, 2:"La becuadro 3"},
    12 : {1:`${reg3}${b}`, 2:"Si 3"},

    13 : {1:`${reg4}${c}`, 2:"Do 4"},
    14 : {1:`${becuadro}${reg4}${d}`, 2:"Re becuadro 4"},
    15 : {1:`${reg4}${d}`, 2:"Re 4"},
    16 : {1:`${sostenido}${reg4}${d}`, 2:"Re sostenido 4"},
    17 : {1:`${reg4}${e}`, 2:"Mi 4"},
    18 : {1:`${reg4}${f}`, 2:"Fa 4"},
    19 : {1:`${bemol}${reg4}${g}`, 2:"Sol bemol 4"},
    20 : {1:`${reg4}${g}`, 2:"Sol 4"},
    21 : {1:`${becuadro}${reg4}${g}`, 2:"Sol becuadro 4"},
    22 : {1:`${reg4}${a}`, 2:"La 4"},
    23 : {1:`${sostenido}${reg4}${a}`, 2:"La sostenido 4"},
    24 : {1:`${reg4}${b}`, 2:"Si 4"},

    25 : {1:`${reg5}${c}`, 2:"Do 5"},
    26 : {1:`${becuadro}${reg5}${c}`, 2:"Do becuadro 5"},
    27 : {1:`${reg5}${d}`, 2:"Re 5"},
    28 : {1:`${bemol}${reg5}${e}`, 2:"Mi bemol 5"},
    29 : {1:`${reg5}${e}`, 2:"Mi 5"},
    30 : {1:`${reg5}${f}`, 2:"Fa 5"},
    31 : {1:`${sostenido}${reg5}${f}`, 2:"Fa sostenido 5"},
    32 : {1:`${reg5}${g}`, 2:"Sol 5"},
    33 : {1:`${bemol}${reg5}${a}`, 2:"La bemol 5"},
    34 : {1:`${reg5}${a}`, 2:" La 5"},
    35 : {1:`${becuadro}${reg5}${a}`, 2:"La becuadro 5"},
    36 : {1:`${reg5}${b}`, 2:"Si 5"},

    37 : {1:`${reg6}${c}`, 2:"Do 6"},
    38 : {1:`${becuadro}${reg6}${d}`, 2:"Re becuadro 6"},
    39 : {1:`${reg6}${d}`, 2:"Re 6"},
    40 : {1:`${sostenido}${reg6}${d}`, 2:"Re sostenido 6"},
    41 : {1:`${reg6}${e}`, 2:"Mi 6"},
    42 : {1:`${reg6}${f}`, 2:"Fa 6"},
    43 : {1:`${bemol}${reg6}${g}`, 2:"Sol bemol 6"},
    44 : {1:`${reg6}${g}`, 2:"Sol 6"},
    45 : {1:`${becuadro}${reg6}${g}`, 2:"Sol becuadro 6"},
    46 : {1:`${reg6}${a}`, 2:"La 6"},
    47 : {1:`${bemol}${reg6}${b}`, 2:"Si bemol 6"},
    48 : {1:`${reg6}${b}`, 2:"Si 6"},

    49 : {1:`${reg7}${c}`, 2:"Do 7"}
}
function NumAleatorio() {
    //Retorna un número entero aleatorio entre 1 y 49
    return Math.floor(Math.random() * (50 - 1) ) + 1;
}
function evaluar() {
    var respuestaOrdenada = respuestas[numeroAnterior][1].split('').sort().join('');
    var inputOrdenado = document.getElementById("respuesta").value.split('').sort().join('');

    if(respuestaOrdenada === inputOrdenado) { //Respuesta correcta
        siguiente();
        if (contador === 0) { //Solo muestra las instrucciones la primera vez.
            alert(`¡Correcto!\nAhora ¿cuál es el signo braille para ${respuestas[numeroAnterior][2]}?\n(Presiona "Enter" para continuar y escribe tu respuesta, luego presiona otra vez "Enter" para enviar tu respuesta)`);
            contador++;
        } else if (contador >= 1) {
            alert(`¡Correcto!\nAhora ¿cuál es el signo braille para ${respuestas[numeroAnterior][2]}?`)
        }
    } else if (inputOrdenado.length <4) { //Si el teclado convirtió el input a un solo signo unicode braille
        alert('Por favor verifica que al escribir con tu teclado como Perkins se escriban las letras del teclado y no el signo braille. Es decir, al escribir el signo para "Do redonda" tu teclado debe escribir "f,s,j,k,l" y no "y".');
    } else { //respuesta incorrecta
        if (contador === 0) {
            alert(`La respuesta es incorrecta, prueba otra vez.\n¿Cuál es el signo braille para ${respuestas[numeroAnterior][2]}?\n(Presiona "Enter" para continuar y escribe tu respuesta, luego presiona otra vez "Enter" para enviar tu respuesta)`);
            contador++
        } else if (contador >=1) {
        alert(`La respuesta es incorrecta, prueba otra vez.\n¿Cuál es el signo braille para ${respuestas[numeroAnterior][2]}?\n`);
        }
        resetear();
    }
}
function resetear() {document.getElementById("respuesta").value= ""}
function siguiente() {
    var num = NumAleatorio();
    while (num === numeroAnterior) {
        //Este bucle evitará presentar la misma letra dos veces seguidas.
        num = NumAleatorio()
    }
    numeroAnterior = num;
    document.getElementById("nota").innerHTML= `¿Cuál es el signo braille para ${respuestas[numeroAnterior][2]}?`;
    resetear();
}

//Al abrir o recargar la página:
resetear() //Por si el navegador guardó la última jugada
siguiente()
// Al presionar enter después de escribir en la casilla de input se activa el botón 'Evaluar'.
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("evaluar").click();
    } else if (event.keyCode === 59) {
        // La tecla "ñ" activa "siguiente"
        document.getElementById("siguiente").click();
    }
});