<template>
  <v-footer height="auto">
    <v-card
      flat
      tile
      class="text-xs-center grey darken-4"
    >
      <v-card-text>
        <social-networks/>
      </v-card-text>
      <v-card-text class="white--text pt-0 title">
        Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. - Rich Cook
      </v-card-text>
      <v-card-text class="white--text subheading">
        &copy;2018 — <strong>{{username}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
.theme--light{
  background-color: #212121 !important; 
}

</style>


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