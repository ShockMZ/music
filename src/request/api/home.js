import service from "..";

// get firstPage swipe data
export function getBanner() {
  return service({
    method: "get",
    url:"/banner?type=2"
  })
}

// 获取发现好歌单

export function getMusicList() {
  return service({
    method:"get",
    url:"/personalized?limit=8"
  })
}

// 推荐新音乐
export function getNewSong() {
	return service({
		method: 'get',
		url: "/personalized/newsong?limit=3"
	})
}

