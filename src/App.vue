<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        <h1>{{name}}</h1>
        <h2>{{user}}</h2>
      </div>
      <div class="section">Some section</div>
      <div class="section">Some section</div>
      <div class="section fp-auto-height">Some section</div>
    </div>
  </v-app>
</template>

<script>

    $(document).ready(function() {
        $('#fullpage').fullpage();
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
