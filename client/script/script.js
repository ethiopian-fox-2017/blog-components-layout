
Vue.component('blog-page', {
  props: ['blogData'],
  template: `
  <div class="blog">
    <h3 id="blog-title">{{ blogData.title }}</h3>
    <p id="blog-content">{{ blogData.content }}</p>
    <div class="pixels-photo">
      <p>
        <img :src="blogData.image" alt="Andra Satria on 500px.com">
      </p>
    </div>
  </div>
  `
})



Vue.component('sidebar', {
  props: ['articleList'],
  template: `
  <aside class="menu">
    <h2 class="menu-label">Article list</h2>
    <ul class="menu-list">
      <li v-for="each in articleList"><a @click="pick(each)">{{ each.title }}</a></li>
    </ul>
  </aside>
  `,
  methods: {
    pick: function(each) {
      this.$emit('pick-article', each)
    }
  }
})

new Vue({
  el:'#vue',
  data : {
    blogData : {},
    articleList: []
  },
  methods: {
    getArticles: function() {
      let self = this
      axios.get('http://localhost:3000/api/article')
        .then(function(res) {
          self.articleList = res.data
          self.blogData = res.data[0]
        })
        .catch(function(err) {
          alert(err)
        })
    },
    changeArticle: function(each) {
      this.blogData = each
    }
  },
  mounted: function() {
    this.getArticles()
  }
})