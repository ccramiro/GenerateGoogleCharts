var express = require( 'express' );

var app = express();

app.set( 'port', process.env.PORT || 8080 );

app.use(express.static(__dirname + '/public'));

app.get( '/', function( req, res ){
   res.type( 'text/plain' );
   res.send( 'Google charts' );
});

app.get( '/about', function( req, res ){
 res.type( 'text/plain' );
 res.send( 'About Google Charts' );
});

// custom 404 page
app.use( function( req, res ){
   res.type( 'text/plain' );
   res.status( 404 );
   res.send( '404 - Not Found' );
});

// custom 500 page
app.use( function( err, req, res, next ){
 console.error( err.stack );
 res.type( 'text/plain' );
 res.status( 500 );
 res.send( '500 - Server Error' );
});

app.listen( app.get( 'port' ), function(){
   console.log( 'Express started on http://localhost:' +
   app.get( 'port' ) + '; press Ctrl-C to terminate.' );
});
