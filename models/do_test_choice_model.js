var db = require('../dbconnection'); //reference of dbconnection.js
var Dotestchoice = {

    do_test_choice: function(dt_id, dt_c_id, dt_c_ans, dt_c_score, callback) {
        return db.query("insert into do_test_choice (dt_id, dt_c_id, dt_c_ans, dt_c_score) value (?,?,?,?) ", [dt_id, dt_c_id, dt_c_ans, dt_c_score], callback);

    },

};
module.exports = Dotestchoice;