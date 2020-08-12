<template>
  <view class="brand_car">
    <title-bar>
      <view slot="left">快速选车</view>
      <navigator  slot="right" url="/page/list/list" open-type="switchTab" style="color: #999;">更多车型<text class="iconfont icon_fanhui" style="padding-left: 05rpx"></text></navigator>
    </title-bar>
    <view class="brand">
      <view class="brand_item" v-for="(item,index) in carBrandList" :key="item.uplogo"  @click="selectedClick('brandid',item.id,item.name)" v-if="index<10">
        <image :src="item.uplogo" alt="" mode="widthFix"> </image>
        <view class="name">{{item.name}}</view>
      </view>
    </view>
    <view  class="speed_tag">
      <view class="tag">
        <text class="tag_item oneline" v-for="(item,index) in speedTag" :key="item.title" v-if="index<4" @click="">{{item.title}}</text>
      </view>
    </view>
  </view>
</template>

<script>
	import TitleBar from '@/components/content/titleBar/TitleBar'
	import {getCarBrandList,getBannerData} from '@/network/home.js'
  export default {
    name: "BrandCar",
    props:{
			// carBrandList:{
			// 	type:Array,
			// 	default(){
			// 		return[]
			// 	}			
			// },
   //    speedTag:{
			// 	type:Array,
			// 	default(){
			// 		return[]
			// 	}			
			// },			
    },
    data(){
      return{
				carBrandList:[],
				speedTag:[]
      }
    },
    components:{
      TitleBar
    },
		created() {
			console.log('22222222222')
			this.getCarBrandList();
		},
    methods:{
			getCarBrandList(){
				getCarBrandList().then(res=>{
					if(res.code==0){
						this.carBrandList=res.data;
						this.speedTag=res.speedTag;
					}
				}).catch(err=>{
					console.log(err);
				});
			},
      selectedClick(key,value,name){
      	// this.$store.commit({
      	// 	type:'setCarSearchInfo',
      	// 	key:key,
      	// 	value:value,
      	// 	name:name
      	// });
      	// this.$router.push('/list');
      },
      
      
    }
  }
</script>

<style lang="scss">
.brand_car{
  background-color: #fff;
  border-bottom: 1px solid #E4E4E4;
	.brand{
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx.2rpx 0;
		/*border-bottom: 1px solid #E4E4E4;*/
		.brand_item{
			width: 20%;
			text-align: center;
			margin-bottom: 20rpx;
		}
		.name{
			font-size: 24rpx;
			margin-top:.1rpx;
		}
		image{
			width: 64rpx;
			margin: 0 auto;
		}
		
	}
	.speed_tag {
		height:90rpx;
		display: flex;
		.tag {
			flex: 1;
			overflow: hidden;
			padding:20rpx 48rpx;
			display: flex;
			justify-content: space-between;
		}
		.tag_item {
			max-width: 23%;
			height:50rpx;
			line-height:50rpx;
			border-radius:50rpx;
			padding:0 12rpx;
			display: inline-block;
			color: #FF563B;
			font-size:24rpx;
			border:1rpx solid rgba(255, 86, 59, 0.3);
			background-color: rgba(255, 86, 59, 0.1);
			
		}
	}
	
}
 
</style>
