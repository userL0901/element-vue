<template>
<div class="big-header">
<header>
 <div class="header-background fired-fix">
   <div class="header">
     <div class="header-logo" :src="seller.avatar"></div>
     <ul>
       <li><span>{{seller.name}}</span></li>
       <li>{{seller.description}}/{{seller.deliveryTime}}分钟送达</li>
       <li v-if="seller.supports">
         <span>{{seller.supports[0].description}}</span><span>{{seller.supports.length}}<i class="icon iconfont">&#xe88e;</i></span>
       </li>
     </ul>
   </div>
   <div class="bulletin">
     <img src="../../index/img/bulletin@2x.png" alt="">
     <span>{{seller.bulletin}}</span>
     <span><i class="icon iconfont">&#xe88e;</i></span>
   </div>
 </div>
</header>

</div>

</template>

<script>
    export default {
      props: {
        seller: {
        }
      }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
  @font-face {font-family: "iconfont";
    src: url('../../index/font/iconfont.eot'); /* IE9*/
    src: url('../../index/font/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../index/font/iconfont.woff') format('woff'), /* chrome, firefox */
    url('../../index/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('../../index/font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
  }
</style>
