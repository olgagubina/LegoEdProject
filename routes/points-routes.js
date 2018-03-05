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

router.get('/all', (req, res) => {
    try {
        connection.query(
            `SELECT
            points.point_id as pointId,
            description,
            amount,
            points.cat_id as catId,
            categories.name as category
            FROM points
            left join categories on points.cat_id = categories.cat_id
            order by catId, pointId`,
            function (err, rows, fields) {
                if (!err) res.send(rows);
                else console.log('get points', err);
            });
    } catch (err) {
        console.log(err);
    }
});



/* ADD point item */

/* UPDATE point item */

/* DELETE point item */

module.exports = router;
