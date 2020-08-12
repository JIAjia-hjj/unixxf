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