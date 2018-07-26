<template>
  <div id="business">
    <div id="main-banner" style="width:100%; height:800px;">
      <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
        <div slot="loading">loading...</div>
       </slider>
    </div>
    <div class="">
      <div class="wrap" style="margin: 20%; font-size:20px;">
        <div id="cpi" class="columns">
          <div class="col">
            <img src="~../assets/CPI-Building.png">
          </div>
          <div class="col">
            <h2> At CPI Automation</h2>
            <p> From helping you find a component, to full scale design and fabrication - CPI is ready to help you with whatever size project you have</p>
          </div>
        </div>
        <div  id="eng-section" class="columns">
          <div class="col">
            <h2>Engineering</h2>
            <p> Whether you are looking for a fully hands-off and turn-key solution, or are simply looking to bring in some additional expertise to assist with a particular discipline within your project, CPI experts can help you make your idea a reality. With decades of experience in Hydraulics, Pneumatics, Mechanics, Controls and Automation - CPI experts are ready to assist.</p>
          </div>
        </div>
        <div id="mechanical" class="columns">
          <div  class="col">
            <h2>Mechanical</h2>
            <p>CPI can help you with the design and engineering of your project's mechanical system. Whether it's a static guarding solution or a complex machine with many moving parts, CPI can help you design, document, source, and fabricate. </p>
          </div>
        </div>
        <div id="pneumatic" class="columns">
          <div  class="col">
            <h2>Pneumatics</h2>
            <p>When you're looking to add air power to your project, CPI is your partner for success. From selection of air line preparation components, to the design of pneumatic actuation devices, CPI has the expertise you can trust. </p>
          </div>
        </div>
        <div  id="hydraulic" class="columns">
          <div class="col">
            <h2>Hydraulics</h2>
            <p>For higher power applications requiring the use of hydraulic systems, CPI has decades of experience at your project's service. From component selection to primary integration services, CPI can assist you at any level of the fluid system design. </p>
          </div>
        </div>
        <div id="electrical" class="columns">
          <div class="col">
            <h2>Electrical</h2>
            <p>For "smarter" systems, CPI can offer a full range of control and automation services. Programmable Logic Controller (PLC) programming/integration, sensor integration, electric motors and actuation selection, are a few of the automation services that we can provide.</p>
          </div>
        </div>
        <div id="services" class="columns">
          <div class="col">
            <h2> something about repairs, services, integration here</h2>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
import slider from 'vue-concise-slider'

export default{
  name: 'business',
  data(){
    return{
      pages: [{
        html: '<div><h2>Industrial Solutions Made Easy</h2><p>Contact an Expert Today to get a Quote</p><button>Contact</button></div>',
        style: {
          'background-image': 'url("https://i.imgur.com/YEKhryj.jpg")',
          'width':'100%',
        }
      },
      {
        html: '<div><h2>Industrial Solutions Made Easy</h2><p>Contact an Expert Today to get a Quote</p><button>Contact</button></div>',
        style:{
          'background-image': 'url("https://i.imgur.com/LRfaPBd.jpg")',
          'width':'100%',
        }
      },
      {
        html: '<div><h2>Industrial Solutions Made Easy</h2><p>Contact an Expert Today to get a Quote</p><button>Contact</button></div>',
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

<style >



  #eng-section{
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    padding-bottom: 2%;

  }

  #mechanical{
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    padding-bottom: 2%;


  }

  #pneumatic{
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    padding-bottom: 2%;

  }

  #hydraulic{
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    padding-bottom: 2%;

  }

  #electrical{
    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
    padding-bottom: 2%;

  }

  #services{
    padding-bottom: 2%;

    display:flex;
    flex-wrap:wrap;
    align-items: flex-start;
  }

</style>
