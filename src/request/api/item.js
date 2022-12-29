import service  from '@/request'

//歌单列表所有歌曲获取 item-content
export function getItemList (data) {
	return service({
		method: "get",
		url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
	})
}

// 歌单详情页.   item-top
export function getItemMusic(data) {
	return service({
		method: "get",
		url:`/playlist/detail?id=${data}`
	})
}