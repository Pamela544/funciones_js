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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
var cantidadNombres;

function generarInvitados() {
  cantidadNombres = parseInt(prompt("Ingrese la cantidad de nombres de invitados que desea ingresar (1, 2 o 3):"));

  if (cantidadNombres === 1) {
    var invitado1 = prompt("Ingrese el nombre del invitado:");
    return invitado1;
  } else if (cantidadNombres === 2) {
    var invitado1 = prompt("Ingrese el nombre del primer invitado:");
    var invitado2 = prompt("Ingrese el nombre del segundo invitado:");
    return invitado1 + ", " + invitado2;
  } else if (cantidadNombres === 3) {
    var invitado1 = prompt("Ingrese el nombre del primer invitado:");
    var invitado2 = prompt("Ingrese el nombre del segundo invitado:");
    var invitado3 = prompt("Ingrese el nombre del tercer invitado:");
    return invitado1 + ", " + invitado2 + ", " + invitado3;
  } else {
    alert("Cantidad inválida de nombres de invitados.");
    return null;
  }
}

var invitados = generarInvitados();

if (invitados !== null) {
  console.log(`Mis invitados: ${invitados}`);
}
