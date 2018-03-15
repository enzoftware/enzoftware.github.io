<template>
    <div>
        <div class="display-4 titleName"> 
            {{name}}
        </div>
        <div class="display-3 titleUsername">
            {{user}}  
        </div>
        <social-networks/>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=VT323|Zilla+Slab+Highlight');

    .titleName{
        font-family: 'Zilla Slab Highlight', cursive;
        margin: 50px !important;
    }

    .titleUsername{
        font-family: 'VT323', monospace;
    }



</style>

<script>
import SocialNetworks from './SocialNetworks.vue'

export default{
    data(){
        return{
            name: 'Enzo Lizama Paredes',
            user: '@enzoftware'
        }
    },
    components:{
        SocialNetworks
    }
}
    
</script>