var express = require('express');
var router = express.Router();
var reg = require('../controllers/register')
var login = require("../controllers/login")


router.post('/register', function(req, res, next) {
       reg.Register(req.body.user_name,req.body.user_email,req.body.user_password,req.body.user_pic).then(rows =>{
        res.json({"status":rows})

       })
});

router.post('/login',(req,res)=>{
    login.Login(req.body.user_name,req.body.user_password).then(rows =>{
        res.json(rows)

    })
})

module.exports = router;