<template>
    <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
        <div class="display-2">
            <h1>My favorites technologies</h1>    
        </div>
          <v-layout row wrap>
            <v-flex>
            <a href="http://"><img height="210px" class="hover_img" src="/public/images/firebase.png"></a>
            <a href="http://"><img height="210px" class="hover_img" src="/public/images/android.png"></a>
            <a href="http://"><img height="210px" class="hover_img" src="/public/images/nodejs.png"></a>
            <a href="http://"><img height="210px" class="hover_img" src="/public/images/python.png"></a>
            <a href="http://"><img height="210px" class="hover_img" src="/public/images/vue.png"></a> 
            </v-flex>
          </v-layout>
        </v-container>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=VT323|Zilla+Slab+Highlight');
h1{
    font-family: 'VT323', monospace;
    color: #ffffff;
}
.hover_img{
    margin: 20px;
}

</style>

<script>
export default {
     data: () => ({
      size: 'sm',
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ]
    })
}
</script>
