<template>
	<view class="xxf_credit">
		<view class="credit_item" data-title="两证一卡" data-type="1">
			<text class="iconfont icon_creditx1"></text>
			<view class="text">两证一卡</view>
		</view>
		<view class="credit_item" data-title="90%通过率" data-type="2">
			<text class="iconfont icon_creditx2"></text>
			<view class="text">90%通过率</view>
		</view>
		<view class="credit_item" data-title="29分钟提车" data-type="3">
			<text class="iconfont icon_creditx3"></text>
			<view class="text">29分钟提车</view>
		</view>
		<view class="credit_item" data-title="全国直营" data-type="4">
			<text class="iconfont icon_creditx4"></text>
			<view class="text">全国直营</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.xxf_credit {
	  padding: 22rpx 20rpx 18rpx;
	  display: flex;
	  justify-content: space-around;
	  background-color: #fff;
	}
	
	.xxf_credit .text {
	  margin-top: 2rpx;
	}
	
	.credit_item {
	  flex: 1;
	  text-align: center;
	  font-size: 28rpx;
	}
	
	.credit_item .text {
	  font-size: 24rpx;
	  color: #333333;
	  margin-top: 8rpx;
	}
	
	.credit_item .iconfont {
	  display: inline-block;
	  height: 60rpx;
	  line-height: 60rpx;
	  font-size: 40rpx;
	
	}
	.xxf_credit .credit_item .iconfont {
	  height: 56rpx;
	  line-height: 56rpx;
	  text-align: center;
	  width: 56rpx;
	  border-radius: 999rpx;
	  color: #fff;
	  font-size: 56rpx;
	}
	
	.icon_creditx1 {
	  background-image: linear-gradient(to bottom, #FF8585, #FF4040);
	}
	
	.icon_creditx2 {
	  background-image: linear-gradient(to bottom, #FFAA00, #FF7700);
	}
	
	.icon_creditx3 {
	  background-image: linear-gradient(to bottom, #47B5FF, #0099FF);
	}
	
	.icon_creditx4 {
	  background-image: linear-gradient(to bottom, #51F58D, #20D432);
	}
</style>
