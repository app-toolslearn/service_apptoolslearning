var express = require('express');
var router = express.Router();
var lessonContorller = require('../controllers/lesson')

//do something

router.post('/lessonByCourseID',(req,res)=>{    
    console.log(req.body.course_id);
    
    lessonContorller.LessonByCourse(req.body.course_id).then(rows =>{
        res.json(rows);
    })
 })

 router.post('/lessonContentByLesId',(req,res)=>{    
    console.log(req.body.lesson_id);
    
    lessonContorller.LessonContentByLesId(req.body.lesson_id).then(rows =>{
        res.json(rows);
    })
 })


module.exports = router;