var mysql = require('mysql');

class Data {

  constructor(type, params) {

    this.host = '';
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
                  