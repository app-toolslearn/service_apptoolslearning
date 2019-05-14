var db = require('../dbconnection'); //reference of dbconnection.js
var Question = {

    question: function(qs_title, callback) {
        return db.query("insert into question (qs_title) value (?) ", [qs_title], callback);

    },
    questionByLeesonID: function(testNumber, callback) {
        return db.query("SELECT * FROM question INNER JOIN test_choice ON question.qs_id = test_choice.qs_id WHERE test_choice.test_id = ?", [testNumber], callback);

    },

};
module.exports = Question;