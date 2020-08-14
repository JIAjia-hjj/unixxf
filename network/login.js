//wx
import {request} from './request.js'
//获取openid
export const gettoken=(ajaxdata)=>{
	return request({
		method:'POST',
	  url: "/v1/user/getopenid",
	  data: ajaxdata
	})
} 

// 进来直接访问
export const getBindedData=(data)=>{
	return request({
		method:'POST',
	  url: "/v1/user/unauthorizeduser",
	  data:data
	})
}

//获取营销人员信息
export const getMarketerInfo=(uid)=>{
	return request({
	  method:'post',
	  url:'/v1/user/customerinfo',
	  data:{
	    uid:uid
	  }
	})
}

//获取电话
export const getPhoneNumber=(data)=>{
	return request({
	  method:'POST',
	  url:'/v1/user/getphone',
	  data:{
			encryptedData: data.encryptedData,
			iv:data.iv,
			sessionKey: data.sessionKey
	  }
	})
}

//把电话提交到后端
export const submitToServe=(data)=>{
	return request({
	  method:'POST',
	  url:'/v1/user/sprogrambind',
	  data:{
				unionId:data.openid,
				mobile: data.phone,
				uid: data.uid||'',
				jobNumber: data.jobNumber||'',
				address: data.address||'',
				headimgurl: data.headimgurl||'',
				nickname: data.nickname||'',
				grade:data.nickname||0
	  }
	})
}
