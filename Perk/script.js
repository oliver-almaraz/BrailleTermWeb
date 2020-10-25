const braille = [ // Todas las combinaciones posibles de seis puntos ordenados según su representación Unicode
	//  	0 	  1 	2 	 3 	  4    5 	6 	 7     8    9    A     B    C    D    E 	F
/*U+280x*/ 	"⠀", "⠁", "⠂", "⠃", "⠄", "⠅", "⠆", "⠇", "⠈", "⠉", "⠊", "⠋", "⠌", "⠍", "⠎", "⠏",
/*U+281x*/ 	"⠐", "⠑", "⠒", "⠓", "⠔", "⠕", "⠖", "⠗", "⠘", "⠙", "⠚", "⠛", "⠜", "⠝", "⠞", "⠟",
/*U+282x*/ 	"⠠", "⠡", "⠢", "⠣", "⠤", "⠥", "⠦", "⠧", "⠨", "⠩", "⠪", "⠫", "⠬", "⠭", "⠮", "⠯",
/*U+283x*/ 	"⠰", "⠱", "⠲", "⠳", "⠴", "⠵", "⠶", "⠷", "⠸", "⠹", "⠺", "⠻", "⠼", "⠽", "⠾", "⠿"
];
const perk = [ // Equivalentes en combinación Perkins (f=punto 1, d=2, s=3, j=4, k=5, l=6) ordenados alfab.
//	 0	   1	  2	      3	 	 4		5	  	6		 7		 8	    9	    A		 B		 C		 D		   E		 F
	" ",  "f",   "d",   "df",   "s",   "fs",   "ds",   "dfs",   "j",   "fj",   "dj",   "dfj",   "js",   "fjs",   "djs",   "dfjs",
	"k",  "fk",  "dk",  "dfk",  "ks",  "fks",  "dks",  "dfks",  "jk",  "fjk",  "djk",  "dfjk",  "jks",  "fjks",  "djks",  "dfjks",
	"l",  "fl",  "dl",  "dfl",  "ls",  "fls",  "dls",  "dfls",  "jl",  "fjl",  "djl",  "dfjl",  "jls",  "fjls",  "djls",  "dfjls",
	"kl", "fkl", "dkl", "dfkl", "kls", "fkls", "dkls", "dfkls", "jkl", "fjkl", "djkl", "dfjkl", "jkls", "fjkls", "djkls", "dfjkls"
];
const alpha = [ /* Las letras que corresponden a un solo signo. Signos poco comunes,
 inexistentes en español, o que requieren más de un signo para interpretarse se ignoran ("�"). */
	   		" ", "a", ",", "b", ".", "k",  ";",  "l", "�",  "c", "i", "f", "í", "m",  "s", "p",
			"@", "e", ":", "h", "*", "o",  "!",  "r", "�",  "d", "j", "g", ")", "n",  "t", "q",
			"�", "�", "?", "(", "-", "u",  "\"", "v", "�",  "�", "�", "�", "ó", "x",  "é", "�",
			"�", "�", "�", "ü", "�", "z",  "=",  "á", "|",  "�", "w", "ñ", "�", "y",  "ú", "�"
];
const signosPuntNumer = [
	"+", "-", "*", "/", "="
]
const signosPuntNumerBrai = [
	"⠖", "⠤", "⠦", "⠴", "⠶"
]
const nums = [
  // a	b	c	d	 e	  f		g	h	  i	   j
	"⠁","⠃","⠉","⠙","⠑","⠋","⠛","⠓","⠊","⠚",
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];
const primeras10letras = ["a","b","c", "d", "e", "f", "g", "h", "i","j"];
const letrasPuntos = ['f','d','s','j','k','l',' '];
var MAYUS = false;
var NUMERAL = false;

function convertir(input) {
    var textoBrai = document.getElementById("outputBraille");
	var texto = document.getElementById("outputTexto");

    // Se ordena el input alfabéticamente y se pasa a lowercase:
	input = input.split('').sort().join('').toLowerCase();
	document.getElementById("input").value = "";
	document.getElementById("input").focus();

    // Los espacios pasan tal cual
    if (input == " ") {
        textoBrai.value += braille[0];
        texto.value +=  " ";
		NUMERAL = false;
		return 0;
    }
     else if (input == "jl") { // Signo de mayúscula
		MAYUS = true;
		NUMERAL = false;
		textoBrai.value += braille[40];
      	return 0;
    }
     else if (input == "jkls") { // Numeral
		NUMERAL = true;
		MAYUS = false; // Previene un error del usuario
      	textoBrai.value += braille[60];
		return 0;
    }
    // else...
    /***********************************
	 * SI ES UNA LETRA O NÚMERO BRAILLE
	************************************/

	for (var i = 0; i <= 64; i++) {
		if (input == perk[i]) {
			// Se añade el signo braille a textoBrai
			textoBrai.value += braille[i];

			// Y se añade el signo del alfabeto a 'OutputTexto':

			// Si es el punto 5 seguido de números
			if (NUMERAL && i == 16) {
				NUMERAL = 0;
			}
			 else if (MAYUS) {
				texto.value += alpha[i].toUpperCase();
				MAYUS = 0;
				NUMERAL = 0;
			}	
			 else if (NUMERAL && primeras10letras.indexOf(alpha[i]) > -1) {
				// Si NUMERAL está activado y la letra está en el rango a-j
				// se escribe un número
				for (var j=0; j<10; j++) {
					if (nums[j] == braille[i]) {
						texto.value += nums[j+10];
						return 0;
					}
				}
			} 
			 else if (NUMERAL && (signosPuntNumerBrai.indexOf(braille[i]) > -1) ) {
				// Si está activado numeral y se escribió un signo de punt. matemático
				for (var j=0; j<5; j++) {
					if (signosPuntNumerBrai[j] === braille[i]) {
						texto.value += signosPuntNumer[j];
						NUMERAL = false;
						return 0;
					}
				}
			}
			 else if (NUMERAL && primeras10letras.indexOf(alpha[i]) == -1) {
				// Si NUMERAL y se escribe una letra minus. fuera del rango a-j
				NUMERAL=0;
				texto.value += alpha[i];
			}
			 else {
				texto.value += alpha[i];
			}
		}
	}
	actualizarFlag();
};

function salto() {
	document.getElementById("outputBraille").value += "\n";
	document.getElementById("outputTexto").value += "\n";
	document.getElementById("input").focus();
	NUMERAL = false;
};
function tab() {
	document.getElementById("outputBraille").value += "\t";
	document.getElementById("outputTexto").value += "\t";
	document.getElementById("input").focus();
	NUMERAL = false;
};
function actualizarFlag() {
	// Se muestra en una label si MAYUS o NUMERAL están activados
	if (MAYUS)
		document.getElementById("flag").innerHTML = "<strong>MAYUS</strong>";
	else if (NUMERAL)
		document.getElementById("flag").innerHTML = "<strong>NUMS</strong>";
	else
		document.getElementById("flag").innerHTML = "⠀";
};

function borrarUna() {
	// Borra el último elemento de ambas partes

	let outputBraille = document.getElementById("outputBraille").value;
	let outputTexto = document.getElementById("outputTexto").value;

	if (outputBraille[outputBraille.length -1] === "⠨") {
		// Signo de mayus últmo en outputBraille
		document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
		MAYUS = false;
		actualizarFlag();
		return;
	} else if (outputBraille[outputBraille.length -1] === "⠼") {
		// Signo numeral últmo en outputBraille
		document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
		NUMERAL = false;
		actualizarFlag();
		return;
	}


	document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
	document.getElementById("outputTexto").value = outputTexto.substring(0, outputTexto.length - 1);

	outputBraille = document.getElementById("outputBraille").value;
	outputTexto = document.getElementById("outputTexto").value;

	if (outputBraille[outputBraille.length -1] === "⠼") {
		// Si después de borrar el último caracter braille quedó un s. numeral:
			document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
			NUMERAL = false;
	} else if (outputBraille[outputBraille.length -1] === "⠨") {
		document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
		MAYUS = false;
		if ( ! isNaN(outputTexto[outputTexto.length -1]))
		// Si tras borrar el signo de mayúscula hay números al final se reactiva NUMERAL
			NUMERAL = true;
	} else if (outputBraille[outputBraille.length -1] === "⠐" && outputTexto[outputTexto.length -1] != "@") {
			// Si es queda al final el punto 5 como separador de letras y nums.
			document.getElementById("outputBraille").value = outputBraille.substring(0, outputBraille.length - 1);
			NUMERAL = true;
	}
	actualizarFlag();
};

function borrarTodo() {
	document.getElementById("input").value = "";
	document.getElementById("outputBraille").value = "";
	document.getElementById("outputTexto").value = "";
	document.getElementById("input").focus();
	MAYUS = false;
	NUMERAL = false;
};


function guardarTxt() {
    // Guarda el output como documento de texto para descargar

	let textToSave = document.getElementById('outputTexto').value;
	
    if (textToSave.length <1) {
        alert("No has ingresado texto aún");
        return 1;
    }  
	
	let documento = document.createElement('a');
	textToSave += "\n\n";
	textToSave += document.getElementById('outputBraille').value;
    let creditos = "\n\nGracias por utilizar BrailleTermWeb, una aplicación gratuita y de código abierto.";
    textToSave += creditos;
  
    documento.href = 'data:attachment/text,' + encodeURI(textToSave);
    documento.target = '_blank';
    documento.download = 'Parkins.txt';
    documento.click();
};

function ayuda() {
	alert(
		"Utiliza tu teclado Qwerty para ingresar caracteres braille y espacios como si estuvieras usando "+
		"una máquina de escribir para braille:\nColoca tus dedos índices en las teclas 'J' Y 'F'.\nLa tecla "+
		"'F' representa al punto braille 1, la 'D' al 2 y la 'S' al 3. De la misma manera, Las teclas 'J', "+
		"'K', y 'L' representan los puntos 4, 5 y 6 respectivamente.\nPara escribir, por ejemplo, la letra 's', "+
		"deberás presionar las teclas 'D', 'S' y 'J' al mismo tiempo.\n"+
		"También puedes ingresar caracteres 'especiales', como el signo numeral y de mayúsculas. Para ingresar "+
		"un espacio presiona la barra espaciadora.\n"+
		"Si estás utilizando un dispositivo con pantalla táctil, presiona el botón 'Para pantalla táctil' "+
		"para desactivar el envío automático."
	);
}

document.getElementById("input").addEventListener("keyup", leer = function(event) {
	// Acción automática
	if (letrasPuntos.indexOf(event.key) > -1) { // Si es una de las letras que equivalen a puntos
		convertir(document.getElementById("input").value);
		setTimeout(500); // Con el temporizador se evita que se envíe la misma letra por cada keyup
	} else if (event.key === "Backspace") {
		borrarUna();
	}
});

function desactivarEnvioAuto() {
	// Para pantallas táctiles o teclados incompatibles
	document.getElementById("enviar").value = "Enviar";
	document.getElementById("escribeAqui").innerHTML = "<em>Escribe aquí la combinación de puntos<br>y presiona 'Enviar' o enter:</em>";
	document.getElementById("enviar").onclick = function() {convertir(document.getElementById('input').value);}
	document.removeEventListener("keyup", leer);
	document.getElementById("input").focus();
	document.addEventListener("keyup", function(event) {
		if (event.key === 'Enter')
			convertir(document.getElementById("input").value);
	});

};

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
};

borrarTodo();