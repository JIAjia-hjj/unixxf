<template>
  <view class="bottom_tip">
    <text class="bottom_txt">已经到底了</text>
  </view>
</template>

<script>
  export default {
    name: "BottomTip"
  }
</script>

<style scoped>
  .bottom_tip {
    text-align: center;
    color: #bebebe;
    font-size: 28rpx;
    line-height: 90rpx;
    position: relative;
    letter-spacing:11rpx;
  }
  
  .bottom_txt::before {
    content: '';
    width: 30%;
    height: 1rpx;
    background-color:#bebebe;
    position: absolute;
    top: 45rpx;
    left: 30rpx;
    font-weight: bolder;
  }
  
  .bottom_txt::after {
    content: '';
    width: 30%;
    height: 1rpx;
    background-color:#bebebe;
    position: absolute;
    top: 45rpx;
    right:30rpx;
  }
</style>
