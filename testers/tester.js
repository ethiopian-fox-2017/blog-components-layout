var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://127.0.0.1:8080/')
  .click('a.button.is-primary')
  .type('#content-title', 'nyo testing')
  .type('#content-data', 'halo ini testing dari testing cuy')
  .type('#content-category', 'category')
  .type('#content-image', 'http://images.huffingtonpost.com/2016-11-03-1478193304-6800403-webdev.jpg')
  .evaluate(function () {
    return document.querySelectorAll('a.panel-block');
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
