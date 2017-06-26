<template>
<v-header></v-header>
</template>

<script>
import header from './components/header/header.vue';
export default {
  components: {
    'v-header': header
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
</style>
