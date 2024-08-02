/*
Sociedad secreta
 
Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.
 
Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'`.


*/

//const secretName = ["Esperanza", "Franco", "Nia"];
//const secretName =['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const secretName =['Harry', 'Ron', 'Hermione'];
let resultado = "";


for (let i = 0; i < secretName.length; i++){
    resultado += secretName[i][0];
}
console.log(resultado);

