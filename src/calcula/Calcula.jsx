import { figonacci } from "./figonaci";
import { valorN } from "./numeroPrimo";
import { triangular } from "./triangular";

function Calcula({numero}){
    let serie=(valorN(numero)- figonacci(numero) + triangular(numero)) || 0;
    return serie;
}
export default Calcula ;