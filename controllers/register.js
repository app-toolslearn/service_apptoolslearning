const Reg = require('../models/register_model')
var md5 = require('md5');

exports.Register = (user_name,user_email,user_password,user_pic) => {
    return new Promise((resolve, reject) => {
        try {
            Reg.checkReg(user_name,user_email,(err,rows)=>{                
                if (rows.length > 0) {
                    resolve("ข้อมูลซ้ำอาจเกิดจาก email หรือ Username")
                } else {
                    Reg.reg(user_name,user_email,md5(user_password),user_pic,(err,rows)=>{
                        resolve("success")
                    })
                }

            })
        } catch (error) {

            reject(error)
        }
    })
}