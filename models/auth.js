var axios = require('axios');
var Users = require('./users');

function tokExc(token) {
  var fb = { graphApi: `https://graph.facebook.com/v2.5/me?fields=name,email&access_token=${token}` };

  return axios.get(fb.graphApi)
  .then(function(result) {
    return result.data;
  }).catch(function(err) {
    return err;
  })
}

module.exports = { tokExc };
