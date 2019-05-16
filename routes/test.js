var express = require('express');
var router = express.Router();
var Helper = require('../Helper/Helper')


//do something

router.post('/index',async (req,res)=>{   
     console.log("LLLLLLL");
     
    let lesson_id = req.body.lesson_id
   let user_id = req.body.user_id
   let question = await Helper.Question(lesson_id)
   let tempAll = await Helper.TestdialogALL(user_id,lesson_id)
    if (tempAll.length == 0) {
        let idx = 1
        let modelQuestion = []
        for (let index = 0; index < question.length; index++) {
            let value = question[index];
            modelQuestion.push(value)            
            modelQuestion.forEach(async element => {
                    let temp_test = {};
                    temp_test.user_id = user_id;
                    temp_test.lesson_id = lesson_id;
                    temp_test.ques_id = element.qs_id;
                    temp_test.number = idx++;
                    let status = await Helper.Testdialog(temp_test); //temp_test->save();

            });
            


        }
        

    }
    let idx = 1
    let dataQuizNumber = await Helper.CurrentQuizNumber(user_id,lesson_id,idx)
    console.log(tempAll);
    
    let model = await Helper.QuestionByQsID(dataQuizNumber[0]['ques_id'])
    let getchoice = await Helper.Getchoice(dataQuizNumber[0]['ques_id'])

    let data = {}
    data.status = true;
    data.question = model[0];
    data.choice = getchoice;
    data.temp_all = tempAll;
    data.currentQuiz = dataQuizNumber[0];

    res.json(data)

})


module.exports = router;