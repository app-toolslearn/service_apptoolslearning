var mysql = require("mysql");
var connection = mysql.createPool({
    host: "ssitconsultant.com",
    user: "ssit_demo_tools",
    password: "P@ssw0rd",
    database: "app_toolslearning",
    timezone: "utc"
});

module.exports = connection;