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
const alpha = [ // Las letras que corresponden a un solo signo. Signos poco comunes,
// inexistentes en español, o que requieren más de un signo para interpretarse se ignoran ("�").
	   		" ", "a", ",", "b", ".", "k",  ";",  "l", "�",  "c", "i", "f", "í", "m",  "s", "p",
			"@", "e", ":", "h", "*", "o",  "!",  "r", "�",  "d", "j", "g", ")", "n",  "t", "q",
			"�", "�", "?", "(", "-", "u",  "\"", "v", "�",  "�", "�", "�", "ó", "x",  "é", "�",
			"�", "�", "�", "ü", "�", "z",  "=",  "á", "|",  "�", "w", "ñ", "�", "y",  "ú", "�"
];
const nums = [
  // a	b	c	d	 e	  f		g	h	  i	   j
	"⠁","⠃","⠉","⠙","⠑","⠋","⠛","⠓","⠊","⠚",
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];
const primeras10letras = ["a","b","c", "d", "e", "f", "g", "h", "i","j"];
var MAYUS = false;
var NUMERAL = false;


function convertir(input) {
    var textoBrai = document.getElementById("outputBraille");
    var texto = document.getElementById("outputTexto");

    // Se ordena el input alfabéticamente:
    input = input.split('').sort().join('').toLowerCase();

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
				 else if (NUMERAL && primeras10letras.indexOf(alpha[i]) > -1) { // Si NUMERAL está activado y la letra está en el rango a-j
				 	for (var j=0; j<10; j++) {
					 	if (nums[j] == braille[i]) {
							texto.value += nums[j+10];
							return 0;
							// Ya se había desactivado NUMERAL con el punto 5
						}
					}
				} 
				 else if (NUMERAL && primeras10letras.indexOf(alpha[i]) == -1) { // Si NUMERAL y se escribe una letra minus. fuera del rango a-j
					NUMERAL=0;
					texto.value += alpha[i];
				}
				 else {
					texto.value += alpha[i];
				}
			}
		}
}

function borrarTodo() {
	document.getElementById("input").value = "";
	document.getElementById("outputBraille").value = "";
	document.getElementById("outputTexto").value = "";
};

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    convertir(document.getElementById("input").value);
    document.getElementById("input").value = "";
  }
});

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
};

borrarTodo();