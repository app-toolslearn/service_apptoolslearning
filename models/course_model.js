var db = require('../dbconnection'); //reference of dbconnection.js
var Course = {

    course: function(course_name, course_description, callback) {
        return db.query("insert into course (course_name , course_description) value (?,?) ", [course_name, course_description], callback);

    },

};
module.exports = Course;