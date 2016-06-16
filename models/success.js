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
  markDone: function(done) {
    return Success()
            .insert({
              habit_id: done.habit_id,
              success: done.date
            });
  },
  remove: function(id) {
    return Success()
            .where({
              id:id
            })
            .first()
            .del();
  },
  Success: Success

}
