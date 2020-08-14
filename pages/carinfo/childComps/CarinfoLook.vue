<template>
  <view>
    <title-bar>
      <text slot="left">{{carInfo.is_new==1?"车型亮点":"车辆实拍"}}</text>
    </title-bar>
    <view class="look">
      <view class="look_item" v-for="item in carInfo.highlights" :key="item.title">
        <img :src="item.img" mode="widthFix" style="width:100%"/>
        <view class="title">{{item.title}}</view>
        <view class="des">{{item.des}}</view>
      </view>
    </view>

  </view>
</template>

<script>
  import TitleBar from 'components/content/titleBar/TitleBar'
  export default {
    name: "CarinfoLook",
    props:{
      carInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      TitleBar
    },
  }
</script>

<style scoped>
  .look {
    padding: 25rpx 62rpx 1rpx;
  }

  .look_item {
    margin-bottom: 50rpx;
  }

  .look .title {
    color: #333;
    font-size: 28rpx;
    padding: 18rpx 0 12rpx;
  }

  .look .des {
    color: #999;
    font-size: 24rpx;
  }
</style>
