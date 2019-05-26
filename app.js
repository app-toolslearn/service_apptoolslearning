const express = require("express");
const bodyParser = require("body-parser");

var routes = require("./routes/index");
var lesson = require("./routes/lesson");
var question = require("./routes/question");
var longin = require("./routes/login");
var register = require("./routes/register");
var test = require("./routes/test");
var studyLog = require("./routes/studyLog");
var cors = require("cors");

var message = require("./routes/message");

const app = express();
const port = 8080;
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());
app.use("/", routes);
app.use("/lesson", lesson);
app.use("/question", question);
app.use("/longin", longin);
app.use("/register", register);
app.use("/test", test);
app.use("/studyLog", studyLog);

app.use("/message", message);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));