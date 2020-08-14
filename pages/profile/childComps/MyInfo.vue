<template>
  <view>
    <!-- 未登录 -->
    <view class="my_info" v-if="!isUserInfo">
      <view class="photo marketerInfo.avatar?'':'border_none'">
        <button class="text_name"  @click="getUserInfo" hover-class="none">
          <img src="https://sprogram.xxfgo.com/imgs/appserve/nologin_photo.png" style="width:1.20rem" />
        </button>
      </view>
      <view class="info_text">
        <button  @click="getUserInfo"  class="text_name">Hi~ 欢迎来到喜相逢</button>
        <view class="text_txt"> {{phone!='未绑定'?'点击头像授权展示个性头像':'登录获取更多优惠信息'}}</view>
      </view>
      <button class="login_btn"   data-url="/pages/bindphone/bindphone">立即登录</button>
    </view>
    <!-- 营销 -->
    <view class="my_info" v-else-if="isMarketer&&phone!='未绑定'">
      <view class="photo marketerInfo.avatar?'':'border_none'">
        <img :src="marketerInfo.avatar?marketerInfo.avatar:'https://sprogram.xxfgo.com/imgs/appserve/nologin_photo.png'" style="width:1.20rem;height:1.20rem"/>
      </view>
      <view class="info_text">
        <view class="text_name oneline">
          marketerInfo.name
        </view>
        <view class="text_txt">
          喜相逢高级购车顾问
          <text class="iconfont icon_renzheng"></text>
        </view>
      </view>
    </view>
    <!-- 用户未授权手机号 -->
    <view class="my_info" v-else-if="phone=='未绑定'">
      <view class="photo marketerInfo.avatar?'':'border_none'">
        <img :src="headimgurl" style="width:1.20rem;height:1.20rem;" mode="aspectFill"/>
      </view>
      <view class="info_text">
        <view  class="text_name">{{nickname}}</view>
        <view class="text_txt"> 登录获取更多优惠信息</view>
      </view>
      <button class="login_btn" open-type="getPhoneNumber"  data-url="/pages/bindphone/bindphone">立即登录</button>
    </view>
    <!-- 用户 -->
    <view class="my_info" v-else>
      <view class="photo marketerInfo.avatar?'':'border_none'">
      
        <img :src="headimgurl" style="width:1.20rem;height:1.20rem;" mode="aspectFill"/>
      </view>
      <view class="info_text">
        <view class="text_user oneline">{{nickname}}</view>
    
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "MyInfo",
    data(){
      return{
        phone: '未绑定',
        openid:'',
        isMarketer:false,
        marketerInfo:null,
        isUserInfo:'',
        businessId:false,
        nowTime:'',
        addMyCustomeNum:0,
        headimgurl:'',
        nickname:'',
        isShowLoginReject:false,//拒绝登录授权弹框
        swiperCurrent: 0,
        bannerList:null
      }
    }
  }
</script>

<style scoped>

</style>
