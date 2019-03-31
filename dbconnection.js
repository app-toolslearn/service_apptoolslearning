 var mysql = require('mysql');
 var connection = mysql.createPool({

     host: 'localhost',
     user: 'root',
     password: '',
     database: 'app_toolslearning',
     timezone: 'utc'

 });

 module.exports = connection;