<template>
  <div id="app">
    <div id="header-logo">
      <router-link to="/">
        <img src="http://www.cpiautomation.com/sites/default/files/header-001.png" >

      </router-link>

    </div>

    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img src="http://www.cpiautomation.com/sites/default/files/favico.ico" class="logo" alt="logo"></img>
        </router-link>
        <router-link to="/store">Store</router-link>
        <router-link to="/engineering">Engineering</router-link>
        <router-link to="/capabilities">Capabilities</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About us</router-link>
        <router-link to="/contact">Contact us</router-link>
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

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 30px;
    background-color: lighten(#eceef1, 30%);
    margin: 0;
    padding-top: 55px;
    color: #34495e;
    overflow-y: scroll;
  }
  a{
    color: #34495e;
    text-decoration: none;
  }

  #header-logo{
    background-color: #1b1a1a;
    position: fixed;
    z-index: 3;
    height: 55px;
    padding: 25px;
    top: 0;
    left: 0;
    right: 0;
    text-align:center;
  }

  .header{
    background-color: #2f2f2f;
    position: fixed;
    z-index: 3;
    height: 55px;
    top: 105px;
    left: 0;
    right: 0;
    padding: 10px;
    text-align:center;
    .inner{
      max-width: 800px;
      box-sizing: border-box;
      margin: 0px auto;
      padding: 15px 5px;
    }
  }

  a{
    color: rgba(255, 255, 255, .8);
    line-height: 24px;
    transition color: .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em;
}
    a:hover {
      color: #fff;
    }

    &.router-link-active
      {color: #fff;
      font-weight: 400;}

    &:nth-child(6){
      margin-right: 0;
    }

  .logo{
    padding: 10px;
    padding-left: 20px;
    padding-bottom: 5px;

    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .fade-enter-active, .fade-leave-active{
    transition: all .2s ease;}
  .fade-enter, .fade-leave-active{
    opacity: 0
  }
</style>
