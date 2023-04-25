const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: String,
    required: true,
    unqiue: true,
  },
  name: String,
  full_name: String,
  html_url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  console.log('repos',repos);
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany(repos)
  .then(() => {
    console.log('Added Document');
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports.save = save;