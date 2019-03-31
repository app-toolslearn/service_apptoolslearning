var db = require('../dbconnection'); //reference of dbconnection.js
var Enroll = {

    enroll: function(user_id, course_id, enroll_status, callback) {
        return db.query("insert into enroll (user_id, course_id, enroll_status) value (?,?,?) ", [user_id, course_id, enroll_status], callback);

    },

};
module.exports = Enroll;