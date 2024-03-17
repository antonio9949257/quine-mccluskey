function dimension(decimal) {
  let dim = 0;
  while (decimal > 0) {
    dim += 1;
    decimal = Math.floor(decimal / 2);
  }
  return dim;
}

let A = []; // Esto es una matriz en JavaScript
let dim; // Variable para almacenar la dimensión

function decimal_binario(decimal, dim) {
  A = Array.from({ length: Math.pow(2, dim) }, () => Array(dim).fill(0));

  for (let col = 0; col < Math.pow(2, dim); col++) {
    let binary = col.toString(2).padStart(dim, '0'); // Convertir a binario y rellenar con ceros
    for (let fil = 0; fil < dim; fil++) {
      A[col][fil] = parseInt(binary[fil]); // Almacenar cada dígito en la matriz
    }
  }
}

function mostrar() {
  for (let fil = 0; fil < Math.pow(2, dim); fil++) { 
    for (let col = 0; col < dim; col++) {
      process.stdout.write(A[fil][col] + " ");
    }
    process.stdout.write("\n");
  }
}

let decimal_number = 12; // Cambiar a 4 para una matriz de 4x4
dim = dimension(decimal_number); // Calcular la dimensión
decimal_binario(decimal_number, dim);
console.log(dim);
mostrar();
