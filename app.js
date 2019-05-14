const express = require('express')
const bodyParser = require('body-parser')

var routes = require('./routes/index');
var lesson = require('./routes/lesson')
var question = require('./routes/question')
var longin =require('./routes/login')
var test = require('./routes/test')

const app = express()
const port = 3000
app.use(bodyParser.json({ limit: '100mb' }));

app.use('/', routes);
app.use('/lesson', lesson);
app.use('/question',question);
app.use('/longin',longin)
app.use('/test',test)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))