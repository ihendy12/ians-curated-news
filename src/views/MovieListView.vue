<template>
  <div>
    <h1 class="subTitle">Top News in Movies</h1>

    <movie-list></movie-list>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue';

export default {
    components: {
        MovieList
    }
}
</script>

<style>
  .subTitle{
    text-align: center;
  }
</style>