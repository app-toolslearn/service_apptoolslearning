var db = require('../dbconnection'); //reference of dbconnection.js
var test_choice = {

    Testchoice: function(test_id, qs_id, test_c_no, test_c_c1, test_c_c2, test_c_c3, test_c_c4, test_c_ans, test_c_score, callback) {
        return db.query("insert into  test_choice (test_id, qs_id,test_c_no,test_c_c1,test_c_c2,test_c_c3, test_c_c4, test_c_ans, test_c_score) value (?,?,?,?,?,?,?,?,?) ", [test_id, qs_id, test_c_no, test_c_c1, test_c_c2, test_c_c3, test_c_c4, test_c_ans, test_c_score], callback);

    },

};
module.exports = test_choice;