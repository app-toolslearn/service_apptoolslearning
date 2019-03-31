var db = require('../dbconnection'); //reference of dbconnection.js
var Message = {

    mes: function(user_id, mes_description, mes_check, mes_at, callback) {
        return db.query("insert into message (user_id, mes_description , mes_check, mes_at) value (?,?,?,?) ", [user_id, mes_description, mes_check, mes_at], callback);

    },
    mes: function(user_id, callback) {
        return db.query("select * from user where user_id = ? ", [user_id], callback);
    }

};
module.exports = Message;