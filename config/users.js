// load all things need

var mysql = require('mysql');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);
// expose this function to our app using module.exports

var users = function {
	connection.query("SELECT * FROM 'users' ", function(err, rows) {
		if (err)
			console.log('Error');

		res.render('/admin', {data:rows});
	});
};

module.exports.users = users;