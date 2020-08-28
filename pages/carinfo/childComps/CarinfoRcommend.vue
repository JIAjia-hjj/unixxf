<template>
  <view>
    <title-bar>
      <text slot="left">猜你喜欢</text>
      <router-link class="right" to="/config">详细参数配置	<text class="iconfont icon_fanhui"></text></router-link>
    </title-bar>
    <view class="car_list">
      <navigator  v-for="item in recommendList" :key="item.id"  :url="'/pages/carinfo/carinfo/'+item.id">
        <car-item :carItem="item"></car-item>
      </navigator>
    </view>

  </view>
</template>

<script>
  import {getRecommendList} from 'network/carinfo'
  import TitleBar from 'components/content/titleBar/TitleBar'
  import CarItem from 'components/content/carItem/CarItem'
  
  export default {
    name: "CarinfoeRcommend",
    props:{
      carid:{
        default:''
      }
    },
    components: {
      TitleBar,
      CarItem
    },
    data(){
      return{
        recommendList:[]
      }
    },
    methods:{
      getRecommendList() {
        getRecommendList(this.carid).then(res=>{
          if(res.code==0){
            if (res.data.length > 0) {
              res.data.forEach(function (item) {
                item.jiequ_brand_name = item.jiequ_brand_name ? item.jiequ_brand_name : item.name.split(' ')[0];
                item.name = item.name.split(" ").slice(1).join(' ');
              });
            }
            this.recommendList=res.data;
          }
       
          console.log(res);
        }).catch(err=>{
          console.log(err);
        });
      },
    },
    created(){
    },
    mounted() {
      this.getRecommendList();
    }
  
  }
  
</script>

<style scoped>

</style>
