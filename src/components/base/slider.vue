<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        class="dot"
        v-bind:class="{active: currentPageIndex === index }"
        v-for="(item, index) in dots"
        v-bind:key="item"
        v-bind:index="index">
      </span>
    </div>
  </div>
</template>
<script >
import { addClass } from "../../common/js/dom";
import BScroll from "better-scroll";
export default {
  name: "slider",
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return { 
    dots: [],
     currentPageIndex: 0 
     };
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth();
      this._initDots();
      this._initSlider();
      if (this.autoPlay) {
        this._play();
      }
    }, 17);
    window.addEventListener("resize", () => {
      if (!this.slider) {
        return;
      }
      this._setSliderWidth(true);
      this.slider.refresh();
    });
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children;
      console.log(this.children.length);
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth;
      }
      this.$refs.sliderGroup.style.width = width + "px"; // 设置整个滑动 组件的总宽度
    },
    _initSlider() {
      //初始化一个silder组件
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      });
      //监听滚动事件 当翻到下一页结束后,改变索引, 得到小圆点的变化效果
      this.slider.on("scrollEnd", () => {
        //获取当前的第几个子元素
        let pageIndex = this.slider.getCurrentPage().pageX;
        console.log(pageIndex);
        this.currentPageIndex = pageIndex; //存储一下当前的页面索引值
        if (this.autoPlay) {
          // 如果开启了自动播放, 那么就清楚定时器并手动再 启动一次
          clearTimeout(this.timer);
          this._play();
        }
      });
    },
    _initDots() {
      this.dots = new Array(this.children.length);
    },
    _play() {
      let pageIndex = this.currentPageIndex + 1;
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400);
      }, this.interval);
    }
  }
};
</script>

<style scoped lang="stylus">
@import "../../common/stylus/variable.styl"
    .slider
        min-height: 1px

        .slider-group
            position: relative 
            overflow: hidden 
            white-space: nowrap

            .slider-item 
                float: left 
                box-sizing: border-box 
                overflow: hidden 
                text-align: center

                a 
                    display: block 
                    width: 100% 
                    overflow: hidden 
                    text-decoration: none

                img
                    display: block 
                    width: 100%

            .dots
                position: absolute 
                right: 0 
                left: 0
                bottom: 12px 
                text-align: center 
                font-size: 0

                .dot
                    display: inline-block 
                    margin: 0 4px 
                    width: 8px 
                    height: 8px 
                    border-radius: 50% 
                    background: $color-text-l

                    &.active 
                        width: 20px 
                        border-radius: 5px 
                        background: $color-text-ll
</style>
                    