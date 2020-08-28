<template>
  <view class="nodata_form">
    <view class="txt1">
      <text class="iconfont icon_nocontent"></text>很抱歉，暂时没有该车型
    </view>
    <view class="form">
      <view class="txt2">提交您的意向车型，我们可提供线下采购服务</view>
      
      <label class="input input_tel" for="phone">
        <text class="iconfont icon_shouji"></text>
        <input placeholder="请输入您的手机号码"  id="phone"/>
      </label>
      <label class="input input_cartype" for="cartype">
        <text class="iconfont icon_tiche"></text>
        <input placeholder="请输入您的意向车型" id="cartype"/>
      </label>
      <button class="btn" @click="submit">提交意向车型</button>
    </view>
  
  </view>
</template>

<script>
  export default {
    name: "NodataForm",
    methods:{
      submit(){
      
      }
    }
  }
</script>

<style scoped>
  /* 无数据 */
  .nodata_form{
    padding-top: 24rpx;
  }
  .nodata_form .txt1{
    text-align: center;
    color: #333333;
    font-size: 28rpx;
    top: 430rpx;
  }
  .nodata_form .icon_nocontent{
    padding-right: 10rpx;
  }
  .nodata_form .form{

  }
  .nodata_form .form .txt2{
    text-align: center;
    font-size: 28rpx;
    padding-top: 52rpx;
    color: #999999
  }
  .nodata_form .form .input {
    width: 606rpx;
    height: 90rpx;
    border-radius: 60rpx;
    line-height: 90rpx;
    border:1rpx solid #e4e4e4;
    background: #FFFFFF;
    display: flex;
    font-size: 28rpx;
    margin: 54rpx auto 0;
    position: relative;
  }
  
  .nodata_form .form .input_cartype::after {
    display: block;
    content:'';
    width: 606rpx;
    height: 1px;
    background-color:#E4E4E4;
    position: absolute;
    bottom:-49rpx;
    left: 0;
  }
  
  .nodata_form .form .input .iconfont {
    text-align: center;
    width: 120rpx;
    position: relative;
    color: #999;
    font-size: 50rpx;
  }
  
  .nodata_form .form .input .iconfont::after {
    content: '';
    width:3rpx;
    height: 60rpx;
    display: inline-block;
    background-color: #e4e4e4;
    position: absolute;
    bottom: 20rpx;
    right: 12rpx;
  }
  
  .nodata_form .form .input input {
    height: 100%;
    flex: 1;
    margin-left: 10rpx;
  }
  
  .nodata_form .form .input::-webkit-input-placeholder {
    color: #999;
    font-weight: lighter;
  }
  .nodata_form .form .input::-moz-placeholder {
    color: #999;
    font-weight: lighter;
  }
  .nodata_form .form .input::-ms-input-placeholder {
    color: #999;
    font-weight: lighter;
  }
  
  .nodata_form .form .btn {
    width: 606rpx;
    height: 90rpx;
    border-radius: 60rpx;
    line-height: 90rpx;
    background-color: #fa0;
    text-align: center;
    font-size: 32rpx;
    font-weight: bold;
    color: #fff;
    display: block;
    margin: 98rpx auto 0;
  }
</style>
