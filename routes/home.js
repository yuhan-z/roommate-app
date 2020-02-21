var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
	name = req.query.name;
	if(name == null) name = "anonymous";
	if(data["name"] == null) data["name"] = name;
    res.render('home', data);
};