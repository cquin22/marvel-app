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
    export default {
        data () {
            return {
                states: ["ewfsd","fsdfsd","fsdf","fsd","fsd"]
            }
        }
    }
</script>