var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var localConnection = {
    host: 'localhost',
    user: 'root', // < MySQL username >


    // password: '1234', // < MySQL password COOKIE and MC >
    // password: 'easyPass', // < MySQL password ANNA>
    password: '147258', // < MySQL password OLGA>
    database: 'lego' // <your database name>
}


var clearDBConnection = {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bbbb8310aa5c1c',
    password: 'f64edb0b',
    database: 'heroku_365eb437c5f937e'
}

//DB SWITCHER
// connection = mysql.createConnection(clearDBConnection);
connection = mysql.createConnection(localConnection);

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
            WHERE points.cat_id = 1 AND points.deleted = false
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get rewards', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get DISPLAYED rewards (cat_id = 1)
router.get('/displayed/rewards', (req, res) => {
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
            WHERE points.cat_id = 1 AND points.deleted = false AND points.display = true
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get rewards', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get penalties (cat_id = 2)
router.get('/all/penalties', (req, res) => {
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
            WHERE points.cat_id = 2 AND points.deleted = false
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get penalties', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get DISPLAYED penalties (cat_id = 2)
router.get('/displayed/penalties', (req, res) => {
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
            WHERE points.cat_id = 2 AND points.deleted = false AND points.display = true
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get penalties', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get prizes (cat_id = 3)
router.get('/all/prizes', (req, res) => {
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
            WHERE points.cat_id = 3 AND points.deleted = false
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get prizes', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get DISPLAYED prizes (cat_id = 3)
router.get('/displayed/prizes', (req, res) => {
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
            WHERE points.cat_id = 3 AND points.deleted = false AND points.display = true
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get prizes', err);
            });
    } catch (err) {
        console.log(err);
    }
});

//get all DISPLAYED points
router.get('/displayed/allpoints', (req, res) => {
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
            WHERE points.deleted = false AND points.display = true
            order by pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get all pooints for display', err);
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
        { cat_id: Number(newPoint.cat_id), description: newPoint.description, amount: Number(newPoint.amount) },
        function (err, rows, fields) {
            if (!err) res.send(rows);
            else console.log('insert point item', err);
        });
  });   

// UPDATE point item - change details
router.put('/update/:id', (req, res) => {
    let pointId = req.params.id;
    let updPoint = req.body;
    connection.query(
        `UPDATE points SET ? WHERE ?`,
        [{ cat_id: updPoint.cat_id, description: updPoint.description, amount: updPoint.amount }, { point_id: pointId }],
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
