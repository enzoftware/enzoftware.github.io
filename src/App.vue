<template>
  <v-app>
    <div id="fullpage">
  
      <div class="section">
        <h1>{{name}}</h1>
        <h2>{{user}}</h2>
        <div class="contacts">
          <div class="columns">
  
            <div class="column is-1">
              <a class="mdi mdi-github-circle" href="https://github.com/enzoftware" target="_blank" />
            </div>
  
            <div class="column is-1">
              <a class="mdi mdi-stack-overflow" href="https://stackoverflow.com/users/7966313/enzo-lizama" target="_blank" />
            </div>
  
            <div class="column is-1">
              <a class="mdi mdi-medium" href="https://medium.com/@enzoftware" target="_blank" />
            </div>
  
            <div class="column is-1">
              <a class="mdi mdi-linkedin" href="https://www.linkedin.com/in/enzo-lizama-3b097b118/" target="_blank" />
            </div>
  
          </div>
        </div>
      </div>
  
      <div class="section">
        Skill
      </div>

      <div class="section">
        <div class="slide" data-anchor="slide1">Project 1</div>
        <div class="slide" data-anchor="slide2">Project 2</div>
      </div>
  
      <div class="section fp-auto-height">
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>Footer</strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
  
    </div>
  </v-app>
</template>


<style>
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Fira+Mono');

  .contacts {
    display: inline-block;
  }
  
  .section {
    text-align: center;
  }
  
  a {
    text-decoration: none;
    color: white !important;
  }
  
  .column {
    margin-right: 15% !important;
  }
  
  h1 {
    font-family: 'Bowlby One SC', cursive;
    font-size: 5em;
    color: white;
  }
  
  h2 {
    font-family: 'Fira Mono', monospace;
    color: white;
  }
</style>


<script>

  $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#F44336','#9C27B0','#2196F3','#4CAF50']
    });
  });
  
  export default {
    data() {
      return {
        name: 'Enzo Lizama Paredes',
        user: 'enzoftware'
      }
    }
  }
  
</script>


