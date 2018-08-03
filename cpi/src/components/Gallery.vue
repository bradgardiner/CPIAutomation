<template>
  <div id="gallery" style="padding:0% 0%; background-color: white">
    <div class="columns" style="padding:0% 0%; ">
      <div id="title-left"class="col">
        <h1>MECHANICAL</H1>
        <!-- <img src="~../assets/mech-panel.png" style="height: 200px;"/> -->
      </div>
      <div id="desc" class="col">
        <p> Some blurb about how sweet 8020 extrusion is and all the junk it can doo blah blah blah blah</p>
      </div>
    </div>
    <div class="columns" >
      <img id="gallery-images" v-img:eightyTwenty src="https://i.imgur.com/hZ7cH9w.jpg">
      <img id="gallery-images" v-img:eightyTwenty src="https://i.imgur.com/LRfaPBd.jpg">
      <img id="gallery-images" v-img:eightyTwenty src="https://i.imgur.com/hZ7cH9w.jpg">
      <img id="gallery-images" v-img:eightyTwenty src="https://i.imgur.com/LRfaPBd.jpg">
      <img id="gallery-images" v-img:eightyTwenty src="https://i.imgur.com/hZ7cH9w.jpg">
      <img id="gallery-images" v-img:eightyTwenty src="https://i.imgur.com/LRfaPBd.jpg">


    </div>
    <div class="columns" style="padding:0% 0%;">
      <div id="desc" class="col">
        <p> Some blurb about how sweet electricity is and all the junk it can doo blah blah blah blah</p>
      </div>
      <div id="title-right"class="col">
        <h1> PNEUMATICS </h1>
      </div>
    </div>
    <div class="columns">
      <img id="gallery-images" v-img src="https://i.imgur.com/hZ7cH9w.jpg">

    </div>
    <div class="columns" style="padding:0% 0%;">
      <div class="col">
        <img src="~../assets/pneumatic-panel.png" style="height: 200px;"/>
      </div>
      <div class="col">
        <p> Some blurb about how sweet pneumatics is and all the junk it can doo blah blah blah blah</p>
      </div>
    </div>
    <div class="columns" style="padding:0% 0%;">
      <div class="col">
        <p> Some blurb about how sweet hydraulics is and all the junk it can doo blah blah blah blah</p>
      </div>
      <div class="col">
        <img src="~../assets/hydraulics-panel.png" style="height: 200px; float: right;"/>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    data: function () {
      return {

      };
    },

    components: {
    },
  }
</script>

<style>

  #title-left{
    color: #2886C7;
    padding: 0% 2%;
    height: 200px;
    position: relative;
    background-color: #2f2f2f;

  }

  #title-left:before{
    content: '';
    position:absolute;

    bottom:0;
    right:0;
    border-bottom:  200px solid #2886C7;
    border-left: 500px solid transparent;

  }

  #title-right{
    text-align: right;
    color: #2886C7;
    padding: 0% 2%;
    height: 200px;
    position: relative;
    background-color: #2f2f2f;

  }

  #title-right:before{
    content: '';
    position:absolute;

    top:0;
    left:0;
    border-top:  200px solid #2886C7;
    border-right: 500px solid transparent;

  }

  #desc{
    text-align: center;
    position: relative;
    height: 200px;
    color: #2f2f2f;
    background-color: #2886C7;
  }

#gallery-images{
  width: 300px;
  padding: .5% .3%;
}

</style>
