<template>
  <div id="app">
    <div class="swiper-left">
      <div class="goods-left">
        <div  v-for="(obj,key) in goods" @click="cli(key)"><span>{{obj.name}}</span></div>
        <!--<div class="active"><span class="line"><img src="../../index/img/special_3@2x.png" alt="">单人特色套餐</span></div>-->
      </div>
    </div>
    <div class="big-left">
      <div class="swiper-right">
        <div class="right" ref="pro"  v-for="(item,key) in goods">
          <div class="nav">
            <div>{{item.name}}</div>
          </div>
          <div class="message" v-for="foods in item.foods">
            <div class="message-main">
              <div class="message-logo">
                <img :src="foods.icon" alt="">
              </div>
              <ul>
                <li>{{foods.name}}</li>
                <li></li>
                <li><span>月售{{foods.sellCount}}份</span><span v-show="foods.rating">好评率{{foods.rating}}%</span></li>
                <li><span>￥{{foods.price}}</span><span v-show="foods.oldPrice">￥{{foods.oldPrice}}</span><span>-</span><span>1</span><span>+</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['goods'],
    methods: {
      cli (key) {
        this.$refs.pro[key].scrollIntoView(true);
      }
    }
  };

</script>

<style>

</style>
