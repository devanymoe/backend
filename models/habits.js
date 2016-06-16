var knex = require('../db/knex');

function Habits() {
  return knex('habits');
}

module.exports = {
  getAll: function(user_id) {
    return Habits()
            .select()
            .where({
              user_id: user_id
            });
  },
  getOne: function(id) {
    return Habits()
            .where({
              id: id
            })
            .first();
  },
  add: function(habit) {
    return Habits()
            .insert({
              user_id: habit.user_id,
              title: habit.title,
              desc: habit.desc,
              notify: habit.notify,
              time: habit.time,
              sun: habit.sun,
              mon: habit.mon,
              tue: habit.tue,
              wed: habit.wed,
              thu: habit.thu,
              fri: habit.fri,
              sat: habit.sat
            });
  },
  update: function(habit, id) {
    return Habits()
            .where({ id: id})
            .insert({
              user_id: habit.user_id,
              title: habit.title,
              desc: habit.desc,
              notify: habit.notify,
              time: habit.time,
              sun: habit.sun,
              mon: habit.mon,
              tue: habit.tue,
              wed: habit.wed,
              thu: habit.thu,
              fri: habit.fri,
              sat: habit.sat
            });
  },
  delete: function(id) {
    return Habits()
            .where({ id:id})
            .del();
  }

}
