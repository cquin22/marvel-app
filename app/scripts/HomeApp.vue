<template>
  <v-row>
    <v-col xs12="xs12" sm9 class="list-heroes">
      <short-by></short-by>
      <div v-if="!$store.state.isLoad"><v-progress-circular indeterminate class="red--text" /></div>
      <paginate v-if="$store.state.isLoad" name="heroes" :list="heroes" class="paginate-list" :per="10">
        <hero  v-for="hero in paginated('heroes')" :data="hero"></hero>
      </paginate>
      <paginate-links v-if="$store.state.isLoad" for="heroes" :limit="5" :show-step-links="true" :step-links="{ next: '>', prev: '<'}"></paginate-links>
    </v-col>
    <v-col xs12="xs12" sm3 class="aside">
      <aside-left></aside-left>
    </v-col>
  </v-row>
</template>

<script>
import ShortBy from './components/short-by/ShortBy.vue';
import Hero from './components/hero/Hero.vue';
import AsideLeft from './components/favourite/Aside.vue';
import { SESSION_STORAGE }  from './Constants';

  /**
   * Home component
   * @author: <cristianqr22@gmail.com> Cristian Quintero
   * @date: 03 - 19 - 2017
  */

  export default {
    /**
     * Import components
    */
    components: { ShortBy, Hero, AsideLeft },

    /**
     * Function initial of component
    */
    created() {
        this.$store.state.setHeroes(this.$http);
        var sorageComics = sessionStorage.getItem(SESSION_STORAGE.SESSION_FAVORITES);
        if(sorageComics){
          var storagParse = JSON.parse(sorageComics)
            for (var i = 0; i < storagParse.length; i++) {
                this.$store.state.myFavorites.push(storagParse[i]);
            }
        }
    },

    /**
     * The model App
    */
    data () {
      return {
          heroes: this.$store.state.heroes,
          paginate: ['heroes']
      }
    }
  }
</script>