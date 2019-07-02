var mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'groceries'
})

pullFromDb = (callback) => {
 db.query(`SELECT * FROM groceries;`, function (err, rows) {
  if (err) {
      console.log('Error in db get: ', err);
      callback(err, null);
  } else {
      console.log('Success in pull from DB')
     callback(null, rows);

  }
})
}

addToDb = (item, callback) => {
  db.query(`INSERT INTO groceries (item, department, quantity)`)

  //change to template literals
}


module.exports = { pullFromDb }

