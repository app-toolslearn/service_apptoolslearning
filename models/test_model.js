var db = require('../dbconnection'); //reference of dbconnection.js
var Test = {

    test: function(test_name, les_id, test_type, callback) {
        return db.query("insert into test (test_name,les_id, test_type) value (?,?,?) ", [test_name, les_id, test_type], callback);

    },
    getAllTest :(callback)=>{
        return db.query("SELECT * FROM test",[],callback)
    },
    exerciseByLessonId : (lessonId,callback)=>{
        console.log(lessonId)
        return db.query("SELECT * FROM test_choice WHERE lesson_id =?",[lessonId],callback)
    },
    testChoiceByTestId : (testId,callback)=>{
        console.log(testId)
        return db.query("SELECT * FROM test_choice WHERE test_id =?",[testId],callback)
    }

};
module.exports = Test;