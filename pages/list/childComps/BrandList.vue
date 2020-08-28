<template>
    <view class="brand">
      <view class="brand_group">
        <view v-for="(brands,key) in brandList" :key="key">
          <view class="group_letter" :id="key">{{key}}</view>
          <view class="brand_item"
               :class="{'border_none':index==brands.length-1,'brand_active':brandid==item.id}"
               v-for="(item,index) in brands" :key="item.id" @click="selectedClick('brandid',item.id,item.name)" >
            <image :src="item.uplogo" v-if="item.uplogo||item.logo" mode="widthFix"></image>
            <text>{{item.name}}</text>
          </view>
        </view>
      </view>
      <view class="letter" id="letter" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <view class="letter_item" v-for="item in letter" :key="item">{{item}}</view>
      </view>
    </view>
</template>

<script>
  export default {
    name: "BrandList",
    props: {
      brandList: {
        type: Object,
        default() {
          return {}
        }
      },
      searchContents:{
        type:Object,
        default() {
          return {};
        }
      }
    },
    data(){
      return{
        letter: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        brandid: '',
      }
    },
    // watch:{
    //   searchContents:{
    //     handler(val){
    //       if(val['brandid']==undefined){
    //         this.brandid='';
    //       }
    //     },
    //     deep:true
    //   }
    // },
    methods:{
      selectedClick(key,value,name){
        this.brandid=value;
        this.$emit('selectedClick',key,value,name);
        this.$emit('tabClick',0);
      },
      touchStart(){
      
      },
      touchMove(){
      
      },
      touchEnd(){
      
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .brand {
    /* position: fixed; */
/*   top: 168rpx;
	  bottom:--window-bottom;
    left: 0;
    right: 0; */
    background: #fff;
    z-index: 3;
    overflow: auto;
  }
  
  .brand .letter {
    position: fixed;
    bottom: 28rpx;
    right: 24rpx;
    width: 20rpx;
    color: #999;
    font-size: 20rpx;
    font-weight: normal;
  }
  
  .brand .letter .letter_item {
    padding:02rpx 0;
    text-align: center;
  }
  
  .brand .brand_group {
    /*height: 100vh;*/
    position: relative;
    border-bottom:01rpx solid #e4e4e4;
    color: #333;
    font-size: 28rpx;
  }
  
  .brand .brand_group .brand_item {
    height: 90rpx;
    line-height: 90rpx;
    margin-left: 48rpx;
    border-bottom:01rpx solid #e4e4e4;
		/* overflow: hidden; */
  }
  .brand .brand_group:last-child .brand_item:last-child{
    border-color:transparent;
  }
  .brand_active {
    color: #fa0;
    position: relative;
  }
  
  .brand_active::after {
    content: '\e62d';
    font-family: "iconfont";
    width: 30rpx;
    height: 30rpx;
    line-height: 30rpx;
    position: absolute;
    top: 50%;
    margin-top: -15rpx;
    right: 48rpx;
  }
  
  .brand_group .brand_item image {
    width: 72rpx;
    vertical-align: middle;
    margin-right: 24rpx;
    display:inline-block;
		max-height: 90rpx;
  }
  
  .brand .brand_group .group_letter {
    background-color: #f5f5f9;
    height: 48rpx;
    padding-left: 48rpx;
    line-height: 48rpx;
  }
	.border_none{
		border: none !important;
	}
</style>
