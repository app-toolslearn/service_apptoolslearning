var express = require('express');
var router = express.Router();
var studyLogController = require('../controllers/study_log')

//do something

router.post('/saveStudyLog',(req,res)=>{    
    studyLogController.Studyl(req.body.user_id, req.body.les_id, req.body.point).then(rows =>{
        res.json(rows)
    })
})

module.exports = router;