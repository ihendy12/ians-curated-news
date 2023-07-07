<template>
    <div class="technology-container">
        <h1>Featured Tech News</h1>
        <div class="card">
         <h1 class="article-title">{{ apiData.results[0].title }}</h1>
         <h2 class="article-published-date">{{ apiData.results[0].published_date | formatDate }}</h2>
         <img class="article-image" :src="apiData.results[0].multimedia[0].url">
         <br>
         <h3 class="article-abstract">{{ apiData.results[0].abstract }}</h3>
         <a :href="apiData.results[0].url" class="article-link">NYT Article</a>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
      
      name: 'SingleTechList',
  
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

  
  
  .card .article-title {
      font-size: 1.5rem;
     
  }
  
  
  .article-image {
    
      max-width: 85%;
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