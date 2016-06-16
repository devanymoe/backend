var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Habits = require('../models/habits');
var Success = require('../models/success');

router.get('/:id', function(req, res, next) {
  Habits.getOne(req.params.id).then(function(data) {
    res.send(data);
  })
});

router.post('/', function(req, res, next) {
  Habits.add(req.body).then(function(data) {
    res.send(data);
  });
});

router.post('/success', function(req, res, next) {
  Success.markDone(req.body).then(function(data) {
    res.send(data);
  });
});

router.put('/:id/update', function(req, res, next) {
  Habits.update(req.body, req.params.id).then( function(data) {
    res.send(data);
  });
});

router.delete('/:id/delete', function(req, res, next) {
  Habits.delete(req.params.id).then( (data) => {
    res.send(data);
  });
});

router.delete('/success/:id', function(req, res, next) {
  Success.remove(req.params.id).then((data) => {
    res.send(data);
  });
});

module.exports = router;
