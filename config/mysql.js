var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "post-symposium1.cylwza715oyw.eu-west-1.rds.amazonaws.com",
  user: "masterUser",
  password: "AdamLovesMinecraft",
  database: "post_symposium1",
});

connection.connect((err) => {
  if (err) {
    switch (err.code) {
      case "ETIMEDOUT":
        console.log("MYSQL Error: Timed out.");
        break;
      default:
        console.log("Unknown Error");
        console.log("MYSQL Error: ", err.code);
        console.log(err);
        break;
    }
  } else {
    console.log("MYSQL DB conneted");
  }
});

module.exports = connection;
