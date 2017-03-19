<template>
    <div class="header">
        <v-container >
            <v-row>
                <v-col xs12="xs12" >
                    <v-row>
                        <v-col xs12="xs12" sm3="sm3">
                            <img class="logo" src="./img/logo.png"/>
                        </v-col>
                        <v-col xs12="xs12" sm5="sm5">
                            <box-search></box-search>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>

<script>

    import BoxSearch from '../box-search/BoxSearch.vue';

    /**
     * The header component
     * @author: <cristianqr22@gmail.com> Cristian Quintero
     * @date: 03 - 19 - 2017
    */

    export default {
        name: 'header',
        components: { BoxSearch },
        data () {
            return {
            }
        },
    }
</script>