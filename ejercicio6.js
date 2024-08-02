/*
Dominio positivo en Array
 

Escribe una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 

Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `falso`.
*/
function positiveDom(matriz) {
        
    let contador = 0; 
    for (let i = 0; i < matriz.length; i++) { 
        if (matriz[i] > 0) {
            contador++;
        }
    }
        return contador > matriz.length / 2; 
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));  