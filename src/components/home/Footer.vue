<template>
  <van-tabbar v-model="active" active-color="#ee0a24">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="clock-o">123</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    <van-tabbar-item icon="user-o">标签</van-tabbar-item>
  </van-tabbar>



</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};

</script>

<style lang="less" scoped>
van-tabbar{
  position: fixed;
}
</style>