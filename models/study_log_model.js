var db = require('../dbconnection'); //reference of dbconnection.js
var moment = require('moment');
var study_log = {

    Studyl: function (user_id, les_id, point, callback) {
        var currentTime = moment().format('YYYY-MM-DD:hh:mm:ss');
        return db.query("REPLACE INTO study_log ( user_id, les_id,point, finish_date) value (?,?,?,?) ", [user_id, les_id, point, currentTime], callback);

    },

};
module.exports = study_log