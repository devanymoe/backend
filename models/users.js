var knex = require('../db/knex');

function Users() {
  return knex('users');
}

function login(profile) {
  return load(profile.email)
          .then(function(user) {
            if (user) {
              return user;
            }
            else {
              var newUser = {
                           handle: profile.email,
                           firstName : profile.name.split(' ')[0]
                         }

              return create(newUser)
                      .then(function(users) {
                        return users[0];
                      });
            }
  });
}

function load(email) {
  return Users()
          .where({handle: email}).first()
          .then( function(user) {
            return user
          });
}

function create(user) {
  return Users()
          .insert({
            handle: user.email,
            firstName: user.firstName,
            notify: false,
            media: false,
          }, '*');
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
                    login,
                    load,
                    create,
                    edit
                  }
