var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));

let menor = N1 < N2 ? N1 + 5 : N2 + 5;

console.log("Maior valor resultante: " + Math.max(N1, N2, menor));
