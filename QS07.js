var readlineSync = require('readline-sync');

let a = Number(readlineSync.question("Digite o primeiro número: "));
let b = Number(readlineSync.question("Digite o segundo número: "));
let c = Number(readlineSync.question("Digite o terceiro número: "));

let ordenado = [a, b, c].sort((x, y) => x - y);

console.log("Em ordem crescente: " + ordenado);
