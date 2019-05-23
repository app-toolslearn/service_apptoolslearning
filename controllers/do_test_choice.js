var md5 = require('md5');
const Dotestchoice = require('../models/do_test_choice_model')

exports.Dotestchoice = (dt_id, dt_c_id, dt_c_ans, dt_c_score) => {
    return new Promise((resolve, reject) => {
        try {
            Dotestchoice.do_test_choice(dt_id, dt_c_id, dt_c_ans, dt_c_score, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}