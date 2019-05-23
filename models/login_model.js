var db = require("../dbconnection"); //reference of dbconnection.js
var Login = {
    login: function(user_name, user_password, callback) {
        console.log(user_name);
        console.log(user_password);

        return db.query(
            "select * from user where user_email = ? and user_password = ?", [user_name, user_password],
            callback
        );
    }
};
module.exports = Login;