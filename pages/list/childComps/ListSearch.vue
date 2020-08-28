<template>
  <!-- 搜索记录 -->
  <view class="search_content">
    <view class="item" v-for="(value,key) in searchContents" :key="key">
      <text class="text oneline">{{value}}</text>
      <text class="iconfont icon_quxiao" @clic="rpxoveSearchContent(key)" ></text>
    </view>
    <view class="reset" @click="reset">
      <text class="iconfont icon_chongzhi"></text>重置
    </view>
  </view>
</template>

<script>
  export default {
    name: "ListSearch",
    props:{
      searchContents:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
     rpxoveSearchContent(key){
       
        this.$emi('rpxoveSearchContent',key);
      },
      reset(){
        this.$emit('reset');
      },
    }
  }
</script>

<style scoped>
  .search_content {
    line-height: 90rpx;
		height: 90rpx;
    padding: 13rpx 24rpx;
    position: relative;
    background: #fff;
  }
  .search_content  .icon_quxiao{
    font-size:18rpx;
    flex: 1;
    text-align: center;
    padding-right: 14rpx;
  }
  .search_content .icon_chongzhi{
    font-size:22rpx;
    padding-right:5rpx;
  }
  .search_content .item{
    border-radius: 50rpx;
    width: 172rpx;
    height: 50rpx;
    line-height: 50rpx;
    font-size: 20rpx;
    color: #FF563B;
    display: flex;
    background-color: rgba(255,86,59,0.1);
    border:1rpx solid rgba(255,86,59,0.3);
    padding:0 5rpx;
    float: left;
    margin: 10rpx 20rpx 10rpx 0;
  }
  .search_content .item .text{
    display: inline-block;
    width: 130rpx;
    text-align: center;
    font-size: 20rpx;
    color: #FF563B;
  }
  
  .search_content .reset{
    font-size: 24rpx;
    color: #999;
    position: absolute;
    right:32rpx;
    top:0;
  }
</style>
