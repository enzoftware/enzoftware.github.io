<template>

<div class="wrapper">
    <div class="roles">

    <div>
        I am a software engineer student    <i class="em em-thinking_face"></i>
    </div>
    
    <div>
        I am a Android developer    <i class="em em-iphone"></i>
    </div>
    
    <div>
        I am a web developer    <i class="em em-computer"></i>
    </div>
    
    <div>
        I am a community lover  <i class="em em-green_heart"></i>
    </div>

    <div>
        I am a soccer passionate    <i class="em em-soccer"></i>
    </div>

    <div>
        I am peruvian   <i class="em em-flag-pe"></i>
    </div>

    </div>
</div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.wrapper{
    color: #ffffff;
    width: 500px;
    display: block;
    margin: 0 auto;
}

.roles {
    font-size: 30px;
    height: 50px;
    vertical-align: middle;
    overflow: hidden;
}

.roles div {
    height: 50px;
    transition: margin-top 1s ease-in-out;
}

</style>


<script>
$(document).ready(function(){
    var current = 1; //keeps track of the current div
    var height = $('.roles').height(); //the height of the roles div
    var numberDivs = $('.roles').children().length; //the number of children of the roles div
    var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
    setInterval(function() {
        var number = current * -height;
        first.css('margin-top', number + 'px');
        if (current === numberDivs) {
            first.css('margin-top', '0px');
            current = 1;
        } else current++;
    }, 2000);
});


</script>
