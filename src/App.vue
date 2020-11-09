<template lang="pug">
  .app(id="app")
    Header
    Carousel
    MobileTitle
    Main
    Footer
    Basket
    SortWindow

</template>

<script>

import Header from './components/Header.vue';
import Carousel from './components/Carousel.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Basket from './components/Basket.vue';
import SortWindow from './components/SortWindow.vue';
import MobileTitle from './components/MobileTitle.vue';

export default {
  name: 'App',
  components: {
    Header,
    Carousel,
    Main,
    Footer,
    Basket,
    SortWindow,
    MobileTitle,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inter');
@import "./variables.scss";

* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Inter', sans-serif;
  display: grid;
  grid-template-areas: 'header' 'upper_block' 'main_block' 'footer';
  grid-template-rows: 104px 560px auto 280px;
  @media (max-width: $mobile) {
    grid-template-areas: 'header' 'upper_block' 'mobile_title''main_block' 'footer';
    grid-template-rows: 104px 74px 120px auto 140px;
  }
}

</style>
