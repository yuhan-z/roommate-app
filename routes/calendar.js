/*
 * GET calendar page.
 */
var data = require('../data.json');

exports.view = function (req, res) {
  res.render('calendar',data);
};

exports.reserveApp = function(request, response) {
    var roommate = data.housemates[request.query.roommate];
    var appliance = data.appliances[request.query.appliance];
	var newEvent = {
		"name": roommate,
		"description": appliance + ' ' + request.query.time,
		"date": request.query.date,
		"category": 'reservation'	
	};
	console.log(newEvent);
	data.calendar.push(newEvent);
	response.render('calendar', data);
}
 
exports.assignChore = function(request, response) {
    var roommate = data.housemates[request.query.roommate];
    var appliance = data.appliances[request.query.appliance];
	var newEvent = {
		"name": roommate,
		"description": appliance + ' ' + request.query.time,
		"date": request.query.date,
		"category": 'reservation'	
	};
	console.log(newEvent);
	data.calendar.push(newEvent);
	response.render('calendar', data);
}