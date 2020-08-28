<template>
  <view class="xxf_marketer" v-if="marketerInfo">
    <view bindtap="toMyIndex" class="marketer_info">
      <view class="photo">
        <image :src="marketerInfo.avatar?marketerInfo.avatar:'https://sprogram.xxfgo.com/images/appserve/nologin_photo.png'"  mode="aspectFill" style="width:96rpx;height:96rpx;"></image>
      </view>
      <view class="info">
        <view>
          <view class="name">{{marketerInfo.name?marketerInfo.name:'无法获取姓名'}}</view>
          <view class="job oneline">您的专属高级销售经理
            <text class="iconfont icon_renzheng"></text>
          </view>
        </view>
        <view class="company oneline">{{marketerInfo.company}}</view>
      </view>
    </view>
    <text class="btn"  :href="'#'+$store.state.phone">
      立即咨询
    </text>
  </view>
</template>

<script>
  export default {
    name: "MarketerInfo",
    computed:{
      marketerInfo(){
        console.log(this.$store.state.marketerInfo);
				console.log('9999999999999');
        return this.$store.state.marketerInfo
      },
    },
  }
</script>

<style scoped>
  .xxf_marketer {
    
    width: 100%;
    height: 136rpx;
    display: flex;
    padding: 20rpx 24rpx;
    justify-content: space-between;
    align-content: center;
    font-size: 28rpx;
    border-bottom: 1px solid #E4E4E4;
		background-color: #fff;
  }
  
  .xxf_marketer .marketer_info {
    display: flex;
    /* flex: 1; */
  }
  
  .xxf_marketer .photo {
    width: 96rpx;
    height: 96rpx;
    border-radius: 50%;
    background-color: #FF7700;
    overflow: hidden;
  }
  
  .xxf_marketer .info {
    width: 388rpx;
    padding: 3rpx 24rpx;
  }
  
  .xxf_marketer .info .name {
    color: #333;
    font-size: 36rpx;
    font-weight: bold;
    padding-right:10rpx;
  }
  
  .xxf_marketer .info .job {
    color: #999999;
    font-size: 28rpx;
    padding-top: 1rpx;
  }
  
  .xxf_marketer .info .company {
    color: #999;
    font-size:24rpx;
    padding-top:15rpx;
  }
  .icon_renzheng{
    color:#FFAA00;
  }
  .xxf_marketer .btn {
    margin-top:20rpx;
    color: #fff;
    font-size: 24rpx;
    background-color: #FFAA00;
    border: 1px solid #FFAA00;
    width: 138rpx;
    height: 62rpx;
    line-height: 62rpx;
    text-align: center;
    border-radius: 1px;
  }

</style>
