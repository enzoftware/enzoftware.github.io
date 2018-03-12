<template>
  <v-footer height="auto">
    <v-card
      flat
      tile
      class="white lighten-1 black--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3 indigo--text"
          @click="openLinkNewTab(icon)"
        >
          <v-icon size="24px">{{icon}}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="black--text pt-0 title">
        Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. - Rich Cook
      </v-card-text>
      <v-card-text class="black--text subheading">
        &copy;2018 — <strong>{{username}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
</style>


<script>
    export default{
      data:()=>({
        icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-github', 'fab fa-linkedin','fab fa-medium'],
        username: 'enzoftware'
      }),
      methods:{
        openLinkNewTab(iconName){
          switch(iconName){
            case "fab fa-github" :
              window.open("https://github.com/enzoftware","_blank").focus();
            break;
            case "fab fa-twitter":
              window.open("https://twitter.com/@enzoftware","_blank").focus();
            break;
            case "fab fa-facebook":
              window.open("https://facebook.com/enzo.lizamaparedes","_blank").focus();
            break;
            case "fab fa-linkedin":
              window.open("https://linkedin.com/in/enzoftware","_blank").focus();
            break;
            case "fab fa-medium":
              window.open("https://medium.com/@enzoftware","_blank").focus();
            break;
          }
        }
      }   
    }
</script>