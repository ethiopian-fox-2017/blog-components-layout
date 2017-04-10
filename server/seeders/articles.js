const fs = require('fs'),
      Article = require('../models/Article.js')
      data = JSON.parse(fs.readFileSync('../data/blog.json','utf-8')),
      slug = require('slug');

data.forEach(article => {
  Article.create({
    title : article.title,
    content : article.content,
    category : article.category,
    image : article.image,
    video : article.video,
    slug : slug(article.title).toLowerCase()
    },
   function (err, skill) {
    if (err) console.log(err);
    else
      console.log('sukses')
  })
})
