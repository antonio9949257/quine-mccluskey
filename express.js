// Función para evaluar una expresión booleana
function evaluarExpresion(expresion, valores) {
    let resultado = true;
    for (let i = 0; i < valores.length; i++) {
        const variable = valores[i][0];
        const valor = valores[i][1];
        const regex = new RegExp(variable, 'g');
        expresion = expresion.replace(regex, valor);
    }
    // Evaluar la expresión modificada
    try {
        resultado = eval(expresion);
    } catch (error) {
        console.error("Error en la expresión:", error);
    }
    return resultado ? 1 : 0;
}

// Función para llenar la matriz f con los valores de la expresión booleana
function llenarMatrizExpresion(f, expresion, variables) {
    for (let i = 0; i < f.length; i++) {
        const fila = f[i];
        const valores = [];
        for (let j = 0; j < variables.length; j++) {
            const variable = variables[j];
            valores.push([variable, fila[j]]);
        }
        f[i].push(evaluarExpresion(expresion, valores));
    }
}

// Ejemplo de uso:
let expresion = "a & A | ~a & b | ~b & ~B"; // Expresión booleana
let variables = ['a', 'b', 'A', 'B']; // Lista de variables
let f = [
    [0, 0, 0], // Ejemplo de fila de la matriz de verdad
    [0, 0, 1],
    [0, 1, 0],
    [0, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 1]
]; // Matriz de verdad

llenarMatrizExpresion(f, expresion, variables);
console.log(f); // Mostrar la matriz resultante
