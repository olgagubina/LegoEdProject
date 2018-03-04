var express = require('express');
var router = express.Router();

/* GET students */
router.get('/get', function(req, res, next) {
    res.send('here is the students data')
});
  
/* ADD student */

/* UPDATE  student */

/* DELETE  student */

module.exports = router;