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
        <favourite></favourite>
    </div>
</template>

<script>
    import Favourite from './Favorite.vue';
    export default {
        components: { Favourite },
        data () {
            return {
            }
        },
    }
</script>