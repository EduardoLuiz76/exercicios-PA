var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

if (N1 > 10) {
    console.log("Maior que 10");
} else if (N1 == 10) {
    console.log("Igual a 10");
} else {
    console.log("Menor que 10");
}
