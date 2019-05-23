var db = require('../dbconnection'); //reference of dbconnection.js

var Register = {

    reg: function(user_name, user_email, user_password, callback) {
        return db.query("insert into user (user_name,user_email,user_password) value (?,?,?) ", [user_name, user_email, user_password], callback);
    },
    checkReg: (user_name, user_email, callback) => {
        return db.query("select * from user where user_name = ? or user_email = ?", [user_name, user_email], callback);

    }
};
module.exports = Register;