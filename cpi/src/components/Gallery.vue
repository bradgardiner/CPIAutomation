<template>
  <div>
    <h1> 80/20</h1>
    <div class="columns">

      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '400px', height: '200px' }"
      ></div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
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
</style>
