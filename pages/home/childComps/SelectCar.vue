<template>
  <view class="select_car">
    <title-bar>
      <view slot="left">代步优选</view>
      <navigator  slot="right" url="/pages/list/list" style="color: #999;">更多车型<text class="iconfont icon_fanhui" style="padding-left:5rpx"></text></navigator>
    </title-bar>
    <view class="select">
      <view class="select_box">
        <navigator class="select_item" v-for="(item,index) in selectcarList" :key="item.id" v-if="index<5" open-type="navigate" :url="'/pages/carinfo/carinfo?carid='+item.id">
					<!-- require('static/images/home/select'+index+'.png') -->
          <image :src="'/static/images/home/select'+index+'.png'" alt="" style="width:620rpx" mode="widthFix"></image>
          <view class="item">
            <view class="item_top">
              <view class="brand ">{{item.jiequ_brand_name}}</view>
              <view class="name">{{item.name}}</view>
            </view>
            <view class="item_bottom">
              <image :src="item.cover_img" alt="" class="img" mode="widthFix"></image>
              <view class="info">
                <view class="first_price">首付:<text> {{item.minimum_downpayments}}</text> 万</view>
                <view class="btn">立即开走>></view>
              </view>
            </view>
          </view>
        </navigator>
      </view>
   
    </view>
  </view>
</template>

<script>
	import TitleBar from '@/components/content/titleBar/TitleBar'
	import {getCarList} from '@/network/home.js'
  export default {
    name: "SelectCar",
    props:{
      // selectcarList:{
      //   type:Array,
      //   default(){
      //     return []
      //   }
      // }
    },
    components:{
      TitleBar,
      
    },
		data(){
			return{
			  selectcarList:[]
			}
		},
		created() {
			this.getCarList();
		},
		methods:{
			getCarList(){
				//代步优选
				getCarList(10).then(res=>{
					let list = res.data;
					list.forEach(function(item) {
						item.name = item.name.split(" ").slice(1).join(' ');
					});
					this.selectcarList=list
				}).catch(err=>{
					console.log(err);
				});
			}
		}
  }
</script>

<style scoped>
  .select_car{
    background-color: #fff;
  }
  .select{
    white-space: nowrap;
    width: 100%;
   
    
    padding: 25rpx 24rpx 25rpx 24rpx;
  }
  .select_box{
    overflow-x: auto;
    overflow-y: hidden;
  }
  .select_item{
    height: .8rpx;
    width:620rpx;
    display: inline-block;
    color: #fff;
    margin-left: 24rpx;
    position: relative;
  }
  .select_item0{
    margin-left: 0;
  }
  .select_item .item{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .select_item .item_top{
    padding:14rpx 0 0 156rpx;
  }
  .select_item .item_top .brand{
    font-size: 28rpx;
    font-weight: bold;
    padding-right: 20rpx;
  }
  .select_item .item_top .name{
    font-size: 20rpx;
    margin-top:6rpx;
  }
  .select_item .item_bottom{
    display: flex;
  }
  .select_item .item_bottom .img{
    width:343rpx;
    bottom: 49px;
    position: relative;
    margin-top: 10%;
    
  }
  .select_item .item_bottom .info{
    margin-top: 20rpx;
    font-weight: bold;
  }
  .select_item .item_bottom .info .first_price{
    font-size: 32rpx;
  }
  .select_item .item_bottom .info .first_price text{
    font-size: 48rpx;
    font-weight: bolder;
  }
  .select_item .item_bottom .info .btn{
    margin-top:24rpx;
    width: 202rpx;
    height: 52rpx;
    line-height: 46rpx;
    text-align: center;
    border-radius:26rpx;
    font-size: 28rpx;
    font-weight: bolder;
    border:3rpx solid #fff;
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>
