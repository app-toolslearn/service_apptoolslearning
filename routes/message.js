var express = require("express");
var router = express.Router();
var MessageController = require("../controllers/message");
//do something

router.post("/sendMsg", (req, res) => {
    MessageController.Message(req.body.user_id, req.body.desc).then(rows => {
        console.log(res)
        res.json(rows);
    });
});

module.exports = router;