<template>
  <div id="gallery" style="padding:1% 2%;">
    <div class="columns" style="padding:0% 0%;">
      <div class="col">
        <img src="~../assets/mech-panel.png" style="height: 200px;"/>
      </div>
      <div class="col">
        <p> Some blurb about how sweet 8020 extrusion is and all the junk it can doo blah blah blah blah</p>
      </div>
    </div>
    <div class="columns">
      <gallery :images="eightytwenty" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in eightytwenty"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '400px', height: '200px' }"
      ></div>
    </div>
    <div class="columns" style="padding:0% 0%;">
      <div class="col">
        <p> Some blurb about how sweet electricity is and all the junk it can doo blah blah blah blah</p>
      </div>
      <div class="col">
        <img src="~../assets/electronics-panel.png" style="height: 200px; float: right;"/>
      </div>
    </div>
    <div class="columns">
      <gallery :images="electrical" :index="index" @close="index = null"></gallery>
      <div
        class="image2"
        v-for="(elecImage, elecIndex) in electrical"
        :key="elecIndex"
        @click="index = elecIndex"
        :style="{ backgroundImage: 'url(' + elecImage + ')', width: '400px', height: '200px' }"
      ></div>
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
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        eightytwenty: [
          'https://i.imgur.com/hZ7cH9w.jpg',
          'https://i.imgur.com/LRfaPBd.jpg',
          'https://i.imgur.com/6th5rMd.jpg',
        ],
        electrical: [
          'https://i.imgur.com/hZ7cH9w.jpg',
          'https://i.imgur.com/LRfaPBd.jpg',
          'https://i.imgur.com/6th5rMd.jpg',
        ],


        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script>

<style>



.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
  .image2 {
      float: left;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border: 1px solid #ebebeb;
      margin: 5px;
    }

</style>
