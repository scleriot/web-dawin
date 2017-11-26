import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local

new Vue({
  el: '#app',
  render: h => h(app)
})