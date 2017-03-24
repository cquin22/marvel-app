<template>
    <div class="hero">
        <v-row>
            <v-col  xs12 sm6>
                <div class="avatar-box">
                    <img class="avatar-hero" :src="this.data.thumbnail.path + '.' + this.data.thumbnail.extension" />
                </div>
            </v-col>
            <v-col xs12 sm6>
                <div class="primary-info">
                   <h3>{{this.data.name}}</h3>
                    <p v-if="this.data.description">{{this.data.description}}</p>
                    <p v-else>This character does not have an official description of marvel we invite you to consult the information again in a few days ...</p>
                    <a v-if="this.data.comics.items.length > 0" href="#" @click="openComicsHero()" class="btn--light-flat-focused btn btn--large btn--raised marvel-btn red">
                        <span>View More </span>
                    </a>
                     <a v-else href="#"  class="btn btn--large btn--default btn--disabled btn--light btn--raised marvel-btn disable">
                        <span>View More </span>
                    </a>                  
                </div>
            </v-col>
        </v-row>
        <v-row class="additional-info">
            <h4>Related comics</h4>
            <p v-if="this.data.comics.items.length == 0">This character still has no related comics, we invite you to watch for the new news</p>
            <ul>
                <li v-for="comic in relatedFilter()" ><p> {{comic.name}}</p></li>
            </ul>
        </v-row>

    </div>
</template>

<script>

    /**
     * The Hero component
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 24 - 2017
    */
    export default {
        props: ['data'],
        data () {
            return {

            }
        },
        methods : {

           /**
            * @type method
            * @description Filter the first four items in the list
            * @return {Array} Items
           */            
            relatedFilter: function(){
                return this.data.comics.items.filter(function (item, index) {
                    if(index < 4){
                        return item;
                    }
                })
            },

           /**
            * @type method
            * @description Open the comic list of the hero (for this version only render the first in the list)
           */                          
            openComicsHero: function(){
                this.$store.state.isLoad = false;
                this.$store.state.getComicsByHero(this.$http, this.data.id);
            }
        }
    }
</script>