import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
		phone: '18759191639',
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
				state.marketerInfo=payload.marketerInfo;
	  },
		setLoginfo(state,payload){
				state.marketerInfo=payload.marketerInfo;
		},
	},
	actions:{
		
	}
})
export default store