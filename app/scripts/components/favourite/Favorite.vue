<template>
    <div class="box-favourite">
        <div class="box-ico-trash"><i class="icon-garbage"></i></div>
        <img class="image-comic" :src="this.data.thumbnail.path + '.' + this.data.thumbnail.extension"/>
        <p>{{this.data.title}}</p>
    </div>
</template>

<script>

    export default {
        props: ['data'],
        data () {
            return {
            }
        },
    }
</script>