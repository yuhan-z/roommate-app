var data = require('../data.json');

/*
 * GET rules page.
 */

exports.view = function (req, res) {
  res.render('rules', data);
};

exports.add = function (req, res) {
	var newRule = {
		"description": req.query.rule,		
	};
	data.rules.push(newRule);
	res.render('rules', data);
}

exports.remove = function (req, res){
	index = req.query.index;
	data.rules.splice(index,1);
	res.render('rules', data);
}