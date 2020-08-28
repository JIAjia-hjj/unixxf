<template>
  <view class="carinfo_footer">

      <view class="footer_btn">
        <view class="contact" @click="showShare">
          <text class="iconfont icon_share"></text>
          <view class="text">一键分享</view>
        </view>
        <view class="lower">获取最低价</view>
      </view>

  </view>
</template>

<script>
  export default {
    name: "CarinfoFooter",
    methods:{
      showShare(){

      }
    }
  }
</script>

<style scoped>
  .carinfo_footer {
    width: 100%;
    height: 90rpx;
  }
  .footer_btn{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 6;
    height: 90rpx;
    display: flex;
    margin: 0 auto;
    max-width: 750px;
  }
  
  .carinfo_footer .contact {
    width: 194rpx;
    background-color: #fff;
    color: #999;
    font-size: 20rpx;
    padding-top: 10rpx;
    border-top: 001rpx solid rgb(232, 232, 232);
  }
  
  .carinfo_footer .lower {
    flex: 1;
    background-color: #fa0;
    color: #fff;
    font-size: 28rpx;
    line-height: 90rpx;
    border-radius: 0;
  }
  /*@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {*/
    /*.carinfo_footer {*/
      /*height: constant(190rpx + env(safe-area-inset-bottom));*/
      /*height: calc(190rpx+ env(safe-area-inset-bottom));*/
    /*}*/
  
    /*.footer_btn{*/
      /*padding-bottom: constant(safe-area-inset-bottom);*/
      /*padding-bottom: env(safe-area-inset-bottom);*/
    /*}*/
  
  /*}*/
</style>
