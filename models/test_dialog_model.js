var db = require('../dbconnection'); //reference of dbconnection.js
var test_dialog = {

    Testdialog: function(qs_id, test_id, test_d_no, test_ans, callback) {
        return db.query("insert into test_dialog (qs_id, test_id, test_d_no, test_ans) value (?,?,?,?) ", [qs_id, test_id, test_d_no, test_ans, ], callback);

    },

};
module.exports = test_dialog;