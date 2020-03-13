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
	if(changed==null){
		data.rules.splice(index,1);
	}
	else{
		data.rules[index]["description"] = changed;
	}
	res.render('rules', data);
}

exports.addRule = function (request, response) {
	var description = request.query.newRule;
	var newRule = {
		"description": description
	};
	console.log(newRule);
	data.rules.push(newRule);
	response.render('rules', data);
}

exports.deleteRule = function (request, response) {
    console.log("REMOVE RULE");
    var index = request.body.ruleIndex;
    console.log(index);
    var newRules = [];
    var oldRules = data.rules;
	for(var i = 0; i < oldRules.length; i++) {
        
        if (i == index) {
            continue;
        }
        rule = oldRules[i];
        console.log(rule);
        newRules.push(rule);
        console.log("deleted a rule");
    }
	data.rules = newRules;
	// response.render('rules', data);
}