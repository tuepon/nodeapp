var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.render('index.ejs',{title: 'Hello World'});
});
app.get('/about',function(req,res){
	res.render('layout.ejs',{title: 'About Us',body: '<h1>About Us</h1>'});
});
app.get('/*',function(req,res){
	res.status(404).render('error.ejs',{title:"Error!"});
});
console.log('server started');
app.listen(3000);
