<template>
  <!-- 增加个转场动画 -->
  <transition name="slide">
    <music-list></music-list>
  </transition>
</template>

<script type="text/ecmascript-6"> 
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active 
        transition: all 0.3s 
        .slide-enter,.slide-leave-to 
            transform: translate3d(100%, 0, 0)

</style>