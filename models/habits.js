var knex = require('../db/knex');

function Habits() {
  return knex('habits');
}

function HabitsUsers() {
  return knex('habits_users');
}

module.exports = {



}
