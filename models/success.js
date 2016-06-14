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
              date: done.date;
            });
  },
  remove: function() {
    return Success(id)
            .where({
              id:id
            })
            .first()
            .del();
  }

}
