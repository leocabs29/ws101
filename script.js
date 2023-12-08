function drop() {
    var drop = document.getElementById("dropthis");
    if (drop.style.display === "none" || drop.style.display === "") {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";
    }
}
import express from 'express';
import { json } from 'body-parser';
import { createPool } from 'mysql';

const app = express();
const port = 3000;

const pool = createPool({
  host: 'Information Web',
  user: 'root',
  password: '1234',
  database: 'infoweb',
});

app.use(json());

app.post('/signup', (req, res) => {
  const { name, program, campus, email } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection: ', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const sql = 'INSERT INTO users (name, program, campus, email) VALUES (?, ?, ?, ?)';
    const values = [name, program, campus, email];

    connection.query(sql, values, (queryError, results) => {
      connection.release();

      if (queryError) {
        console.error('Error executing MySQL query: ', queryError);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.status(200).send('Signup successful');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
