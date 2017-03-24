<template>
    <v-row class="box-filter">
        <v-col xs12="xs12" sm6="sm6" >
            <img class="left-icon" src="img/characters.png"> <h3>Characters</h3>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" >
            <div class="box-select-filter">
                <i class="icon-arrows"></i>
                <select class="filter">
                    <option>Short by</option>
                    <option v-for="value in states" @value="value">{{value}}</option>
                </select>
            </div>
        </v-col>
    </v-row>
</template>

<script>

    /**
     * The Select component for short by
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 24 - 2017
    */
    export default {
        data () {
            return {
                /**
                    @type {Array}
                    Model items by select
                */                
                states: ["Item 1","Item 2","Item 3","Item 4","Item 5"]
            }
        }
    }
</script>