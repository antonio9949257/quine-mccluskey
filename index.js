function convertExpression() {
    let expressionInput = document.getElementById("expressionInput").value;
    let convertedExpression = convertirEntrada(expressionInput);
    document.getElementById("convertedExpression").innerText = convertedExpression;
    return expressionInput;
}
// Función para convertir la entrada en una expresión booleana
function convertirEntrada(expresionEntrada) {
    // Reemplazar NOT y AND/OR con los operadores correspondientes
    expresionEntrada = expresionEntrada.replace(/\sAND\s/g,''); // Omitir AND
    expresionEntrada = expresionEntrada.replace(/\sOR\s/g, '|'); // Reemplazar OR
    expresionEntrada = expresionEntrada.replace(/!/g, '!'); // Reemplazar NOT
    return expresionEntrada;
}
function obtenerVariablesUnicas(expresion) {
    // Dividir la expresión en sus componentes individuales
    let componentes = expresion.split(/\s+|\+|\!/).filter(comp => comp !== "");

    // Filtrar solo las variables únicas
    let variablesUnicas = componentes.filter(comp => !["AND", "OR", "NOT"].includes(comp));

    return [...new Set(variablesUnicas)];
}

let A = []; // Esto es una matriz en JavaScript
let expresion = convertExpression();
let variablesUnicas = obtenerVariablesUnicas(expresion);
let dim = variablesUnicas.length; // Variable para almacenar la dimensión

function matrizTV(dim) {
    A = Array.from({ length: Math.pow(2, dim) }, () => Array(dim).fill(0));

    for (let col = 0; col < Math.pow(2, dim); col++) {
        let binary = col.toString(2).padStart(dim, '0'); // Convertir a binario y rellenar con ceros
        for (let fil = 0; fil < dim; fil++) {
            A[col][fil] = parseInt(binary[fil]); // Almacenar cada dígito en la matriz
        }
    }
}

// Ejemplo de uso
function mostrarincosole() {
    for (let fil = 0; fil < Math.pow(2, dim); fil++) { 
      for (let col = 0; col < dim; col++) {
        console.log(A[fil][col] + " ");
      }
      console.log("\n");
    }
  }
  
matrizTV(dim); // Llenar la matriz de verdad

console.log(dim)
console.log(variablesUnicas);
//mostrarincosole(); // Mostrar la matriz en la consola

console.log(dim)
console.log(variablesUnicas);


function agregarFila(datos) {
    var tabla = document.getElementById("miTabla").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow();

    for (var i = 0; i < dim; i++) {
        var celda = nuevaFila.insertCell();
        celda.innerHTML = datos[i];
    }
}

// Llenar la tabla con los nuevos datos
for (var i = 0; i < Math.pow(2, dim); i++) {
    agregarFila(A[i]);

}
