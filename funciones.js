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

let factorial = function (numero) {
  if (numero == 0 || numero == 1) return 1;
  else return numero * factorial(numero - 1);
};

console.log(factorial(5));
