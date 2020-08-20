var numeroAnterior = 0; //Valor numérico de la nota actual

const respuestas = {
    1 : {1:'Do redonda', 2:'sfjkl'},
    2 : {1:'Re redonda', 2:'fskl'},
    3 : {1:'Mi redonda', 2:'dsfjl'},
    4 : {1:'Fa redonda', 2:'dfsjkl'},
    5 : {1:'Sol redonda', 2:'dfskl'},
    6 : {1:'La redonda', 2:'dsjl'},
    7 : {1:'Si redonda', 2:'sdklj'},

    8 : {1:'Do blanca', 2:'sfjk'},
    9 : {1:'Re blanca', 2:'sfk'},
    10 : {1:'Mi blanca', 2:'dsfj'},
    11 : {1:'Fa blanca', 2:'dfskj'},
    12 : {1:'Sol blanca', 2:'dfsk'},
    13 : {1:'La blanca', 2:'sdj'},
    14 : {1:'Si blanca', 2:'dsjk'},

    15 : {1:'Do negra', 2:'fljk'},
    16 : {1:'Re negra', 2:'fkl'},
    17 : {1:'Mi negra', 2:'dslj'},
    18 : {1:'Fa negra', 2:'dsljk'},
    19 : {1:'Sol negra', 2:'dskl'},
    20 : {1:'La negra', 2:'djl'},
    21 : {1:'Si negra', 2:'dlkj'},

    22 : {1:'Do corchea', 2:'fjk'},
    23 : {1:'Re corchea', 2:'fk'},
    24 : {1:'Mi corchea', 2:'dfj'},
    25 : {1:'Fa corchea', 2:'dfkj'},
    26 : {1:'Sol corchea', 2:'fdk'},
    27 : {1:'La corchea', 2:'dj'},
    28 : {1:'Si corchea', 2:'djk'},

    29 : {1:'Do semicorchea', 2:'fsljk'}, //Do semicorchea (es igual a Do redonda)
    30 : {1:'Re semicorchea', 2:'sfkl'},
    31 : {1:'Mi semicorchea', 2:'dfsjl'},
    32 : {1:'Fa semicorchea', 2:'dfsljk'},
    33 : {1:'Sol semicorchea', 2:'dsfkl'},
    34 : {1:'La semicorchea', 2:'dslj'},
    35 : {1:'Si semicorchea', 2:'dsljk'},

    36 : {1:'Silencio de redonda', 2:'fsj'}, //Silencios
    37 : {1:'Silencio de blanca', 2:'sfl'},
    38 : {1:'Silencio de negra', 2:'sdfl'},
    39 : {1:'Silencio de corchea', 2:'sflj'},
    40 : {1:'Silencio de semicorchea', 2:'sfj'}  //S. de semicorchea (igual que el de redonda)
}
function NumAleatorio() {
    //Retorna un número entero aleatorio entre 1 y 40
    return Math.floor(Math.random() * (41 - 1) ) + 1;
}
function evaluar() {
    var respuestaOrdenada = respuestas[numeroAnterior][2].split('').sort().join('');
    var inputOrdenado = document.getElementById("respuesta").value.split('').sort().join('');
    if(respuestaOrdenada === inputOrdenado) {
        alert("¡La respuesta es correcta!");
        siguiente();
    } else if (inputOrdenado.length = 1) { //Si el teclado convirtió el input a un solo signo unicode braille
        alert('Por favor verifica que al escribir con tu teclado como Perkins se escriban las letras del teclado y no el signo braille. Es decir, al escribir el signo para "Do blanca" tu teclado debe escribir "fsjkl" y no "y".')
    } else {
        alert("La respuesta es incorrecta, prueba otra vez:");
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
    document.getElementById("nota").innerHTML= `¿Cuál es el signo braille para ${respuestas[numeroAnterior][1]}?`;
    resetear();
}

//Al abrir o recargar la página:
resetear() //Por si el navegador guardó la última jugada
siguiente()
// Al presionar enter después de escribir en la casilla de input se activa el botón 'Evaluar'.
var inputField = document.getElementById("respuesta");
inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("evaluar").click();
    }
});