var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

let resultado = N1 * 3;

if (resultado > 15) {
    console.log("Resultado: " + resultado);
}
