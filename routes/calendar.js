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
    var date = request.query.date;
    var time = request.query.time
	var newEvent = {
		"name": roommate,
		"description": appliance + ' ' + time,
		"date": date,
		"category": 'reservation'	
	};
	console.log(newEvent);
	data.calendar.push(newEvent);
	response.render('calendar', data);
}
 
exports.assignChore = function(request, response) {
    var roommate = data.housemates[request.query.roommate];
    var chore = data.chore_list[request.query.chore];
    var date = request.query.date;
	var newEvent = {
		"name": roommate,
		"description": chore,
		"date": date,
		"category": 'chore'
	};
	console.log(newEvent);
	data.calendar.push(newEvent);
	response.render('calendar', data);
}