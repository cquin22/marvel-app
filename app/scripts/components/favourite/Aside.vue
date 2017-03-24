<template>
    <div>
        <div class="box-title-aside">
            <div class="layer-cap-1 red">
                <div class="layer-cap-2">
                    <span class="icon-star-in-black-of-five-points-shape"></span>
                </div>
            </div>
            <h3>My favourites</h3>
        </div>
        <div v-if="$store.state.myFavorites.length > 0">
            <favourite v-for="favorite in $store.state.myFavorites" :data="favorite"></favourite>
        </div>
    </div>
</template>

<script>
    import Favourite from './Favorite.vue';


    /**
     * The aside component
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 24 - 2017
    */
    export default {
        components: { Favourite },
        data () {
            return {
            }
        },
    }
</script>