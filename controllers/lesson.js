var md5 = require('md5');
const Lesson = require('../models/lesson_model')

exports.Lesson = (les_name, les_description, course_id, les_no) => {
    return new Promise((resolve, reject) => {
        try {
            Lesson.lesson(les_name, les_description, course_id, les_no, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}
exports.LessonByCourse = (course_id) => {
    return new Promise((resolve, reject) => {
        try {
            Lesson.lessonByCourse(course_id, (err, rows) => {
                resolve(rows)

            })
        } catch (err) {

            reject(err)
        }
    })
}

exports.LessonContentByLesId = (lesson_id) => {
    return new Promise((resolve, reject) => {
        try {
            Lesson.lessonContentByLesId(lesson_id, (err, rows) => {
                resolve(rows)

            })
        } catch (err) {

            reject(err)
        }
    })
}