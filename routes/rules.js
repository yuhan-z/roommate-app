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
	changed = req.query.new;
	change = req.query.change;
	if(change==null){
		data.rules.splice(index,1);
	}
	else{
		data.rules[index]["description"] = changed;
	}
	res.render('rules', data);
}