<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img src="assets/logo.png" class="logo" alt="logo"></img>
        </router-link>
        <router-link to="/store">Store</router-link>
        <router-link to="/engineering">Engineering</router-link>
        <router-link to="/capabilities">Capabilities</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About us</router-link>
        <router-link to="/contact">Contact us</router-link>
      </nav>
    </header>

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
    font-size: 15px;
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
  .header{
    background-color: #ff6600;
    position: fixed;
    z-index: 999;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
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
    &:hover{
      color: #fff;
    }
    &.router-link-active
      {color: #fff;
      font-weight: 400;}
    &:nth-child(6){
      margin-right: 0;
    }
    }
  .logo{
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
  }

</style>
