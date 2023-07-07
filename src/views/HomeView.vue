<template>
  <div>


    <div class="top-news">
      <div>
        <single-movie></single-movie>
      </div>
      <div>
        <single-tech></single-tech>
      </div>
    </div>  
  </div>

</template>

<script>
import SingleMovie from '@/components/SingleMovie.vue';
import SingleTech from '@/components/SingleTech.vue';

export default {
  components: {
    SingleMovie,
    SingleTech
  }
}
</script>

<style>
.top-news{
  display: flex;
  justify-content: space-evenly;
}

.card {
    border: 2px solid black;
    border-radius: 10px;
    width: 500px;
    height: 550px;
    margin: 20px;
    position: relative;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    
}

</style>