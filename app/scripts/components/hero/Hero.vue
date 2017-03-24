<template>
    <div class="hero">
        <v-row>
            <v-col  xs12 sm6>
                <div class="avatar-box">
                    <img class="avatar-hero" :src="this.data.thumbnail.path + '.' + this.data.thumbnail.extension" />
                </div>
            </v-col>
            <v-col xs12 sm6>
                <div class="primary-info">
                   <h3>{{this.data.name}}</h3>
                    <p v-if="this.data.description">{{this.data.description}}</p>
                    <p v-else>This character does not have an official description of marvel we invite you to consult the information again in a few days ...</p>
                    <a href="#" @click="openComicsHero(this.data.name)" class="btn--light-flat-focused btn btn--large btn--raised marvel-btn">
                        <span>View More </span>
                    </a>
                </div>
            </v-col>
        </v-row>
        <v-row class="additional-info">
            <h4>Related comics</h4>
            <p v-if="this.data.comics.items.length == 0">This character still has no related comics, we invite you to watch for the new news</p>
            <ul>
                <li v-for="comic in relatedFilter(this.data.comics.items)" ><p> {{comic.name}}</p></li>
            </ul>
        </v-row>

    </div>
</template>

<script>
    export default {
        props: ['data'],
        data () {
            return {
                relatedFilter: function(items){
                    return items.filter(function (item, index) {
                        if(index < 4){
                            return item;
                        }
                    })
                }
            }
        },
        computed : {
            openComicsHero: function(info){
                this.$store.state.isLoad = false;
                this.$store.state.getComicsByHero(this.$http, info.data.id);
            }
        }
    }
</script>