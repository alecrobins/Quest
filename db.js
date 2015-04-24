//// Create a pool connection with the mysql server
var mysql = require('mysql');

// Connect to MySQL database
var pool = mysql.createPool({
    connectionLimit : 100, //important - limit of connections at a time
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    // database : 'quest',
    database : 'questTest',
    debug    :  false
});

// exports get connection
exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};
