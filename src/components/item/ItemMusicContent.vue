<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listTopLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofanganniu"></use>
        </svg>
        <span>播放全部<span>(共{{ itemList.length }}首)</span></span>
      </div>
      <div class="listTopRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiahao"></use>
        </svg>
        <span>收藏({{ subscribedCount}})</span>
      </div>
    </div>
    <div class="itemListContent">
        <div class="item" v-for="(item, i) in itemList" :key="i">
          <div class="itemLeft" @click="playMusic(i)">
            <span class="leftSpan">{{ i + 1 }}</span>
            <div>
              <p>{{ item.name }}</p>
              <span v-for="(item1, index) in item.ar" :key="index">{{
                  item1.name
                }}</span>
            </div>
          </div>
          <div class="itemRight">
            <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
              <use xlink:href="#icon-shipin"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
              <use xlink:href="#icon-31liebiao"></use>
            </svg>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 本页面为itemMusic.vue的歌曲列表组件,
 * itemList 最终返回10条歌曲列表数据
 */

import { watch } from 'vue'
import { defineProps, reactive } from 'vue'

const props = defineProps([
  'itemList',
  'subscribedCount'
])
const newData = reactive({
  props
})

watch(newData, (newVal, oldValue) => {
  console.log(newVal.props.itemList);
  console.log(newVal.props.subscribedCount);
  {
    deep: true
  }
})
</script>

<style lang="less" scoped>
.itemMusicList {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  padding: .25rem .3rem  0;
  margin-top: .2rem;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;
  .itemListTop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .listTopLeft {
      width: 3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        font-size: .28rem;
        font-weight: 700;
      }
      .icon {
        stroke: #333333;
        stroke-width: 20;
      }
    }
    .listTopRight {
      width: 2.5rem;
      display: flex;
      justify-content: space-around;
      color: #fff;
      padding: .2rem .1rem;
      background-color: red;
      border-radius: .4rem;
      align-items: center;
      .icon {
        width: .3rem;
        height: 0.3rem;
        fill: #fff;
        margin-right: .3rem;
        stroke: #fff;
        stroke-width: 50;
      }
    }
  }


//  列表部分
  .itemListContent {
    width: 100%;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 80%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight {
        width: 20%;
        display: flex;
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
        .bofang{
          position: absolute;
          left: 0;
        }
        .liebiao{
          position: absolute;
          right: 0;
        }
      }
    }
  }

}


</style>