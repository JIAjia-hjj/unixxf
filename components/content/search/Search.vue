<template>
  <view class="search">
    <!-- <text class="iconfont icon_dingwei"></text> -->
    <text class="city" @click="selectCity">未绑定</text>
    <view class="search_box" @click="searchClick">
      <text class="iconfont icon_soushuo"></text>
      <text>喜相逢购车，超低月供</text>
    </view>
    <view  @click="callPhone" class="call_phone"><text class="iconfont icon_dianhua"></text></view>
    <!--<baidu-map @ready="getLocation" style="display: none;"></baidu-map>-->
  </view>
</template>

<script>
  // import BaiduMap from 'vue-baidu-map'
  export default {
    name: "Search",
    data(){
      return{
        city:'定位中',
      }
    },
    methods:{
      selectCity(){
        // this.$router.push('/city');
      },
      searchClick(){
        // this.$emit('searchClick')
      },
			callPhone(){
				
			}
    },
    created() {
    
    },
    mounted() {
    }
  }
</script>

<style scoped>
  
  .search {
    display: flex;
    align-content: center;
    width: 100%;
    height: 72rpx;
    font-size: 24rpx;
    padding: 0 24rpx;
    background-color: #fff;
  }
  .icon_dianhua {
    font-size: 30rpx;
    padding:0 15rpx 0 30rpx;
    color: #333;
  }
  
  .city {
    padding: 10rpx;
    padding-left: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width:76rpx;
  }
  .city::before{
    content: '\e618';
    font-family: 'iconfont';
    padding-right: 10rpx;
    font-size: 28rpx;
  }
  .search_box {
    margin-left: 12rpx;
    width: 488rpx;
    height: 52rpx;
    line-height: 52rpx;
    background-color: #f5f5f9;
    color: #999;
    font-size: 24rpx;
    border-radius: 26rpx;
    padding-left: 20rpx;
  }
  .call_phone{
    line-height: 52rpx;
  }
  .icon_soushuo {
    font-size: 24rpx;
    padding-right: 20rpx;
  }

</style>
