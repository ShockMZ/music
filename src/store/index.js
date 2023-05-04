import {
	createStore
} from 'vuex'
export default createStore({
	state: {
		playList: [{ //播放列表
			al: {
				id: 89039055,
				name: "",
				pic: 109951164966568500,
				picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
				pic_str: "109951164966568495"
			},
			id: 1446137141,
			name: "",
			ar:[{name: "灏灏灏仔"}]
		}],
		playListIndex: 0, //默认下标为0
		isBtnShow: true, //暂停按钮的显示
		detailShow: false, //歌曲详情页的显示

	},
	mutations: {
		updateIsBtnShow: function (state, value) {
			state.isBtnShow = value
		},
		pushPlayList:function(state,value){
			state.playList.push(value)
		},
		updatePlayList: function (state, value) {
			state.playList= value.value.itemList
			// console.log(state.playList[state.playListIndex]);
		},
		updatePlayListIndex: function (state, value) {
			state.playListIndex = value.value
			// console.log(state.playListIndex)
		},
	},
	actions: {
	
	},
	modules: {}
})