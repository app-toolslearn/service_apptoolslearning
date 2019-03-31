var md5 = require('md5');
const Question = require('../models/question_model')

exports.Question = (qs_title) => {
    return new Promise((resolve, reject) => {
        try {
            Question.question(qs_title, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}