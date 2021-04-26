<template>
    <div>
        <p v-for="item in this.$store.state.news" :key="item.index">
            <a :href="item.url">{{item.title}}</a>
            <small>
                {{item.time_age}} by 
                <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
//https://api.hnpwa.com/v0/news/1.json
// import {fetchNewsList} from '../api/index.js'

export default {
    // data () {
    //     return {
    //         users: []
    //     }
    // },
    created () {
        this.$store.dispatch('FETCH_NEWS')
        // fetchNewsList()
        //     .then(response => {
        //         console.log(response.data)
        //         this.users = response.data
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }
}
</script>

<style>

</style>
