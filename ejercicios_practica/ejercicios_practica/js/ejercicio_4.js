"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invitados" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
function generarInvitados() {
    var invitado1 = prompt("Ingrese el nombre del primer invitado:");
    var invitado2 = prompt("Ingrese el nombre del segundo invitado:");
    var invitado3 = prompt("Ingrese el nombre del tercer invitado:");
  
    var invitados = invitado1 + ", " + invitado2 + ", " + invitado3;
    return invitados;
  }
  
  var invitados = generarInvitados();
  console.log(`Mis invitados: ${invitados}`);
  
