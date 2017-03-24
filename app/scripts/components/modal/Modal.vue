<template>
    <transition name="custom-classes-transition"  enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutUp" >
        <div v-if="comicsByHero.length > 0" class="bg-modal">
            <div class="content-modal">
                <div class="top">
                    <v-row>
                        <v-col xs12="xs12" sm4 class="image-comic">
                            <img  :src="comicsByHero[0].thumbnail.path + '.' + comicsByHero[0].thumbnail.extension" />
                        </v-col>
                        <v-col xs12="xs12" sm8 class="comic-info">
                            <i @click="removeModal" class="cancel icon-cancel"></i>
                            <h3>{{comicsByHero[0].title}}</h3>
                            <div class="box-info">
                                <p v-if="comicsByHero[0].description">{{comicsByHero[0].description}}</p>
                                <p v-else>This comic does not have an official description, we invite you to consult later</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="bottom">
                    <div class="btn-modal" @click="addFavourite()">
                        <span class="icono-btn">
                            <div class="layer-cap-1 red">
                                <div class="layer-cap-2">
                                    <span class="icon-star-in-black-of-five-points-shape"></span>
                                </div>
                            </div>
                        </span>
                        <p>Add to favourites</p>
                    </div>
                    <div class="btn-modal gray">
                        <span class="icono-btn cart">
                            <i class="icon-black-cart"></i>
                        </span>
                        <p>Buy for {{comicsByHero[0].prices[0].price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    import { SESSION_STORAGE }  from '../../Constants';

    /**
     * The Modal component
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 24 - 2017
    */
    export default {
        data () {
            return {
                /**
                    @type {Array}
                    Model commics by hero
                */
                comicsByHero: this.$store.state.comicsByHero
            }
        },
        methods: {

           /**
            * @type method
            * @description Remove modal and empty comicsByHero
           */  
            removeModal: function(){
                this.$store.state.comicsByHero.pop();
            },

           /**
            * @type method
            * @description Add comit to favourite list
           */              
            addFavourite: function(){
                this.$store.state.myFavorites.push(this.$store.state.comicsByHero[0]);
                var stringResponse = JSON.stringify(this.$store.state.myFavorites);
                sessionStorage.setItem(SESSION_STORAGE.SESSION_FAVORITES, stringResponse);
                this.$store.state.comicsByHero.pop();
            }
        }
    }
</script>