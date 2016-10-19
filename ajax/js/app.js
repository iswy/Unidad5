/**
 * Created by pi on 16.10.18.
 */

var jsonx = function ( alumno )
{
    console.log( "Alumno" + alumno );

    var $pAlumno = $("<p>");
    $pAlumno.text( alumno.nombre + " -|- " + alumno.semestre );

    //var $pTe = $("<p>");
    //$pTe.text('x');

    var $lista = $("<ul>");
    var $list_item = $("<li>");

    for(var i=0; i<128; i++)
    {
        $list_item.text("hello " + i + JSON.stringify(alumno));
        $lista.append($list_item.clone());
    }

    $("main").append($lista);
    //$("main").append($pAlumno);

    /*
    for(var i=0; i<10; i++)
    {
        $pTe.text('hello '+i);

        $( "main" ).append( $pTe.clone() );
    }
    */

}


var jsony = function ( alumnos )
{
    var alu = $.parseJSON(alumnos);

    var $pAlumno = $("<p>");
    $pAlumno.text( " hi " + alu.get(0).toString() );

    $("main").append( $pAlumno );

}

var main = function ()
{
    "use strict";

    //$.getJSON("escuela/alumnos.json", jsonx );
    $.getJSON("escuela/alumnos2.json" , jsony);

    //var $abc01 = JSON.stringify( $.getJSON("escuela/alumnos.json") );
    //var $abc = $("<p class='p1'>"+$abc01+"</p>");

    console.log( "Hello Words" );

    /*
    Tarea:
        * Modificar el JSON para contener un arreglo de alumnos
        * Modificar este JS para agregar los alumnos a una lista no-ordenada
        * Agregar un archivo CSS para presentación. (listo)
        * extra: agregar animaciones
     */

};

$( document ).ready( main );