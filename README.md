# BrailleTerm Web

Esta es la **versión web** de [BrailleTerm](https://github.com/oliver-almaraz/BrailleTermGUI).
Este programa es parte de un proyecto sin fines de lucro, se trata en general de un curso gratuito para
aprender signografía básica del braille en español destinado a usuarios videntes.

### ¡Nuevo apartado de musicografía braille!
Con un apartado diseñado especialmente para personas ciegas o con visibilidad reducida.

## [Acceder a la aplicación web](https://oliver-almaraz.github.io/BrailleTermWeb/) 



### Versiones para escritorio (Windows, Linux y MacOS)

Mi finalidad era crear un programa simple que funcionara en casi cualquier plataforma, así que primero me
enfoqué en crear un [script que se ejecutara desde la terminal](https://github.com/oliver-almaraz/BrailleTerm) (de ahí el nombre del programa, 'BrailleTerm').
Sin embargo, no consideré que, al estar escrito en Python (3.8), los usuarios de Windows tendrían que descargar el intérprete.

Estando consciente de que la mayoría de los participantes del curso al que está dedicado este programa
usarían Windows, me tomé el tiempo para hacer también una [versión con una interfaz gráfica](https://github.com/oliver-almaraz/BrailleTermGUI) y lo
empaqueté como un [binario (.exe) para Windows](https://github.com/oliver-almaraz/BrailleTermGUI/releases/tag/Win_v1.0) y como un [ejecutable para Linux](https://github.com/oliver-almaraz/BrailleTermGUI/releases/tag/Linux_v1.0).

Por último, en lugar de hacer una aplicación móvil para Android e iOS (para poder publicar aplicaciones gratuitas en la AppStore debía pagar una suscripción anual de casi 100 USD) decidí mejor hacer **esta versión web** (con JavaScript) **optimizada para navegadores móviles**.


### También es posible usar la aplicación web sin conexión a internet (offline).

Si prefieres la aplicación web a la aplicación para escritorio (y no te culpo), pero no siempre tienes acceso a internet, también puedes utilizar **BralleTerm Web** desde tu **computadora** aun sin conexión.
Para ello, [descarga los archivos](https://github.com/oliver-almaraz/BrailleTermWeb/archive/master.zip) de esta aplicación, y abre el archivo **index.html** con tu navegador
(click derecho, 'abrir con').

**Nota:** Es importante que todos los archivos que se descargan junto con el fichero **index.html** estén en la misma carpeta.

#### En dispositivos **Android**

También es posible utilizar la aplicación web sin conexión a internet en celulares y tabletas Android, pero para ello se requieren algunos pasos extra (solo tendrás que realizarlos la primera vez):

1. <a href="https://github.com/oliver-almaraz/BrailleTermWeb/archive/master.zip" target="_blank">Descarga los archivos</a>
2. Desde la Play Store, descarga las siguientes aplicaciones:
  - **RAR** (de *RARLAB*)
  - **WebCode** (de *Alif software*)
3. Ve a tu carpeta de descargas, abre la carpeta comprimida *BrailleTermWeb-master.zip*, luego:
  - Selecciona (sin abrirla) la carpeta que está dentro (presiónala hasta que la parte superior diga *1 seleccionado*)
  - En el menú (esquina superior derecha) selecciona *Extraer a*
  - Te mostrará tu carpeta de descargas, solo selecciona el botón **Extraer** (esquina inferior derecha).
4. Abre **WebCode** y en el menú (esquina superior derecha) elige **Open**
5. Navega hasta la carpeta donde se extrajeron los archivos (normalmente es > storage > emulated > 0 > Downloads > BrailleTermWeb-master )
6. Selecciona el archivo **index.html**

**¡Listo!**
La próxima vez solo deberás abrir **WebCode** y todo estará como lo dejaste.


### Captura de pantalla:

<img src="https://user-images.githubusercontent.com/69062188/90096828-188c3d00-dcfa-11ea-992b-1c75dc7045cd.png" width="90%"></img> 
