<template>
  <div>
    <div class="custor-store">
      <div class="custor-store-top">
        <div class="custor-store-left">
          <p>粥品香坊 (大运村)</p>
          <ul class="custor-store-list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div style="clear: both"></div>
          <p>
            <span>(661)</span>
            <span>月售690单</span>
          </p>

        </div>
        <div class="custor-store-right">
          <i class="icon iconfont">&#xe86f;</i>
          <p>已收藏</p>
        </div>
      </div>
      <div class="custor-store-bottom">
        <div>
          <p>起送价</p>
          <p>20<span>元</span></p>
        </div>
        <div>
          <p>商家配送</p>
          <p>4<span>元</span></p>
        </div>
        <div>
          <p>平均配送时间</p>
          <p>39<span>元</span></p>
        </div>
      </div>
    </div>
    <div class="custor-division">

    </div>
    <div class="custor-center">
      <div class="custor-center-content">
        <div>公告与活动</div>
        <div>
          粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代
          制作工艺，又世界烹饪大师屈浩先生领衔研发。坚守纯天
          然、0添加的良心品质深的消费者青睐，发展至今成为粥类
          引领品牌。是2008年奥运会和2013年园博会指定餐饮服务
        </div>
      </div>
      <div class="custor-center-active">
        <p>
          <span class="custor-img1"></span>
          <span>在线支付满28减5，满50减10</span>
        </p>
      </div>
      <div class="custor-center-active">
        <p>
          <span class="custor-img2"></span>
          <span>在线支付满28减5，满50减10</span>
        </p>
      </div>
      <div class="custor-center-active">
        <p>
          <span class="custor-img3"></span>
          <span>在线支付满28减5，满50减10</span>
        </p>
      </div>
      <div class="custor-center-active">
        <p>
          <span class="custor-img4"></span>
          <span>在线支付满28减5，满50减10</span>
        </p>
      </div>
      <div class="custor-center-active">
        <p>
          <span class="custor-img5"></span>
          <span>在线支付满28减5，满50减10</span>
        </p>
      </div>
      <div class="custor-center-active">
        <p>
          <span class="custor-img6"></span>
          <span>在线支付满28减5，满50减10</span>
        </p>
      </div>
    </div>
    <div class="custor-division">

    </div>
    <div class="custor-live-action">
      <div class="custor-live-action-title">
        商家实景
      </div>
      <div class="custor-live-action-img">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    <div class="custor-division">

    </div>
    <div class="custor-store-new">
      <div class="custor-store-new-title">
        商家信息
      </div>
      <div class="custor-store-new-title">
        品类：其他菜系、包子粥店
      </div>
      <div class="custor-store-new-title">
        地址：北京市昌平区回龙关西大街龙观置业大厦底商B座102单元1340
      </div>
      <div class="custor-store-new-title">
        营业时间：10:00 - 20:30
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  @function rem($px) {
    @return $px/46.875+rem
  }

  //@mixin bg-img($url){
  //  background-image: url($url + "@2x.png");
  //  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  //    background-image: url($url + "@3x.png");
  //  }
  //}
  .custor-store {
    width: 100%;
    height: rem(300);
    border-bottom: 1px solid #e6e7e8;
    /*margin-top: rem(350);*/
    .custor-store-top {
      width: rem(652);
      height: 50%;
      border-bottom: 1px solid #e6e7e8;
      margin: 0 auto;
      .custor-store-left {
        float: left;
        margin-top: rem(36);
        p:nth-child(1) {
          font-size: rem(28);
          color: rgb(7, 17, 27);
          line-height: rem(28);
        }
      ;
        .custor-store-list {

          margin-top: rem(16);
          li:nth-child(1) {
            margin-left: 0;
          }
          li {
            width: rem(30);
            height: rem(30);
            background: url("../../index/img/star24_on@3x.png");
            background-size: 100% 100%;
            float: left;
            margin-left: rem(10);
          }
          li:nth-child(5) {
            background: url("../../index/img/star24_off@3x.png");
            background-size: 100% 100%;
          }
        }
      ;
        p:last-child {
          margin-left: rem(215);
          margin-top: rem(-40);
          span {
            font-size: rem(28);
            color: rgb(7, 17, 27);
          }
          span:last-child {
            margin-left: rem(10);
          }
        }

      }
      .custor-store-right {
        float: right;
        margin-top: rem(36);
        text-align: center;
        span {
          font-size: rem(38);
          color: #f01414;
        }
        p:last-child {
          font-size: rem(20);
          color: rgb(77, 85, 93);
          margin-top: rem(8);
        }
      }
    }
    .custor-store-bottom {
      width: rem(652);
      height: 50%;
      margin: 0 auto;
      div {
        width: 33.1%;
        border-right: 1px solid #e6e7e8;
        margin-top: rem(36);
        margin-bottom: rem(36);
        text-align: center;
        float: left;
        p:first-child {
          font-size: rem(20);
          color: rgb(147, 153, 159);
        }
        p:last-child {
          margin-top: rem(8);
          font-size: rem(48);
          font-weight: rem(200);
          color: rgb(7, 17, 27);
          span {
            font-size: rem(20);
          }
        }
      }
      div:nth-child(3) {
        border: none;
      }
    }
  }

  .custor-division {
    width: 100%;
    height: rem(34);
    border-top: 1px solid #e6e7e8;
    border-bottom: 2px solid #e6e7e8;
    background: #f3f5f7;
  }

  .custor-center {
    width: 100%;
    .custor-center-content {
      width: rem(652);
      //height:rem(352);
      margin: 0 auto;
      border-bottom: 1px solid #e6e7e8;
      div:first-child {
        font-size: rem(26);
        color: #07111b;
        margin: rem(36) 0 0 0;
      }
      div:last-child {
        font-weight: 200;
        font-size: rem(24);
        color: #f47171;
        margin: rem(27) 0 rem(30) rem(24);
        line-height: rem(48);
        //border-spacing: rem(27);
      }
    }
    .custor-center-active {
      width: rem(652);
      height: rem(96);
      margin: 0 auto;
      border-bottom: 1px solid #e6e7e8;
      p {
        line-height: rem(96);
        span:first-child {
          margin-top: rem(30);
          margin-left: rem(24);
          float: left;
          display: block;
          width: rem(32);
          height: rem(32);
        }
        span:last-child {
          margin-left: rem(12);
          float: left;
          font-size: rem(24);
          font-weight: 200;
          color: rgb(7, 17, 27);
          display: block;
        }
        .custor-img1 {
          background: url("../../index/img/decrease_3@3x.png");
          background-size: 100% 100%;
        }
        .custor-img2 {
          background: url("../../index/img/discount_3@3x.png");
          background-size: 100% 100%;
        }
        .custor-img3 {
          background: url("../../index/img/special_3@3x.png");
          background-size: 100% 100%;
        }
        .custor-img4 {
          background: url("../../index/img/special_3@3x.png");
          background-size: 100% 100%;
        }
        .custor-img5 {
          background: url("../../index/img/invoice_1@3x.png");
          background-size: 100% 100%;
        }
        .custor-img6 {
          background: url("../../index/img/guarantee_1@3x.png");
          background-size: 100% 100%;
        }
      }
    }

  }

  .custor-live-action {
    width: 100%;
    height: rem(302);
    border: 1px solid transparent;
    .custor-live-action-title {
      margin: rem(36) 0 rem(24) rem(36);
      font-size: rem(30);
      color: #07111b;
    }
    .custor-live-action-img {
      margin-left: rem(24);
      p {
        /*background: url("../../index/img/2017-06-28_110144.png");*/
        width: rem(213);
        height: rem(180);
        background-size: 100% 100%;
        margin-left: rem(12);
        float: left;
      }
      p:nth-child(3) {
        margin-right: 0;
      }
    }
  }

  .custor-store-new {
    margin-bottom: rem(100);
    .custor-store-new-title {
      width: rem(652);
      padding: rem(36) 0 rem(24) 0;
      margin: 0 auto;
      font-size: rem(30);
      color: #07111b;
      border-bottom: 1px solid #e6e7e8;
    }
  }

</style>
