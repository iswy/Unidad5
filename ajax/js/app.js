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
    var $alu = alumnos;

    var $lista = $("<ul>");
    var $list_item = $("<li>");

    // foreach
    for(var i=0; i<$alu.length; i++)
    {
        var $alu_nom = $alu[i]["nombre"];
        var $alu_sem = $alu[i]["semestre"];

        var $mongo = $("<div>");
        $mongo.addClass("mongo");

        var $m2 = $mongo.clone();

        $mongo.text($alu_nom);

        $list_item = $("<li>");//.hide().fadeIn(600);

        $list_item.append("nombre: ")
        $list_item.append($mongo)

        $m2.text($alu_sem);
        $list_item.append(" &nbsp; Semestre: ")
        $list_item.append($m2);


        $lista.append($list_item.clone());
    }
    $("main").append($lista);
}

var main = function ()
{
    "use strict";

    //$.getJSON("escuela/alumnos.json", jsonx );
    $.getJSON( "escuela/alumnos2.json" , jsony );

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