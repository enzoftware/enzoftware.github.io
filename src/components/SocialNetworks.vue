<template>
  <div>
    <v-btn
        v-for="icon in icons"
        :key="icon"
        icon
        class="mx-3 pink--text"
        @click="openLinkNewTab(icon)"
    >
        <v-icon size="36px">{{icon}}</v-icon>
    </v-btn>
  </div>
</template>

<style>

</style>

<script>
    export default {
    data(){
        return{
            icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-github', 'fab fa-linkedin','fab fa-medium']
        }   
    },
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
