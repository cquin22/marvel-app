import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        heroes: [],
        setHeroes (data){
            for (var i = 0; i < data.length; i++) {
                this.heroes.push(data[i]);
            }
        },
        updateHeroes (data){
            for (var i = this.heroes.length; i > 0; i--) {            
                this.heroes.pop();            
            }
            this.setHeroes(data);
        }       
    }


})