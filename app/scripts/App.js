import Vue from 'vue';
import router from './Router';
import App from './Main.vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import VuePaginate from 'vue-paginate'
import store from './components/store/HeroesStore.js';

/**
 * The main class when run the application
 * @author: <cristianqr22@gmail.com> Cristian Quintero
 * @date: 03 - 19 - 2017
*/
Vue.use(Vuetify);
Vue.use(VueResource);
Vue.use(VuePaginate)

/* Create and Mount our Vue instance */
new Vue({
    created: function () {
        window.Vue = this
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')