var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));
let N3 = Number(readlineSync.question("Digite o terceiro número: "));

let menor = Math.min(N1, N2, N3);

console.log("Menor número + 5 = " + (menor + 5));
