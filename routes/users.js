var express = require('express');
var router = express.Router();
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.load(1).then(function(data) {
    console.log(data);
    res.end();
  });
});


module.exports = router;
