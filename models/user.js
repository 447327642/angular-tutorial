var db = require('../config/db.js');

module.exports = {
	getAllUsers: function(cb) {
		var users = [];

		var query = "SELECT * FROM users";

		db.each(query, 
			function(error, row) {
				if (error) {
					cb(null, error);
				} else if (row) {
					users.push(row);
				} else {
					cb();
				}
			}, function() {
				cb(users, null);
			}
		);
	}
}
