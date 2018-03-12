<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        Home
      </div>
      <div class="section">
        About
      </div>
      <div class="section">
        Skills
      </div>
      <div class="section">
        Projects
      </div>
      <div class="section fp-auto-height">
        Footer
      </div>
    </div>
  </v-app>
</template>


<style>

</style>


<script>
  $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor : ['#ccc', '#fff',"#000","#123456","#fff"],
      scrollingSpeed: 1000,
      navigation: true
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


