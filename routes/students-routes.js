var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // < MySQL username >
    password: 'easyPass', // < MySQL password >
    database: 'lego' // <your database name>
});

// GET ALL students
router.get('/students', (req, res) => {
    try {
        connection.query(
            `SELECT 
            students.st_id as studentId, 
            firstname as firstName, 
            lastname as lastName, 
            sum(case when categories.cat_id != 3 then points.amount else 0 end) as rating,
            sum(case when points.amount != 0 then points.amount else 0 end) as balance,
            present
            FROM students
            left join transactions on students.st_id = transactions.st_id
            left join points on transactions.point_id = points.point_id
            left join categories on points.cat_id = categories.cat_id
            GROUP BY students.st_id, firstname, lastname, present`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get students', err);
            });
    } catch (err) {
        console.log(err);
    }
});

// GET PRESENT students
router.get('/students', (req, res) => {
    try {
        connection.query(
            `SELECT 
            students.st_id as studentId, 
            firstname as firstName, 
            lastname as lastName, 
            sum(case when categories.cat_id != 3 then points.amount else 0 end) as rating,
            sum(case when points.amount != 0 then points.amount else 0 end) as balance,
            present
            FROM students
            left join transactions on students.st_id = transactions.st_id
            left join points on transactions.point_id = points.point_id
            left join categories on points.cat_id = categories.cat_id
            WHERE students.present = true
            GROUP BY students.st_id, firstname, lastname, present`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get students', err);
            });
    } catch (err) {
        console.log(err);
    }
});

// UPDATE student - present to true
// router.put('/students/present/:id', (req, res) => {
//     let custId = req.params.id;
//     let updCust = req.body;
//     connection.query(
//         `UPDATE customers SET ? WHERE ?`,
//         [updCust, { cust_id: custId }],
//         function (err, rows, fields) {
//             if (!err) res.send(rows);
//             else console.log('update customer', err);
//         });
// });

  
/* ADD student */

/* UPDATE  student */

/* DELETE  student */

module.exports = router;