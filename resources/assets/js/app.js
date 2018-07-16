
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

import pageList from './pages/list.vue';
import pageFoo from './pages/foo.vue';
import pageBar from './pages/bar.vue';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.component('header-component', require('./components/header.vue'));

const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/list', name: 'list', component: pageList },
    { path: '/foo', name: 'foo', component: pageFoo },
    { path: '/bar', name: 'bar', component: pageBar }
]

const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
})

const app = new Vue({
    router
}).$mount('#app')

// const app = new Vue({
//     el: '#app',
//
//     data: {
//         message: 'Hello Vue!'
//     }
//
// });
