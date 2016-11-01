var jsonf = "http://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json";

var anadir = function ( json )
{
    $( "#content" ).append( json );
};

var main = function ()
{
    var $lil = $( "<div>" );
    $lil.text( "Flickr's" );
    $( "#content" ).append( $lil );

    var src;
    $.getJSON( jsonf , function ( data )
    {
        $.each( data.photos.photo , function ( i , item )
        {
            src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
            $( "<img/>" ).attr( "src" , src ).appendTo( "#content" );
            if ( i == 3 ) return false;
        } );
    } );
};

$( document ).ready( main );