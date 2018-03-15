<template>
  <v-footer height="auto">
    <v-card
      flat
      tile
      class="white lighten-1 black--text text-xs-center"
    >
      <v-card-text>
        <social-networks/>
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