var md5 = require('md5');
const Question = require('../models/question_model')
const test_dialog = require('../models/test_dialog_model')


exports.Testdialog = (temp_all) => {
    return new Promise((resolve, reject) => {
        try {
            test_dialog.Testdialog(temp_all, (err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.TestdialogALL = (user_id,lesson_id ) => {
    return new Promise((resolve, reject) => {
        try {
            test_dialog.TestdialogALL( user_id,lesson_id,(err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.Question = (lesson_id) => {
    return new Promise((resolve, reject) => {
        try {
            Question.questionByLeesonID(lesson_id, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.QuestionByQsID = (qs_id) => {
    return new Promise((resolve, reject) => {
        try {
            Question.questionByQsID(qs_id, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.CurrentQuizNumber = (user_id,lesson_id,number) => {
    return new Promise((resolve, reject) => {
        try {
            test_dialog.currentQuizNumber(user_id,lesson_id,number, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.Getchoice = (qs_id) => {
    return new Promise((resolve, reject) => {
        try {
            Question.choice(qs_id, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.CountTempAll = (user_id,lesson_id)=>{
    return new Promise((resolve, reject) => {
        try {
            test_dialog.countTestdialog(user_id,lesson_id, (err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}