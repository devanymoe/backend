var knex = require('../db/knex');

function Success() {
  return knex('habits_users');
}

module.exports = {
  get: function(id) {
    return Success()
            .where({
              id: id
            });
  },
  markDone: function(id, date) {
    return Success()
            .insert({
              habit_id: id,
              success: date
            });
  },
  remove: function(id, date) {
    return Success()
            .where({
              habit_id: id,
              success: date
            })
            .first()
            .del();
  },
  Success: Success

}
