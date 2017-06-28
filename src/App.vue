<template>
  <div>
    <v-header :seller="seller"></v-header>
    <v-nav></v-nav>
    <router-view :goods="goods" :ratings="ratings"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  window.addEventListener('orientationchange', setRem);
  window.addEventListener('resize', setRem);
  setRem();
  function setRem() {
    var html = document.querySelector('html');
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 15 + 'px';
  }
  import header from './components/header/header.vue';
  import nav from './components/nav/nav.vue';
  import footer from './components/footer/footer.vue';
  import axios from 'axios';
  export default {
    components: {
      'v-header': header,
      'v-nav': nav,
      'v-footer': footer
    },
    data() {
      return {
        seller: [],
        goods: [],
        ratings: []
      };
    },
    mounted() {
      axios.get('api/seller')
        .then(res => {
        this.seller = res.data.data;
//        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
      axios.get('/api/goods')
        .then(response => {
          this.goods = response.data.data;
//          console.log(this.goods);
        });
      axios.get('/api/ratings')
        .then(response => {
          this.ratings = response.data.data;
//          console.log(this.ratings);
        });
      axios.get('/api/')
        .then(response => {
          this.ratings = response.data.data;
//          console.log(this.ratings);
        });
    }
  };

</script>

<style>
  @import "index/css/reset.css";
  @import "index/css/page.css";
  @import "index/css/footer.css";
  @import "index/css/nav.css";
  @import "index/css/content.css";
</style>
