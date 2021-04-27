<template>
    <div class="wrapper">
        <div class="test">
            <div class="dim" @click="test()"></div>
            <iframe @click="test()" src="https://www.youtube.com/embed/sKnqA6tNYbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ref="testFrame"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        test() {
            alert('hi')
        }
    }
}
</script>

<style scoped>
.wrapper{ position: relative; width: 100%; height: 300px; background: wheat;}
.test{ position: relative; width: 100%; height: 100%; background: black}
.test iframe{position: relative; width: 100%; height: 100%;}
.dim{position: absolute; width:100%; height: 100%; background: orange; opacity: 0; z-index: 1;}
</style>
