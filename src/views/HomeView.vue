<template>
  <div>
    <TopNavVue />
    <SwpierTop />
    <IconList />
    <MusicList />
    <NewSongList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNavVue from "@/components/home/TopNav.vue";
import SwpierTop from "@/components/home/SwpierTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
import NewSongList from '@/components/home/NewSongList';



export default {
  name: "HomeView",
  components: {
    TopNavVue,
    SwpierTop,
    IconList,
    MusicList,
    NewSongList
  },
};
</script>
