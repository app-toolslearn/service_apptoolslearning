var md5 = require('md5');
const Dotest = require('../models/do_test_model')

exports.Dotest = (user_id, les_id, test_id, dt_start_at, dt_finish_at, dt_total_score, dt_result_score) => {
    return new Promise((resolve, reject) => {
        try {
            Dotest.do_test(user_id, les_id, test_id, dt_start_at, dt_finish_at, dt_total_score, dt_result_score, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}