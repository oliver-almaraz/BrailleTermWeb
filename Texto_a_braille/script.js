const litterae = [
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','x','y','z','w',

    'á', 'é', 'í', 'ó', 'ú', 'ü', 'ñ',

    '.', ',', ';', ':', '-',
    '?', '!', '"', '(', ')', '*',

    '$','%', '=', '+', '#',
    '|', '\'', '/', '\\', '{', '}',
    '[', ']', '@', '&',

    '¿', '¡',

    ' ', "\n", "\t"
];
const braille = [
    "⠁","⠃","⠉","⠙","⠑","⠋","⠛","⠓","⠊","⠚",
    "⠅","⠇","⠍","⠝","⠕","⠏","⠟","⠗","⠎","⠞",
    "⠥","⠧","⠭","⠽","⠵","⠺",

    // Diacríticos
    "⠷","⠮","⠌","⠬","⠾","⠳","⠻",

    // Puntuación
    "⠄", "⠂", "⠆", "⠒", "⠤",
    "⠢", "⠖", "⠦", "⠣", "⠜", "⠔",

    "⠸⠜", "⠸⠴", "⠶", "⠖", "⠼⠐",
    "⠸", "⠄", "⠠⠂", "⠐⠄", "⠐⠸", "⠸⠂",
    "⠷", "⠾", "⠐", "⠠⠯",

    "⠢", "⠖",

    "⠀", "\n", "\t"
];
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
NUMERAL = false;


function convertir(input) {
    // Cada letra en 'input'...
    for (var i=0; i <= input.length; i++) {

        // Si es un número
        if (nums.indexOf(input[i]) > -1) {
            if ( ! NUMERAL) {
                NUMERAL = true;
                document.getElementById("output").value += "⠼";
            }
            document.getElementById("output").value += braille[nums.indexOf(input[i])];
            continue;
        }
        // Si no, es una letra, espacio o signo de puntuación.
         else {
            // Se compara con cada letra en 'litterae'
            for (var j=0; j<=63; j++) {

                if (litterae[j] === input[i]) { // Minúscula o puntuación
                    if (NUMERAL && j <10) {
                        document.getElementById("output").value += "⠐";
                    }
                    document.getElementById("output").value += braille[j];
                    NUMERAL=false;
                    continue;
                }
                else if (litterae[j].toUpperCase() === input[i]) { // Mayúscula
                    document.getElementById("output").value += "⠨";
                    document.getElementById("output").value += braille[j];
                    NUMERAL=false;
                    continue;
                }
            }
        }
    }
};

function borrarTodo () {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
};

function desactivarCSS() {
    for ( i=0; i<document.styleSheets.length; i++) {
        void(document.styleSheets.item(i).disabled=true);
    }
};

function guardarTxt() {
    // Guarda el output como documento de texto para descargar

    let textToSave = document.getElementById('output').value;

    if (textToSave.length <1) {
        alert("No has ingresado texto aún");
        return 1;
    }  

    let documento = document.createElement('a');
    let creditos = "\n\nGracias por utilizar BrailleTermWeb, una aplicación gratuita y de código abierto.";
    textToSave += creditos;
  
    documento.href = 'data:attachment/text,' + encodeURI(textToSave);
    documento.target = '_blank';
    documento.download = 'Texto_a_Braille.txt';
    documento.click();
};

borrarTodo();