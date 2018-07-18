<template>
  <div id="home">
    <div id="main-banner" style="width:100%;height:400px">

      <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
        <div slot="loading">loading...</div>
       </slider>
    </div>
    <div class="container" id="engineering-banner">
      <img src="http://vijayshekharacademy.com/wp-content/uploads/2016/12/Engineering-Banner.jpg" alt="banner" width=100% height=50%>
      <div class="eng-disc">
        <p style="color: black; z-index: 5;">Whether you are looking for a fully hands-off and turn-key solution, or are simply looking to bring in some additional expertise to assist with a particular discipline within your project, CPI experts can help you make your idea a reality. With decades of experience in Hydraulics, Pneumatics, Mechanics, Controls and Automation - CPI experts are ready to assist.
        </p>
      </div>
      <router-link to="/engineering">
        <button class="eng-button">More</button>
      </router-link>
    </div>
    <div id="capabilities-banner">
      <img src="http://www.mcnealpro.com/files/capabilities-banner.jpg" width=100% height=100%>
    </div>
    <div id="services-banner">
      <img src="https://demandmoremedia.com/wp-content/uploads/2018/04/Services.png" widht=100% height=100%>
    </div>
    <div id="brand-banner">
        <div>
          <img src="~../assets/brandBelt.png" width="100%">
        </div>
    </div>
  </div>
</template>

<script>
  import slider from 'vue-concise-slider'
  export default{

    name: 'home',
    data(){
      return{
        pages: [{
          html: '<img src="../assets/favico.png">',
          style: {

          }
        },
        {
          html: '<div class="slider2">slider2</div>',
          style:{
            'background' : 'red'
          }
        },
        {
          html: '<div class="slider3">slider3</div>',
          style:{
            'background' : 'green'
          }
        }
      ],
      sliderinit: {
          effect: 'fade',
          currentPage: 0,
          thresholdDistance:500,
          thresholdTime:100,
          autoplay:3000,
          loop:true,
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 1000
        }

      }
    },
    components: {
        slider
    },
    methods: {
      // Listener event
      slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
      }
    }
  }
</script>

<style>
  .container {
    position: relative;
    text-align: center;
    color: white;
  }

  .eng-disc{
    text-align: left;
    position: absolute;
    bottom: 20%;
    top: 20%;
    left: 5%;
    right: 50%;
    padding:30px;
    z-index: 1;
    border-radius: 5px;
    background-color: white;
    color: grey;
    opacity: 0.9;
  }

  .eng-button {
    position: absolute;
    bottom: 40%;
    text-shadow: 2px 2px black;

    left: 75%;
    font-size: 30px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 2px;
    background-color: #008CBA;
    color: white;
    border: 2px solid #008CBA;
  }

  .eng-button:hover {
    filter: brightness(85%);
    background-color: lighten(#008CBA, 50%);
    color: white;
  }

  #brand-banner{
    padding: 30px;
  }




</style>
