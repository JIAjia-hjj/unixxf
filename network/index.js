import {request} from './request.js'
export const getBannerData=()=>{
	return request({
		url:'/v1/banner/list',
		data: {
		  platform: 3,
		  position: 8
		}
	})
}
export const getCarBrandList=()=>{
	 return  request({
	    method:'POST',
	    url:'/v1/carbrand/list',
	    data: {
	      brand_id: 0
	    }
	  })
}