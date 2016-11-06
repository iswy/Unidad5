/**
 * Created by pi on 16.10.20.
 */

var mostrar = function(url)
{
    var $img = $("<img>");

    $img.attr("src",url);

    $("main .photos").append($img);
};

/*
    >> Estamos comsumiendo un API
    >>

    (1) Poner un campo para recuperar imágenes
    (2) Poner animaciones a cada $img
 */

var main = function()
{
    "use strict";

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=forest&format=json&jsoncallback=?";

    //console.log("Hello World");

    $.getJSON( url ,function ( flickerResponse )
    {
        console.log(flickerResponse);

        flickerResponse.items.forEach( function(photo)
        {
            //console.log(photo.media.m);
            mostrar(photo.media.m);
        } );

    });



    /*
        REcuperar JSON de imágenes públicas de FLICKR
        mostrarlos en <img>
     */

};

$( document ).ready( main );