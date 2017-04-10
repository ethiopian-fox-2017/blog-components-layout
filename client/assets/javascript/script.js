
  Vue.component('navigation-header',{
    template : '#nav-header',
    props: ['title', 'menus', 'dataCreate'],
    data : function(){
      return {
        showModal : false
      }
    },
    methods: {
      showDataCreate : function(data){
           console.log(data);
      },
      graball : function(){
        this.$emit('graball')
      }
    }
  })

  Vue.component('sidebar',{
    template : '#sidebar',
    props : ['articles','dataCreate'],
    methods : {
      detail : function(article){
        this.$emit('details', article)
      }
    }
  })

  Vue.component('articles-list',{
    template : '#list',
    props : ['articles'],
    methods: {
      detail : function(articles){
        //membawa ke sidebar
        //console.log(articles);
        this.$emit('detail', articles)
      }
    }
  })

  Vue.component('search-bar', {
    template : '#search',
    props : ['search-data']
  })

  Vue.component('contents', {
    template : '#contents',
    props : ['contents']
  })

  Vue.component('form-create',{
    template: '#form-create',
    props : ['contents','dataCreate','showModal'],
    methods: {

      postData : function(data){
        var self = data,
             app = this

        axios.post('http://localhost:3000/api/article', {
             title : self.title,
             content : self.content,
             category: self.category,
             image : self.image
       })
       .then(function (response) {
         app.graball()
         showModal = false
         swal("Good job!", "You clicked the button!", "success")
         app.$emit('close')
       })
       .catch(function (error) {
         console.log(error);
       });
     },
     graball : function(){
         this.$emit('graball','data')
     }
    }
  })


  var app = new Vue({
     el : '#app',
     data : {
       articles : [],
       aboutUs : {
         name : 'Blogging sederhana',
         menus : [
           'Home',
           'Tentang Saya',
           'LOGIN'
         ]
       },
       contents : [],
       created : {
         title : '',
         content : '',
         category : '',
         image : '',
       }

     },
     methods: {
       getList : function(){
         var self = this
         axios.get('http://localhost:3000/api/article')

              .then(function (response) {
                if (response.data){
                  self.articles = []
                  self.contents = []
                  response.data.forEach(data => {
                    self.articles.push(data)
                    self.contents.push(data)
                  })
                }

             })
             .catch(function (error) {
               console.log(error);
             });
       },
       getDetail : function(article){
         console.log(article);
         this.contents = [article]
       },
       coba : function(){
         console.log('berjalan');
       }
     },
     mounted : function(){
        this.getList()
     }
 })
