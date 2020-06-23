import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import BookDetails from './components/BookDetails.vue';
import BookList from './components/BookList.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.prototype.$apiURI = 'https://vuejs-books-ec25a.firebaseio.com/books.json';

const routes = [
    { path: '/book/:book_slug', name: 'book', component: BookDetails },
    { path: '/', component: BookList },
    { path: '*', redirect: '/' },
];
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
