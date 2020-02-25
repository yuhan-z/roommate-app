var data = require("../data.json");

exports.addEvent = function(request, response) { 
	// Your code goes here
	var newEvent = {
		"name": request.query.name,
		"description": request.query.description,
		"date": request.query.date,
		"category":request.query.category	
	};
	console.log(newEvent);
	data.calendar.push(newEvent);
	response.render('calendar', data);
}