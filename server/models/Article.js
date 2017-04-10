const mongoose = require('mongoose');
// require('../config/mongo')
let articlesSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  image: String,
  video: String,
  slug: String
});

let Article = mongoose.model('Article', articlesSchema)

module.exports = Article
