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

  /**
   * Home component
   * @author: <cristianqr22@gmail.com> Cristian Quintero
   * @date: 03 - 19 - 2017
  */

  /**
   * The new instance heroes
  */
  //var heroes = new Heroes();

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
    },

    /**
     * The model App
    */
    data () {
      return {
          heroes: this.$store.state.heroes,
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