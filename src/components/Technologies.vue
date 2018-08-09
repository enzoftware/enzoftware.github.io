<template>
    <v-container fluid>
        <div>
            <h1>My favorites technologies</h1>    
        </div>
          <v-layout row wrap>
            <v-flex>
                <a href="https://github.com/enzoftware?utf8=%E2%9C%93&tab=repositories&q=android"   target="_blank"><img height="210px" class="tech" src="/public/images/android.png"></a>
                <a href="https://github.com/enzoftware?utf8=✓&tab=repositories&q=firebase"          target="_blank"><img height="210px" class="tech" src="/public/images/firebase.png"></a>
                <a href="https://github.com/enzoftware?utf8=%E2%9C%93&tab=repositories&q=vue"       target="_blank"><img height="210px" class="tech" src="/public/images/vue.png"></a>
                <a href="https://github.com/enzoftware?utf8=✓&tab=repositories&q=nodejs"            target="_blank"><img height="210px" class="tech" src="/public/images/nodejs.png"></a>
                <a href="https://github.com/enzoftware?utf8=✓&tab=repositories&q=python"            target="_blank"><img height="210px" class="tech" src="/public/images/python.png"></a>
            </v-flex>
          </v-layout>
        </v-container>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=VT323|Zilla+Slab+Highlight');
@import url('https://fonts.googleapis.com/css?family=Fira+Mono');
h1{
    font-family: 'Fira Mono', monospace;
    color: #ffffff;
    font-size: 46px;
    font-weight: bold;
}

.tech{
    margin: 20px;
    opacity: 0.5;
    transition:all 0.3s ease;
}

.tech:hover{
    opacity: 1;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

</style>

<script>
export default {
     data: () => ({
      
    })
}
</script>
