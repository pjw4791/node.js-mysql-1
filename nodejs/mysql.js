//use mysql;
//update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'opentutorials'
});
 //insecureAuth: 'true'
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error){
      console.log(error);
  }
  console.log(results);
});
 
connection.end();