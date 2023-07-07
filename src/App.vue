<template>
  <div>
    <h1 class="website-title">Ian's Curated News</h1>
      <nav>
        <router-link :to="{ name: 'Home' }" class="links">Home</router-link> |
        <router-link :to="{ name: 'Movies'}" class="links">Movies</router-link> | 
        <router-link :to="{ name: 'Technology'}" class="links">Technology</router-link>
    </nav>  
   <router-view/>
   
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
nav{
  display: flex;
  justify-content: space-evenly;
  
}

.links{
  text-decoration: none;
  color: blue;
}

*{
  font-family: Arial, Helvetica, sans-serif;
}

.website-title{
  text-align: center;
  font-size: 50px;
}

.links:active { color: red; }
.links:hover { color: green; }
</style>