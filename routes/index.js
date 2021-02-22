var express = require('express');
var router = express.Router();
var x =7;
/* GET home page. */
router.get('/', function(req, res, next) {
  var x = 7;
  res.render('index', { title: 'Express' });
});

module.exports = router;

