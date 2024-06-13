document.getElementById("botoContar").addEventListener("click", contar);
document.getElementById("botonLimpiar").addEventListener("click", limpiar)

function contar () {
    const entradaDeTexto = document.getElementById("textInput").value;
    const textoRecortado = entradaDeTexto.trim();

    const arregloDePalabras = textoRecortado.split(/\s+/).filter(elemento => elemento !== "");
    const contarPalabras = arregloDePalabras.length;
 
    const arregloDeLetras = textoRecortado.split("").filter(letra => letra !== " " && letra !== "\n" && letra !== "\t")
    const contarLetras = arregloDeLetras.length;

    document.getElementById("contadorPalabra").textContent = `Número de palabras: ${contarPalabras}`
    document.getElementById("contadorCaracteres").textContent = `Número de caracteres: ${contarLetras}`

}

function limpiar () {
    document.getElementById("textInput").value = ""
    document.getElementById("contadorPalabra").textContent = "Número de palabras: 0";
    document.getElementById("contadorCaracteres").textContent = "Número de caracteres: 0";
}

function limpiar() {
    // Limpia el valor del textarea con el ID "textInput".
    document.getElementById("textInput").value = "";

    // Restaura los valores predeterminados en todos los elementos que tienen el atributo data-default.
    document.querySelectorAll("[data-default]").forEach(elemento => {
        // Obtiene el valor predeterminado del atributo data-default.
        const valorPredeterminado = elemento.getAttribute("data-default");
        // Establece el contenido del elemento al valor predeterminado.
        //getAttribute en JavaScript se utiliza para obtener el valor de un atributo especificado de un elemento HTML
        elemento.textContent = valorPredeterminado;
    });
}