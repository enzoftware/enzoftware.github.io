<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        <home/>
      </div>
      <div class="section">
        <about-me/>
      </div>
      <div class="section">
        Skills
      </div>
      <div class="section">
        Projects
      </div>
      <div class="section fp-auto-height">
        <personal-footer/>
      </div>
    </div>
  </v-app>
</template>


<style>

.section{
  text-align: center !important;
}

</style>


<script>
  import PersonalFooter from './components/PersonalFooter.vue'
  import Home from './components/Home.vue'
  import AboutMe from './components/AboutMe.vue'


  $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor : ['#fff', '#fff',"#fff","#fff","#FFFFFF"],
      scrollingSpeed: 1000,
      navigation: true
    });
  });

  export default {
    data() {
      return {
        
      }
    },
    components:{
      PersonalFooter,
      Home,
      AboutMe
    }
  }
  
</script>


