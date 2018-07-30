<template>
  <div id="home">
    <div id="main-banner" style="width:100%; height:800px;">
      <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
        <div slot="loading">loading...</div>
       </slider>
    </div>
    <div class="" >
    <div class="wrap">
    <div id="process" style="width:100%; height:500px; text-align:center;">
      <div class="columns" style="padding:2%; margin-left:5%; font-size:20px; color: #247ab5;">
        <div class="col">
          <h3> Upload</h3>
          <img style="height:200px;" src="~../assets/upload.png">
          <p> Upload a drawing for our engineers to review</p>

        </div>
        <div class="col">
          <h3>Design</h3>
          <img style="height:200px;" src="~../assets/design.png">
          <p> Have our talented engineers design a product</p>

        </div>
        <div class="col">
          <h3>Manufacture</h3>
          <img style="height:200px;" src="~../assets/build.png">
          <p> We then build what you need</p>

        </div>
        <div class="col">
          <h3>Delivery</h3>
          <img style="height:200px;" src="~../assets/delivery.png">
          <p>Enjoy!</p>

        </div>
      </div>
      <div class="columns" style="height: 700px; background-color:#247ab5; text-align: center;">
        <div class="col" id="our-mission" >
          <h2>Our Mission</h2>
          <p style="font-size:20px;">Our goal at CPI is to bring your ideas to life. Our highly trained staff can work with you to construct what best suits your needs. Upload a drawing to get a quote today or contact on our our sales representatives to talk about your project. Or view our wide range of products to get what you need.</p>
        </div>
        <div class="col" style="height: 100%;">
          <img src="~../assets/019.jpg" style="height:100%; ">
        </div>
      </div>
      <div class="columns" style="height: 600px; margin: auto;">
          <div class="panel">
            <h1> Mechanical</h1>
          </div>

          <div class="panel2">
            <h1>Pneumatics</h1>
          </div>

      </div>
      <div id="banner-sec" class="columns" style="height:700px;">
        <div class="col" style=" padding-left: 30px; padding-bottom:20px; margin-left:50%; margin-right:3%; background-color:rgba(255,255,255,0.6);">
          <h2> Services for your Business</h2>
          <ul>
            <li>Scaled Manufacturing for large or small business</li>
            <li>Single-source integration to provide turn-key solutions</li>
            <li>On-site or In-house repairs</li>
          </ul>
          <button> Get a Quote</button>
        </div>
      </div>
      <div class="columns" style="height: 600px; maring: auto;">
        <!-- <div class="col" style="margin-left:2%;"> -->
          <div class="panel3">
            <h1> Hydraulics</h1>
          </div>
          <div class="panel4">
            <h1> Electronics</h1>
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
            'background-image': 'url("https://i.imgur.com/hZ7cH9w.jpg")',
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

  #our-mission{
    align-content:center;
    padding-top: 20%;
    padding-left:5%;
    padding-right:5%;
    height: 100%;
    width: 40%;
  }


  h3{
    color: #247ab5;
  }

  .panel
{
    background-image:url("~../assets/mech-panel.png");
    background-size: 100% 100%;
    position: relative;
    width: 50%;
    height: 83%;

    transform: scale(1.15);
    left:10%;

    flex-grow:1;
    flex-basis:0;



}


.panel2
{
  background-image:url("~../assets/pneumatic-panel.png");
  background-size: 100% 100%;
  width: 50%;
  height: 83%;
  position: relative;
  right: 10%;
  transform: scale(1.15);
  flex-grow:1;
  flex-basis:0;


}

.panel3
{
  background-image:url("~../assets/hydraulics-panel.png");
  background-size: 100% 100%;
  width: 50%;
  height: 83%;
  position: relative;
  transform: scale(1.15);
  left: 10%;
  flex-grow:1;
  flex-basis:0;

}


.panel4
{
  background-image:url("~../assets/electronics-panel.png");
  background-size: 100% 100%;
  width: 50%;
  height: 83%;
  position: relative;
  right:10%;
  transform: scale(1.15);
  flex-grow:1;
  flex-basis:0;



}
  .panel h1{
    position: absolute;
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 1%;
    left: 20%;
    width: 50%;
    font-size: 200%;
  }

  .panel3 h1{
    position: absolute;
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 1%;
    left: 20%;
    width: 50%;
    font-size: 200%;

  }


.panel4 h1{
  position: absolute;
  background-color: rgb(255, 255, 255, 0.6);
  border-radius: 5px;
  padding: 1%;
  bottom: 5%;
  left: 40%;
  width: 50%;
  font-size: 200%;

}
.panel2 h1{
  position: absolute;
  background-color: rgb(255, 255, 255, 0.6);
  border-radius: 5px;
  padding: 1%;
  font-size: 200%;

  bottom: 5%;
  left: 40%;
  width: 50%;
}


/* .panel4:after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  border-top: 400px solid transparent;
  border-left: 600px solid #edeff0;
  width: 0;
} */


  .card{
    box-shadow: 0 0px 8px 8px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .panel:hover{
    box-shadow: -20px -20px 20px 0px rgba(0,0,0,0.2);
    transform: scale(1.17);
  }

  .panel2:hover{
    box-shadow: 20px 20px 20px 0px rgba(0,0,0,0.2);
    transform: scale(1.17);
  }

  .panel3:hover{
    box-shadow: -20px -20px 20px 0px rgba(0,0,0,0.2);
    transform: scale(1.17);
  }

  .panel4:hover{
     box-shadow: 20px 20px 20px 0px rgba(0,0,0,0.2);
     transform: scale(1.17);
  }


  .section{
    max-width: 100%;
    margin:auto;
  }
  .footer {
    min-height:100px;
    background:#2f2f2f;
  }
  .flex {
  color:rgba(255,255,255, 0.2);
  font-weight:bold;
  display:flex;
  flex-grow:1;
  justify-content: space-between;
}


  .wrap{
    display:flex;
    flex-direction:column;
    align-items:center;

  }

    .columns {
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      position: relative;
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
