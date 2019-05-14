var express = require('express');
var router = express.Router();
var testController = require('../controllers/test')

//do something

router.post('/testByLessonId',(req,res)=>{    
    testController.TestLessonID(req.body.lessonID).then(rows =>{
        res.json(rows)
    })
})
module.exports = router;