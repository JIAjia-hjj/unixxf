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
		loginfo:null,//放微信openid、unionid、sessionKey
};
const store =new Vuex.Store({
	state,
	mutations:{
	  setMarketerInfo(state,payload){
			state.marketerInfo=payload;
	  },
		setLoginfo(state,payload){
			state.loginfo=payload;
		},
		setPhone(state,payload){
			state.phone=payload
		}
	},
	actions:{
		
	}
})
export default store