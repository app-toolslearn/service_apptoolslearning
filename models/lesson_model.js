var db = require('../dbconnection'); //reference of dbconnection.js
var Lesson = {

    lesson: function(les_name, les_description, course_id, les_no, callback) {
        return db.query("insert into lesson (les_name, les_description, course_id, les_no) value (?,?,?,?) ", [les_name, les_description, course_id, les_no], callback);

    },
    lessonByCourse: function(course_id, callback) {        
        return db.query("SELECT * FROM lesson left join study_log log on lesson.les_id = log.les_id WHERE course_id = ?", [course_id], callback);
    },
    lessonContentByLesId: function(lesson_id, callback) {        
        return db.query("SELECT * FROM lesson_content WHERE lesson_id = ?", [lesson_id], callback);
    }
};
module.exports = Lesson;