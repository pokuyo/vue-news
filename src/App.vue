<template>
  <div id="app">
    <tool-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components: {
    ToolBar
  },
  methods: {
    fatchData () {
      console.log('hello');
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
