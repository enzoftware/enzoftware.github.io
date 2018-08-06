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
      <v-card-text class="white--text pt-0 title">
        Hello World!
      </v-card-text>
      <v-card-text class="white--text subheading">
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
.theme--light{
  background-color: #212121 !important; 
}


</style>