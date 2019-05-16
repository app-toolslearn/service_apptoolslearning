var db = require('../dbconnection'); //reference of dbconnection.js
var Question = {

    question: function(qs_title, callback) {
        return db.query("insert into question (qs_title) value (?) ", [qs_title], callback);

    },
    questionByLeesonID: function(les_id, callback) {
        return db.query("SELECT * FROM question where les_id = ?", [les_id], callback);

    },
    questionByQsID: function(qs_id, callback) {
        return db.query("SELECT * FROM question where qs_id = ?", [qs_id], callback);

    },
     currentQuizNumber: (user_id, lesson, type, number, callback) => {
        return db.query(`SELECT *  FROM temp_quiz WHERE user_id= ? AND lesson= ? AND type=? AND number=? order by id`, [user_id, lesson, type, number], callbak)
    },
    choice:(qs_id,callback)=>{
        return db.query(`SELECT * FROM test_choice WHERE qs_id = ?`, [qs_id], callback)

    }
    

};
module.exports = Question;