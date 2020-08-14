<script>
  
	import {gettoken,getBindedData,getMarketerInfo} from './network/login.js'
	export default {
		globalData:{
			
		},
		onLaunch: function() {
			// #ifdef MP-WEIXIN
			uni.login({
				success: res => {
					//code值(5分钟失效)
					this.gettoken({
						 code:res.code
					});
				}
			});
			//#endif
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			//获取openid
			gettoken(ajaxdata) {
				//获取openid
				gettoken(ajaxdata).then(res=>{
					console.log(res.data);
					if(res.code!=200){
						return;
					}
					this.$store.commit({
						type:'setLoginfo',
						openid:res.data.openid,
						unionid:res.data.unionid,
					})
					this.$store.commit('setLoginfo',res.data);
					//进来直接访问 获取基本信息
				  return	getBindedData({openid:res.data.openid,unionid:res.data.unionid});
				}).then(res=>{
					if(res.code!=200){
						return;
					}
					//获取营销人员信息
					const uid=res.data.businessid;
					if (uid == "" || uid == null) {
						return;
					}
				  return getMarketerInfo(uid);
				}).then(res=>{
					if(res.code!=200){
						return	
					}
					this.$store.commit('setMarketerInfo',res.data);
				})
				
			  //   const that = this;
			  //   this.$request({
					// 	method:'POST',
			  //     url: "/v1/user/getopenid",
			  //     data: ajaxdata
			  //   }).then(res=>{
					// 	this.$store.commit('setLoginfo',res.data)
					// 	console.log('获取openid');
					// 	console.log(res);
						
					// 	// 进来直接访问
					// 	return this.$request({
					// 	  url: "/v1/user/unauthorizeduser",
					// 		method:'POST',
					// 	  data: {
					// 	    unionid: res.data.unionid,
					// 	    openid: res.data.openid,
					// 	  }
					// 	})
						
					// }).then(res=>{
					// 	console.log(res);
					// 	console.log('LLLLLL')
					// })
			  }
		}
	}
</script>

<style>
	@import url("./static/iconfont/iconfont.css");
	view,text,navigator,textarea,canvas,scroll-view,input{
	  box-sizing: border-box;
	  -webkit-box-sizing: border-box;
	  
	}
	/*每个页面公共css */
</style>
