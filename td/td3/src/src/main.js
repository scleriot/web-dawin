import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'

Vue.component('movie-item', MovieItemComponent);

new Vue({
  el: '#app',
  render: h => h(app)
})