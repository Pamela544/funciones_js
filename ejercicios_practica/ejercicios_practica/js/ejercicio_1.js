"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function imprimirMayor(numero1, numero2) {
    console.log("Funcion imprimir mayor")
    if (numero1 > numero2) {
        console.log("El número mayor es: " + numero1);
      } else if (numero2 > numero1) {
        console.log("El número mayor es: " + numero2);
      } else {
        console.log("Ambos números son iguales");
      }
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
}

imprimirMayor(2, 10);