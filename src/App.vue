<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>  
      <router-link to="/about">About</router-link>  
      <router-link to="/catalog">Catalog</router-link>
      <Basket />
    </div>
    <div id="shop_name">
      <span>Book shop</span>
    </div>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Basket from '@/components/Basket.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    Basket
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;0,700;1,700&display=swap');

html, body, #app {
  font-family: 'Roboto Condensed', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    background-color: #212121;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #424242;
  position: relative;
  padding-top: 80px;
}
#nav {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 80px;
  width: 100%;
  margin: auto;
  background-color: #000;
  position: fixed;
  top: 0;
  z-index: 999;
  font-size: 1.1rem;
  font-weight: 200;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 200;
    color: #9e9e9e;
    margin-right: .7rem;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
#shop_name {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-color: #424242;
  height: 100px;
  color: #fff;
  font-size: 2.3rem;
  text-transform: uppercase;

  span {
    &:first-letter {
      color: #64DD17;
    }
  }
}
h1 {
    width: 100%;
    padding: 1rem;
    background-color: #64DD17;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
}
p {
  color: #bdbdbd;
  background-color: #000;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
