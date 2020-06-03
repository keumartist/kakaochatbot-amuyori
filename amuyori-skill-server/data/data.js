var mysql = require('mysql');

class Data {

  constructor(type, params) {
    this.host = '';
    this.user = '';
    this.password = '';
    this.db = '';
    this.params = params;

    if (type === "search") {
      this.params = '"%' + params + '%"';
      this.query = "SELECT * FROM recipe_draft WHERE RCP_NM LIKE " + this.params;

    } else if (type === "situation") {
      this.params = "('" + params + "')";
      this.query = "select RCP_NM from recipe_draft where situation in " + this.params

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

      fn(rows);
    })
    connection.end();
  }
}

module.exports = Data;