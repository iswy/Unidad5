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

    console.log( "Hello Words" );
};

$( document ).ready( main );