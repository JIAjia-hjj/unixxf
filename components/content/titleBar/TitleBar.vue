<template>
  
  <view class="title">
    <view class="title_bar">
      <view class="title_left">
        <slot name="left"></slot>
      </view>
      <view class="title_right">
        <slot name="right"></slot>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    name: "Title"
  }
</script>

<style scoped>
  /* 头部样式 */
  .title{
   
    background-color: #fff;
  }
  .title_bar {
    margin-left: 48rpx;
    border-bottom: 1rpx solid #E4E4E4;
    padding: 24rpx 32rpx 24rpx 18rpx;
    display: flex;
    justify-content: space-between;
    align-content: center;
   
  }
  .title_left {
    font-weight: bold;
    font-size: 32rpx;
    position: relative;
  }
  
  .title_left::before {
    content: '';
    height: 32rpx;
    width: 6rpx;
    background-color: #fa0;
    display: inline-block;
    margin-right:.1rpx;
    position: absolute;
    top: 0;
    left: -15rpx;
  }
  
  .title_right {
    color: #999;
    font-size: 28rpx;
    margin-top: 4rpx;
  }
  .title_right .iconfont{
    font-size: 28rpx;
  }
</style>
