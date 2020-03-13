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
var addevent = require('./routes/addevent');

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
// HOME
app.get('/home', home.view);
app.post('/getEvents', home.getEvents);
// CALENDAR
app.get('/calendar', calendar.view);
app.get('/assignChore', calendar.assignChore);
app.get('/reserveApp', calendar.reserveApp);
// RULES
app.get('/rules', rules.view);
app.get('/rules/add', rules.add);
app.get('/rules/remove', rules.remove);
app.get('/addRule', rules.addRule);
app.post('/deleteRule', rules.deleteRule)
// SETTINGS
app.get('/settings', settings.view);
// CHORES
app.get('/chores', chores.view);
// APPLIANCE
app.get('/appliance', appliance.view);
app.get('/addevent', addevent.addEvent);

// for A/B testing
app.get('/homeAlt',home.viewAlt);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});