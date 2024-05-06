const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'user_bpprj',
  password: 'nt208group5',
  database: 'backpackprj'
});

db.connect(function(err){
  (err) ? console.log(err) : console.log(db);
});

app.post("/example", (req, res) => {
  const sql =
    "INSERT INTO login (`firstName`, `lastName`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

app.get('/api/blog', (req, res) => {
  var sql = "SELECT * FROM blog ORDER BY id";
  db.query(sql, function(err, results) {
    if (err) throw err;
    res.json({blog: results});
  });
});

app.listen(4000, () => console.log('App listening on port 4000'));