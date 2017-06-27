<template>
  <div>
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import nav from './components/nav/nav.vue';
import footer from './components/footer/footer.vue';
export default {
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-footer': footer
  }
};
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 15 + 'px';
}
</script>

<style>
@import "index/css/reset.css";
@import "index/css/page.css";
@import "index/css/footer.css";
@import "index/css/nav.css";
@import "index/css/content.css";
</style>
