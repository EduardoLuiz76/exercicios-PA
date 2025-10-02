var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));
let N3 = Number(readlineSync.question("Digite o terceiro número: "));

let maior = Math.max(N1, N2, N3);

console.log("O maior número é: " + maior);
