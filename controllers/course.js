var md5 = require('md5');
const Course = require('../models/course_model')

exports.Course = (course_name, course_description) => {
    return new Promise((resolve, reject) => {
        try {
            Course.course(course_name, course_description, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}