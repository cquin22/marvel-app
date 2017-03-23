<template>
    <div>
        <div class="box-search">
            <i class="icon-magnifier-tool"></i>
            <input class="search" type="text" v-model="search" />
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
        watch: {
            search: function(val, oldVal) {
               /*sdfsdfsd*/
               this.$store.state.updateHeroes(val);
            }
        }        
    }
</script>