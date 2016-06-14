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

router.post('/', function(req, res, next) {
  Users.create(req.body.user).then(function(data) {
    console.log(data);
    res.end();
  });
});

router.put('/:id/update', function(req, res, next) {
  User.edit(req.params.id, req.body.updates).then( function(data) {
    console.log(data);
    res.end();
  })
})

module.exports = router;
