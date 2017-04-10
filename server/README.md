
# Tamvan Blog Engine

Simple example of TDD implementation for building a simple blog engine.

This simple blog engine will only have two models, user and article. It's built with **Node.JS, Express (framework), MongoDB (database), mongoose (ODM)**

## File Structure

```bash
.
├── LICENSE
├── README.md
├── app.js
├── bin
│   └── www
├── controllers
│   └── apiArticleController.js
├── models
│   └── Article.js
├── package.json
└── routes
    ├── apiArticle.js
    └── index.js
```

## package.json

```json
{
  "name": "tamvan-blog-engine",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "dotenv": "^2.0.0",
    "express": "~4.13.4",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.6",
    "morgan": "~1.7.0",
    "slug": "^0.9.1"
  }
}

```

## API Routes

The default host and port for development is `http://localhost:3000/`

| Route | Method | Action |
|-------|--------|--------|
| /api/article/ | GET | Get all the article lists |
| /api/article/:slug | GET | Get the spesific article detail based on slug|
| /api/article/ | POST | Post a new article |
| /api/article/:id | PUT | Edit a single article based on id |
| /api/article/:id | DELETE | Delete single article based on id |
