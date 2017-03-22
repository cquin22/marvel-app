<template>
  <v-row>
    <v-col xs12="xs12" sm9 class="list-heroes">
      <short-by></short-by>
      <div v-if="!isLoad"><v-progress-circular indeterminate class="red--text" /></div>
      <paginate v-if="isLoad" name="heroes" :list="heroes" class="paginate-list" :per="10">
        <hero  v-for="hero in paginated('heroes')" :data="hero"></hero>
      </paginate>
      <paginate-links v-if="isLoad" for="heroes" :limit="5" :show-step-links="true" :step-links="{ next: '>', prev: '<'}"></paginate-links>
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
import Heroes from '../store/HeroesStore';
import { CONFIG }  from '../../Constants';

  /**
   * Home component
   * @author: <cristianqr22@gmail.com> Cristian Quintero
   * @date: 03 - 19 - 2017
  */

  /**
   * The new instance heroes
  */
  var heroes = new Heroes();

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
            heroes.setHeroes(response.body.data.results);
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
          heroes: heroes.state.heroes,
          items: ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five', 'Item Six', 'Item Seven', 'Item Eight', 'Item Nine', 'Item Ten', 'Item Eleven', 'Item Twelve', 'Item Thirteen'],
          paginate: ['heroes']
      }
    },

    /**
    * Methods of component
    */
    methods:{
        click: function(){
            this.heroes[2].name = "my Name";
        }
    }
  }
</script>