var db = require('../dbconnection'); //reference of dbconnection.js
var test_dialog = {

    Testdialog: function(temp_all, callback) {
        val=[
            temp_all.ques_id, 
            temp_all.user_id,
            temp_all.ans,
            temp_all.number,
            temp_all.lesson_id
        ]

        return db.query("insert into test_dialog (ques_id, user_id, ans, number,lesson_id) value (?,?,?,?,?) ", val, callback);

    },
    TestdialogALL : (user_id,lesson_id,callback)=>{    
        return db.query("SELECT * FROM test_dialog WHERE lesson_id = ? AND user_id = ?", [lesson_id,user_id], callback);
    },
    currentQuizNumber: (user_id, lesson_id, number, callback) => {
        
        return db.query(`SELECT *  FROM test_dialog WHERE user_id= ? AND lesson_id= ?  AND number=? order by test_d_id`, [user_id, lesson_id,number], callback)
    },
    countTestdialog :(user_id,lesson_id,callback) =>{
        return db.query("SELECT COUNT(*) FROM test_dialog WHERE lesson_id = ? AND user_id = ?", [lesson_id,user_id], callback);

    }
   

};
module.exports = test_dialog;