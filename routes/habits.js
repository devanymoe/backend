var express = require('express');
var router = express.Router();
var Habits = require('../models/habits');
var Success = require('../models/success');

router.get('/:id', function(req, res, next) {
  Habits.getOne(req.params.id).then(function(data) {
    console.log(data);
    res.send(data);
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  Habits.add(req.body).then(function(data) {
    console.log(data);
    res.send(data);
  });
});

router.put('/:id/update', function(req, res, next) {
  Habits.update(req.body, req.params.id).then( function(data) {
    res.send(data);
  })
})


router.delete('/:id/delete', function(req, res, next) {
  Habits.delete(req.params.id).then( (data) => {
    res.send(data);
  })
})

module.exports = router;
