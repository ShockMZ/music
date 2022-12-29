<template>
  <!--父传递子,先绑定数据-->
  <ItemMusicTop :play_list="state.playList" />
  <ItemMusicContent
      :itemList="state.itemList"
      :subscribedCount="state.playList.subscribedCount"
  />

  <!--<ItemMusicTop :playlist = "state.newSongList"></ItemMusicTop>-->
</template>

<script>

import { useRoute } from 'vue-router'
import { getItemMusic, getItemList } from '@/request/api/item'
//引入子组件,不需要括号
import ItemMusicTop from '@/components/item/ItemMusicTop'
import ItemMusicContent from '@/components/item/ItemMusicContent'
import { onMounted, reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      playlist: {}, //歌单的详情页的数据
      itemList: [], //歌单的歌曲
    })

    onMounted(async () => {
      let id = useRoute().query.id
      let res = await getItemMusic(id)
      state.playList = res.data.playlist
      console.log(state.playList)
      //  我们这里防止页面刷新时候,数据过多,渲染的时候数据没有过来完全,渲染时候数据丢失,将数据存放一下


      const result = await getItemList({ id, limit: 10, offset: 0 })
      state.itemList = result.data.songs
      console.log(state.itemList)
    })
    return { state }
  },
  components: {
    ItemMusicTop,
    ItemMusicContent
  }
}
</script>