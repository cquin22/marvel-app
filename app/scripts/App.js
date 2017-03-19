import Vue from 'vue';
import router from './Router';
import App from './Main.vue';
import Vuetify from 'vuetify';

/**
 * The main class when run the application
 * @author: <cristianqr22@gmail.com> Cristian Quintero
 * @date: 03 - 19 - 2017
*/
Vue.use(Vuetify);

/* Create and Mount our Vue instance */
new Vue({
    created: function () {
        window.Vue = this
    },
    router,
    render: h => h(App)
}).$mount('#app')