<template>
  <div id="swipeList">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>  

<script>
// 引入axios
import { getBanner } from "@/request/api/home";

// 在setup中如果我们想要使用生命周期的话，需要先引入
import { onMounted, reactive } from "vue";

export default {
  // 组合式API。项目启动时使用，加载项目
  setup() {
    const state = reactive({
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    // 上面封装之后我们这里可以使用异步请求 async await 异步等待请求的结果
    onMounted(async () => {
      let res = await getBanner();
      state.images = res.data.banners;
    });
    return { state };
  },
};
</script>
<style lang="less" scoped>
#swipeList {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe__track {
      .van-swipe-item {
        padding: 0 0.1rem 0.15rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.2rem;
        }
      }
    }
    /deep/ .van-swipe__indicator--active {
      background-color: #000;
    }
  }
}
</style>
