var md5 = require('md5');
const Admin = require('../models/admin_model')

exports.Admin = (admin_email, admin_password) => {
    return new Promise((resolve, reject) => {
        try {
            Admin.admin(admin_email, md5(admin_password), (err, rows) => {
                resolve(rows)

            })
        } catch (error) {

            reject(error)
        }
    })
}