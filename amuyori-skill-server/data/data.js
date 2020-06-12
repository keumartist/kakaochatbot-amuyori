var mysql = require('mysql');

class Data {

  constructor(type, params) {

    this.host = 'localhost';
    this.user = '';
    this.password = '';
    this.db = '';

    if (type === "name") {
      this.params = '"%' + params + '%"';
      this.query = "" + this.params;

    } else if (type === "INGREDIENT") {
      this.params = '"%' + params + '%"';
      this.query = "" + this.params;
    }

    else if (type === "SITUATION") {
      this.params = '"%' + params + '%"';
      this.query = "" + this.params

    } else if (type === "TASTE") {
      this.params = '"%' + params + '%"';
      this.query = "" + this.params
 
    } else if (type === "TODAY_RECIPE") {
      const today = getTheDayOfYear();
      this.query = ""
    }
  }

  connectToMysql(fn) {
    const connection = mysql.createConnection({
      host: this.host,
      user: this.user,
      password: this.password,
      database: this.db
    });

    connection.connect();

    connection.query(this.query, function (err, rows, fields) {
      if (err) throw err;
        //console.log("rows : " + rows);
      fn(rows);
    })
    connection.end();
  }
}

module.exports = Data;
                  

function getTheDayOfYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  
  return today
}