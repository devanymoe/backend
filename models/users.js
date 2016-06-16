var knex = require('../db/knex');

function Users() {
  return knex('users');
}

function load(user_id) {
  return Users().where({id: user_id }).select();
}

function create(user) {
  return Users()
          .insert({
            handle: user.handle,
            firstName: user.firstName,
            notify: false,
            media: false,
          });
}

function edit(user_id, updates) {
  return Users()
          .where({id: user_id})
          .update({
            notify: updates[0],
            media: updates[1]
          });
}

module.exports =  {
                    load,
                    create,
                    edit
                  }
