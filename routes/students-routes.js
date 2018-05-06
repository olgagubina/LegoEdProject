var express = require('express');
var router = express.Router();
// var www = require('../bin/www');
// var io = www.io;
var connection = require('./db_connection');
var pool = require('./db_connection');

// var mysql = require('mysql');
// var connection;

// var localConnection = mysql.createPool({
//     connectionLimit: 100,
//     host: 'localhost',
//     user: 'root', // < MySQL username >
//     // password: '1234', // < MySQL password COOKIE and MC >
//     // password: 'easyPass', // < MySQL password ANNA>
//     // password: '147258', // < MySQL password OLGA>

//     database: 'lego', // <your database name>
//     debug: false
// });

// var clearDBConnection = {
//     connectionLimit: 100,
//     host: 'us-cdbr-iron-east-05.cleardb.net',
//     user: 'bbbb8310aa5c1c',
//     password: 'f64edb0b',
//     database: 'heroku_365eb437c5f937e'
// }

// var realKirillClearDBConection = {
//     connectionLimit: 100,
//     // migrate: 'safe',
//     host: 'eu-cdbr-west-02.cleardb.net',
//     user: 'b13e4bf1011324',
//     password: '0e2727fc',
//     database: 'heroku_c2b8c232850b096'
// }

// var amazonDBConnection = {
//     host: 'rds-legoproj-5dayhakathon.cflg4ssuo0rh.us-east-2.rds.amazonaws.com',
//     user: 'oagubina',
//     password: 'Ybyfhtubyf183',
//     database: 'lego'
// }


// function handleDisconnect() {
//     //DB SWITCHER
//     // connection = mysql.createConnection(amazonDBConnection);
//     connection = mysql.createConnection(realKirillClearDBConection);
//     // connection = mysql.createConnection(clearDBConnection);
//     // connection = mysql.createConnection(localConnection); // Recreate the connection, since
//     // the old one cannot be reused.
     
//     connection.connect(function(err) { // The server is either down
//     if(err) { // or restarting (takes a while sometimes).
//     console.log('error when connecting to db:', err);
//     setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     } // to avoid a hot loop, and to allow our node script to
//     }); // process asynchronous requests in the meantime.
//     // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//     handleDisconnect(); // lost due to either server restart, or a
//     } else { // connnection idle timeout (the wait_timeout
//     throw err; // server variable configures this)
//     }
//     });
// }

     
//     //and then call this method
//     handleDisconnect();

// FANCY FUNC TO MAKE CONNECTION (local OR heroku)
//  if(process.env.PORT == 3000) {
//     connection = mysql.createConnection(localConnection);
//     console.log('local connection!');
//  }
//  else {
//     connection = mysql.createConnection(clearDBConnection);
//     console.log('remote connection!');
//  }

// OLD CONNECTION
// connection = mysql.createConnection({
//     // host: 'localhost',
//     host: 'us-cdbr-iron-east-05.cleardb.net',
//     user: 'bbbb8310aa5c1c',
//     password: 'f64edb0b',
//     database: 'heroku_365eb437c5f937e'
//     // user: 'root', // < MySQL username >
//     // password: '1234', // < MySQL password >
//     // password: 'easyPass', // < MySQL password >
//     // password: '147258', // < MySQL password >
//     // database: 'lego' // <your database name>
// });

// GET ALL students
var getAllStud = router.get('/all', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                students.st_id as studentId,
                firstname as firstName,
                lastname as lastName,
                status as status,
                hearts as hearts,
                xp as xp,
                money as money,
                present
                FROM students
                WHERE students.deleted = false
                GROUP BY students.st_id, firstname, lastname, present
                ORDER BY students.lastname`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get students', err);
                });
        })
    } catch (err) {
        console.log(err);
    }
});

// GET PRESENT students
router.get('/present', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                students.st_id as studentId,
                firstname as firstName,
                lastname as lastName,
                status as status,
                hearts as hearts,
                xp as xp,
                money as money,
                present
                FROM students
                WHERE students.present = true
                GROUP BY students.st_id, firstname, lastname, present
                ORDER BY students.lastname`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get present students', err);
                });
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
        { firstname: newSt.firstName, lastname: newSt.lastName },
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('insert student', err);
        });
});

// UPDATE student - change details
router.put('/update/:id', (req, res) => {
    console.log(req.body);
    let studentId = req.params.id;
    let updSt = req.body;
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [{ firstname: updSt.firstName, lastname: updSt.lastName }, { st_id: studentId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('student update', err);
        });
});

// UPDATE student - toggle present
router.put('/toggle/:id', (req, res) => {
    let studentId = req.params.id;
    let updPresent = !req.body.present;
    console.log(updPresent);
    if (updPresent === true) {
        connection.query(
            `UPDATE students SET ? WHERE ?`,
            [{ present: updPresent, hearts: 3 }, { st_id: studentId }],
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('student present toggle', err);
            });
    }else {
        connection.query(
            `UPDATE students SET ? WHERE ?`,
            [{ present: updPresent, hearts: 0 }, { st_id: studentId }],
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('student present toggle', err);
            });
    }

});

// UPDATE students - all students to absent
router.put('/finishlesson', (req, res) => {
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [{ present: false }, { present: true }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('finish lesson present', err);
        });
});

// DELETE student - actually just archiving them ('deleted' flag to true)
router.put('/delete/:id', (req, res) => {
    let studentId = req.params.id;
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [{ deleted: true, present: false }, { st_id: studentId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('student delete (archive)', err);
        });
});

// GET DELETED students
router.get('/archive', (req, res) => {
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
            WHERE students.deleted = true
            GROUP BY students.st_id, firstname, lastname`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get archive students', err);
            });
    } catch (err) {
        console.log(err);
    }
});

// RESTORE student
router.put('/restore/:id', (req, res) => {
    let studentId = req.params.id;
    connection.query(
        `UPDATE students SET ? WHERE ?`,
        [{ deleted: false }, { st_id: studentId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('student delete (archive)', err);
        });
});

// GET transactions history
router.get('/history/:startdate', (req, res) => {
    let startDate = this.params.startdate;
    try {
        connection.query(
            `SELECT
            trans_id as _id,
            timestamp,
            students.firstname as firstName,
            students.lastname as lastName,
            categories.cat_id as catId,
            categories.name as category,
            points.point_id as pointId,
            points.description,
            points.amount,
            comment
            FROM transactions
            left join students on transactions.st_id = students.st_id
            left join points on transactions.point_id = points.point_id
            left join categories on points.cat_id = categories.cat_id
            WHERE timestamp >= ${startDate}
            ORDER BY transactions.trans_id`, // 2018-03-05
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get present students', err);
            });
    } catch (err) {
        console.log(err);
    }
});


// ADD transaction
router.post('/transactions/add', (req, res) => {
    let newTrans = req.body;
    console.log('body: ' + newTrans);
    connection.query(
        `INSERT INTO transactions SET ?`,
        { st_id: newTrans.studentId, point_id: newTrans.pointId, comment: newTrans.comment },
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('insert transaction', err);
        });
});

module.exports = router;
