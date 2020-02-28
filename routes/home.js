var data = require('../data.json');

/*
 * GET home page.
 */

exports.view = function (req, res) {
    name = req.query.name;
    if (name != null) {
        data["name"] = name.split("@")[0];
    } else {
        data["name"] = "User";
    }
    res.render('home', data);
};

exports.viewAlt = function (req, res) {
    name = req.query.name;
    if (name != null) {
        data["name"] = name.split("@")[0];
    } else {
        data["name"] = "User";
    }
    res.render('homeAlt', data);
};