var express = require('express');
var router = express.Router();

var reg = require('../controllers/register');
var login = require("../controllers/login");
var admin = require("../controllers/admin");
var question = require("../controllers/question");
var course = require("../controllers/course");
var test = require('../controllers/test');
var mes = require('../controllers/message');
var study_log = require('../controllers/study_log');
var test_dialog = require('../controllers/test_dialog');
var test_choice = require('../controllers/test_choice');
var lesson = require('../controllers/lesson');
var enroll = require('../controllers/enroll');
var do_test_dialog = require('../controllers/do_test_dialog');
var do_test_choice = require('../controllers/do_test_choice');
var do_test = require('../controllers/do_test');

router.post('/register', function(req, res, next) {
    reg.Register(req.body.user_name, req.body.user_email, req.body.user_password, req.body.user_pic).then(rows => {
        res.json({ "status": rows })

    })
});

router.post('/login', (req, res) => {
    login.Login(req.body.user_name, req.body.user_password).then(rows => {
        res.json(rows)

    })
});

router.post('/admin', (req, res) => {
    admin.Admin(req.body.admin_email, req.body.admin_password).then(rows => {
        res.json(rows)

    })
});
router.post('/question', (req, res) => {
    question.Question(req.body.qs_title).then(rows => {
        res.json(rows)
    })
});
router.post('/course', (req, res) => {
    course.Course(req.body.course_name, req.body.course_description).then(rows => {
        res.json(rows)
    })
});


router.post('/test', (req, res) => {
    test.Test(req.body.test_name, req.body.test_type).then(rows => {
        res.json(rows)
    })
});

router.post('/message', (req, res) => {
    mes.Message(req.body.user_id, req.body.mes_description, req.body.mes_check, req.body.mes_at).then(rows => {
        res.json(rows)
    })
});

router.post('/study_log', (req, res) => {
    study_log.Studyl(req.body.user_id, req.body.les_id, req.body.course_id, req.body.sl_finish_at).then(rows => {
        res.json(rows)
    })
});

router.post('/test_dialog', (req, res) => {
    test_dialog.Testdialog(req.body.qs_id, req.body.test_id, req.body.test_d_no, req.body.test_ans).then(rows => {
        res.json(rows)
    })
});

router.post('/test_choice', (req, res) => {
    test_choice.Testchoice(req.body.test_id, req.body.qs_id, req.body.test_c_no, req.body.test_c_c1, req.body.test_c_c2, req.body.test_c_c3, req.body.test_c_c4, req.body.test_c_ans, req.body.test_c_score).then(rows => {
        res.json(rows)
    })
});

router.post('/lesson', (req, res) => {
    lesson.Lesson(req.body.les_name, req.body.les_description, req.body.course_id, req.body.les_no).then(rows => {
        res.json(rows)
    })
});

router.post('/enroll', (req, res) => {
    enroll.Enroll(req.body.user_id, req.body.course_id, req.body.enroll_status).then(rows => {
        res.json(rows)
    })
});

router.post('/do_test_dialog', (req, res) => {
    do_test_dialog.Dotestdialog(req.body.dt_id, req.body.dt_d_id, req.body.dt_d_ans, req.body.dt_d_score).then(rows => {
        res.json(rows)
    })
});

router.post('/do_test_choice', (req, res) => {
    do_test_choice.Dotestchoice(req.body.dt_id, req.body.dt_c_id, req.body.dt_c_ans, req.body.dt_c_score).then(rows => {
        res.json(rows)
    })
});

router.post('/do_test', (req, res) => {
    do_test.Dotest(req.body.user_id, req.body.les_id, req.body.test_id, req.body.dt_start_at, req.body.dt_finish_at, req.body.dt_total_score, req.body.dt_result_score).then(rows => {
        res.json(rows)
    })
});
router.get('/hello', (req, res) => {
        res.json("Hello")
    })



module.exports = router;