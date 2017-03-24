<template>
    <div>
        <div class="box-search">
            <i class="icon-magnifier-tool"></i>
            <input class="search" type="text" v-model="result" @blur="search" @keyup.enter="search" />
        </div>
    </div>
</template>

<script>
    /**
     * The input text to search the application
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 24 - 2017
    */
    export default {
        data () {
            return {
                result: ''
            }
        },
        methods: {
            
           /**
            * @type method
            * @description Use storage to search heroes
           */            
            search: function(){
                this.$store.state.updateHeroes(this.$http, this.result);
            }
        }     
    }
</script>