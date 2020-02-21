var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
	name = req.query.name
	if(name == null) name = "anonymous"
	data["name"] = name;
    res.render('home', data);
};