/* 

Realicé un algoritmo que calcula las calficaciones de los alumnos.
Primero debe ingresar el nombre del alumno a través del prompt. Luego, de la misma forma, hay que ingresar tres números, que serían las calificaciones.
El resultado final del alumno se mostrará en la consola justo a su nombre.
Este ciclo se repetirá hasta que el usuario escriba "esc" en el prompt donde pregunta por el nombre y el número 00 en los que pregunta por las notas de ellos.
Al final de todo, saldrá un mensaje deseándoles felices vacaciones.

*/

//Declaración de las variables:
let nombreAlumno = prompt("Ingrese el nombre del alumno/a; Si desea salir, escriba esc"); //nombre del alumno
let calificacion1 = Number(prompt("Ingrese la primera nota de " + nombreAlumno + " Si desea salir, escriba 00")); //primera calificacion a sumar
let calificacion2 = Number(prompt("Ingrese la segunda nota de " + nombreAlumno + " Si desea salir, escriba 00")); //segunda calificacion a sumar
let calificacion3 = Number(prompt("Ingrese la tercer nota de " + nombreAlumno + " Si desea salir, escriba 00")); //tercer calificacion a sumar
let calificacionFinal = ((calificacion1 + calificacion2 + calificacion3) / 3); //se suman las tres calificaciones previamente ingresadas y se divide el resultado 


function calificacionAlumnos(mensaje) { 
    while ((nombreAlumno != "esc" || "ESC") && (calificacion1 != 00) && (calificacion2 != 00) && (calificacion3 != 00)) { //El while permitirá que, cuando el usuario quiera, el programa finalice.
        if (calificacionFinal >= 7){ //Si la calificacion final es mayor o igual a 7, el alumno aprobó
            console.log(nombreAlumno + " aprobó la materia con una calificación de " + calificacionFinal);
        } else{ //Si la calificacion es menor a 7, el alumno desaprobó
            console.log (nombreAlumno + " desaprobó la materia con una calificación de " + calificacionFinal);
        }
        nombreAlumno = prompt("Ingrese el nombre del alumno/a");
        calificacion1 =Number(prompt("Ingrese la primera nota de " + nombreAlumno));
        calificacion2 =Number(prompt("Ingrese la segunda nota de " + nombreAlumno));
        calificacion3 =Number(prompt("Ingrese la tercer nota de " + nombreAlumno));
        calificacionFinal = ((calificacion1 + calificacion2 + calificacion3) / 3);
    }
    console.log(mensaje)
}

calificacionAlumnos("Felices Vacaciones"); //mensaje de felices vacaciones al finalizar

