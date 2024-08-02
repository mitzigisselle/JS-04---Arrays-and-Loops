/*
Número dividido en mitades
 
Dado un número, devuelve el número dividido en sus mitades en una matriz.
 
Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]`.
- `numDiv(10)` debería devolver `[5, 5]`.

*/

function numeroDividido(numero) {
    let resultado = numero / 2;
    return [resultado, resultado];
}
console.log(numeroDividido(12)); 
