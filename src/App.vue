<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        <h1>{{name}}</h1>
        <h2>{{user}}</h2>
      </div>
      <div class="section">
        <div class="slide" data-anchor="slide1">Two 1</div>
        <div class="slide" data-anchor="slide2">Two 2</div>
      </div>
      <div class="section">Some section</div>
      <div class="section fp-auto-height">Some section</div>
    </div>
  </v-app>
</template>

<style>
  .section {
    text-align:center;
    font-size: 3em;
  }
  .content{
    margin:50px
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
