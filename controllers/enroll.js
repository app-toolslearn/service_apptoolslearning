var md5 = require('md5');
const Enroll = require('../models/enroll_model')

exports.Enroll = (user_id, course_id, enroll_status) => {
    return new Promise((resolve, reject) => {
        try {
            Enroll.enroll(user_id, course_id, enroll_status, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}