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
      sectionsColor : ['#212121', '#212121',"#212121","#212121","#212121"],
      scrollingSpeed: 1000,
      navigation: true,
      anchors : ['Home','About','Skills','Projects'],
      navigationTooltips: ['Home','About','Skills','Projects']
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


