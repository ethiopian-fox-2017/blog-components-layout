const article = require('../models/Article'),
      slug = require('slug');

let allArticles = (req, res, next) => {
  article.find({}, (err, articles) => {
    if (err) {
      res.json(err);
    } else {
      res.json(articles);
    }
  })
}

let postNewArticle = (req, res, next) => {
  req.body.slug = slug(req.body.title).toLowerCase();
  article.create(req.body, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let getSingleArticle = (req, res, next) => {
  article.findOne({
    slug: req.params.slug
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let updateArticle = (req, res, next) => {
  req.body.slug = slug(req.body.title).toLowerCase();
  article.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

let deleteArticle = (req, res, next) => {
  article.remove({
    _id: req.params.id
  }, (err, article) => {
    if (err) {
      res.json(err);
    } else {
      res.json(article);
    }
  })
}

module.exports= {
  getAll: allArticles,
  post: postNewArticle,
  getOne: getSingleArticle,
  update: updateArticle,
  destroy: deleteArticle
}
