let Nightmare = require('nightmare');
let chai = require('chai');

let nightmare = Nightmare({show:true})
let should = chai.should();

describe('Front end test', function() {
  this.timeout(8000)
  it('check localhost:8080 and it should display post wheen column selected', function(done) {
    nightmare.goto('http://localhost:8080')
             .wait('.panel-block')
             .wait(1000)
             .click('#my-first-post')
             .wait('.satu-post')
             .wait(1000)
             .evaluate(function() {
               return document.querySelector('.judulSatu').getAttribute('name')
             })
             .end()
             .then(function(result) {
               result.should.equal('my-first-post')
               done()
             })
  })

  it('check localhost:8080 and try to search', function(done) {
    nightmare.goto('http://localhost:8080')
             .wait('.inputQuery')
             .wait(1000)
             .click('.inputQuery')
             .type('.inputQuery','My first post')
             .click('.searchNow')
             .wait(2000)
             .evaluate(function() {
               return document.querySelector('.modal').getAttribute('class')
             })
             .end()
             .then(function(result) {
              //  console.log('----------modal',result);
               let data = result.split(" ");
               data[1].should.equal('is-active')
               done()
             })
  })

})
