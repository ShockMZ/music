<template>
  <div class="FooterMusic">

    <div class="FooterLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横划切歌</span>
      </div>
    </div>

    <div class="FooterRight">
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isBtnShow">
        <use xlink:href="#icon-bofanganniu"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-weibiaoti--"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
      <!--ref 注册audio-->
      <audio ref="audio"
             :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
    </div>
  </div>
</template>

<script>
//VX的方法和数据.
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      interVal: 0,
    }
  },
  computed: {
    ...mapState(['playList', 'playListIndex', 'isBtnShow', 'detailShow']),
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.updateIsBtnShow(false)
      } else {
        this.$refs.audio.pause()
        this.updateIsBtnShow(true)
      }
    },
    // 这里获取的方法要进去
    ...mapMutations(['updatePlayList', 'updatePlayListIndex', 'updateIsBtnShow'])
  },
  watch: {
    // playList 是这个列表不是单个歌曲.
    playList: function() {
      this.$refs.audio.autoplay = true;
      // console.log('--')
      if (this.$refs.audio.paused) {
        this.updateIsBtnShow(false)
      }
    },
    playListIndex: function () {
      this.$refs.audio.autoplay = true;
      // console.log('--1')
      if(this.$refs.audio.paused) {
        this.updateIsBtnShow(false)
      }
    },
    isBtnShow: function () {
      if (this.isBtnShow) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
    }
  }

}


</script>

<style lang="less" scoped>
.FooterMusic {
  display: flex;
  width: 100%;
  height: 1.3rem;
  padding: .15rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  justify-content: space-between;

  .FooterLeft {
    display: flex;
    margin-left: .2rem;
    width: 55%;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    img {
      width: 1rem;
      border-radius: .5rem;
    }

    div {
      width: 2rem;
      //溢出隐藏,强制一行.nowrap,省略号显示ellipsis
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .FooterRight {
    width: 23%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>