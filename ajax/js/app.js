/**
 * Created by pi on 16.10.18.
 */
var main = function ()
{
    "use strict";

    $.getJSON("escuela/alumnos.json", function ( alumno )
    {
        console.log( "Alumno" + alumno );
    });

    var $abc01 = JSON.stringify( $.getJSON("escuela/alumnos.json") );
    var $abc = $("<p class='p1'>"+$abc01+"</p>");

    $("main").append($abc);

    console.log( "Hello Words" );
};

$( document ).ready( main );