var User = require('../models/user.js');

module.exports = {
	getAllUsers: function(req, res) {
 		User.getAllUsers(function (users, error) {
 			if (error) {
 				res.sendStatus(500);
 			} else {
 				res.status(200).send(users);
 			}
 		});
	}
};