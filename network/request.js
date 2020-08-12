  // 发起 HTTPS 网络请求
  const BASE_URL='http://10.0.16.62'
 export  const request=(options)=> {
	return new Promise((resolve,reject)=>{
		uni.request({
			withCredentials: false,
		  url:BASE_URL+options.url,
		  method: options.method||"GET",
		  data: Object.assign({
        platform: 2,
        customer_id:''
      }, options.data),
			header: {
				'content-type': options.method == "GET" ? 'application/json' : 'application/x-www-form-urlencoded',
			},
		  success:(res)=> {
			 resolve(res.data);
		  },
		  fail:(err)=>{
		  	uni.showToast({
		  		title:'请求失败，请检查网络'
		  	})
			 reject(err);
		  }
		})
	})
}