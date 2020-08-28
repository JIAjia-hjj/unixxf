<template>
  <view class="tab_content">
    <view class="title">
      <slot name="title"></slot>
    </view>
     <view class="content">
       <view class="content_item" :class="{'content_active':tabid==item.id}" v-for="(item,index) in tabComtentList" @click="selectedClick(tabkey,item.id,item.name)">
         <text class="name">{{item.name}}</text>
       </view>
     </view>

  </view>
</template>

<script>
  export default {
    name: "TabContent",
    props:{
      tabComtentList:{
        type:Array,
        default() {
          return [];
        }
      },
      tabkey:{
        type: String,
        default:''
      },
      searchContents:{
        type:Object,
        default() {
          return {};
        }
      }
    },
    // watch:{
    //   searchContents:{
    //     handler(val){
    //       if(val[this.tabkey]==undefined){
    //         this.tabid='';
    //       }
    //     },
    //     deep:true
    //   }
    // },
    data(){
      return{
        tabid:''
      }
    },
    methods:{
      selectedClick(key,value,name){
        this.tabid=value;
        this.$emit('selectedClick',key,value,name);
        this.$emit('tabClick',0);
      },
    },
    created() {

    }
  }
</script>

<style scoped>
  .tab_content{
    background-color: #fff;
  }
  .title{
    height: 88rpx;
    line-height: 88rpx;
    background-color: #f5f5f9;
    font-size: 28rpx;
    color: #333;
    padding-left: 48rpx;
  }
  .content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 48rpx 48rpx 24rpx;
  }
  .content_item{
    height: 72rpx;
    line-height: 72rpx;
    margin-bottom:24rpx;
  }
  .content_item .name{
    display: inline-block;
    width: 180rpx;
    height: 72rpx;
    line-height: 72rpx;
    position: relative;
    text-align: center;
    border-radius: 10rpx;
    border: 1px solid #fff;
    background-color: #f5f5f9;
    overflow: hidden;
    white-space: nowrap;
    font-size: 28rpx;
    color: #333;
  }
  .content_active .name{
    color: #fa0;
    border-color: #fa0;
    background-color: rgba(225, 170,0,0.2);
  }
</style>
