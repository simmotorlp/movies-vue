<template>
  <header>
    <div class="container m-auto">
      <div class="flex justify-between items-center pt-2 pb-2">
        <Logo></Logo>
      </div>
      <div class="pt-6">
        <nav class="relative flex items-center justify-center capitalize text-lg">
          <router-link class="inline pr-5" to="/" active-class="active">Home</router-link>
          <router-link class="inline" to="/about" active-class="active">About</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "Header",
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>
nav {
  a.active {
    &::after {
      @apply block w-full bg-green-500;
      content: '';
      height: 1.5px;
    }
  }
}
</style>
