var express = require('express');
var router = express.Router();
var Users = require('../models/users');
var Auth = require('../models/auth')
var jwt = require('jsonwebtoken');
require('dotenv').load();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var token = req.body.token;
  Auth.tokExc(token)
  .then(function(profile) {
    Users.login(profile)
    .then(function(user) {

      var cur_user = { token: jwt.sign( {user: user}, process.env.shh),
                       user: user
                     };

      res.json(cur_user);
    })
    .catch(function(err) {
      res.status(400);
    });
  })
  .catch(function(err){
    console.log(err);
  });
});

module.exports = router;
