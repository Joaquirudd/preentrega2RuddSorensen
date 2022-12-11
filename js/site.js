/* 
realicé un algoritmo que ordena a los alumnos dependiendo si aprovaron o no.
primero debe ingresar el nombre del alumno. Luego, de esta misma forma, un número que será la calificación del alumno.
a medida que vaya escribiando alumnos, estos se imprimirán en la consola. Al mismo tiempo se agruparán en dos arrays: el de los aprovados y el de los desaprovados. Tambien los nombres aparecerán en un objeto de alunos en general.
al final de todo, saldrán unos carteles dependiendo de la cantidad de alumnos aprovados o desaprovados.
*/


//Declaración de las variables:
let nombreAlumno = prompt("Ingrese el nombre del alumno"); //Nombre del alumno
let calificacionFinal = Number(prompt("Ingrese la calificacion final de alumno")); //Calificacion final del alumno

//Arrays donde se almacenarán los alumnos aprovados y desaprovados
const alumnosAprovados = []
const alumnosDesaprovados = []

//Objeto donde se almacenarán todos los alumnos
const alumnosGeneral = {
    nombre: nombreAlumno
}

while ((nombreAlumno != "esc" || "ESC") && (calificacionFinal != 00)){
if (calificacionFinal >= 7){ //Si la calificacion es mayor o igual a 7, el nombre del alumno pasará al array de aprovados. Al mismo tiempo su nombre aparecerá en el objeto.
    alumnosAprovados.push(nombreAlumno);
    alumnosGeneral.nombre= nombreAlumno;
    console.log (alumnosAprovados)
    console.log (alumnosGeneral)
} else{ //Si la calificacon es menor a 7, el nombre del alumno pasará al array de desaprovados. Al mismo tiempo su nombre aparecerá en el objeto.
    alumnosDesaprovados.push(nombreAlumno);
    alumnosGeneral.nombre= nombreAlumno;
    console.log (alumnosDesaprovados)
    console.log (alumnosGeneral)
}

nombreAlumno = prompt("Ingrese el nombre del alumno/a");
calificacionFinal = Number(prompt("Ingrese la calificacion final de alumno"));
}


//por cada alumno aprovado saldrá un cartel de felices vacaciones
alumnosAprovados.forEach( ()=> {
    console.log("felices vacaciones")
})

// por cada alumno desaprovado saldrá un cartel de nos vemos en diciembre
alumnosDesaprovados.forEach( ()=> {
    console.log("Nos vemos en diciembre")
})