var express = require('express');
var router = express.Router();
var testController = require('../controllers/test')

//do something

router.post('/getAllTest',(req,res)=>{    
    testController.GetAllTest().then(rows =>{
        res.json(rows)
    })
})

router.post('/exerciseByLessonId',(req,res)=>{    
    testController.ExerciseLessonId(req.body.lessonID).then(rows =>{
        res.json(rows)
    })
})

router.post('/testChoiceByTestId',(req,res)=>{    
    testController.TestChoiceByTestId(req.body.testId).then(rows =>{
        res.json(rows)
    })
})
module.exports = router;