var data = require('../data.json');

/*
 * GET finance page.
 */

exports.view = function (req, res) {
  res.render('finance', data);
};