var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

let resultado = N1 / 2;

if (resultado > 20) {
    console.log("Resultado: " + resultado);
}
