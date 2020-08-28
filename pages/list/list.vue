<template>
	<view class="list">
		<view class="list_search">
			<search class="search_component" v-show="searchType==0" @searchClick="searchClick"></search>
			<search-input class="search_component" v-show="searchType==1" @search="search" :searchTab="keyWord"></search-input>
		</view>
		<view class="list_tab">
			<list-tab @selectedClick="selectedClick" :searchContents="searchContents" @tabCurrentClick="tabCurrentClick"></list-tab>
			<view class="brand_list" v-show="currentIndex==1">
				<brand-list :brandList="brandList" @tabClick="tabClick"></brand-list>
			</view>
			<view class="tab_comtent" v-show="currentIndex!=1&&currentIndex!=0" @click="closeFrame">
				<view @click.stop="noUseClick">
					<tab-content v-show="currentIndex==2" :tabComtentList="fpyList" tabkey="fpayid" @tabClick="tabClick">
						<view slot="title">首付价格筛选</view>
					</tab-content>
					<tab-content v-show="currentIndex==3" :tabComtentList="carTypeList" tabkey="cartype" @tabClick="tabClick">
						<view slot="title">车型筛选</view>
					</tab-content>
					<tab-content v-show="currentIndex==4" :tabComtentList="standardList" tabkey="standardtype" @tabClick="tabClick">
						<view slot="title">标准筛选</view>
					</tab-content>
				</view>
			</view>
		</view>

		<list-search :searchContents="searchContents" @rpxoveSearchContent="rpxoveSearchContent" @reset="reset" :hidden="Object.keys(searchContents).length === 0"></list-search>
		<scroll-view class="content_list" scroll-y @scrolltoupper="refresh" @scrolltolower="loadMore">
			<view class="banner">
				<image :src="bannerList[0].img" alt="" v-if="bannerList[0]" style="width: 750rpx;" mode="widthFix">
			</view>
			<!--车列表-->
			<view class="car_list">
				<navigator v-for="item in carList" :key="item.id" :url="'/pages/carinfo/carinfo?carid='+item.id">
					<car-item :carItem="item"></car-item>
				</navigator>
			</view>
			<!-- 没有数据时 -->
			<nodata-form v-if="carList.length==0&&!isLoadding"></nodata-form>
			<!-- 加载-->
			<!--<view class="loading" v-show="isLoadding">-->
			<!--<img class="loadding_img" src="https://sprogram.xxfgo.com/images/appserve/loadding.png"/>-->
			<!--<text>车型加载中，请稍后...</text>-->
			<!--</view>-->
			<!--到底了-->
			<view class="bottom_tip">
				<text class="bottom_txt" v-show="!isLoadding">已经到底了</text>
			</view>
		</scroll-view>

		<tip ref="tip"></tip>
	</view>

</template>
<footer></footer>
<script>
	import {
		getCarList,
		getBannerList,
		getBrandList
	} from 'network/list'
	import Tip from 'components/common/tip/Tip'
	import Search from 'components/content/search/Search'
	import SearchInput from 'components/content/search/SearchInput'
	import CarItem from 'components/content/carItem/CarItem'

	import ListTab from './childComps/ListTab.vue'

	import TabContent from './childComps/TabContent.vue'
	import BrandList from './childComps/BrandList.vue'


	import ListSearch from './childComps/ListSearch.vue'
	import NodataForm from './childComps/NodataForm.vue'
	const defaultData = {
		brandid: '',
		fpayid: '',
		mpayid: '',
		cartype: '',
		standardtype: '',
		pageIndex: 1,
		keyWord: ''
	};
	export default {
		name: "List",
		components: {
			Tip,
			Search,
			SearchInput,
			CarItem,
			ListTab,
			TabContent,
			BrandList,
			ListSearch,
			NodataForm,
		},
		data() {
			return {
				carList: [],
				searchContents: {},
				brandid: '',
				fpayid: '',
				mpayid: '',
				cartype: '',
				standardtype: '',
				pageIndex: 0,
				keyWord: '',
				searchType: 0,
				bannerList: [],
				isLoadding: true,
				currentIndex: 0,
				brandList: {
					'#': [{
						name: "不限",
						id: '',
						initial: '#'
					}],
				},
				fpyList: [{
						name: "不限",
						id: ''
					},
					{
						name: "1万以内",
						id: "<1"
					},
					{
						name: "1-1.5万",
						id: "1-1.5"
					},
					{
						name: "1.5-2万",
						id: "1.5-2"
					},
					{
						name: "2-2.5万",
						id: "2-2.5"
					},
					{
						name: "2.5万以上",
						id: ">2.5"
					}
				],
				mpyList: [{
						name: "不限",
						id: ''
					},
					{
						name: "2千以内",
						id: "<2"
					},
					{
						name: "2-2.5千",
						id: "2-2.5"
					},
					{
						name: "2.5-3千",
						id: "2.5-3"
					},
					{
						name: "3-3.5千",
						id: "3-3.5"
					},
					{
						name: "3.5千以上",
						id: ">3.5"
					}
				],
				carTypeList: [{
					name: "不限",
					id: ''
				}],
				standardList: [{
						name: "不限",
						id: ''
					},
					{
						name: "国V",
						id: '国V'
					},
					{
						name: "国VI",
						id: '国VI'
					}
				],
			}
		},
		// watch:{
		//   searchContents:{
		//     handler(val){
		//       this.pageIndex=0;
		//       this.carList=[];
		//       // this.getCarList();
		//       // this.downCallback(this.mescroll);
		//       this.upCallback(1,this.mescroll);
		//     },
		//     deep:true
		//   }
		// },
		methods: {
			tabCurrentClick(index) {
				this.currentIndex = index;
				if (index != 0) {

				}
				if (index == 1) {
					this.getBrandList();
				}
			},
			getBrandList() {
				getBrandList().then(res => {
					let data = res.data;
					// data.sort(comm.compare(data, "initial", 1));
					let initial = "";
					let list = {};
					data.forEach((item, index) => {
						if (item.initial != initial) {
							initial = item.initial;
							list[initial] = [];
							list[initial].push(item);
							return;
						}
						list[initial].push(item);

					});
					this.brandList = Object.assign({}, this.brandList, list);
				}).catch(err => {
					console.log(err);
				})
			},
			getCarList(successCallback) {
				this.isLoadding = true;
				const data = {
					platform: 2,
					customer_id: '',
					page: this.pageIndex,
					keyword: this.keyWord,
					brand_id: this.brandid,
					downpayments: this.fpayid,
					minimum_month: this.mpayid,
					level_id: this.cartype,
					identifying: this.standardtype,
					openid: 'orgme4nZBIT9CqN9HdT3_6LnAb98'
				};
				getCarList(data).then(res => {
					if (res.data.length > 0) {
						res.data.forEach(function(item) {
							item.name = item.name.split(" ").slice(1).join(' ');
						});
					}
					this.isLoadding = false;
					this.carList = [...this.carList, ...res.data];
					if (res.page_count != 0 && this.pageIndex == 1) {
						this.$refs.tip.showTip({
							width: 3,
							height: 1,
							icon: 'icon_xiao',
							text: '已为您找到' + res.page_count + '款新车',
							paddingTop: 0.15,
							iconBottom: 0.15
						});
					}
					if (successCallback) {
						successCallback(res.data);
					}
				}).catch(err => {
					console.log(err);
				});
			},
			selectedClick(key, value, name) {
				this[key] = value;
				if (name != undefined) {
					// Vue.set(this.searchContents ,key,name);
					this.searchContents = Object.assign({}, this.searchContents, {
						[key]: name
					});
				}
			},
			search(searchObj) {
				this.selectedClick(searchObj.key, searchObj.value, searchObj.name);
			},
			rpxoveSearchContent(key) {
				let searchContents = this.searchContents;
				this[key] = '';
				delete searchContents[key];
				// this.searchContents=searchContents;
				this.searchContents = Object.assign({}, searchContents);
			},
			reset() {
				this.brandid = '';
				this.fpayid = '';
				this.mpayid = '';
				this.cartype = '';
				this.standardtype = '';
				this.pageIndex = 1;
				this.keyWord = '';
				this.searchContents = {};
				this.carList = [];
			},
			getBannerList() {
				getBannerList().then(res => {
					if (res.code == 0) {
						this.bannerList = res.data;
					}
				}).catch(err => {

				});
			},
			// 上拉回调
			loadMore(page, mescroll) {
				this.pageIndex++;
				this.getCarList((list) => {
					if (list.length == 0) {

					}
					// 数据渲染成功后,隐藏下拉刷新的状态

				}, () => {
					// 联网异常,隐藏上拉和下拉的加载进度

				});
			},
			//下拉回调
			refresh() {
				this.pageIndex = 1;
				this.carList = [];
				this.getCarList((list) => {
					// 数据渲染成功后,隐藏下拉刷新的状态
					if (list.length == 0) {

					}

				}, () => {
					// 联网异常,隐藏上拉和下拉的加载进度

				});
			},
		},
		created() {

		},
		mounted() {
			this.getCarList();
			this.getBannerList();
			// const carSearchInfo=this.$store.state.carSearchInfo;
			// if(carSearchInfo!=null){
			//   const key=carSearchInfo.key;
			//   const name=carSearchInfo.name;
			//   const value=carSearchInfo.value;
			//   if (key=='keyWord'){
			//     this.searchType=1;
			//   }
			//   this.selectedClick(key,value,name);
			//   this.$store.commit('setCarSearchInfo',null)
			// }else {
			//   // this.upCallback(0,this.mescroll);
			// }
		}
	}
</script>

<style scoped>
	.list {
		position: fixed;
		top: --window-top;
		bottom: --window-bottom;
		left: 0;
		right: 0;
		display: flex;
		height: 100%;
		flex-direction: column;
		max-width: 750px;
		margin: 0 auto;
	}

	.list_tab {
		height: 90rpx;
		position: relative;
		z-index: 2;
	}

	.list_search {
		height: 72rpx;
		background: #fff;
	}

	/* 	.list_search .search_component {
		position: fixed;
		left: 0;
		right: 0;
		top: 88rpx;
		width: 100%;
		z-index: 2;
		max-width: 750px;
		margin: 0 auto;
	}
 */
	.brand_list{
		overflow-y: scroll;
	}
	.tab_comtent {
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
	}

	.content_list {
		flex: 1;
		min-height: 400rpx;
		overflow-y: scroll;
	}

	.car_list {}

	.car_list a:last-child .car_item::after {
		left: 0;
	}

	.loading {
		color: #999;
		font-size: 24rpx;
		text-align: center;
		height: 90rpx;
		line-height: 90rpx;
	}

	.loadding_img {
		display: inline-block;
		width: 24rpx;
		vertical-align: text-bottom;
		margin: 2rpx 10rpx;
		animation: rotate 1s infinite;
		-webkit-animation: rotate 1s infinite;
	}

	.bottom_tip {
		text-align: center;
		color: #e4e4e4;
		font-size: 28rpx;
		line-height: 90rpx;
		position: relative;
		letter-spacing: 11rpx;
	}

	.bottom_txt::before {
		content: '';
		width: 30%;
		height: 1rpx;
		background-color: #e4e4e4;
		position: absolute;
		top: 45rpx;
		left: 30rpx;
		font-weight: bolder;
	}

	.bottom_txt::after {
		content: '';
		width: 30%;
		height: 1rpx;
		background-color: #e4e4e4;
		position: absolute;
		top: 45rpx;
		right: 30rpx;
	}
</style>
