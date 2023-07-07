<template>
  <div class="technology-container">
    <div class="card" v-for="data in apiData.results" :key="data.id">
        <h1 class="article-title">{{ data.title }}</h1>
        <h2 class="article-published-date">{{ data.published_date | formatDate }}</h2>
        <img class="article-image" :src="data.multimedia[0].url">
        <br>
        <h3 class="article-abstract">{{data.abstract }}</h3>
        <a :href="data.url" class="article-link">NYT Article</a>
    </div>    
  </div>
</template>

<script>
export default {
    name: 'TechnologyList',

    data(){
        
        return {
            apiData: [],
            
        };
  
    },

    methods: {
        async getData() {
      try {
        const response = await this.$http.get(
          "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=xtQ5dsc2O5v7suRp3la1PBqnjJKHiciW"
        )
       
        // JSON responses are automatically parsed.
        this.apiData = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    

 
    },
    created() {
    this.getData();
  },

}
</script>


<style>
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


.card .article-title {
    font-size: 1.5rem;
   
}


.article-image {
    width: 90%;
    display:block;
    margin:auto;
    max-height: 50%;
}


.technology-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.article-link{
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
}

.article-abstract{
    font-size: 1rem;
}

.article-link:link { color: blue; }
.article-link:visited { color: red; }
.article-link:hover { color: green; }


</style>