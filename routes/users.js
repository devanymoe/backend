var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var Users = require('../models/users');
var Habits = require('../models/habits');
var Success = require('../models/success');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.load(1).then(function(data) {
    res.send(data);
  }).catch( (err) => {
    console.log(err);
  });
});

router.get('/:user_id/habits', function(req, res, next) {
  Habits.getAll(req.params.user_id).then(function(arr) {
    Promise.all(arr.map(function (habit) {
      return knex('habits_users').where({ habit_id : habit.id }).pluck('success').then(function(successData) {
        if(successData.length) {
          habit.dates = successData;
        }
      });
    })).then(() => {
      res.send(arr);
    })
  });
})

router.post('/', function(req, res, next) {
  Users.create(req.body).then(function(data) {
    res.send(data);
  });
});

router.put('/:id/update', function(req, res, next) {
  User.edit(req.params.id, req.body.updates).then(function(data) {
    res.send(data);
  })
})

module.exports = router;
