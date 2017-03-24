<template>
    <div>
        {{comicsByHero}}
    </div>
</template>

<script>

    export default {
        data () {
            return {
                comicsByHero: this.$store.state.comicsByHero
            }
        }   
    }
</script>