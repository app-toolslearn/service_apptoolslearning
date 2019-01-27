 var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'testApp',
 timezone:'utc'
 
});





 module.exports=connection;