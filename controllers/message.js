var md5 = require('md5');
const Message = require('../models/message_model')

exports.Message = (user_id, mes_description, mes_check, mes_at) => {
    return new Promise((resolve, reject) => {
        try {
            Message.mes(user_id, mes_description, mes_check, mes_at, (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}