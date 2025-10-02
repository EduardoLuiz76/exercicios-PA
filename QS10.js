var readlineSync = require('readline-sync');

let N1 = Number(readlineSync.question("Digite um número: "));

if (N1 < 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(N1 + " x " + i + " = " + (N1 * i));
    }
}
