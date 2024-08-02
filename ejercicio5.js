/*
Matriz de múltiplos
 

Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]`.


*/

function arrayMultiplos(numero, longitud) {
    let resultado = [];
     for (let i = 1; i <= longitud; i++){
         resultado.push(numero * i);
     }
     return resultado;
 }
 
 console.log(arrayMultiplos(2,11))
 
 
 