var db = require('../dbconnection'); //reference of dbconnection.js
var Dotestdialog = {

    do_test_dialog: function(dt_id, dt_d_id, dt_d_ans, dt_d_score, callback) {
        return db.query("insert into do_test_dialog (dt_id, dt_d_id, dt_d_ans, dt_d_score) value (?,?,?,?) ", [dt_id, dt_d_id, dt_d_ans, dt_d_score], callback);

    },

};
module.exports = Dotestdialog;