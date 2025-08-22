const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// PostgreSQL configuration
// const db = new Client({
//     user: 'username',
//     host: 'localhost',
//     database: 'input_output',
//     password: 'postgressruju',
//     port: 5432
// });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// db.connect();

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', async (req, res) => {
    const { name, age, email, mobile_no } = req.body;

    try {
        // const query = 'INSERT INTO users (name, age, email, mobile_no) VALUES ($1, $2, $3, $4)';
        // await pool.query(query, [name, age, email, mobile_no]);
        res.send('User data saved successfully!');
    } catch (err) {
        console.error(err);
        res.send('Error saving data.');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
