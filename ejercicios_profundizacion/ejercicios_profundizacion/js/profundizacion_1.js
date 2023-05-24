/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/

function promedio(num1, num2, num3, num4, num5) {
    var suma = num1 + num2 + num3 + num4 + num5;
    var cantidad = 5;
    var promedio = suma / cantidad;
  
    var detalles = "Datos recibidos:\n";
    detalles += "Número 1: " + num1 + "\n";
    detalles += "Número 2: " + num2 + "\n";
    detalles += "Número 3: " + num3 + "\n";
    detalles += "Número 4: " + num4 + "\n";
    detalles += "Número 5: " + num5 + "\n";
  
    alert(detalles);
    console.log(detalles);
  
    alert("El promedio es: " + promedio);
    console.log("El promedio es: " + promedio);
  }
  
  promedio(10, 20, 30, 40, 50);
  
