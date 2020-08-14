<template>
  <view>
    <title-bar>
      <text slot="left">购车流程</text>
      <router-link class="right" to="/list">轻松4步，马上提车</router-link>
    </title-bar>
    <view class="process">
      <view class="process_item">
        <text class="iconfont icon_daodian"></text>
        <view class="txt">预约到店</view>
        <view class="iconfont icon_jiantou"></view>
      </view>

      <view class="process_item">
        <text class="iconfont icon_qianyue"></text>
        <view class="txt">洽谈签约</view>
        <view class="iconfont icon_jiantou"></view>
      </view>
      <view class="process_item">
        <text class="iconfont icon_zhifu"></text>
        <view class="txt">首付支付</view>
        <view class="iconfont icon_jiantou"></view>
      </view>
      <view class="process_item">
        <text class="iconfont icon_tiche"></text>
        <view class="txt">马上提车</view>
      </view>
    </view>
  </view>
</template>

<script>
  import TitleBar from 'components/content/titleBar/TitleBar'
  export default {
    name: "CarinfoProcess",
    components:{
      TitleBar
    }
  }
</script>

<style scoped>
  .process {
    padding: 25rpx 0;
    display: flex;
    justify-content: space-around;
  }
  
  .process .process_item {
    flex: 1 1;
    text-align: center;
    position: relative;
  }
  
  .process .process_item .iconfont {
    display: inline-block;
    height: 72rpx;
    line-height: 72rpx;
    font-size: 72rpx;
    color: #666;
  }
  
  .process .process_item .icon_qianyue {
    font-size: 50rpx;
    padding-top:8rpx;
  }
  
  .process .process_item .text {
    margin-top: 10rpx;
    color: #333;
    font-size: 28rpx;
  }
  
  .process .process_item .icon_jiantou {
    position: absolute;
    top: 10rpx;
    right: -16rpx;
    font-size: 26rpx;
    color: #999;
  }


  /* 头部样式 */
  .public_title {
    margin-left: 24rpx;
    border-bottom:1rpx solid #E4E4E4;
    padding: 24rpx 32rpx 24rpx 18rpx;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #fff;
  }
  .title_left {
    font-weight: bold;
    font-size: 32rpx;
    position: relative;
  }

  .title_left::before {
    content: '';
    height: 32rpx;
    width:6rpx;
    background-color: #fa0;
    display: inline-block;
    margin-right: 10rpx;
    position: absolute;
    top:7rpx;
    left: -15rpx;
  }

  .title_right {
    color: #999;
    font-size: 28rpx;
    margin-top:4rpx;
  }
  .title_right .iconfont{
    font-size: 28rpx;
  }
</style>
