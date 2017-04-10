const chai = require('chai')
const chaiHttp = require('chai-http')
const Nightmare = require('nightmare')
const nightmare = Nightmare({show:true})
let should = chai.should()
let expect = chai.expect
chai.use(chaiHttp)

describe('BROWSER USER TEST', function() {

  this.timeout(5000)
  it('Go to localhost:8080 and it should display item in selected li', function(done) {
    nightmare
      .goto('http://127.0.0.1:8080/')
      .wait('aside.menu')
      .click('#sebuah-perjalanan')
      .wait('.blog')
      .evaluate(function() {
        return document.querySelector('#blog-title').getAttribute('title')
      })
      .end()
      .then(function(result) {
        result.should.equal('sebuah-perjalanan')
        done()
      })
  })

})