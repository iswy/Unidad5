/**
 * Created by pi on 16.10.20.
 */

var main = function()
{
    "use strict";

    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&jsoncallback=?";

    //console.log("Hello World");

    $.getJSON( url ,function ( flickerResponse )
    {
        console.log(flickerResponse);

        flickerResponse.item.forEach( function(photo){
            console.log(photo);
        } );

    });



    /*
        REcuperar JSON de imágenes públicas de FLICKR
        mostrarlos en <img>
     */

};

$( document ).ready( main );