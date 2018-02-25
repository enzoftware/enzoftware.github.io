<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        <h1>{{name}}</h1>
        <h2>{{user}}</h2>
        <div class="contacts">
          <div class="columns">
              <div class="column is-1">
                <a class="mdi mdi-github-circle"/>
              </div>
              <div class="column is-1">
                <a class="mdi mdi-stack-overflow"/>
              </div>
              <div class="column is-1">
                <a class="mdi mdi-medium"/>
              </div>
              <div class="column is-1">
                <a class="mdi mdi-linkedin"/>
              </div>
            </div>
          </div>
        </div>
      <div class="section">
        <div class="slide" data-anchor="slide1">Project 1</div>
        <div class="slide" data-anchor="slide2">Project 2</div>
      </div>
      <div class="section">Skills</div>
      <div class="section fp-auto-height">
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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
  /*
    font-family: 'Righteous', cursive;
    font-family: 'Fira Mono', monospace;
  */  

  .contacts{
    display: inline-block; 
  }

  .section {
    text-align:center;
    font-size: 3em;
  }

  a{
    text-decoration: none;
    color: black !important;
  }

  .column{
    margin-right: 15% !important; 
  }

  h1{
    font-family: 'Bowlby One SC', cursive;
  }

  h2{
    font-family: 'Fira Mono', monospace;
  }
</style>

<script>

    $(document).ready(function() {
        $('#fullpage').fullpage({
            sectionsColor: ['#F44336','#9C27B0','#2196F3','#4CAF50']
        });
    });

  export default {
    data () {
      return {
        name: 'Enzo Lizama Paredes',
        user : 'enzoftware'
      }
    }
  }
</script>
