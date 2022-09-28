"use strict";
/************************
 * Funciones
 * let sumar = function (a, b, c = 3) {
  return a + b + c;
};
let result = sumar(4, 5, 8);
let result1 = sumar(3, 7);
console.log(result);
console.log(result1);
*/

//Funciones recursivas

/*let factorial = function (numero) {
  if (numero == 0 || numero == 1) return 1;
  else return numero * factorial(numero - 1);
};

console.log(factorial(5));
*/

/*************
 * Arrays
 * */

let nombres = ["Oscar", "Raul", "Teresa", "Maria Jesús"];
let vegetales = new Array("Tomate", "Lechuga", "Zanahoria");

/*
console.log(nombres[3]);
console.log(vegetales[2]);

nombres[3] = 'Jaime';
vegetales[2] = 'Nabo';

console.log(nombres[3]);
console.log(vegetales[2]);


// Bucle for
console.log(nombres.length);
for(let i = 0; i <= nombres.length -1; i++){
  console.log(nombres[i]);
}

//Bucle forEach
vegetales.forEach(function(elemento, indice){
  console.log(elemento, indice);
})
*/

console.log(nombres);
nombres.push("Jaime"); //Añadimos un nuevo elemento a nuestro array
console.log(nombres);
nombres.unshift("Luispe");
console.log(nombres); //Añadimos un nuevo elemento al array al principio

let pos = nombres.indexOf("Raul");
console.log(pos); //Devuelve la posición de un elemento del array

nombres.splice(1, 1); //A partir del elemento 1 borra 1 elemento
console.log(nombres);
