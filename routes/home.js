var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
	name = req.query.name;
	if(name != null) data["name"] = name.split("@")[0];
	data["viewAlt"] = false;
    res.render('home', data);
};

exports.viewAlt = function (req, res) {
	name = req.query.name;
	if(name != null) data["name"] = name.split("@")[0];
	data["viewAlt"] = true;
    res.render('home', data);
};