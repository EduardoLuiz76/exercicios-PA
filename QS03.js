var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

let resultado = N1 - 10;

if (resultado > 3) {
    console.log("Resultado: " + resultado);
}
