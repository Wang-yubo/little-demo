<template>
  <div class="singer">
    <listview :data="singerlist" v-on:select="selectSinger"></listview>
  </div>
</template>
<script>
import axios from "axios";
import listview from "../base/listview";
import {mapMutations} from "vuex" //取得工具函数
export default {
    name:"singer.vue",
    data() {
      return { 
        singerlist: [] 
      };
  },
  created() {
    axios.get("http://localhost:9527/api/getSingerData").then(data => {
      this.singerlist = data.data;
    });
  },
  methods:{
    ...mapMutations({
      setsinger:"SET_SINGER"
    }),
    selectSinger(singerItem){
      this.$router.push({
        path:`/singer/${singerItem.singer_mid}`
      });
      this.setsinger(singerItem);
    },
  },
  components: { listview }
};
</script>

<style scoped lang="stylus">
    .singer 
        position: fixed 
        top: 88px 
        bottom: 0 
        width: 100%
</style>