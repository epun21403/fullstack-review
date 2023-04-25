const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
    .then((response) => {
      response = response.map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        forks_count: repo.forks_count
      }));
      console.log(response);
      callback(null, response);
    })
    .catch((err) => {
      console.log('this is an error', err);
    })
}

module.exports.getReposByUsername = getReposByUsername;