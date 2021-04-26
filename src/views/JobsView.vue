<template>
    <div>
        <p v-for="item in this.$store.state.jobs" :key="item.index">
            <a :href="item.url">{{item.title}}</a>
            <small>{{item.time_age}} by {{item.domain}}</small>
        </p>
    </div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('FETCH_JOBS')
    }
}
</script>

<style>

</style>
