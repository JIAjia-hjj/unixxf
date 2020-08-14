<template>
  <view>
    <title-bar>
      <text slot="left">参数配置</text>
      <navigator class="right" to="/config">详细参数配置	<text class="iconfont icon_fanhui"></text></navigator>
    </title-bar>
    <view class="config">
      <view class="config_item">
        <text class="name">车辆级别</text>
        <text class="value">{{carInfo.sizetype_des}}</text>
      </view>
      <view class="config_item" v-if="carInfo.basic">
        <text class="name">油耗</text>
        <text class="value">{{carInfo.basic.userfuelconsumption}}</text>
      </view>
      <view class="config_item" v-if="carInfo.doornum">
        <text class="name">车身结构</text>
        <text class="value">{{carInfo.body.doornum||'-'}}门 {{carInfo.body.seatnum||'-'}} 座</text>
      </view>
      <view class="config_item"  v-if="carInfo.engine">
        <text class="name">排量</text>
        <text class="value">{{carInfo.engine.displacement||carInfo.engine.displacement_des}}</text>
      </view>
      <view class="config_item" v-if="carInfo.body">
        <text class="name">车身长/宽/高(mm)</text>
        <text class="value">{{carInfo.body.len+"/"+carInfo.body.width+"/"+carInfo.body.height}}</text>
      </view>
      <view class="config_item" v-if="carInfo.basic">
        <text class="name">最高车速</text>
        <text class="value">{{carInfo.basic.maxspeed||noInfo}}</text>
      </view>
      <view class="config_item" v-if="carInfo.gearbox">
        <text class="name">变速箱</text>
        <text class="value">{{carInfo.gearbox.abbreviation}}</text>
      </view>
      <view class="config_item" v-if="carInfo.engine">
        <text class="name">燃油形式</text>
        <text class="value">{{carInfo.engine.fueltype}}</text>
      </view>
    </view>
  </view>

</template>

<script>
  import TitleBar from 'components/content/titleBar/TitleBar'
  
  export default {
    name: "CarinfoConfig",
    props:{
      carInfo:{
        type:Object,
        default(){
           return {}
        },
      }
    },
    data(){
      return{
        noInfo:'暂无数据'
      }
    },
    components: {
      TitleBar
    }
    
  }
</script>

<style scoped>
  .config {
    padding: 12rpx 84rpx 24rpx 74rpx;
  }
  
  .config .config_item {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 12rpx 0;
  }
  
  .config .config_item .name {
    font-size: 28rpx;
    color: #333333;
  }
  
  .config .config_item .value {
    font-size: 24rpx;
    color: #999999;
  }
</style>
