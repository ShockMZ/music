<template>
  <!--  top信息栏 顶部 -->
  <div class="itemMusicTop">
    <img :src="newData.play_list.coverImgUrl" alt="" class="bgimg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>

  <!--  top信息栏 内容 -->
  <div class="itemTopContent">
    <div class="contentLeft">
      <img :src="newData.play_list.coverImgUrl" alt="" />
      <div class="palyCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gl-play-copy"></use>
        </svg>
        <span>{{ changeCount(newData.play_list.playCount) }}</span>
      </div>
    </div>
    <div class="contentRight">
      <p class="rightP_one">{{ newData.play_list.name }}</p>
      <div class="right_img">
        <img :src="newData.play_list.creator.backgroundUrl" alt="" />
        <span>{{ newData.play_list.creator.nickname }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
      <p class="rightP_two">
        <span>{{ newData.play_list.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </p>
    </div>
  </div>


  <!--  top信息栏 底部 -->
  <div class="itemTopFooter">
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <span>{{ newData.play_list.commentCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ newData.play_list.shareCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>






<script>
/**
 * 本页面为itemMusic.vue的top处歌曲信息展示组件,
 * play_list 最终返回一首歌曲的详细情况
 */
import { watch, reactive } from 'vue';

export default {
  setup(props) {

    // console.log(props);
    // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
    // props.newDate.play_list.creator = "";
    const newData = reactive({
      props
    })
    newData.play_list = []
    newData.play_list.creator = []
    watch(newData, (newVal, oldValue) => {
      newData.play_list = newVal.props.play_list
      // console.log(newData.play_list);
      {
        deep: true
      }
    })

    // 对播放量的处理
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    return { changeCount, newData };


  },
  props: ["play_list"],
};
</script>
<style lang="less">
.itemMusicTop {
  width: 100%;
  height: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;



  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0.2rem;

  }

  span {
    font-size: 0.4rem;
    color: #fff;
  }

  .icon {
    //填充颜色
    fill: #fff;
  }

  .bgimg {
    position: absolute;
    width: 100%;
    height: 6.18rem;
    filter: blur(30px);
    z-index: -1;
  }
}

.itemTopContent {
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;

  .contentLeft {
    width: 36%;
    height: 2.6rem;
    position: relative;

    img {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: -1;
    }

    .palyCount {
      position: absolute;
      right: 0.1rem;
      margin-top: 0.1rem;

      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.02rem;
        vertical-align: middle;
      }

      span {
        font-size: 0.26rem;
        color: #fff;
      }
    }
  }

  .contentRight {
    width: 60%;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .rightP_one {
      font-size: 0.3rem;
      font-weight: 900;
      color: #fff;
      font-family: "微软雅黑";
    }

    .right_img {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ccc;

      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }

      span {
        margin-left: 0.1rem;
      }

      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.08rem;
        vertical-align: middle;
      }
    }

    .rightP_two {
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #ccc;
      }

      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}


.itemTopFooter {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footerItem {
    display: flex;
    padding: 0rem 0.5rem;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .icon {
      fill: #ccc;
    }

    span {
      margin-top: 0.2rem;
      font-size: 0.25rem;
      color: #fff;
    }
  }
}
</style>