<template>
  <view class="select_car">
    <title-bar>
      <view slot="left">热门爆款</view>
      <navigator  slot="right" url="/pages/list/list" open-type="switchTab" style="color: #999;">更多车型<text class="iconfont icon_fanhui" style="padding-left: 0.05rem"></text></navigator>
    </title-bar>
    <view class="select">
      <navigator  v-for="item in hotcarList" :key="item.id" :url="'/pages/carinfo/carinfo?carid='+item.id" open-type="navigate" >
        <car-item :carItem="item"></car-item>
      </navigator>
     
    </view>
  </view>
</template>

<script>
  import {getCarList} from '@/network/home'
  import TitleBar from '@/components/content/titleBar/TitleBar'
  import CarItem from '@/components/content/carItem/CarItem'
  export default {
    name: "HotCar",
    components:{
      TitleBar,
      CarItem
    },
    data(){
      return{
        hotcarList:{}
      }
    },
    created() {
      //热门车型
      getCarList(1).then(res=>{
        let list = res.data;
        list.forEach(function(item) {
          item.name = item.name.split(" ").slice(1).join(' ');
        });
        this.hotcarList=list;
      }).catch(err=>{
        console.log(err);
      });
    }
  }
</script>

<style scoped>
  .select_car{
  background-color: #fff;
  }
</style>
