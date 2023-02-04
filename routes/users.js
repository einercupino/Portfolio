//Einer Cupino - 301233614 - COMP229 Section 004 - Feb 3, 2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
