<template>
  <div>
    <div class="evalute-evaluation">
      <div class="evalute-evaluation-left">
        <div class="evalute-evaluation-left-content">
          <p>3.9</p>
          <p>综合评分</p>
          <p>高于周边商家69.2%</p>
        </div>
      </div>
      <div class="evalute-evaluation-right">
        <div class="evalute-evaluation-right-content">
          <p>服务态度</p>
          <ul class="server-list">
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_off@3x.png" alt=""></li>
            <li>3.9</li>
          </ul>
        </div>
        <div class="evalute-evaluation-right-content">
          <p>服务态度</p>
          <ul class="server-list">
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_off@3x.png" alt=""></li>
            <li>4.0</li>
          </ul>
        </div>
        <div class="evalute-evaluation-right-content">
          <p>送达时间</p>
          <span>44分钟</span>
        </div>
      </div>
    </div>
    <div class="evalute-division">

    </div>
    <div class="evalute-center">
      <div class="evalute-commodity">
        <button>全部 <span>57</span></button>
        <button>满意 <span>47</span></button>
        <button>不满意 <span>10</span></button>
      </div>
      <div class="evalute-commodity-content">
        <p><i class="fa fa-angle-down"></i></p>
        <p>只看有内容的评论</p>
      </div>
    </div>
    <div style="margin-bottom: 50px">
      <div class="evalute-footer" v-for="item in ratings">
        <div class="evalute-user">
          <p><img :src="item.avatar" alt=""></p>
        </div>
        <div class="evalute-user-new">
          <p class="family">{{item.username}} <span>2016-07-13 20:33</span></p>
          <div>
            <ul class="evalute-user-new-list">
              <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
              <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
              <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
              <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
              <li><img src="../../index/img/star24_off@3x.png" alt=""></li>
              <li v-show="item.deliveryTime">{{item.deliveryTime}}分钟送达</li>
            </ul>
            <div style="clear: both"></div>
          </div>
          <div class="content">{{item.text}}</div>
          <div class="content-footer">
            <p class="content-p" v-show="item.recommend && item.recommend.length">
              <span style="font-size: 12px;color:#00a0dc;">
                <i class="icon iconfont">&#xe870;</i></span>
              <span class="content-btn" v-for="obj in item.recommend">{{obj}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['ratings']
  };
</script>

<style lang="scss">
  @function rem($px){
    @return $px/46.875+rem
  }
  .evalute-evaluation{
    width:100%;
    height:rem(214);
    /*margin-top: rem(350);*/
    .evalute-evaluation-left{
      width:rem(273);
      height:rem(214);
      float: left;
      .evalute-evaluation-left-content{
        width:rem(276);
        height:rem(118);
        margin: rem(36) 0 rem(48) 0;
        border-right:1px solid #e6e7e8;
        text-align: center;
        p:nth-child(2){
          font-size: rem(24);
          color:#07111b;
          padding-bottom: rem(16);
        }
        p:nth-child(1){
          font-size: rem(48);
          color:rgb(255,153,0);
          padding-bottom: rem(12);
        }
        p:nth-child(3){
          font-size: rem(20);
          color:#93999f;
        }
      }
    }
    .evalute-evaluation-right{
      width:rem(430);
      height:rem(214);
      float: right;
      div:nth-child(1){
        margin:  rem(36) 0 0 rem(48);
      }
      div:nth-child(2){
        margin: rem(16) 0 0 rem(48);
      }
      div:nth-child(3){
        margin: rem(16) 0 0 rem(48);
        span{
          color:#93999f;
          font-size: rem(24);
          display: block;
          margin-left: rem(120);
          margin-top: rem(-25);
        }
      }
      .evalute-evaluation-right-content{
        height:rem(30);
        margin:  rem(36) 0 0 rem(48);
        p{
          font-size: rem(24);
        }
        .server-list{
          margin-top: rem(-40);
          margin-left: rem(120);
          li:last-child{
            font-size: rem(20);
            color:#ff9900;
            margin-top: rem(18);
            margin-left: rem(24);
          }
          li{
            float: left;
            width:rem(30);
            height:rem(30);
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
  }
  .evalute-division{
    width:100%;
    height:rem(33);
    border-bottom: 1px solid #e6e7e8;
    border-top:1px solid #e6e7e8;
    background: #f3f5f7;
  }
  .evalute-center{
    width:100%;
    height:rem(234);
    border-bottom: 1px solid #e6e7e8;
    .evalute-commodity{
      width:rem(652);
      height:rem(136);
      margin: 0 auto;
      border-bottom: rem(1) solid #e6e7e8;
      button:nth-child(1){
        width:rem(120);
        height:rem(65);
        background: #00a0dc;
        font-size: rem(25);
        color:rgb(255,255,255);
        text-align: center;
        line-height: rem(65);
        border:none;
        margin-top: rem(36);

      }
      button:nth-child(2){

        margin-left: rem(16);
        width:rem(120);
        height:rem(65);
        background: #ccecf8;
        font-size: rem(25);
        color:black;
        text-align: center;
        line-height: rem(65);
        border:none;
        margin-top: rem(36);
      }
      button:nth-child(3){
        margin-left: rem(16);
        width:rem(144);
        height:rem(65);
        background: #e9ebec;
        font-size: rem(25);
        color:black;
        text-align: center;
        line-height: rem(65);
        border:none;
        margin-top: rem(36);
      }
    }
    .evalute-commodity-content{
      width:rem(652);
      height:rem(98);
      margin: 0 auto;
      line-height: rem(98);
      p:nth-child(1){
        width:rem(40);
        height:rem(40);
        border-radius: 50%;
        background: #b7bbbf;
        font-size: rem(28);
        color:rgb(255,255,255);
        text-align: center;
        line-height: rem(40);
        font-weight: 700;
        margin-top: rem(25);
      }
      p:nth-child(2){
        font-size: rem(23);
        margin-top: rem(-65);
        margin-left: rem(56);
        color:#93999f;
      }
    }
  }
  .evalute-footer{
    width:rem(652);
    height:rem(292);
    border-bottom:1px solid #e6e7e8;
    margin: 0 auto;
    .evalute-user{
      float: left;
      width:rem(80);
      height:rem(262);
      p{
        width:rem(56);
        height:rem(56);
        border-radius: 50%;
        background: gainsboro;
        margin-top: rem(36);
        img{
          width: rem(56);
          height:rem(56);
          border-radius: 50%;
        }
      }
    }
    .evalute-user-new{
      width:rem(572);
      height:rem(262);
      float: left;
      .family{
        font-size: rem(20);
        color:rgb(7,17,27);
        line-height: rem(24);
        margin-left: rem(24);
        margin-top: rem(36);
        span{
          position: absolute;
          right:rem(50);
          color:rgb(147,153,159);
        }
      };
      .content{
        font-size: rem(14);
        color:rgb(7,17,27);
        text-align: left;
        margin-left: rem(24);
        line-height: rem(40);
        position: static;
        border:none;
      }
      .evalute-user-new-list{
        margin: rem(8) rem(0) rem(12) rem(16);
        height:rem(30);
        li{
          float: left;
          img{
            width:rem(30);
            height:rem(30);
            margin-left: rem(8);
          }
        }
        li:last-child{
          font-size: rem(20);
          font-weight: 200;
          color:rgb(147,153,159);
          margin-left: rem(12);
          margin-top: rem(12);
        }
      }
      .content-footer{
        margin-left: rem(24);
        .content-p{
          .content-btn{
            width:rem(125);
            height:rem(33);
            background: #fff;
            border:rem(1) solid #93999f;
            font-size: rem(18);
            color:#93999f;
          }
          .content-btn:not(first-child){
            margin-left: rem(20);
          }
        }
      }
    }
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:rem(24);
    font-style:normal;
    /*color: rgb(0,160,220);*/
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {font-family: "iconfont";
    src: url('../../index/font/iconfont.eot'); /* IE9*/
    src: url('../../index/font/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../index/font/iconfont.woff') format('woff'), /* chrome, firefox */
    url('../../index/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('../../index/font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
  }
</style>
