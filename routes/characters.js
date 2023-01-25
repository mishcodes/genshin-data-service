var express = require('express');
var router = express.Router();

/* CHARACTER LIST */
var kaeya = require('../resources/kaeya.json');

/* GET characters listing. */
router.get('/kaeya', function(req, res, next) {
    console.log("test");
    res.send(kaeya);
  });
  
module.exports = router;