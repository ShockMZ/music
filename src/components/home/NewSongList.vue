<template>
  <div class="newSongList">
    <div class="topList">
      <div class="title">新歌推荐</div>
      <div class="more">查看更多</div>
    </div>
  </div>
<div class="newSongContent">
  <van-grid :border="false" :column-num="3">
    <van-grid-item v-for="item in state.newSongList" :index = "item.id"  >
      <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
        <van-image :src="item.picUrl"/>
        <span>{{item.name}}</span>
      </router-link>
    </van-grid-item>
  </van-grid>
</div>


</template>

<script>
import {  getNewSong } from '@/request/api/home.js'
import { reactive, onMounted } from "vue";
export default {
  setup() {
    // 跟踪一个内容函数
    const state = reactive({
      //  使用对象的写法
      newSongList : []
    })
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    onMounted( async () => {
      let res = await getNewSong();
      state.newSongList = res.data.result
    })

    // 返回两个内容.
    return {state, changeCount}
  },
};
</script>

<style lang="less" scoped>
.newSongList {
  margin-top: 0.2rem;
  padding: 0.2rem;
  .topList {
    width: 100%;
    height: 0.66rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
}
.newSongContent {
  width: 100%;
  margin-top: -0.3rem;
  height: 300px;
  .van-grid {
    .van-grid-item {
      position: relative;
      text-align: center;
      .van-image {
        width: 100%;
        overflow: hidden;
        border-radius: .1rem;
      }
      //文字center在父元素的框框里面显示
      span {
        display: inline-block;
        width: 100%;
        height: .25rem;
        font-size: .25rem;
        line-height: .25rem;
        overflow: scroll;
      }
    }
  }
}
</style>