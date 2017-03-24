import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import { CONFIG, SESSION_STORAGE }  from '../../Constants';

Vue.use(Vuex);
Vue.use(VueResource);


/**
 * The Store for Heroes
 * @author: <cristianqr22@gmail.com> Cristian Quintero
 * @date: 03 - 24 - 2017
*/
export default new Vuex.Store({
    state: {

        /**
            @type {Array}
            Model items by heroes
        */          
        heroes: [],

        /**
            @type {Boolean}
            Parameter to display the loader
        */         
        isLoad: false,

        /**
            @type {Array}
            Model items in comics by hero
        */         
        comicsByHero: [],

        /**
            @type {Array}
            Model items in favorites comics
        */         
        myFavorites: [],

        /**
        * @type method
        * @param: {Array} data --> The array heroes
        * @description add heroes in array
        */          
        addHeroes (data){
            for (var i = this.heroes.length; i > 0; i--) {
                this.heroes.pop();
            }
            for (var i = 0; i < data.length; i++) {
                this.heroes.push(data[i]);
            }
            this.isLoad = true;
        },

        /**
        * @type method
        * @param: {Method} http --> Method for making http requests
        * @description Consult api and add heroes
        */         
        setHeroes (http){
            var sorageHeroes = sessionStorage.getItem(SESSION_STORAGE.SESSION_KEY);
            if(!sorageHeroes){
                http.get(CONFIG.URL_BASE + '?limit=100&ts=1&apikey=' + CONFIG.API_KEY  + '&hash=' + CONFIG.HASH).then(response => {
                    this.addHeroes(response.body.data.results);
                    var stringResponse = JSON.stringify(response.body.data.results);
                    sessionStorage.setItem(SESSION_STORAGE.SESSION_KEY, stringResponse);
                }, response => {
                    // error callback
                    console.log(response);
                });
            }else{
                this.addHeroes(JSON.parse(sorageHeroes));
            }

        },

        /**
        * @type method
        * @param: {Method} http --> Method for making http requests
        * @param: {String} search --> String for consult api       
        * @description Consult api and search by result from input
        */          
        updateHeroes (http, search){
            var sorageHeroes = sessionStorage.getItem(SESSION_STORAGE.SESSION_KEY);            
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

        /**
        * @type method
        * @param: {Method} http --> Method for making http requests
        * @param: {Integer} id --> the character id      
        * @description Consult api with character id an set in list
        */ 
        getComicsByHero (http, id){
                http.get(CONFIG.URL_BASE + '/'+id+'/comics?format=comic&formatType=comic&ts=1&apikey=' + CONFIG.API_KEY  + '&hash=' + CONFIG.HASH).then(response => {
                    this.isLoad = true;
                    if(response.body.data.results.length > 0){
                        this.comicsByHero.push(response.body.data.results[0]);
                    }                    
                }, response => {
                    // error callback
                    console.log(response);
                });
        }       
    }


})