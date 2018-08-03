<template>
  <div id="app">
    <!-- <div id="header-logo">
      <router-link to="/">
        <img src="http://www.cpiautomation.com/sites/default/files/header-001.png" >
      </router-link>

    </div> -->

    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img src="http://www.cpiautomation.com/sites/default/files/header-001.png" class="logo" alt="logo"></img>
        </router-link>
        <router-link to="/upload" id="tab">Request a Quote</router-link>
        <a href="https://cpi-automation.myshopify.com/" id="tab">Store</a>
        <router-link to="/business" id="tab">For Business</router-link>
        <router-link to="/gallery" id="tab">Gallery</router-link>
        <router-link to="/contact" id="tab">Contact Us</router-link>
        <!-- <router-link to="/engineering">Engineering</router-link>
        <router-link to="/capabilities">Capabilities</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About us</router-link>
        <router-link to="/contact">Contact us</router-link> -->
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>





  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
    #app {
      overflow: visible;
    }

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 30px;
    background-color: #edeff0;
    margin: auto;
    color: #34495e;

  }



  a{
    color: #34495e;
    text-decoration: none;
  }

  .header{

    background-color: transparent;
    z-index: 3;
    position: absolute;
    left: 0;
    right: 0;
    padding: 15px;
    transition: 0.2s;
    padding: 1%;
    }

  .header:hover{
    background-color: #2f2f2f;
    transition: 0.2s;
  }

  .inner{
    box-sizing: border-box;
  }
  nav{
    height: 100%;
  }

  a{

    color: rgba(255, 255, 255, .8);
    transition color: .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em;
}
    #tab:hover {
      color: #fff;
      border-top: 5px solid #2886c7;
      padding-bottom: 5px;
    }

    a:router-link-active
      {color: #fff;
      font-weight: 400;}

    a:nth-child(6){
      margin-right: 0;
    }

  .logo:hover{
    transition: 0.2s;
    transform: scale(1.01);
  }

  .fade-enter-active, .fade-leave-active{
    transition: all .2s ease;}
  .fade-enter, .fade-leave-active{
    opacity: 0
  }

  footer{
    background-color: #2f2f2f;
    text-align: center;
  }

  .column {
    float: left;
    width: 33.33%;
    padding: 15px;
  }

  .row:after {
      content: "";
      display: table;
      clear: both;
      align-content: center;
  }

</style>
