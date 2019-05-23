var db = require('../dbconnection'); //reference of dbconnection.js
var study_log = {

    Studyl: function(user_id, les_id, course_id, sl_finish_at, callback) {
        return db.query("insert into study_log ( user_id, les_id, course_id, sl_finish_at) value (?,?,?,?) ", [user_id, les_id, course_id, sl_finish_at], callback);

    },

};
module.exports = study_log