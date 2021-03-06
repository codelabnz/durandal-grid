var fs = require('fs'),
    port = process.env.PORT || 3000;

var express = require('express'),
    app = express();

var dir = __dirname + '/client/';

//Configure
app.set('views', __dirname + '/views/');
app.engine('.html', require("./app_modules/htmlEngine.js")());
app.set('view engine', 'html');
app.use(express['static'](dir));

//Index Route
app.get('/', function(req, res){        
    res.render('index');
});

//Start Listening
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);
