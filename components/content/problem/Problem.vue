<template>
  <view class="problem">
    <view class="problem_item" v-for="(item,index) in problemList" :key="item.title" v-if="index<3">
      <view class="title"  :class="{'border_none':index==idx}" @click="getProblemIdx(index)">
        {{item.title}}
        <text class="icon iconfont icon_shangla" :class="{'icon_xiala':index==idx}"></text>
      </view>
      <view class="content" :class="{'border_top':index==idx}" :hidden="index!=idx">
				{{item.content}}
      </view>
    </view>
  </view>
</template>

<script>
  import {getProblemList} from 'network/problem'
  export default {
    name: "Problem",
    data(){
      return{
        idx:0,
        problemList:[]
      }
    },
    methods:{
      getProblemList(){
        getProblemList().then(res=>{
          if(res.code==0){
            if (res.data == "undefined") {
              return;
            }
            res.data.forEach(function(item) {
              item.content = item.content.replace(/<[\S\s]*?>/g, '');
            });
            this.problemList=res.data;
          }
        }).catch(err=>{
        
        })
      },
      getProblemIdx(index){
				if(index==this.idx){
					 this.idx=-1;
					}else{
						 this.idx=index;
					}
      
      }
      
    },
    created() {
      this.getProblemList()
    }
  }
</script>

<style scoped>
  .problem_item{
    background-color: #fff;
  }
  .problem_item .title{
    font-size: 28rpx;
    padding:26rpx 48rpx 26rpx 0;
    margin-left: 48rpx;
    border-bottom:1rpx solid #E4E4E4;
    color: #333333;
    position: relative;
  }
  .problem_item .title::before{
    font-family: iconfont;
    content: '\e628';
    font-size: 28rpx;
    color: #FFAA00;
		margin-right: 6rpx;
  }
  
  .problem_item .title .icon_faq{
    color: #FFAA00;
  }
  .problem_item .title .icon{
    color: #999;
    font-size: 48rpx;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 32rpx;
  }
  
  .problem_item .content{
    background-color: #F5F5F5;
    color: #999999;
    padding: 26rpx 34rpx;
    font-size: 28rpx;
    margin-top: -1rpx;
    /*font-weight: lighter;*/
  }
  .border_top{
    border-top:1rpx solid #E4E4E4;
  }
  .border_none{
    border: none !important;
		/* border-bottom: none; */
  }
</style>
