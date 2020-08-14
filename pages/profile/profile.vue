<template>
    <view>
      <view class="my_login">
        <!-- 未登录 -->
        <view class="my_info" v-if="userInfo.isUserInfo">
          <view class="photo" :class="{'border_none':marketerInfo&&marketerInfo.avatar}" >
            <view class="text_name"  @click="getUserInfo" >
              <image :src="userInfo.headimgurl" style="width:120rpx" ></image>
            </view>
          </view>
          <view class="info_text">
            <view  @click="getUserInfo"  class="text_name">Hi~ 欢迎来到喜相逢</view>
            <view class="text_txt"> {{phone!='未绑定'?'点击头像授权展示个性头像':'登录获取更多优惠信息'}}</view>
          </view>
          <button class="login_btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">立即登录</button>
        </view>
        <!-- 营销 -->
        <view class="my_info" v-else-if="userInfo.isMarketer&&phone!='未绑定'">
          <view class="photo" :class="{'border_none':marketerInfo&&marketerInfo.avatar}" >
            <image :src="marketerInfo&&marketerInfo.avatar?marketerInfo.avatar:'https://sprogram.xxfgo.com/images/appserve/nologin_photo.png'" style="width:120rpx;height:120rpx"></image>
          </view>
          <view class="info_text">
            <view class="text_name oneline">
              {{marketerInfo&&marketerInfo.name}}
            </view>
            <view class="text_txt">
              喜相逢高级购车顾问
              <text class="iconfont icon_renzheng"></text>
            </view>
          </view>
        </view>
        <!-- 用户未授权手机号 -->
        <view class="my_info" v-else-if="phone=='未绑定'">
          <view class="photo" :class="{'border_none':marketerInfo&&marketerInfo.avatar}" >
            <image src="https://sprogram.xxfgo.com/images/appserve/nologin_photo.png" mode="aspectFill" style="width:120rpx;height:120rpx;"></image>
          </view>
          <view class="info_text">
            <view  class="text_name">{{userInfo.nickname}}</view>
            <view class="text_txt"> 登录获取更多优惠信息</view>
          </view>
          <button class="login_btn" open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber">立即登录</button>
        </view>
        <!-- 用户 -->
        <view class="my_info" v-else>
          <view class="photo" :class="{'border_none':marketerInfo&&marketerInfo.avatar}" >
      
            <image :src="userInfo.headimgurl" mode="aspectFill"  style="width:120rpx;height:120rpx;"></image>
          </view>
          <view class="info_text">
            <view class="text_user oneline">{{userInfo.nickname}}</view>
    
          </view>
        </view>
  
      </view>
  
      <view class="my_block">
        <view class="my_tab" v-if="!userInfo.isMarketer ||phone=='未绑定'">
          <view class="tab_item tab_nome"   @click="jumpPage"  data-title="优惠卡券" data-url="/pages/mycoupon/mycoupon">
            <text class="iconfont icon_youhui"></text>
            <view class="text">优惠卡券</view>
          </view>
          <view class="tab_item"   @click="jumpPage"  data-title="3步选车" data-url="">
            <view class="item_text border_none">
              <text class="iconfont icon_selectcar"></text>
              <view class="text">3步选车</view>
            </view>
          </view>
          <view class="tab_item"   @click="jumpPage"  data-title="关于我们" data-url="/pages/about/about">
            <text class="iconfont icon_about"></text>
            <view class="text">关于我们</view>
          </view>
        </view>
      </view>
      <view class="mareter_block">
        <view class="my_tab"  v-if="userInfo.isMarketer">
          <navigator class="tab_item" url="page/myindex/myindex">
            <text class="iconfont icon_zhuye"></text>
            <view class="text">我的主页</view>
          </navigator>
          <navigator class="tab_item" url="page/mycode/mycode">
            <text class="iconfont icon_carimg"></text>
            <view class="text">车型库</view>
          </navigator>
          <navigator class="tab_item" url="page/mycode/mycode">
            <text class="iconfont icon_img"></text>
            <view class="text">我的图库</view>
          </navigator>
          <navigator class="tab_item" url="page/mycode/mycode">
            <text class="iconfont icon_erweima"></text>
            <view class="text">小程序码</view>
          </navigator>
        </view>
      </view>
      <view class="my_list">
        <!-- 用户显示推荐有礼、常见问题 -->
        <view class="my_item" v-if="!userInfo.isMarketer && phone!='未绑定'"   @click="jumpPage"  data-title="推荐有礼" data-url="/activity/recommend/recommend">
          <view class="item_text">
            <text class="iconfont icon_liwu"></text>
            <text class="txt">推荐有礼</text>
            <text class="tip">奖励1000元现金</text>
          </view>
        </view>
        <view class="my_item" v-if="!userInfo.isMarketer &&phone!='未绑定'"  @click="jumpPage" data-title="常见问题" data-url="/pages/problem/problem">
          <view class="item_text">
            <text class="iconfont icon_problem"></text>
            <text class="txt">常见问题</text>
          </view>
        </view>
        <!-- 营销人员显示我的客户-->
        <view class="my_item my_kehu" style="font-size:44rpx;" v-if="userInfo.isMarketer && userInfo.phone!='未绑定'"   @click="jumpPage"  data-title="我的客户" data-url="/pages/mycustomer/mycustomer">
          <view class="item_text" style="font-size:028rpx">
            <text class="iconfont icon_kehu"></text>
            <text class="txt">我的客户</text>
            <text class="bubble_tip"	v-if="addMyCustomeNum!=0">{{addMyCustomeNum}}</text>
          </view>
        </view>
        <view class="my_item my_yijian"  @click="jumpPage()"  data-title="意见反馈">
          <view class="item_text"  style="border: none">
            <text class="iconfont icon_yijian"></text>
            <text class="txt">意见反馈</text>
          </view>
        </view>
  
      </view>
      <view class="my_exit nulogo"  @click="exit" v-if="phone!=='未绑定'">退出登录</view>
  
      <!-- 提示 -->
<!--      <tip ref="tip"></tip> -->
    </view>

</template>

<script>
  import {getPhoneNumber,submitToServe} from 'network/login'

  
  export default {
    name: "Profile",
    components:{
      // Tip,
      // NavBar,
      // MainTabBar
    },
    data(){
      return{
        nowTime:'',
        addMyCustomeNum:0,
        isShowLoginReject:false,//拒绝登录授权弹框
        swiperCurrent: 0,
        bannerList:null
      }
    },
    computed:{
      marketerInfo(){
        // console.log(this.$store.state.marketerInfo);
        return this.$store.state.marketerInfo
      },
      userInfo(){
        return this.$store.state.userInfo
      },
			phone(){
				return this.$store.state.phone
			}
    },
    methods:{
			getPhoneNumber(e){
				console.log('吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼');
				 console.log(e)
				const iv = e.detail.iv;
				const encryptedData = e.detail.encryptedData;
				const sessionKey = this.$store.state.loginfo.sessionKey
				if (iv == null || encryptedData == null) {
			    uni.showToast({
			    	title:'登录失败'
			    })
					return false
				}
				const data={
					iv,
					encryptedData,
					sessionKey
				}
				//获取电话
				getPhoneNumber(data).then(res=>{
					if(res.code==200){
						this.$store.commit('',res.data.phoneNumber);
					}
					console.log(res);
					//获取的电话发送给后端
					const userInfo=this.$store.state.userInfo;
					return this.submitToServe({
						unionId: openid,
						mobile: res.data.phoneNumber,
						uid: uid,
						jobNumber: jobNumber,
						address:userInfo.address,
						headimgurl:userInfo.headimgurl,
						nickname:userInfo.nickname,
						grade:this.globalData.grade
					})
					
				}).then(res=>{
					
				})
				
				console.log('啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦');
			},
      getUserInfo(){
      
      },
      jumpPage(){
      
      },
      exit(){
        this.$router.replace('/login');
      }
    },
    created() {

    },

  }
</script>

<style scoped>
  button {
    background-color: transparent;
  }
  
  .my_login {
    background-color: #fff;
  }
  
  .my_login .login_btn{
    position: absolute;
    top:24rpx;
    right:48rpx;
    display: inline-block;
    padding: 0 20rpx;
    height: 56rpx;
    line-height: 56rpx;
    color: #fff;
    font-size: 24rpx;
    background-color: #FFAA00;
    border-radius: 28rpx;
  }
  
  .login_click {
    height: 72rpx;
    line-height: 72rpx;
    padding: 0 48rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 86, 89, 0.1);
    margin-top:01rpx;
  }
  
  .login_click .tip {
    color: #FF563B;
    font-size: 28rpx;
  }
  
  .login_click .btn {
    display: inline-block;
    padding: 0 20rpx;
    height: 56rpx;
    line-height: 56rpx;
    color: #fff;
    font-size: 24rpx;
    background-color: #FF563B;
    border-radius: 28rpx;
  }
  
  .my_info {
    background-color: #fff;
    padding: 24rpx 48rpx 0;
    height: 168rpx;
    display: flex;
  }
  
  .my_info .photo {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background: #f5f5f9;
    border:1rpx solid #e4e4e4;
    overflow: hidden;
  }
  
  .my_info .photo image {
    margin: -1rpx;
  }
  
  .my_info .info_text {
    padding: 16rpx 24rpx;
    font-size: 32rpx;
  }
  
  .info_text .text_name {
    display: block;
    color: #333;
    font-size: 36rpx;
    line-height: 36rpx;
    font-weight: bold;
    text-align: left;
    width: 424rpx;
  }
  
  .info_text .text_txt {
    color: #999;
    margin-top: 21rpx;
    font-size: 28rpx;
  }
  
  .icon_renzheng {
    font-size: 28rpx;
    color: #fa0;
  }
  
  .text_user {
    height: 80rpx;
    line-height: 96rpx;
    font-size: 36rpx;
    font-weight: bold;
    width: 424rpx;
    display: block;
  }
  
  .my_list {
    margin-top: 24rpx;
    margin-bottom: 24rpx;
  }
  
  .my_list .my_item::after {
    border: none;
  }
  
  .my_list .my_yijian {
    border-bottom:1rpx solid #e4e4e4;
  }
  
  .nulogo {
    border-bottom:1rpx solid #e4e4e4;
  }
  
  .my_list .my_item {
    text-align: left;
    font-size: 28rpx;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    height: 90rpx;
    
  }
  
  .my_list .my_item .item_text {
    display:flex;
    align-items: center;
    width: 100%;
    margin-left: 48rpx;
    padding-right: 48rpx;
    border-bottom: 1px solid #E4E4E4;
    position: relative;
    font-size: 28rpx;
    color: #333;
  }
  
  .my_list .item_text .iconfont {
    margin-right: 24rpx;
    color: #333;
    border-radius:06rpx;
    font-size: 40rpx;
    display: inline-block;
    line-height: 40rpx;
    height: 40rpx;
    width: 40rpx;
    text-align: center;
  }
  
  .my_list .item_text::after {
    font-family: iconfont;
    content: '\e61c';
    line-height: 90rpx;
    width: 30rpx;
    position: absolute;
    top: 0;
    right: 38rpx;
    color: #999;
    font-size: 34rpx;
  }
  
  .my_exit {
    width: 100%;
    background-color: #fff;
    padding: 26rpx 160rpx;
    text-align: center;
    color: #333;
    font-size: 32rpx;
  }
  
  .bubble_tip {
    position: absolute;
    top: 27rpx;
    right: 91rpx;
    background-color: #ff4040;
    display: inline-block;
    height: 40rpx;
    min-width: 40rpx;
    line-height: 40rpx;
    border-radius: 20rpx;
    color: #fff;
    font-size: 28rpx;
    text-align: center;
    padding: 0 10rpx;
  }
  .my_list .item_text .txt{
    flex: 1;
  }
  .my_list .item_text .tip{
    padding-right:28rpx;
    color: #999;
    font-size: 28rpx;
  }
  .my_tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom:01rpx solid #e4e4e4;
  }
  
  .my_tab .tab_item {
    height: 212rpx;
    padding: 48rpx 0;
    flex: 1;
    position: relative;
    text-align: center;
  }
  .my_tab .tab_item::before {
    content: '';
    width:1rpx;
    height: 60rpx;
    background-color: #E4E4E4;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .my_tab .tab_nome::before{
    width:0;
    height:0;
  }
  .mareter_block .tab_item::before{
    width:0;
    height: 0;
  }
  .my_tab .tab_item .iconfont {
    display: inline-block;
    height: 64rpx;
    line-height: 64rpx;
    text-align: center;
    width: 64rpx;
    border-radius: 999rpx;
    color: #fff;
    font-size: 64rpx;
  }
  
  .icon_zhuye,.icon_youhui {
    background-image: linear-gradient(to bottom, #ff8585, #ff4040);
  }
  
  .icon_carimg {
    background-image: linear-gradient(to bottom, #fa0, #f70);
  }
  
  .icon_img,.icon_selectcar {
    background-image: linear-gradient(to bottom, #47b5ff, #09f);
  }
  
  .icon_erweima,.icon_about{
    background-image: linear-gradient(to bottom, #d161ff, #b400ff);
  }
  
  .my_tab .tab_item .text {
    line-height: 40rpx;
    font-size: 28rpx;
    color: #666;
    padding-top: 12rpx;
  }
  
  .my_banner {
    height: 120rpx;
  }
  .banner_btn{
    border-radius:0
  }
  .banner_btn image{
    margin: 0 auto;
  }
  .swiper-box {
    width: 750rpx;
    background-color: #fff;
    position: relative;
  }
  
  .dots {
    position: absolute;
    bottom: 12rpx;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    
  }
  
  .dots .dot.active {
    width: 40rpx;
    background: #FFFFFF;
  }
  
  .dots .dot {
    width: 20rpx;
    height:8rpx;
    background: #F6F6F6;
    background-color: rgba(246, 246, 246, 0.5);
    border-radius:4rpx;
    transition: all .6s;
  }
</style>
