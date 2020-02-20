var data = require("../data.json");

exports.addChore = function(request, response) { 
	// Your code goes here
	var newEvent = {
		"color": request.query.color,
		"description": request.query.description,
		"date": request.query.date		
	};
	console.log(newEvent);
	data.calendar.push(newEvent);
	response.render('calendar', data);
}