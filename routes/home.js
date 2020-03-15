var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
    name = req.query.username;
    if(name != null) data["username"] = name;
    res.render('home', data);
};

exports.viewAlt = function (req, res) {
    name = req.query.username;
    if(name != null) data["username"] = name;
    res.render('homeAlt', data);
};

exports.getEvents = function(request, response) {
    response.json(data);
}