<template>
  <div class="grid grid-cols-6 gap-4 pt-6">

    <Card v-for="film in films" :film="film" :key="film.id"></Card>

  </div>
</template>

<script>
import films from "../json/db.json";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      films: films,
    };
  },
}
</script>

<style scoped>

</style>
