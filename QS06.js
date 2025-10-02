var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));

if (N1 < N2) {
    console.log("Ordem crescente: " + N1 + ", " + N2);
} else {
    console.log("Ordem crescente: " + N2 + ", " + N1);
}
