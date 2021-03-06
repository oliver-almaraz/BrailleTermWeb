var rango = [0,0]; //Rango para generar un número/letra aleatorios.
var respuesta = "vacia"; //Lista para almacenar la última letra presentada.

const todasLasFilas = {
    //Primera fila (a-j // 1-10)
    1:["a","<br/>O ·<br/>· ·<br/>· ·<br/>"],2:["b","<br/>O ·<br/>O ·<br/>· ·<br/>"],3:["c","<br/>O O<br/>· ·<br/>· ·<br/>"],4:["d","<br/>O O<br/>· O<br/>· ·<br/>"],5:["e","<br/>O ·<br/>· O<br/>· ·<br/>"],6:["f","<br/>O O<br/>O ·<br/>· ·<br/>"],7:["g","<br/>O O<br/>O O<br/>· ·<br/>"],8:["h","<br/>O ·<br/>O O<br/>· ·<br/>"],9:["i","<br/>· O<br/>O ·<br/>· ·<br/>"],10:["j","<br/>· O<br/>O O<br/>· ·<br/>"],
    //Segunda fila (k-t // 11-20)
    11:["k","<br/>O ·<br/>· ·<br/>O ·<br/>"],12:["l","<br/>O ·<br/>O ·<br/>O ·<br/>"],13:["m","<br/>O O<br/>· ·<br/>O ·<br/>"],14:["n","<br/>O O<br/>· O<br/>O ·<br/>"],15:["o","<br/>O ·<br/>· O<br/>O ·<br/>"],16:["p","<br/>O O<br/>O ·<br/>O ·<br/>"],17:["q","<br/>O O<br/>O O<br/>O ·<br/>"],18:["r","<br/>O ·<br/>O O<br/>O ·<br/>"],19:["s","<br/>· O<br/>O ·<br/>O ·<br/>"],20:["t","<br/>· O<br/>O O<br/>O ·<br/>"],
    //Tercera fila (u-z // 21-26)
    21:["u","<br/>O ·<br/>· ·<br/>O O<br/>"],22:["v","<br/>O ·<br/>O ·<br/>O O<br/>"],23:["w","<br/>· O<br/>O O<br/>· O<br/>"],24:["x","<br/>O O<br/>· ·<br/>O O<br/>"],25:["y","<br/>O O<br/>· O<br/>O O<br/>"],26:["z","<br/>O ·<br/>· O<br/>O O<br/>"],
    //Signos diacríticos (27-33)
    27:["ñ","<br/>O O<br/>O O<br/>· O<br/>"],28:["á","<br/>O ·<br/>O O<br/>O O<br/>"],29:["é","<br/>· O<br/>O ·<br/>O O<br/>"],30:["í","<br/>· O<br/>· ·<br/>O ·<br/>"],31:["ó","<br/>· O<br/>· ·<br/>O O<br/>"],32:["ú","<br/>· O<br/>O O<br/>O O<br/>"],33:["ü","<br/>O ·<br/>O O<br/>· O<br/>"],
    //Puntuación (34-43)
    34:[".","<br/>· ·<br/>· ·<br/>O ·<br/>"],35:[",","<br/>· ·<br/>O ·<br/>· ·<br/>"],36:[";","<br/>· ·<br/>O ·<br/>O ·<br/>"],37:[":","<br/>· ·<br/>O O<br/>· ·<br/>"],38:["?","<br/>· ·<br/>O ·<br/>· O<br/>"],39:["!","<br/>· ·<br/>O O<br/>O ·<br/>"],40:["(","<br/>O ·<br/>O ·<br/>· O<br/>"],41:[")","<br/>· O<br/>· O<br/>O ·<br/>"],42:["-","<br/>· ·<br/>· ·<br/>O O<br/>"],43:["*","<br/>· ·<br/>· O<br/>O ·<br/>"],
    //Números (44-53)
    44:["1","<br/>· O  O ·<br/>· O  · ·<br/>O O  · ·<br/>"],45:["2","<br/>· O  O ·<br/>· O  O ·<br/>O O  · ·<br/>"],46:["3","<br/>· O  O O<br/>· O  · ·<br/>O O  · ·<br/>"],47:["4","<br/>· O  O O<br/>· O  · O<br/>O O  · ·<br/>"],48:["5","<br/>· O  O ·<br/>· O  · O<br/>O O  · ·<br/>"],49:["6","<br/>· O  O O<br/>· O  O ·<br/>O O  · ·<br/>"],50:["7","<br/>· O  O O<br/>· O  O O<br/>O O  · ·<br/>"],51:["8","<br/>· O  O ·<br/>· O  O O<br/>O O  · ·<br/>"],52:["9","<br/>· O  · O<br/>· O  O ·<br/>O O  · ·<br/>"],53:["0","<br/>· O  · O<br/>· O  O O<br/>O O  · ·<br/>"]
}

function generarNumAleatorio(r1,r2) {
    //Retorna un número entero aleatorio entre r1 y r2 (ambos parámetros incluidos)
    return Math.floor(Math.random() * (r2 +1 - r1) ) + r1;
}

function generarLetra() {
    //Genera una letra al azar en el rango especificado.
    var num = generarNumAleatorio(rango[0],rango[1]);
    while (todasLasFilas[num][0] === respuesta) {
        //Este bucle evitará presentar la misma letra dos veces seguidas.
        num = generarNumAleatorio(rango[0],rango[1]);
    }
    respuesta = todasLasFilas[num][0]; //En 'respuesta' se almacena el valor que corresponde a la letra.
    document.getElementById("letraBraille").innerHTML = todasLasFilas[num][1]; // y en la Label se muestra el valor que corresponde al signo braille.
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
        document.getElementById("mensaje").innerHTML = "Para '¿?' y '¡!', escribe solo el signo que cierra.<br/>Es decir: solo '!' y '?'.";
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
        document.getElementById("mensaje").innerHTML = "Para '¿?' y '¡!', escribe solo el signo que cierra.<br/>Es decir: solo '!' y '?'.";
    } else if (seleccion === "1-6") {
        rango[0] = 1;
        rango[1] = 53;
        document.getElementById("mensaje").innerHTML = "Para '¿?' y '¡!', escribe solo el signo que cierra.<br/>Es decir: solo '!' y '?'.";
    } else if (seleccion === "none selected") {
        rango[0] = 0;
        rango[1] = 0;
        document.getElementById("mensaje").innerHTML = "Por favor elige una o varias filas para repasar.";
    }
    generarLetra();
    document.getElementById("veredicto").innerHTML = "<em>¿Qué letra, número, o signo de puntuación es?</em>";
    document.getElementById("respuesta").value = "";
}

function evaluar() {
    //Primero evalúa la respuesta y muestra el veredicto, luego genera una nueva letra si la respuesta fue correcta.    
    var inputRespuesta = document.getElementById("respuesta").value;
    if (respuesta === "vacia") {
        document.getElementById("veredicto").innerHTML = "<em>Por favor elige una opción y presiona 'Siguiente'.</em>";
    }
    else if (inputRespuesta == respuesta || inputRespuesta.toLowerCase() == respuesta) {
        document.getElementById("veredicto").innerHTML = "<em>¡Correcto!</em> ¿Y ahora?";
        generarLetra();
        document.getElementById("respuesta").value = "";
    } 
    else {
        document.getElementById("veredicto").innerHTML = `<strong>Incorrecto</strong>, la respuesta era '<em> ${respuesta} </em>'`;
    }
        
    var mensaje = document.getElementById("mensaje").innerHTML;
    if ( mensaje === "Por favor elige una o varias filas para repasar.") {
        document.getElementById("mensaje").innerHTML = " ";
    }
}

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
}

// Al presionar enter después de escribir en la casilla de input se activa el botón 'Evaluar'.
var inputField = document.getElementById("respuesta");
inputField.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        document.getElementById("evaluar").click();
    }
});
