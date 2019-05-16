var md5 = require('md5');
const test_dialog = require('../models/test_dialog_model')

exports.Testdialog = (ques_id, user_id, ans, number ) => {
    return new Promise((resolve, reject) => {
        try {
            test_dialog.Testdialog(ques_id, user_id, ans, number, (err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.TestdialogALL = (ques_id, user_id) => {
    return new Promise((resolve, reject) => {
        try {
            test_dialog.TestdialogALL(ques_id,user_id,(err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}
