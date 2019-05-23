var express = require("express");
var router = express.Router();
var RegisterController = require("../controllers/register");
//do something

router.post("/checkRegister", (req, res) => {
    RegisterController.Register(req.body.user_name, req.body.user_email, req.body.user_password).then(rows => {
        res.json(rows);
    });
});

module.exports = router;