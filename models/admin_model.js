var db = require('../dbconnection'); //reference of dbconnection.js
var Admin = {

    admin: function(admin_email, admin_password, callback) {
        return db.query("insert into admin (admin_email, admin_password) value (?,?) ", [admin_email, admin_password], callback);

    },

};
module.exports = Admin;