var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'quest',
    debug    :  false
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


function handle_database(req,res) {

    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT * from user",function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
  });
}

app.get("/test",function(req,res){
    handle_database(req,res);
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
