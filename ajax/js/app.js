/**
 * Created by pi on 16.10.18.
 */
var main = function ()
{
    "use strict";

    $.getJSON("escuela/alumnos.json", function ( alumno )
    {
        console.log( "Alumno" + alumno );

        var $pAlumno = $("<p>");
        $pAlumno.text( alumno.nombre + " - " + alumno.semestre )

        $("main").append($pAlumno);
    });

    //var $abc01 = JSON.stringify( $.getJSON("escuela/alumnos.json") );
    //var $abc = $("<p class='p1'>"+$abc01+"</p>");
    
    console.log( "Hello Words" );

    /*
    Tarea:
        * Modificar el JSON para contener un arreglo de alumnos
        * Modificar este JS para agregar los alumnos a una lista no-ordenada
        * Agregar un archivo CSS para presentación.
        * extra: agregar animaciones
     */

};

$( document ).ready( main );