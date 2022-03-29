<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Content from "./components/Content.vue";

const store = useStore()
const stack = computed(() => {
  return store.state.stack
})
</script>

<template>
  <Header></Header>
  <Content></Content>
  <Footer></Footer>
</template>

<style lang="scss">
#app {
  @apply h-screen bg-gray-50;
}
</style>
