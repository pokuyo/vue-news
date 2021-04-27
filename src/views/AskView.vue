<template>
    <div>
        <p v-for="item in fetchedAsk" :key="item.index">
            <!-- <a :href="item.url">{{item.title}}</a> -->
            <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>>
            <small>{{item.time_age}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    computed: {
        // 3
        ...mapGetters([
            'fetchedAsk'
        ])

        // 2
        // ...mapState({
        //     ask: state => state.ask
        // })

        // 1
        // ask() {
        //     return this.$store.state.ask
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>
