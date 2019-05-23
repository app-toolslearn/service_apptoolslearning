var md5 = require('md5');
const Message = require('../models/message_model')

exports.Message = (user_id, mes_description) => {
    return new Promise((resolve, reject) => {
        try {
            Message.mes(user_id, mes_description, (err, rows) => {
                resolve("success")
            })
        } catch (error) {

            reject(error)
        }
    })
}