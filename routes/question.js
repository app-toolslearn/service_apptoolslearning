var express = require('express');
var router = express.Router();
var questionContorller = require('../controllers/question')

//do something

router.post('/questionByLessonId',(req,res)=>{    
    questionContorller.QuestionByTestNumber(req.body.testnumber).then(rows =>{
        res.json(rows)
    })
})
module.exports = router;