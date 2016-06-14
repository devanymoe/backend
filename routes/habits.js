var express = require('express');
var router = express.Router();
var Habits = require('../models/habits');

router.get('/', function(req, res, next) {
  Habits.getAll(4).then(function(data) {
    console.log(data);
    res.end();
  });
});

router.get('/:id', function(req, res, next) {
  Habits.getOne(req.params.id).then(function(data) {
    console.log(data);
    res.send(data);
  })
});

router.post('/', function(req, res, next) {
  Habits.add(req.body.habit).then(function(data) {
    res.redirect('/habits');
  });
});

router.put('/:id/update', function(req, res, next) {
  Habits.update(req.body.habit, req.params.id).then( function(data) {
    res.send(data);
  })
})


router.delete('/:id/delete', function(req, res, next) {
  Habits.delete(req.params.id).then( (data) => {
    res.send(data);
  })
})

module.exports = router;
