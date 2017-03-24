<template>
    <div class="box-favourite" >
        <div @click="removeFavorite()" class="box-ico-trash"><i class="icon-garbage" ></i></div>
        <img class="image-comic" :src="this.data.thumbnail.path + '.' + this.data.thumbnail.extension"/>
        <p>{{this.data.title}}</p>
    </div>
</template>

<script>
    import { SESSION_STORAGE }  from '../../Constants';

    /**
     * The Favorite component
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 24 - 2017
    */
    export default {
        props: ['data'],
        data () {
            return {
            }
        },
        methods: {

           /**
            * @type method
            * @description Remove the comic in favourite list
           */
           removeFavorite: function(){               
                for(var i = 0; i < this.$store.state.myFavorites.length; i++){
                    if(this.$store.state.myFavorites[i].id === this.data.id){
                        this.$store.state.myFavorites.splice(i, 1);
                    }
                }
                var stringResponse = JSON.stringify(this.$store.state.myFavorites);
                sessionStorage.setItem(SESSION_STORAGE.SESSION_FAVORITES, stringResponse);              
           } 
        }
    }
</script>