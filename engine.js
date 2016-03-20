/*
** Express Engine IEMKA
** v1.0
** Developed by Triadi Prabowo
*/

// Dependencies
var express = require('express'),
	app = express(),
	jade = require('jade'),
	bodyParser = require('body-parser'),
	compression = require('compression'),
	cookieParser = require('cookie-parser'),
	http = require('http'),
	port = 4000;

global.ROOT_DIR = __dirname;

/*
** Start Middleware Configuration
*/
// Cookie Parsing
app.use(cookieParser());

// Enable GZIP compression at max level
app.use(compression({
	level: 9
}));

// URI Encoded Parsing
app.use(bodyParser.urlencoded({ 
	extended: false 
}));

// Configure Express Application
app.set('view cache', true);
app.set('views',ROOT_DIR+'/app-src/view');
app.set('view engine', 'jade');

app.use('/dist', express.static(ROOT_DIR+'/dist'));

// Setting up host (Router)
app.use(require(ROOT_DIR+'/cfg/router'));

// Server Configuration
http.createServer(app, function(req, res, next) {
	if(req.url == '/favicon.ico') {
		res.writeHead(200, {'Content-Type': 'image/x-icon'});
		res.end();
		return;
	}
}).listen(port, function() {
	console.log('Express server listening and running on port '+port);	
});
