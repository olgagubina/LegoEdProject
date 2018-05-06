var express = require('express');
var router = express.Router();
// var www = require('../bin/www');
// var io = www.io;
// var connection = require('./db_connection');
var pool = require('./db_connection');


// var mysql = require('mysql');
// var connection;

// var localConnection = {
//     host: 'localhost',
//     user: 'root', // < MySQL username >

//     // password: '1234', // < MySQL password COOKIE and MC >
//     password: 'easyPass', // < MySQL password ANNA>
//     // password: '147258', // < MySQL password OLGA>
//     database: 'lego' // <your database name>
// }

// var clearDBConnection = {
//     host: 'us-cdbr-iron-east-05.cleardb.net',
//     user: 'bbbb8310aa5c1c',
//     password: 'f64edb0b',
//     database: 'heroku_365eb437c5f937e'
// }

// var realKirillClearDBConection = {
//     migrate:'safe', 
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

//get rewards (cat_id = 1)
router.get('/all/rewards', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.cat_id = 1 AND points.deleted = false
                order by pointId`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else {
                        connection.end();
                        console.log('get rewards', err)
                    };
                }
            );
        });
    } catch (err) {
        console.log(err);
    }
});

//get DISPLAYED rewards (cat_id = 1)
router.get('/displayed/rewards', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.cat_id = 1 AND points.deleted = false AND points.display = true
                order by pointId`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get rewards', err);
                }
            );
        });
    } catch (err) {
        console.log(err);
    }
});

//get penalties (cat_id = 2)
router.get('/all/penalties', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.cat_id = 2 AND points.deleted = false
                order by pointId`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get penalties', err);
                }
            );
        }); 
    } catch (err) {
        console.log(err);
    }
});

//get DISPLAYED penalties (cat_id = 2)
router.get('/displayed/penalties', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.cat_id = 2 AND points.deleted = false AND points.display = true
                order by pointId`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get penalties', err);
                }
            );
        });
    } catch (err) {
        console.log(err);
    }
});

//GET prizes (cat_id = 3)
router.get('/all/prizes', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.cat_id = 3 AND points.deleted = false
                order by pointId`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get prizes', err);
                }
            );
        });
    } catch (err) {
        console.log(err);
    }
});

//GET DISPLAYED prizes (cat_id = 3)
router.get('/displayed/prizes', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.cat_id = 3 AND points.deleted = false AND points.display = true
                order by pointId`,
                function (err, rows, fields) {
                    connection.release();
                    if (!err) res.send(rows);
                    else console.log('get prizes', err);
                }
            );
        });
    } catch (err) {
        console.log(err);
    }
});

//get all DISPLAYED points
router.get('/displayed/allpoints', (req, res) => {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(
                `SELECT
                points.point_id as pointId,
                description,
                hearts as hearts,
                xp as xp,
                money as money,
                points.cat_id as catId,
                categories.name as category,
                display
                FROM points
                left join categories on points.cat_id = categories.cat_id
                WHERE points.deleted = false AND points.display = true
                order by pointId`,
                function (err, rows, fields) {
                    if (!err) res.send(rows);
                    else console.log('get all points for display', err);
                }
            );
        });
    } catch (err) {
        console.log(err);
    }
});


// ADD point item
router.post('/add', (req, res) => {
    let newPoint = req.body;
    connection.query(
        `INSERT INTO points SET ?`,
        { cat_id: Number(newPoint.cat_id), description: newPoint.description, hearts: Number(newPoint.hearts), xp: Number(newPoint.xp), money: Number(newPoint.money) },
        function (err, rows, fields) {
            if (!err) res.json({
              message: err.message,
              error: err
            });
            else console.log('insert point item', err);
        });
        res.json({ error: err })
  });

// UPDATE point item - change details
router.put('/update/:id', (req, res) => {
    let pointId = req.params.id;
    let updPoint = req.body;
    connection.query(
        `UPDATE points SET ? WHERE ?`,
        [{ cat_id: updPoint.cat_id, description: updPoint.description, hearts: Number(newPoint.hearts), xp: Number(newPoint.xp), money: Number(newPoint.money) }, { point_id: pointId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('point update', err);
        });
});

// UPDATE point item - toggle display
router.put('/toggle/:id', (req, res) => {
    let pointId = req.params.id;
    let updDisplay = !req.body.display;
    connection.query(
        `UPDATE points SET ? WHERE ?`,
        [{ display: updDisplay }, { point_id: pointId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('point display toggle', err);
        });
});


// DELETE point item - actually just archiving them ('deleted' flag to true)
router.put('/delete/:id', (req, res) => {
    let pointId = req.params.id;
    connection.query(
        `UPDATE points SET ? WHERE ?`,
        [{ deleted: true }, { point_id: pointId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('point delete (archive)', err);
        });
});

// GET DELETED points
router.get('/archive', (req, res) => {
    try {
        connection.query(
            `SELECT
            points.point_id as pointId,
            description,
            amount,
            points.cat_id as catId,
            categories.name as category,
            display
            FROM points
            left join categories on points.cat_id = categories.cat_id
            WHERE points.deleted = true
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get archive points', err);
            });
    } catch (err) {
        console.log(err);
    }
});

// RESTORE point item
router.put('/restore/:id', (req, res) => {
    let pointId = req.params.id;
    connection.query(
        `UPDATE points SET ? WHERE ?`,
        [{ deleted: false }, { point_id: pointId }],
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('point restore', err);
        });
});


module.exports = router;
