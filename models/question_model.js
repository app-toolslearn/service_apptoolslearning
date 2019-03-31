var db = require('../dbconnection'); //reference of dbconnection.js
var Question = {

    question: function(qs_title, callback) {
        return db.query("insert into question (qs_title) value (?) ", [qs_title], callback);

    },

};
module.exports = Question;