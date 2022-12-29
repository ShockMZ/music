<template>
  <div class="topNav">
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>

    <div class="center">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>收藏</span>
    </div>

    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="less" >
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  .center {
    width: 65%;
    height: 100%;
    display: flex;
    font-size: 0.36rem;
    line-height: 0.56rem;
    justify-content: space-around;
    .active {
      font-weight: 700;
    }
  }
}
</style>