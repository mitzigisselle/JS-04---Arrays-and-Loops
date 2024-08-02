/* 
Suma de resistencias en serie
 
Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.
*/

const sumResitance = [(-1), 5, 6, 3];

let sum = 0;

for (let index = 0; index < sumResitance.length; index++) {
  sum += sumResitance[index];
}

console.log("La suma de todas las resistencias es: " + sum); 

/////////////////////////////////////////////////////////////

const sumResitance2 = [14,3.5,6];

let sum2 = 0;

for (let index = 0; index < sumResitance2.length; index++) {
  sum2 += sumResitance2[index];
}

console.log("La suma de todas las resistencias es: " + sum2); 

//////////////////////////////////////////////////////////////

const sumResitance3 = [8, 15, 100];

let sum3 = 0;

for (let index = 0; index < sumResitance3.length; index++) {
  sum3 += sumResitance3[index];
}

console.log("La suma de todas las resistencias es: " + sum3); 