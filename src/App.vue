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
        <technologies/>
      </div>
      <div class="section">
        <fav-projects/> 
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
  import Technologies from './components/Technologies.vue'
  import FavProjects from './components/FavoritesProjects.vue'


  $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor : ['#212121', '#212121',"#212121","#212121","#212121"],
      scrollingSpeed: 1000,
      navigation: true,
      anchors : ['Home','About','Technologies','Projects'],
      navigationTooltips: ['Home','About','Technologies','Projects'],
      scrollOverflow: true
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
      AboutMe,
      Technologies,
      FavProjects
    }
  }
  
</script>


