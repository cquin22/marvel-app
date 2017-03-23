<template>
    <div>
        <div class="box-search">
            <i class="icon-magnifier-tool"></i>
            <input class="search" type="text" v-model="search" @blur="searchResult" />
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                search: ''
            }
        },
        methods: {
            searchResult: function(){
                this.$store.state.updateHeroes(this.$http, this.search);
            }
        }     
    }
</script>