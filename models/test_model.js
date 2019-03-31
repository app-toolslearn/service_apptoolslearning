var db = require('../dbconnection'); //reference of dbconnection.js
var Test = {

    test: function(test_name, les_id, test_type, callback) {
        return db.query("insert into test (test_name,les_id, test_type) value (?,?,?) ", [test_name, les_id, test_type], callback);

    },

};
module.exports = Test;