<template>
<v-container grid-list-xl>
  <v-footer height="auto">
    <v-card  width="100%"
      flat
      tile
      class="text-xs-center grey darken-4"
    >
      <v-card-text>
        <social-networks/>
      </v-card-text>
      <v-card-text class="white--text pt-0 title quote">
        Hello World!
      </v-card-text>
      <v-card-text class="white--text subheading quote">
        &copy;2018 — <strong>{{username}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</v-container>
</template>

<script>
  
  import SocialNetworks from './SocialNetworks.vue'

    export default{
      data:()=>({
        username: 'enzoftware'
      }),
      components:{
        SocialNetworks
      }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Mono');
.theme--light{
  background-color: #212121 !important; 
}

.quote{
  font-family: 'Fira Mono', monospace;
}


</style>