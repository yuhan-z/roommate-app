var data = require('../data.json');

/*
 * GET rules page.
 */

exports.view = function (req, res) {
  res.render('rules', data);
};