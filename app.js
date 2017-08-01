//Module Dependencies
var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

//Set port number
var portnumber = 3000;

//Initialize express
var app = express();
console.log('Express has been initialized');

function(str,path){
	return stylus(str)
	.set('filename', path)
	.use(nib())
}

//Set Views Folder
app.set('views',__dirname+'/views');

//Initialize pug
app.set('view engine', 'pug');
console.log('pug has been initialized');

//Stylus Middleware
app.use(express.logger('dev'));
app.use(stylus.middleware(
	{
		src:__dirname + '/public',
		compile: compile
	}
))
app.use(express.static(__dirname+'/public'));

//Render Index Page
app.get('/', function(req,res){
	res.render('index',
	{title: 'Welcome'}
	);
})

app.listen(portnumber);
console.log(Server is now running on port '+portnumber');
