function esPrimo(numero) {
    let numFactores = 0;
    for (let index = 1; index < numero+1; index ++) {
        if (numero % index === 0) {
            numFactores++;
        }
    }
    return (numFactores === 2)

}
function primo(numero) {
    let numPrimos = 0;
    let j = 0;
    while (numPrimos < numero) {
        if (esPrimo(j)) {
            numPrimos ++;
        }
        j ++;
    }
    return j-1;
}
export function valorN(numero){
    return primo(numero);
}
