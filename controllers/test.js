const Test = require('../models/test_model');

exports.Test = (test_name, les_id, test_type) => {
    return new Promise((resolve, reject) => {
        try {
            Test.test(test_name, les_id, test_type, (err, rows) => {
                resolve(rows)
            })

        } catch (error) {
            reject(error)
        }
    })


}
exports.GetAllTest = () => {
    return new Promise((resolve, reject) => {
        try {
            Test.getAllTest( (err, rows) => {
                resolve(rows)
            })

        } catch (error) {
            reject(error)
        }
    })


}

exports.ExerciseLessonId = (les_id) => {
    return new Promise((resolve, reject) => {
        try {
            Test.exerciseByLessonId(les_id, (err, rows) => {
                resolve(rows)
            })

        } catch (error) {
            reject(error)
        }
    })


}

exports.TestChoiceByTestId = (les_id) => {
    return new Promise((resolve, reject) => {
        try {
            Test.testChoiceByTestId(les_id, (err, rows) => {
                resolve(rows)
            })

        } catch (error) {
            reject(error)
        }
    })


}