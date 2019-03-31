var db = require('../dbconnection'); //reference of dbconnection.js
var Dotest = {

    do_test: function(user_id, les_id, test_id, dt_start_at, dt_finish_at, dt_total_score, dt_result_score, callback) {
        return db.query("insert into  do_test (user_id, les_id, test_id, dt_start_at, dt_finish_at, dt_total_score, dt_result_score) value (?,?,?,?,?,?,?) ", [user_id, les_id, test_id, dt_start_at, dt_finish_at, dt_total_score, dt_result_score], callback);

    },
};
module.exports = Dotest;