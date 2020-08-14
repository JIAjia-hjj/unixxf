<template>
  <view>
      <view class="carinfo_base1">
        <view class="title">{{carInfo.title}} </view>
        <view class="guide_price">厂商指导价：{{carInfo.guide_price_des}}
          <text :class="carInfo.identifying=='国VI'?'hs':'ls'" :hidden="carInfo.identifying==''?true:false">{{carInfo.identifying}}</text>
        </view>
        <view class="tag">
          <text class="tag_item" v-for="item in carInfo.laber" :key="item.name">{{item.name}}</text>
        </view>
      </view>
      <view class="xx_br" style="text-align: center">
        <img src="https://sprogram.xxfgo.com/images/appserve/xx_br.png"  style="width: 692rpx;margin: 0 auto"/>
      </view>
      <view class="carinfo_base2 by_bottom">
        <view class="price">
          <view class="price_item downpayments">
            首付
            <text class="money"><text class="icon_yuan">¥</text>{{carInfo.minimum_downpayments}}</text>万元
          </view>
        </view>
      </view>

  </view>
</template>

<script>
  export default {
    name: "CarinfoBase",
    props: {
      carInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components:{
   
    }
  }
</script>

<style scoped>
  .carinfo_base {
    color: #333;
  }
  
  .carinfo_base1 {
    padding: 20rpx 48rpx 40rpx;
  }
  
  .carinfo_base1 .title {
    font-size: 32rpx;
    height: 44rpx;
    line-height: 44rpx;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
  }
  
  .carinfo_base1 .guide_price {
    font-size: 24rpx;
    color: #999;
    margin: 12rpx 0 24rpx;
  }
  
  .carinfo_base1 .tag .tag_item {
    /* background-color: #fa0; */
    color: #FFAA00;
    border:1rpx solid #FFAA00;
    font-size: 24rpx;
    display: inline-block;
    min-width: 100rpx;
    text-align: center;
    border-radius: 10rpx;
    margin-right: 24rpx;
    padding: 10rpx 12rpx;
  }
  
  .carinfo_base2 {
    padding: 40rpx 24rpx 24rpx;
  }
  
  .carinfo_base2 .price {
    background-color: #f5f5f9;
    width: 702rpx;
    height: 112rpx;
    line-height: 112rpx;
    font-size: 36rpx;
    display: flex;
    border-radius: 20rpx;
  }
  
  .carinfo_base2 .price .price_item {
    flex: 1;
    text-align: center;
    position: relative;
    font-weight: bold;
  }
  
  .carinfo_base2 .price .money {
    color: #fa0;
    font-size: 64rpx;
    padding: 0 12rpx;
    font-family: 'DINbek', sans-serif;
  }
  
  .carinfo_base2 .price .icon_yuan {
    font-size: 40rpx;
    font-weight: normal;
    padding-right:03rpx;
  }
  .hs {
    color: #FFAA00;
    font-size: 24rpx;
    border:1rpx solid #FFAA00;
    border-radius:8rpx;
    padding: 0 12rpx;
    margin-left: 12rpx;
    font-weight: 400;
  }

  .ls {
    color: #0099FF;
    font-size: 24rpx;
    border:1rpx solid #0099FF;
    border-radius:8rpx;
    padding: 0 12rpx;
    margin-left: 12rpx;
    font-weight: 400;
  }


  
</style>
