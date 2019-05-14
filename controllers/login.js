var md5 = require('md5');
const Login = require('../models/login_model')

exports.Login = (user_name, user_password) => {
    console.log(user_name);
    
    return new Promise((resolve, reject) => {
        try {
            Login.login(user_name, md5(user_password), (err, rows) => {
                console.log(rows);
                
                resolve(rows)
            })
        } catch (error) {

            reject(error)
        }
    })
}