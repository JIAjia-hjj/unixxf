<template>
	<view class="home">
		<view class="swiper_box">
			<swiper :indicator-dots="true" autoplay circular :interval="3000"  :duration="1000" >
				<swiper-item v-for="item in bannerList" :key="item.img">
					<image :src="item.img" mode="" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<creadit class="home_creadit"></creadit>
		<brand-car class="home_content"></brand-car>
    
		<view class="mtop_bg">
			<marketer-info></marketer-info>
		</view>
		<view class="mtop_bg">
				<select-car></select-car>
		</view>
    <view class="mtop_bg">
    	<hot-car></hot-car>
    </view>
		
		<bottom-tip ></bottom-tip>
	</view>
</template>

<script>
	import Creadit from '@/components/content/creadit/Creadit.vue'
	import BottomTip from 'components/content/bottomTip/BottomTip'
		
	import BrandCar from './childComps/BrandCar.vue'
	import MarketerInfo from './childComps/MarketerInfo.vue'
	import SelectCar from './childComps/SelectCar.vue'
	import HotCar from './childComps/HotCar.vue'
	// import TitleBar from '../../components/content/titleBar/TitleBar'
	import {getCarBrandList,getBannerData} from '@/network/home.js'
	export default {
		data() {
			return {
				bannerList:[],
				carBrandList:[],
				speedTag:[]
			}
		},
		components:{
			Creadit,
			BottomTip,
			BrandCar,
			MarketerInfo,
			SelectCar,
			HotCar
		},
		onLoad() {
			console.log('1111');
			console.log(this.$store.state.phone)
		  this.getBannerData();
			this.getLocation();
			// this.getCarBrandList();
			// this.selectedClick();
		},
		methods: {
      async getBannerData(){
				 // this.$request({
				 // 	url:'/v1/banner/list',
				 // 	data:{
				 // 		platform:3,
				 // 		position:8
				 // 	}
				 //  }).then(res=>{
					//   console.log('hhhhhhhhhhh');
					//   console.log(res)
				 //  }).catch(err=>{
					//   console.log('hhhhhhhhhhh');
					//   console.log(err)
				 //  });
				 
				 
				 // request({
					// 	url:'/v1/banner/list',
					// 	data:{
					// 		platform:3,
					// 		position:8
					// 	}
				 //  }).then(res=>{
				 // 					  console.log('hhhhhhhhhhh');
				 // 					  console.log(res)
				 //  }).catch(err=>{
				 // 					  console.log('hhhhhhhhhhh');
				 // 					  console.log(err)
				 //  });
				 
				 
				 
				 // getBannerData().then(res=>{
				 // 	 console.log('hhhhhhhhhhh');
					//  if(res.code==0){
					// 		this.bannerList=res.data;
					// 		}else{
					// 		uni.showToast({
					// 			title:res.msg
					// 		})
					// 	}
				 //  }).catch(err=>{
					// 		console.log(err)
				 //  });
				 
				 const res=await this.$request({//是个promise，所以可以用await修饰 函数用async
				 	url:'/v1/banner/list',
				 	data:{
				 		platform:3,
				 		position:8
				 	}
				  })
				  if(res.code==0){
					  this.bannerList=res.data;
			      }else{
					  uni.showToast({
					  	title:res.msg
					  })
				  }
				  
			},
	    getCarBrandList(){
				getCarBrandList().then(res=>{
					console.log(res);
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
			//获取定位
			getLocation(){
				uni.getLocation({
					type:'wgs84',
					geocode:true,
					success(res) {
						console.log('获取定位:')
						console.log(res);
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.home{
	background-color:#F5F5F9;
}
.mtop_bg{
  margin-top: 24rpx;
  background: #fff;
}	
.swiper_box{
	padding:24rpx;
	width: 750rpx;
	swiper{
		width: 100%;
		height: 377rpx;
		box-sizing: border-box;
		image{
			width: 100%;
			border-radius: 24rpx
		}
	}
}

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
