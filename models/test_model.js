var db = require('../dbconnection'); //reference of dbconnection.js
var Test = {

    test: function(test_name, les_id, test_type, callback) {
        return db.query("insert into test (test_name,les_id, test_type) value (?,?,?) ", [test_name, les_id, test_type], callback);

    },
    testByLessonId :(lessonId,callback)=>{
        return db.query("SELECT * FROM test WHERE les_id =?",[lessonId],callback)
    }

};
module.exports = Test;