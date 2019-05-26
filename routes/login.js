var express = require("express");
var router = express.Router();
var LoginController = require("../controllers/login");
//do something

router.post("/checklogin", (req, res) => {
    console.log(req.body.username)
    LoginController.Login(req.body.username, req.body.password).then(rows => {
        res.json(rows);
    });
});

module.exports = router;