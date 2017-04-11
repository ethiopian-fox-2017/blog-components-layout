Vue.component('artikelku', {
  template:`
    <article class="tile is-child notification">
      <p class="title">Post Title</p>
      <p>category</p>
    </article>
  `
})

Vue.component('tabku', {
  template: `
  <div class="tabs is-left">
    <ul>
      <li class="is-active"><a @click="setNull">Latest Articles</a></li>
    </ul>
  </div>
  `,
  methods: {
    setNull: function() {
      this.$emit('set-to-null')
    }
  }
})

Vue.component('sectionku', {
  template: `
  <div>
    <section class="section">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class="tile is-child is-vertical">
                <div class="tile">
                    <div class="tile is-parent">
                      <artikelku></artikelku>
                    </div>
                </div>
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <artikelku></artikelku>
                  </div>
                  <div class="tile is-parent is-vertical">
                    <artikelku></artikelku>
                  </div>

                </div>
              </div>
              <div class="tile is-parent">
                <artikelku></artikelku>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>

  `
})

Vue.component('navbarganteng',{
  template: `
    <div>
      <nav class="nav has-shadow">
       <div class="container">

         <div class="nav-left">
           <a class="nav-item is-tab">Home</a>
           <a class="nav-item is-tab">Lifestyle</a>
           <a class="nav-item is-tab">Fashion</a>
           <a class="nav-item is-tab">Technology </a>
         </div>

         <div class="nav-right">
           <div class="level-item">
             <div class="field has-addons">
               <p class="control">
                 <input class="input inputQuery" type="text" placeholder="Find a post" v-model="slug">
               </p>
               <p class="control">
                 <button class="button searchNow" @click="findPost">
                   Search
                 </button>
               </p>
             </div>
             </div>
         </div>
       </div>
      </nav>
    </div>
  `,
  data: function() {
    return {
      slug:''
    }
  },
  methods: {
    findPost: function() {
      var self = this
      axios.get(`http://localhost:3000/api/article/${self.slug}`)
           .then(function(res) {
             if(res.data != null) {
               self.setData(res.data);//  console.log(app.dataSearch);
             }

           })
           .catch(function(err) {
             console.log(err);
           })
    },
    setData: function(data) {
      this.$emit('set-data-search', data)
      this.$emit('change-status')
    }
  }
})

Vue.component('headerganteng',{
  template: `
  <div>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Blog Logo
          </h1>
        </div>
      </div>
    </section>
  </div>
  `
})

Vue.component('gambarpost', {
  props: ['imgartikel'],
  template: `
  <div class="card-image">
    <figure class="image is-1by1">
      <img :src="imgartikel" alt="Image">
    </figure>
  </div>
  `
})

Vue.component('keteranganpost' ,{
  props: ['judul'],
  template: `
  <div class=card-content>
    <div class="media">
      <p class="subtitle">{{ judul }}</p>
    </div>
  </div>

  `
})

Vue.component('isipost',{
  props:['isiartikel'],
  template: `
    <div class="content">
      {{ isiartikel }}
    </div>
  `
})

Vue.component('post', {
  props:['artikel'],
  template: `
    <div class="column is-one-third" @click="changeData()">
      <div class="card">
        <div class="card-content">
          <gambarpost :imgartikel="artikel.image"></gambarpost>
          <keteranganpost :judul="artikel.title"></keteranganpost>
        </div>
      </div>
    </div>
  `,
  methods: {
    changeData: function(post) {
      this.$emit('change-post')
    }
  }
})

Vue.component('posts', {
  props:['artikels'],
  template: `
  <div class="columns is-multiline is-mobile">
    <post v-for="article in artikels" :artikel="article" @change-post="changeDataAgain(article)"></post>
  </div>
  `,
  methods: {
    changeDataAgain: function(post) {
      this.$emit('change-post-again', post)
    }
  }
})


Vue.component('footerku', {
  template:`
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/jgthms/bulma">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
  `
})

Vue.component('modelku', {
  props:['aktif','data'],
  template: `
  <div class="modal" v-bind:class="{'is-active':aktif}"">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{data.title}}</p>
        <button class="delete" @click="changeStatus()"></button>
      </header>
      <section class="modal-card-body">
        <img :src="data.image">
        {{data.content}}
        <!-- Content ... -->
      </section>
      </div>
  </div>
  `,
  methods: {
    changeStatus: function() {
      this.$emit('change-status')
    }
  }
})

Vue.component('sidebarku',{
  props:['artikels'],
  template: `
  <nav class="panel">
    <p class="panel-heading">
      Most Viewed
    </p>
    <a v-for="artikel in artikels" :id="artikel.slug"  class="panel-block" @click="changeView(artikel)">
      {{ artikel.title }}
    </a>

  </nav>
  `,
  methods: {
    changeView: function(post) {
      this.$emit('change-post',post)
    }
  }
})

Vue.component('satuartikel', {
  props:['artikel'],
  template: `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="artikel.image" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media judulSatu" :name="artikel.slug">
        {{artikel.title}}
      </div>

      <div class="content">
        {{artikel.content}}
      </div>
    </div>
  </div>
  `
})

let app = new Vue({
  el: '#fullpage',
  data: {
    isActive: false,
    dataSearch: {},
    dataSatu: null,
    articles: []
  },
  methods: {
    getPost: function() {
      var self = this
      axios.get('http://localhost:3000/api/article')
           .then(function(res) {
             self.articles = res.data
            //  console.log(self.articles);
           })
           .catch(function(err) {
             console.log(err);
           })
    },
    setNewView: function(post) {
      this.dataSatu = post
    },
    setStatus: function() {
      this.isActive = !this.isActive
    },
    setDataSearch: function(data) {
      this.dataSearch = data
    },
    setToNull: function() {
      this.dataSatu = null;
    }

  },
  mounted: function() {
    this.getPost();
  }

})

