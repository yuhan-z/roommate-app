var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
    username = req.query.username;
    if (username == null) {
        data["username"] = "Housemate";
    } else {
        data["username"] = username;
    }
    res.render('home', data);
};

exports.viewAlt = function (req, res) {
    username = req.query.username;
    if (username == null) {
        data["username"] = "Housemate";
    } else {
        data["username"] = username;
    }
    res.render('homeAlt', data);
};

exports.getEvents = function(request, response) {
    response.json(data);
}