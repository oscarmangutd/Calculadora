/* Uso de variables en JavaScript 

// Variable tipo cadena (String)
var nombre = "Oscar";
console.log(nombre);
console.log(typeof nombre);

//Variable tipo numerico
var edad = 31;
console.log(edad);
console.log(typeof edad);

edad = "Seis";
console.log(edad);
console.log(typeof edad);

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof sueldo);

// Variable boolean
var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof tieneTrabajo);

//Variable undefined
var puestoTrabajo;
console.log(puestoTrabajo);

//Variable nula (null)
puestoTrabajo = null;
console.log(puestoTrabajo);
*/

/*************************************************** */

/*Operadores matemáticos
- Suma
- Resta
- Multiplicacion
- División */

var edadAna, edadMaria, diferenciaEdad;
//var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
//var yearActual = 2022;

/*diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log("Año nacimiento de Ana " + yearAna);
console.log("Año de naciemiento de María " + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2); */

/* Operadores lógicos, unarios y de asignación */
//Lógicos < > <= >= ==

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Operadores unarios ++ | --

edadAna++;
console.log(edadAna);

//Opradores de asignación += | -= | *= | /= | %
var a = 11;
var b = 7;

var c = a % b; // Residuo de una división
console.log(c);

a += b;
console.log(a);
