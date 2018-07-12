<template>
  <div id="eng">
    <div id="eng-img">
      <img src="http://www.cpiautomation.com/sites/all/themes/corporateclean/images/design00.png">
    </div>
    <div class="container" id="banner-eng">
      <h1> Engineering and Design </h1>

      <div id="eng-info">
        <p style="float: left;">With design information CPI can provide a conceptual design</p>
        <img id="design-img" src="~../assets/eng.jpg" width="500px">

      </div>
      <!-- <div> -->
      <!-- </div> -->


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

  #design-img{
    /* width: 50%; */
    float: right;

    /* padding-top: 30px; */

  }


  #eng-img{
    display: block;
    margin: auto;
    align: middle;
  }

  #eng{
    padding-top: 105px;
    margin: 10%;
  }

  #banner-eng{
    border-top: 2px dashed white;
    padding-top: 105px;
    align-content: center;


  }

  #eng-info{
    border-bottom: 2px dashed white;

    float: right;
    padding: 30px;
    /* opacity: 0.5; */
    align-content: center;
    background-color: white;
    color: black;
    padding: 30px;
    width: 100%;

  }

</style>
