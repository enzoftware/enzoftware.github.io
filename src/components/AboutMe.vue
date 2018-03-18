<template>
  <div>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card dark class="grey darken-4">
                <v-card-text class="px-0">
                    <about-me-scroll/>
                    <div class="display-4 white--text description">
                        Let me introduce myself 
                    </div>
                </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card dark color="grey darken-4">
                    <v-card-text class="px-0" id="my_photo">
                        <img src="https://pbs.twimg.com/profile_images/912133818525548544/fdJ9SEVU_400x400.jpg" />
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-card dark color="grey darken-4">
                    <v-card-text class="display-3 description">
                        Challenges lover. Problem solver. Occasional writer. Software Engineer student. Passionate about soccer.
                        Kotlin evangelist. Android developer by passion. Eternal self-taught. Community organizer. 
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');
    .description{
        font-family: 'IBM Plex Mono', monospace;
    }
    #my_photo{
        margin-top: 10%;
    }

</style>

<script>

    import AboutMeScroll from './AboutMeScroll.vue'

    export default {
        components:{
            AboutMeScroll
        }
    }
</script>
