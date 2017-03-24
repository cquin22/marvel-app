import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import { CONFIG }  from '../../Constants';

const SESSION_KEY = "LIST_HEROES";
const SESSION_FAVORITES = "LIST_FAVORITES";

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
    state: {
        heroes: [],
        isLoad: false,
        comicsByHero: [],
        myFavorites: [],
        addHeroes (data){
            for (var i = this.heroes.length; i > 0; i--) {
                this.heroes.pop();
            }
            for (var i = 0; i < data.length; i++) {
                this.heroes.push(data[i]);
            }
            this.isLoad = true;
        },
        setHeroes (http){
            var sorageHeroes = sessionStorage.getItem(SESSION_KEY);
            if(!sorageHeroes){
                http.get(CONFIG.URL_BASE + '?limit=100&ts=1&apikey=' + CONFIG.API_KEY  + '&hash=' + CONFIG.HASH).then(response => {
                    this.addHeroes(response.body.data.results);
                    var stringResponse = JSON.stringify(response.body.data.results);
                    sessionStorage.setItem(SESSION_KEY, stringResponse);
                }, response => {
                    // error callback
                    console.log(response);
                });
            }else{
                this.addHeroes(JSON.parse(sorageHeroes));
            }

        },
        updateHeroes (http, search){
            var sorageHeroes = sessionStorage.getItem(SESSION_KEY);            
            if(search != ""){
                var starWith = search.slice(0, 2);
                this.isLoad = false;
                http.get(CONFIG.URL_BASE + '?nameStartsWith='+starWith+'&limit=100&ts=1&apikey=' + CONFIG.API_KEY  + '&hash=' + CONFIG.HASH).then(response => {
                    this.addHeroes(response.body.data.results);
                }, response => {
                    // error callback
                    console.log(response);
                });
            }else if(sorageHeroes){
                this.addHeroes(JSON.parse(sorageHeroes));
            }
        },

        getComicsByHero (http, id){
                http.get(CONFIG.URL_BASE + '/'+id+'/comics?format=comic&formatType=comic&ts=1&apikey=' + CONFIG.API_KEY  + '&hash=' + CONFIG.HASH).then(response => {
                    this.isLoad = true;
                    this.comicsByHero.push(response.body.data.results[0]);
                }, response => {
                    // error callback
                    console.log(response);
                });
        }       
    }


})