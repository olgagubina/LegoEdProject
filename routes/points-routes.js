var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // < MySQL username >
    password: '1234', // < MySQL password >
    database: 'lego' // <your database name>
});

/* GET point items */
//get prizes from table
router.get('/all/prizes', (req, res) => {
    try {
        connection.query(

            `SELECT * FROM lego.points where cat_id = 3;`,

            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get prizes', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get rewards
router.get('/all/rewards', (req, res) => {
    try {
        connection.query(
            `SELECT * FROM lego.points where cat_id = 1;`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get rewards', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get penalty items from table
router.get('/all/penalties', (req, res) => {
    try {
        connection.query(
            `SELECT * FROM lego.points where cat_id = 2;`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get penalties', err);
            });
    } catch (err) {
        console.log(err);
    }
});



/* ADD point item */

// router.post('/add', (req, res) => {
//     let newPoint = req.body;
//     console.log('body: ' + newPoint);
//     connection.query(
//         `INSERT INTO points SET ?`,
//         {description: newPoint.description, amount: newPoint.amount},
//         function (err, rows, fields) {
//             if (!err) res.send(rows);
//             else console.log('insert point item', err);
//         });
// });

router.post('/add/prizes', (req, res) => {
    let newPoint = req.body;
    connection.query(
        `INSERT INTO points SET ?;`,
        {description: newPoint.description, amount: newPoint.amount},
                 function (err, rows, fields) {
                    if (!err) res.send(rows);
                    else console.log('insert prize item', err);
                });
        });
    

/* UPDATE point item */

/* DELETE point item */

module.exports = router;
