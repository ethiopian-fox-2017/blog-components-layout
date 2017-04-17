'use strict'

const Nightmare = require('nightmare');
const expect = require('chai').expect; // jshint ignore:line

describe('test duckduckgo ', function() {

  this.timeout(30000)
  it('should find the nightmare github link first', function(done) {
  let nightmare = Nightmare({ show: true });

  nightmare
    .goto('https://duckduckgo.com')
    .type('#search_form_input_homepage', 'github nightmare')
    .click('#search_button_homepage')
    .wait('#zero_click_wrapper .c-info__title a')
    .wait(10000)
    .evaluate(function () {
      return document.querySelector('#zero_click_wrapper .c-info__title a').href;
    })
    .end()
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });
  });
});
