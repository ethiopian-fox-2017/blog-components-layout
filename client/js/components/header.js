Vue.component('header1',{
  template:`
  <div class="columns container-bg is-marginless">
      <div class="column">
          <div class="field is-marginless">
              <p class="control">
                  <input class="input" type="text" placeholder="Text input">
              </p>
          </div>
      </div>
      <div class="column is-marginless">
        <a href="#" class="nav-text">search</a>
      </div>

  </div>
  `
})
Vue.component('jumbotron', {
  template:`
  <section class="hero is-large is-bold bg-img" >
  <div class="hero-body">
  <h1 class="title edittittle is-paddingless has-text-centered"> ini blog </h1>

  </div>
</section>
 `
});



Vue.component('navigation',{
  template:`
  <div class="columns has-text-centered container-bg">
           <div class="column">
           <a href="#" class="nav-text">Articles</a>
           </div>
           <div class="column">
           <a href="#" class="nav-text">New Article</a>
           </div>
  </div>
   `

})
