var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {

  //if(!req.wikifySession.value) 
  //	req.wikifySession.value = "Test Value";
  res.render('index', { title: config.site.title });
});

module.exports = router;
