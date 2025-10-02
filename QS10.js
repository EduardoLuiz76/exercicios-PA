var readlineSync = require('readline-sync');

let a = Number(readlineSync.question("Digite o primeiro número: "));
let b = Number(readlineSync.question("Digite o segundo número: "));

let menor = Math.min(a, b) * 10;
let maior = Math.max(a, b) / 2;

let soma = menor + maior;

if (soma % 2 === 0) {
    console.log("A soma é par");
} else {
    console.log("A soma é ímpar");
}
