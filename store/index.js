import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
		phone: '未绑定',
		marketerInfo:null,
		userInfo: {
		    isMarketer: false,
		    userId:'',
		    businessId:'',
		    isUserInfo: false,
		    headimgurl:'',
		    nickname: '',
		},
		loginfo:{},//放微信openid、unionid、sessionKey
};
const store =new Vuex.Store({
	state,
	mutations:{
	  setMarketerInfo(state,payload){
			// console.log(payload);
				state.marketerInfo=payload;
	  },
		setLoginfo(state,payload){
			state.marketerInfo=payload;
		},
		
	},
	actions:{
		
	}
})
export default store