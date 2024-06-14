 document.getElementById("botoContar").addEventListener("click", contar);
 document.getElementById("botonLimpiar").addEventListener("click", limpiar);

function contar () {
    const recortarTexto = document.getElementById("textInput").value.trim();
    const palabrasContada  = recortarTexto.split(/\s+/).filter(elemento => elemento !== "").length;
    document.getElementById("contadorPalabra").textContent = `Número de palabras: ${palabrasContada}`
    const caracteresContadas = recortarTexto.split("").filter(letra => letra !== " " && letra !== "\n" && letra !== "\t").length
    document.getElementById("contadorCaracteres").textContent = `Número de caracteres ${caracteresContadas}`
}

function limpiar () {
    document.getElementById("textInput").value = "";
    document.getElementById("contadorPalabra").textContent = "Número de palabras: 0";
    document.getElementById("contadorCaracteres").textContent = "Número de caracteres: 0";
}

