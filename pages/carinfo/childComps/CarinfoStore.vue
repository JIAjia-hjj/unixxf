<template>
  <view>
    <title-bar>
      <text slot="left">在您附近找一家门店</text>
      <text class="right" >已有 <text> {{reserveNum}}</text> 人预定</text>
    </title-bar>
    <view class="store">
      <view class="name">{{$store.state.location.storeName}}</view>
      <view class="credit">
        <view class="credit_item">
          <text class="iconfont icon_credit1"></text>
          <view class="txt">两证一卡</view>
        </view>
        <view class="credit_item">
          <text class="iconfont icon_credit2"></text>
          <view class="txt">90%通过率</view>
        </view>
        <view class="credit_item">
          <text class="iconfont icon_credit3"></text>
          <view class="txt">29分钟提车</view>
        </view>
        <view class="credit_item">
          <text class="iconfont icon_credit4"></text>
          <view class="txt">全国直营</view>
        </view>
      </view>
      <view class="btn_box">
        <view class="btn" @click="submit">免费到店试车</view>
      </view>
  
    </view>
  </view>
</template>

<script>
  
  import {getStoreInfo} from 'network/carinfo'
  
  import TitleBar from 'components/content/titleBar/TitleBar'
  export default {
    name: "CainfoStore",
    components:{
      TitleBar
    },
    data(){
      return{
        reserveNum:'',
        storeName:''
      }
    },
    methods:{
      submit(){
      
      }
    },
    mounted() {
    
    }
  }
</script>

<style scoped>
  .store {
    padding: 25rpx 48rpx 0;
  }
  
  .store .name {
    font-size: 28rpx;
    font-weight: bolder;
    height: 40rpx;
    line-height: 40rpx;
  }
  
  .store .name::before {
    content: '\e618';
    font-family: 'iconfont';
    color: #fa0;
    padding:18rpx 10rpx;
    font-size: 24rpx;
  }
  .credit {
    display: flex;
    justify-content: space-between;
    padding: 50rpx 20rpx 20rpx;
    position: relative;
  }

  .credit .credit_item {
    text-align: center;
    color: #333;
  }

  .credit .credit_item .iconfont {
    height: 60rpx;
    line-height: 60rpx;
    font-size: 40rpx;
    display: inline-block;

  }

  .credit .credit_item .icon_credit1 {
    font-size: 34rpx;
  }

  .credit .credit_item .txt {
    padding-top: 10rpx;
    font-size: 24rpx;
  }
  .store .btn_box {
    width: 654rpx;
    border-top:1rpx solid #E4E4E4;
    margin-top: 48rpx;
  }
  .store .btn{
    width: 100%;
    height: 96rpx;
    line-height: 96rpx;
    text-align: center;
    font-size: 32rpx;
    font-weight: bold;
    color: #FFAA00;
  
  }
</style>
