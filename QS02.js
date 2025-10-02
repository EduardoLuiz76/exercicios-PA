var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

let soma = N1 + 5;

if (soma > 10) {
    console.log("Resultado: " + soma);
}
