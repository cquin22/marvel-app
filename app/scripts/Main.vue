<template>
    <div id="app">
        <app-header></app-header>
        <div class="container app-content">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>

</template>

<script>
    import AppHeader from './components/common/Header.vue'
    import AppFooter from './components/common/Footer.vue'

    /**
     * The main component when run application
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 19 - 2017
    */

    export default {
        name: 'app',
        components: { AppHeader, AppFooter },
        data () {
            return {
            }
        }
    }
</script>

