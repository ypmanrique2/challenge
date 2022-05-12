/*declaración de variables */
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var copiar = document.querySelector("#copiar");
/*llamado de funciones con un escuchador de eventos*/
botonEncriptar.addEventListener("click", function() {
    /*se guarda en la variable texto el string al hacer clic en encriptar*/
    var texto = document.getElementById("texto1").value;
    /*se reemplazan las vocales por las palabras según las reglas dadas */
    var txtCifrado = texto.replaceAll(/e/gm,"enter")
    .replaceAll(/o/gm,"ober")
    .replaceAll(/i/gm,"imes")
    .replaceAll(/a/gm,"ai")
    .replaceAll(/u/gm,"ufat");
    /*cambios de estilo segun la actividad*/
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    /*impresión en consola para detectar errores*/
    console.log(txtCifrado);
});

function desencriptar() {
    /*se reemplazan las vocales por según las reglas dadas */
    var texto = document.getElementById("texto1").value;
    /*se reemplazan las vocales por las palabras según las reglas dadas */
    var txtCifrado = texto.replaceAll(/enter/gm,"e")
        .replaceAll(/ober/gm,"o")
        .replaceAll(/imes/gm,"i")
        .replaceAll(/ai/gm,"a")
        .replaceAll(/ufat/gm,"u");
    /*se reemplazan las vocales por según las reglas dadas */
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    /*impresión en consola para detectar errores*/
    console.log(txtCifrado);
}
/*función del botón de copiar el texto a portapapeles*/
function copiarText() {
    /*declaración de la variable contenido para almacenar el texto encriptado*/
    var contenido = document.getElementById("text2");
    /*selección del contenido*/
    contenido.select();
    /*copia del contenido*/
    var ets = document.execCommand("copy");
    /*boolano, si se copia el contenido emite una alerta*/
    if(ets){
        alert("Se ha copiado el texto al portapapeles");
    }
    /*sino, da un error*/
    else {
        console.log("error, el texto no se ha copiado");
    }
}
/*fin del archivo script.js*/