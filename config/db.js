var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db;
if (db === undefined) {
	db = new sqlite3.Database(path.join(__dirname, '../demo-app.db'));
	console.log("DB created");
}

module.exports = db;

