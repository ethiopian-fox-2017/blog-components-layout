'use strict'

var Nightmare = require('nightmare');
var expect = require('chai').expect; // jshint ignore:line
var chai = require('chai');
let should = chai.should();
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('test blog layout', function() {
  
  this.timeout(15000)
  it('should showing innerHTML indexpost equals index', function(done) {
    var nightmare = Nightmare({ show: true })
    nightmare
      .goto('http://localhost:8080')
      .wait('.kakikanan')
      // .click('button.btn.btn-secondary')
      .wait(5000)
      .evaluate(function () {
        return document.querySelector('div.indexpost').innerHTML;
       }) // <-- that's how you pass parameters from Node scope to browser scope
      .end()
      .then(function(result) {
        console.log(result)
        expect(result).to.equal('index');
        done();
      })
      .catch(function(error) {
        console.error('Search failed:', error);
      })
  });

});