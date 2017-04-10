Vue.component('articlenih', {
    props: ['article'],
    template: `
    <div class="box">
      <h1 class='title'>{{article.title}}</h1>
      <div class="columns">
         <div class="column is-5">
           <figure class="image s-square articleimg">
             <img :src=article.image alt="Image">
           </figure>
         </div>
         <div class="column is-7">
           <p>{{article.content}}</p>
         </div>
      </div>

    </div>
  `
})

Vue.component('articlesview', {
    template: `
    <div class="columns">
        <div class="column is-three-quarters contentborder">
          <articlenih v-bind:article="currentArtikel"></articlenih>
       </div>
       <div class="column contentborder is-paddingless">
        <articleselector v-bind:articlelist="articles" @changeartikel='updateArtikelnih'></articleselector>
      </div>
    </div>

  `,
    data: function() {
      return{
        articles:[],
        currentArtikel: ''
      }
    },
    mounted() {
        this.loaddata() //method1 will execute at pageload
    },
    methods: {
        loaddata: function() {
          thisarticles=this;
            axios.get('http://localhost:3000/api/article')
                .then(function(response) {
                    thisarticles.articles=response.data;
                    thisarticles.currentArtikel=response.data[0];
                    //console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        updateArtikelnih: function(listarticle) {
          this.currentArtikel = listarticle
        }
    }

})




Vue.component('articleselector', {
   props: ['articlelist'],
    template: `
    <div>
    <a href="#">
     <div v-for="listarticle in articlelist" class="costbutton" @click="emitChange(listarticle)">
       <p>{{listarticle.title}}</p>
     </div>
    </a>
    </div>
  `,
  methods: {
    emitChange: function(listarticle) {
      this.$emit('changeartikel', listarticle)

    }
  }
})
