var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // < MySQL username >
    password: '1234', // < MySQL password >
    // password: 'easyPass', // < MySQL password >
    // password: '147258', // < MySQL password >
    database: 'lego' // <your database name>
});

// GET ALL students
router.get('/all', (req, res) => {
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
router.get('/getpresent', (req, res) => {
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

// ADD student
router.post('/add', (req, res) => {
    let newSt = req.body;
    console.log('body: ' + newSt);
    connection.query(
        `INSERT INTO students SET ?`,
        {firstname: newSt.firstName, lastname: newSt.lastName},
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('insert student', err);
        });
});

// UPDATE student - change details
router.put('/update/:id', (req, res) => {
    let studentId = req.params.id;
    let updSt = req.body;
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [ updSt, { st_id: studentId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('student to present', err);
        });
});

// UPDATE student - toggle present
router.put('/toggle/:id', (req, res) => {
    let studentId = req.params.id;
    let updPresent = !req.body.present;
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [{ present: updPresent }, { st_id: studentId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('student present toggle', err);
        });
});

// UPDATE students - all students to absent
router.put('/finishlesson', (req, res) => {
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [{ present: false }, { present: true }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('student to present', err);
        });
});

// DELETE  student - first delete transactions - ask Anat how to remove in one query
// router.delete('/delete/:id', (req, res) => {
//     let studentId = req.params.id;
//     connection.query(
//         `DELETE from students where cust_id = ${studentId}`,
//         function (err, rows, fields) {
//             if (!err) res.send(rows);
//             else console.log('delete customer', err);
//         });
// });



module.exports = router;
