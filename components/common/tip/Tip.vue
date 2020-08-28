<template>
  <div class="tip" :style="{width: tipObj.width+'rpx',height:tipObj.height+'rpx',paddingTop:tipObj.paddingTop+'rpx',borderRadius:tipObj.borderRadius+'rpx'}" v-if="isShowTip">
     <span class="iconfont" :class="tipObj.icon" :style="{fontSize:tipObj.iconfontSize+'rpx',iconBottom:tipObj.iconBottom+'rpx'}"></span>
      <p class="tip_text" v-html="tipObj.text" :style="{fontSize:tipObj.fontSize+'rpx'}">
      </p>
  </div>
</template>

<script>
  export default {
    name: "Tip",
    props:{
    
    },
    data(){
      return{
        isShowTip:false,
        tipObj:{
          width:150,
          height:80,
          paddingTop:9,
          fontSize:24,
          iconfontSize:30,
          icon:'',
          text:'',
          time:3000,
          borderRadius:20,
          iconBottom:10
        }
      }
    },
    methods:{
      showTip(tipObj) {
        this.isShowTip = true;
        this.tipObj=Object.assign(this.tipObj, tipObj);
        const timeId = setTimeout(() => {
          this.isShowTip = false;
          clearTimeout(timeId);
        }, this.tipObj.time);
      },
    }
  }
</script>

<style scoped>
  .tip{
    position: fixed;
    width: 150rpx;
    height:100rpx;
    background-color: rgba(0, 0, 0, 0.7);
    top: 45%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 999999;
    border-radius: 20rpx;
    text-align: center;
    padding:22rpx 18rpx;
    color: #fff;
    box-sizing: border-box;
  }
  .iconfont{
    font-size:30rpx;
    padding-bottom:6rpx;
    display: block;
  }
  .tip_text{
    white-space:pre-wrap;
    font-size: 24rpx
  }
</style>
