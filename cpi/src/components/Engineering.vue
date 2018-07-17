<template>
  <div id="eng">
    <div id="overview">
      <h1> Steps of Design </h1>
      <img  src="~../assets/design00.png" width="80%" >

    </div>
    <div class="row" id="overview">
      <div class="column" id="info">
        <h1>Consulation</h1>
        <p>To get a good idea of what you are looking for we will first start by setting up a no-fee consultation to discuss the scope, objectives, and requirements of your project. No matter how small or complicated, CPI is always willing to assist. Contact us directly today to book an appointment. </p>
      </div>
      <div class="column">
        <img id="eng-img" src="~../assets/consultaion.jpg" >
      </div>
    </div>
    <div class="row" id="overview">
      <div class="column" >
        <img id="design-img" src="~../assets/eng.jpg" >
      </div>
      <div class="column" id="info">
        <h1>Design</h1>
        <p>Based on your design objectives, CPI will develop a conceptual design for your review along with estimates for resource and time allocation. With approval, CPI will proceed with full design and development activities including CAD drawings, and parts and labour sourcing. Transparency is key, and you can be as involved as you would like in the design process. With over decades of experience in fluids, mechanics, electrical, and control, CPI only delivers optimal designs while respecting time and cost constraints.</p>
      </div>
    </div>
    <div class="row" id="overview">
      <div class="column" id="info">
        <h1>Build</h1>
        <p>Staffed with experienced craftsmen and equipped with a full machine shop, CPI is able to fabricate just about any design. From CNC milling to laser engraving we have the tools and the knowledge bring your drawings from paper to reality. Read more about our capabilities here.</p>
      </div>
      <div class="column" >
        <img id="build-img" src="~../assets/build03.jpg">
      </div>
    </div>
    <div id="overview">
      <h1> Areas of Expertise </h1>
    </div>
    <div class="row" id="overview">
      <div class="column" >
        <img id="build-img" src="~../assets/design-mech00.png">
      </div>
      <div class="column" id="info">
        <h1>Mechanical</h1>
        <p>CPI can help you with the design and engineering of your project's mechanical system. Whether it's a static guarding solution or a complex machine with many moving parts, CPI can help you design, document, source, and fabricate.</p>
        <button> Gallery </button>
      </div>
    </div>
    <div class="row" id="overview">
      <div class="column" id="info">
        <h1>Pneumatics</h1>
        <p>When you're looking to add air power to your project, CPI is your partner for success. From selection of air line preparation components, to the design of pneumatic actuation devices, CPI has the expertise you can trust. </p>
        <button> Gallery </button>
      </div>
      <div class="column" >
        <img id="build-img" src="~../assets/design-pneu00.png">
      </div>
    </div>
    <div class="row" id="overview">
      <div class="column" >
        <img id="build-img" src="~../assets/design-hydr00.png">
      </div>
      <div class="column" id="info">
        <h1>Hydraulics</h1>
        <p>For higher power applications requiring the use of hydraulic systems, CPI has decades of experience at your project's service. From component selection to primary integration services, CPI can assist you at any level of the fluid system design. </p>
        <button> Gallery </button>
      </div>
    </div>

    <div class="row" id="overview">
      <div class="column" id="info">
        <h1>Controls and Electrical</h1>
        <p>For "smarter" systems, CPI can offer a full range of control and automation services. Programmable Logic Controller (PLC) programming/integration, sensor integration, electric motors and actuation selection, are a few of the automation services that we can provide.  </p>
        <button> Gallery </button>
      </div>
      <div class="column" >
        <img id="build-img" src="~../assets/design-cont00.png">
      </div>
    </div>


  </div>

</template>
<script>
export default{
  name: 'engineering',
  data(){
    return{

    }
  }
}
</script>

<style>
  body{
    background-color: #e8e8e8 ;
  }
  h1{
    color: #1487d4;
  }

  button{
    background-color: #1487d4;
    color: white;
    border: 2px solid #008CBA;
    font-size: 30px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;

  }
  button:hover {
    filter: brightness(85%);
    color: white;
  }

  #build-img{
    border: 5px solid white;
    border-radius: 5px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;

  }

  #design-img{
    border: 5px solid white;
    border-radius: 5px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


  #eng-img{
  border: 5px solid white;
  border-radius: 5px;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  }

  #info{
    font-size: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: #7a7a7a;

  }

  #eng{
    padding-top: 5%;
    padding-left: 3%;
    padding-right: 3%;

  }



  #overview{
    width: 100%;


    border-top: 3px dashed white;
    /* border-top-left-radius: 5px;
    border-top-right-radius: 5px; */
    padding-top: 50px;
    padding-bottom: 50px;
  }

</style>
