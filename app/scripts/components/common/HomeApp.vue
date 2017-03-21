<template>
  <v-row>
    <!--<a href="#" @click="click">click</a>-->
    <v-col xs12="xs12" sm9>
      <short-by></short-by>
      <div v-if="!isLoad"><v-progress-circular indeterminate class="red--text" /></div>
      <hero v-if="isLoad" v-for="hero in heros" :data="hero"></hero>
    </v-col>
    <v-col xs12="xs12" sm3 class="aside">
      <aside-left></aside-left>
    </v-col>
  </v-row>
</template>

<script>
import ShortBy from '../short-by/ShortBy.vue';
import Hero from '../hero/Hero.vue';
import AsideLeft from '../favourite/Aside.vue';
import Heros from '../store/HerosStore';
import { CONFIG }  from '../../Constants';

  /**
   * Home component
   * @author: <cristianqr22@gmail.com> Cristian Quintero
   * @date: 03 - 19 - 2017
  */

  /**
   * The new instance Heros
  */
  var heros = new Heros();

  export default {
    /**
     * Import components
    */
    components: { ShortBy, Hero, AsideLeft },

    /**
     * Function initial of component
    */
    created() {
        this.$http.get(CONFIG.URL_BASE + '?limit=100&ts=1&apikey=' + CONFIG.API_KEY  + '&hash=' + CONFIG.HASH).then(response => {
            this.isLoad = true;
            heros.setHeros(response.body.data.results);
        }, response => {
            // error callback
            console.log(response);
        });
    },

    /**
     * The model App
    */
    data () {
      return {
          isLoad: false,
          heros: heros.state.heros
      }
    },

    /**
    * Methods of component
    */
    methods:{
        click: function(){
            this.heros[2].name = "my Name";
        }
    }
  }
</script>