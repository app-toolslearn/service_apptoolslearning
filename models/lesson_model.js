var db = require('../dbconnection'); //reference of dbconnection.js
var Lesson = {

    lesson: function(les_name, les_description, course_id, les_no, callback) {
        return db.query("insert into lesson (les_name, les_description, course_id, les_no) value (?,?,?,?) ", [les_name, les_description, course_id, les_no], callback);

    },

};
module.exports = Lesson;