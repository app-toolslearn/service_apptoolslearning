var md5 = require('md5');
const Login =require('../models/login_model')

exports.Login = (user_name,user_password) => {
    return new Promise((resolve, reject) => {
        try {
            Login.login(user_name,md5(user_password),(err,rows)=>{
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}