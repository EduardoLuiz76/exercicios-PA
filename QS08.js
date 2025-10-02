var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));
let N3 = Number(readlineSync.question("Digite o terceiro número: "));

let soma = N1 + 10;
let subtracao = soma - N2;
let multiplicacao = subtracao * N3;
let divisao = multiplicacao / 2;

console.log("Resultado final: " + divisao);
