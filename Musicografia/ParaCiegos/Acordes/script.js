var numeroAnterior = 0; //Valor numérico de la nota actual
var contador = 0; //Solo muestra las instrucciones la primera vez.

// Notas (redondas)
const c = "fjksl";
const d = "fksl";
const e = "dfjsl";
const f = "dfjksl";
const g = "dfksl";
const a = "djsl";
const b = "djksl";

// Intervalos
const segunda = "sj";
const tercera = "sjl";
const cuarta = "sjkl";
const quinta = "sk";
const sexta = "skl";
const septima = "dk";
const octava = "sl";

// Alteraciones
const sostenido = "fjl";
const bemol = "fdl";
const becuadro = "fl";

// Registros (octava, Do central = 5)
const reg3 = "kj";
const reg4 = "ljk";
const reg5 = "k";
const reg6 = "jl";

const respuestas = {
    1 : reg6+c+segunda+sexta+" "+reg4+c+quinta+octava,
    2 : reg6+c+cuarta+sexta+" "+reg4+c+tercera+septima,
    3 : reg6+d+cuarta+sexta+" "+reg4+d+tercera+sexta,
    4 : reg5+a+cuarta+sexta+" "+reg4+d+tercera+quinta,
    5 : reg5+a+tercera+sexta+" "+reg4+e+segunda+cuarta,
    6 : reg5+g+tercera+cuarta+" "+reg4+e+tercera+quinta,

    7 : reg6+d+quinta+octava+" "+reg4+f+segunda+cuarta,
    8 : reg6+d+sexta+octava+" "+reg4+f+tercera+cuarta,
    9 : reg6+e+tercera+sexta+" "+reg4+g+segunda+octava,
    10 : reg6+e+septima+octava+" "+reg4+g+tercera+quinta,
    11 : reg6+d+sexta+septima+" "+reg4+a+tercera+cuarta,
    12 : reg6+e+sexta+octava+" "+reg4+a+tercera+quinta,

    13 : reg6+d+quinta+octava+" "+reg3+b+sexta+octava,
    14 : reg6+d+quinta+septima+" "+reg3+b+cuarta+octava,
    15 : reg6+c+bemol+cuarta+" "+reg4+c+bemol+tercera,
    16 : reg6+c+bemol+sexta+" "+reg4+c+bemol+quinta,
    17 : reg6+c+sostenido+quinta+" "+reg4+d+becuadro+quinta,
    18 : reg6+c+becuadro+quinta+" "+reg4+d+bemol+quinta,

    19 : reg6+c+bemol+cuarta+" "+bemol+reg4+e+bemol+quinta,
    20 : bemol+reg5+b+bemol+segunda+" "+bemol+reg4+g+bemol+tercera,
    21 : sostenido+reg6+c+sostenido+sexta+" "+sostenido+reg4+f+sostenido+tercera,
    22 : reg6+c+sostenido+septima+" "+reg4+f+becuadro+tercera,
    23 : sostenido+reg6+d+sostenido+octava+" "+sostenido+reg4+g+becuadro+tercera,
    24 : reg5+b+becuadro+cuarta+" "+reg4+g+bemol+segunda
}
function NumAleatorio() {
    //Retorna un número entero aleatorio entre 1 y 24
    return Math.floor(Math.random() * (25 - 1) ) + 1;
}
function evaluar() {
    var respuestaOrdenada = respuestas[numeroAnterior].split('').sort().join('');
    var inputOrdenado = document.getElementById("respuesta").value.split('').sort().join('');

    if(respuestaOrdenada === inputOrdenado) { //Respuesta correcta
        siguiente();
        if (contador === 0) { //Solo muestra las instrucciones la primera vez.
            alert('¡Correcto!\nPresiona "Enter" para continuar y luego presiona "a" para escuchar un nuevo acorde. Después escribe tu respuesta otra vez y presiona "Enter" para enviarla.');
            contador++;
        } else if (contador >= 1) {
            alert('¡Correcto!\n¿continuar?')
        }
    } else { //respuesta incorrecta
        if (contador === 0) {
            alert('La respuesta es incorrecta, prueba otra vez.\nPresiona "Enter" para continuar y luego presiona "a" para escuchar el acorde de nuevo. Después escribe tu respuesta otra vez y presiona "Enter" para enviarla.');
            contador++
        } else if (contador >=1) {
        alert('La respuesta es incorrecta, prueba otra vez.');
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
    document.getElementById("audio").src = `./audio/${numeroAnterior}.mp3`;
    resetear();
}

//Al abrir o recargar la página:
resetear() //Por si el navegador guardó la última jugada
siguiente()

/* Al presionar 'enter' después de escribir en la casilla de input se activa el botón 'Evaluar',
   y al presionar "a" se reproduce el audio */
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("evaluar").click();
    } else if (event.keyCode === 65 || event.keyCode === 229 ) {
        // Se eliminan las "a" de la casilla de input.
        var respuestaInput= document.getElementById("respuesta").value;
        document.getElementById("respuesta").value = respuestaInput.replace(/a/gi, '');
        // Y luego se reproduce el audio
        document.getElementById("audio").play();
    } else if (event.keyCode === 59) {
        // La tecla "ñ" activa "siguiente"
        document.getElementById("siguiente").click();
    }
});


