var md5 = require('md5');
const Dotestdialog = require('../models/do_test_dialog_model')

exports.Dotestdialog = (dt_id, dt_d_id, dt_d_ans, dt_d_score) => {
    return new Promise((resolve, reject) => {
        try {
            Dotestdialog.do_test_dialog(dt_id, dt_d_id, dt_d_ans, dt_d_score, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}