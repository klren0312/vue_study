    import Vue from "vue";  
    import VueRouter from "vue-router";  
    Vue.use(VueRouter);  
      
      
    var App = Vue.extend({})  
    var router = new VueRouter()  
    router.map({  
        '/login': {  
            component: function (resolve) {  
              require(['./components/login.vue'], resolve)  
            }  
        },  
        '/register': {  
            component: function (resolve) {  
              require(['./components/register.vue'], resolve)  
            }  
        }  
          
    })  
      
    router.start(App, '#app')  