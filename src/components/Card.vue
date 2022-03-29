<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <picture>
      <img class="w-full" alt="Sunset in the mountains" :src="data.posterUrl">
    </picture>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ data.nameRu }}</div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";

export default {
  name: "Card",
  props: ['film'],

  setup(props) {
    const data = ref(null);

    function fetchData() {
      return fetch('https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=' + props.film.title, {
        method: 'GET',
        headers: {
          'X-API-KEY': 'f20bf447-4474-42db-8026-4f34876bffab',
          'Content-Type': 'application/json',
        },
      })
          .then(response => response.json())
          .then(json => {
            data.value = json.films[0];
          })
          .catch(err => console.log(err))
    }

    onMounted(() => {
      fetchData();
    });

    return {
      data,
    };
  }
}
</script>

<style scoped>

</style>
