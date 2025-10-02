var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

let resultado = (N1 - 3) + N1;

console.log("Resultado: " + resultado);
