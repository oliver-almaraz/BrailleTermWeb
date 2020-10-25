/*
WINDOWS:
Abre 'index.html con el navegador predeterminado
o pregunta con qué navegador abrirlo.

i686-w64-mingw32-gcc.exe -static -mwindows launcher.c icono.o -o BrailleTermOffline.exe

Generar un archivo autoextraíble (SFX) con WinRar que ejecute
'.\BrailleTermWeb\BrailleTermOffline.exe' tras extraer los archivos.
NO extraer en carpeta temporal.
Reemplazar los archivos sin preguntar u omitir archivos existentes.
*/


#include <stdio.h>
#include <windows.h>
#include <unistd.h>

int WINAPI WinMain (HINSTANCE hThisInstance,
                     HINSTANCE hPrevInstance,
                     LPSTR lpszArgument,
                     int nCmdShow) {
    MessageBox(0,"Elige a continuacion tu navegador preferido si no lo has hecho ya.",
        "Iniciando BrailleTerm offline", 0);

    if (access(".\\BrailleTermOffline\\index.html", F_OK ) != -1 ) {
        system("explorer .\\BrailleTermOffline\\index.html");
    }
     else if (access(".\\index.html", F_OK ) != -1 ) {
        system("explorer .\\index.html");
    }
     else {
        MessageBox(0,"Asegurate de que este programa se encuentre en la carpeta 'BrailleTermOffline' y vuelve a intentar.",
        "'index.html' no encontrado'", 0);
        return 1;
    }

    if (access(".\\ExtraerBrailleTermOffline.exe", F_OK ) != -1 ) {
        system("rm .\\ExtraerBrailleTermOffline.exe");
    };

    return 0;
};
