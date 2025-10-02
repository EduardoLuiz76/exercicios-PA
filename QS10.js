var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

let valor = N1 / 2;
let var1 = valor + 3;
let var2 = valor + 5;

console.log("Valor 1: " + var1);
console.log("Valor 2: " + var2);
