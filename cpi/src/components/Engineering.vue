<template>
  <div id="eng">
    <div class="row" id="eng-overview">
      <div class="column">
        <p> With design information CPI can provide a conceptual design </p>
      </div>
      <div class = "column">
        <img id="eng-img" src="~../assets/eng.jpg" width="500px">
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

  #design-img{
  }


  #eng-img{
    float: left;
  }

  #eng{
  }

  #banner-eng{
    border-top: 2px dashed white;
    padding-top: 105px;
    align-content: center;


  }

  #eng-info{

  }

  #eng-overview{
    border-top: 2px dashed white;
    border-bottom: 2px dashed white;
  }

</style>
