const express = require('express')
const bodyParser =require('body-parser')
var routes = require('./routes/index');

const app = express()
const port = 3000
app.use(bodyParser.json({limit: '100mb'}));

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))