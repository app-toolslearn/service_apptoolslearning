var db = require('../dbconnection'); //reference of dbconnection.js
var moment = require('moment');
var Message = {

    mes: function(user_id, mes_description, mes_check, mes_at, callback) {
        
        var currentTime = moment().format('YYYY-MM-DD:hh:mm:ss');
        
        return db.query("insert into message (user_id, mes_send, mes_reply, mes_check, mes_at) value (?,?,?,?,?) ", [user_id, mes_description,"", "0", currentTime], callback);

    }

};
module.exports = Message;