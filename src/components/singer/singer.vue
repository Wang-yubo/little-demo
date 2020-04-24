<template>
  <div class="singer">
    <listview :data="singerlist"></listview>
  </div>
</template>
<script>
import axios from "axios";
import listview from "../base/listview";
export default {
    name:"singer.vue",
    data() {
    return { singerlist: [] };
  },
  created() {
    axios.get("http://localhost:9527/api/getSingerData").then(data => {
      this.singerlist = data.data;
    });
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