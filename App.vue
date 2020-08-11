<script>

	export default {
		globalData:{
			
		},
		onLaunch: function() {
			// #ifdef MP-WEIXIN
			uni.login({
				success: res => {
					console.log('LLAAAAAAAAAAAAAAAAAAAAAAAAAA')
					//code值(5分钟失效)
					console.info(res.code);
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
			    const that = this;
			    this.$request({
						method:'POST',
			      url: "/v1/user/getopenid",
			      data: ajaxdata
			    }).then(res=>{
						console.log('获取openid');
						console.log(res);
					})
			  },
			//获取营销人员信息
			getMarketerInfo(uid) {
				if (uid == "" || uid == null) {
					return;
				}
				this.$request({
					latform: 2,
					customer_id:'',
					unionId:'orgme4nZBIT9CqN9HdT3_6LnAb98',
					mobile: phone,
					address: '',
					headimgurl:'',
					nickname:'',
				}).then(res=>{
					if(res.code == 200){
						this.$store.commit({
							type:'getMarketerInfo',
							marketerInfo:res.data
						})
					}
				}).catch(err=>{
					console.log(err);
				});
			},
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
