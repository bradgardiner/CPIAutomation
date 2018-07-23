<template>
  <div id="home">
    <div id="main-banner" style="width:100%; height:700px;">
      <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
        <div slot="loading">loading...</div>
       </slider>
    </div>
    <div class="" >
    <div class="wrap">
    <div id="process" style="width:100%; height:500px; text-align:center;">
      <div class="columns" style="padding:2%; margin-left:5% ">
        <div class="col">
          <img style="height:200px;" src="~../assets/upload.png">
          <p> Upload a drawing for our engineers to review</p>

        </div>
        <div class="col">
          <img style="height:200px;" src="~../assets/design.png">
          <p> Have our talented engineers design a product</p>

        </div>
        <div class="col">
          <img style="height:200px;" src="~../assets/build.png">
          <p> We then build what you need</p>

        </div>
        <div class="col">
          <img style="height:200px;" src="~../assets/delivery.png">
          <p>Enjoy!</p>

        </div>
      </div>
      <div class="columns" style="height:500px;background-color:#70C1B3;  text-align: center;">
        <div class="col" style="padding-left:5%; padding-right:5%;">
          <h2> Engineering Expertise</h2>
          <p style="font-size:20px;">Whether you are looking for a fully hands-off and turn-key solution, or are simply looking to bring in some additional expertise to assist with a particular discipline within your project, CPI experts can help you make your idea a reality. With decades of experience in Hydraulics, Pneumatics, Mechanics, Controls and Automation - CPI experts are ready to assist.</p>
        </div>
        <div class="col">
          <img src="~../assets/lathe.jpg" style="width:100%;height:500px; padding-top:1%; margin-right: 0;">
        </div>
      </div>
      <div id="banner-sec" class="columns" style="height:500px;">
        <div class="col" style=" padding-left: 30px; padding-bottom:20px; margin-left:50%; margin-right:3%; background-color:rgba(255,255,255,0.6);">
          <h2> Services for your Business</h2>
          <ul>
            <li>Scaled Manufacturing for large or small business</li>
            <li>Single-source integration to prived turn-key solutions</li>
            <li>On-site or In-house repairs</li>
          </ul>
          <button> Get a Quote</button>
        </div>
      </div>
      <div id="brand-banner">
            <img src="~../assets/brandBelt.png" width="100%">
      </div>
    </div>
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
          html: '<div><h2>Create Design Enjoy</h2><p>Scalable Consumer and Industrial Solutions Made Easy</p><button>Explore</button></div>',
          style: {
            'background-image': 'url("https://i.imgur.com/YEKhryj.jpg")',
            'width':'100%',
          }
        },
        {
          html: '<div><h2>Create Design Enjoy</h2><p>Scalable Consumer and Industrial Solutions Made Easy</p><button>Explore</button></div>',
          style:{
            'background-image': 'url("https://i.imgur.com/LRfaPBd.jpg")',
            'width':'100%',
          }
        },
        {
          html: '<div><h2>Create Design Enjoy</h2><p>Scalable Consumer and Industrial Solutions Made Easy</p><button>Explore</button></div>',
          style:{
            'background-image': 'url("https://i.imgur.com/6th5rMd.jpg")',
            'width':'100%',

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

  /* h2{

    width:auto;
  }
  p{
    width:100%;
  } */
  .section{
    max-width: 100%;
    margin:auto;
  }

  .wrap{
    display:flex;
    flex-direction:column;
    align-items:center;

  }

    .columns {
      display:flex;
      flex-wrap:wrap;
      align-items: center;
    }

  .col {
      flex-grow:1;
      flex-basis:0;
      padding:0px;
  }

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

  button{
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
  button:hover{
    filter: brightness(85%);
    background-color: lighten(#008CBA, 50%);
    color: white;
  }

  .eng-button:hover {
    filter: brightness(85%);
    background-color: lighten(#008CBA, 50%);
    color: white;
  }

  #brand-banner{

  }

  #eng-banner{
    background-color: #70C1B3;
  }

  #banner-sec{
    background-image: url("~../assets/build.jpg");
    background-size: cover;

  }




</style>
