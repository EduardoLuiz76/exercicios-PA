var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite o primeiro número: "));
let N2 = Number(readlineSync.question("Digite o segundo número: "));

if ((N1 + N2) < 20) {
    console.log("N1 * 10 = " + (N1 * 10));
    console.log("N2 * 10 = " + (N2 * 10));
}
