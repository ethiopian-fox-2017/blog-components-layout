const chai = require('chai');
const chaiHttp = require('chai-http');
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
const expect = chai.expect;
const should = chai.should();

describe('TESTING SONG 2', function() {
  this.timeout(10000)
  it('should return I Feel It Coming song', function(done) {
    nightmare
      .goto('http://127.0.0.1:8080/')
      .wait('i#burger-menu')
      .click('i#burger-menu')
      .click('a#i-feel-it-coming')
      .wait(3000)
      .evaluate(function () {
        return document.querySelector('h4').innerHTML
      })
      .end()
      .then(function(result) {
        expect(result.toLowerCase()).to.equal('I Feel It Coming'.toLowerCase());
        done()
      })
  })
})
