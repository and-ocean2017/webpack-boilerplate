const path = require( 'path' );
const fs = require( 'fs' );
const express = require( 'express' );
const app = express();

app.get( '/', function (req, res) {
    const pathToHTMLFile = path.resolve( __dirname, '../dist/html/html_nodes_prototype.html' );
    const fileContent = fs.readFileSync( pathToHTMLFile, 'utf-8' );
    res.send( fileContent );
} );

app.use( '/static', express.static(path.resolve(__dirname, '../dist')) );

app.listen( 8080, () => {
    console.log( 'server is running' );
});