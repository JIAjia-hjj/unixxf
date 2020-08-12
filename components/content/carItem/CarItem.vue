<template>
  <view class="car_item">
    <view class="car_img">
      <image class="recommend_icon" :src="carItem.recommend_icon" mode="widthFix"></image>
      <image class="cover_img" :src="carItem.cover_img" @load="imageLoad" mode="widthFix"></image>
    </view>
    <view class="car_info">
      <view class="brand">
        <text class="brand_text">{{carItem.jiequ_brand_name}}</text>
        <text class="brand_identifying" :class="{'identifying5':carItem.identifying=='国V','identifying6':carItem.identifying=='国VI'}">{{carItem.identifying}}</text>
      </view>
      
      <view class="name">{{carItem.name}}</view>
      <view class="first_price">首付: <text> {{carItem.minimum_downpayments}}</text> 万</view>
    </view>
  </view>

</template>

<script>
  export default {
    name: "CarItem",
    props:{
      carItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        // this.$bus.$emit('itemImageLoad');
        console.log('imageLoad')
      }
    }
    
  }
</script>

<style scoped>
  .car_item {
    display: flex;
    padding: 0 22rpx 0 52rpx;
    position: relative;
    width: 100%;
    height: 240rpx;
    background-color: #fff;
  }
  .car_item::after {
    content: '';
    height: 1px;
    background-color: rgb(232, 232, 232);
    position: absolute;
    right: 0;
    bottom: 0;
    left: 48rpx;
  }

  .car_img {
    width: 284rpx;
    display: block;
  }
  .car_img .cover_img {
    margin:35rpx auto;
    width: 250rpx;
  }
  .car_img .recommend_icon{
    position: absolute;
    /*z-index: 2;*/
    width:80rpx;
    margin-top: 6rpx;
  }
  .car_info {
    padding: 48rpx 0 18rpx 0;
    margin-left: 40rpx;
    width: 334rpx;
  }

  .car_info .brand {
    color: #333;
    font-size: 36rpx;
    font-weight: bold;
    height: 46rpx;
    display: flex;
    align-items: center;
  }

  .car_info .brand .brand_text {
    display: inline-block;
    max-width: 226rpx;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .car_info .brand  .brand_identifying{
    display: inline-block;
    width: 60rpx;
    height: 32rpx;
    line-height: 30rpx;
    /*color: #09f;*/
    /*border: 1px solid #09f;*/
    font-size: 22rpx;
    border-radius:8rpx;
    margin-left: 12rpx;
    font-weight: 400;
    text-align: center;
  }
  .car_info .brand .identifying5{
    color: #09f;
    border: 1px solid #09f;
  }
  .car_info .brand .identifying6{
    color: #fa0;
    border: 1px solid #fa0;
  }
  .car_info .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 24rpx;
    color: #999;
    margin-top: 10rpx;
  }

  .car_info  .first_price {
    font-size: 32rpx;
    font-weight: bold;
    margin:.1rpx 0;
    color: #333;
  }

  .car_info .first_price text {
    font-size: 44rpx;
    font-weight: bolder;
    color: #fa0;
  }

  .car_info .month_price {
    font-size: 20rpx;
    color: #999;
  }

</style>
