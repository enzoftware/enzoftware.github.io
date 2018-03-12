<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        <div class="display-4"> 
          {{name}}
        </div>
        <div class="display-2">
          {{user}}  
        </div>
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
        name: 'Enzo Lizama Paredes',
        user: 'enzoftware'
      }
    },
    components:{
      PersonalFooter
    }
  }
  
</script>


