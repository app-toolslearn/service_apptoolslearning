var md5 = require('md5');
const test_dialog = require('../models/test_dialog_model')

exports.Testdialog = (qs_id, test_id, test_d_no, test_ans, ) => {
    return new Promise((resolve, reject) => {
        try {
            test_dialog.Testdialog(qs_id, test_id, test_d_no, test_ans, (err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}