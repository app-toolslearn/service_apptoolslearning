var md5 = require('md5');
const study_log = require('../models/study_log_model')

exports.Studyl = (user_id, les_id, course_id, sl_finish_at) => {
    return new Promise((resolve, reject) => {
        try {
            study_log.Studyl(user_id, les_id, course_id, sl_finish_at, (err, rows) => {
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}