var md5 = require('md5');
const test_choice = require('../models/test_choice_model')

exports.Testchoice = (test_id, qs_id, test_c_no, test_c_c1, test_c_c2, test_c_c3, test_c_c4, test_c_ans, test_c_score, ) => {
    return new Promise((resolve, reject) => {
        try {
            test_choice.Testchoice(test_id, qs_id, test_c_no, test_c_c1, test_c_c2, test_c_c3, test_c_c4, test_c_ans, test_c_score, (err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}