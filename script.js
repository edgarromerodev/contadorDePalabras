document.addEventListener("DOMContentLoaded", () =>{
    const botonContar = document.getElementById("botonContar")
    botonContar.addEventListener("click", contar);

    const botonLimpiar = document.getElementById("botonLimpiar")
    botonLimpiar.addEventListener("click", limpiar)

    const mostrarCantidadDepalabras = document.getElementById("contadorPalabra")
    const mostraCantidadDeCaracteres = document.getElementById("contadorCaracteres")
    function contar () {
         const datosRecibidos = document.getElementById("textInput").value;
         const textoRecortado = datosRecibidos.trim();
         const arreglodePalabras = textoRecortado.split(/\s+/);
         const cantidadDePalabras = arreglodePalabras.length;
         mostrarCantidadDepalabras.textContent = `Número de palabras: ${cantidadDePalabras}` 

        
         const arregloDeCaracteres = textoRecortado.split("")
         const eliminarElementosVacios = arregloDeCaracteres.filter(caracter =>
         caracter !== " " && caracter !== "\n" && caracter !== "\t"
         )
         const cantidadDeCaracteres = eliminarElementosVacios.length;

         mostraCantidadDeCaracteres.textContent =  `Número de caracteres: ${cantidadDeCaracteres}`
    }


    function limpiar () {
        document.getElementById("textInput").value = "";
        mostrarCantidadDepalabras.textContent = "Número de palabras: 0";
        mostraCantidadDeCaracteres.textContent = "Número de caracteres: 0"
    }


})
