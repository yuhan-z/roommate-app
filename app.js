/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var app = express();

// Example route
// var user = require('./routes/user');
var index = require('./routes/index');
var home = require('./routes/home');
var calendar = require('./routes/calendar');
var rules = require('./routes/rules');
var settings= require('./routes/settings');
var chores = require('./routes/chores');
var appliance = require('./routes/appliance');
var addchore = require('./routes/addchore');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/hello/:userName', hello.view);
// Example route
// app.get('/users', user.list);

// Add routes here
app.get('/', index.view);
app.get('/home', home.view);
app.get('/calendar', calendar.view);
app.get('/rules', rules.view);
app.get('/settings', settings.view);
app.get('/chores', chores.view);
app.get('/appliance', appliance.view);
app.get('/addchore', addchore.addChore);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});