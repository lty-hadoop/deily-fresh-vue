<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key="index"></span>
    </div>
  </div>
</template>

<script>
  import {addClass} from "@/assets/js/dom.js";
  import BScroll from 'better-scroll'

  export default {
    name: 'slider',
    data () {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
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
    mounted() {
      setTimeout(() => {
        this._setSliderWidth();
        this._initDots();
        this._initSlider();

        if (this.autoPlay) {
          this._play()
        }
      }, 20);

      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true);
        this.slider.refresh() // 宽度发生变化则重新计算
      })
    },
    methods: {
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children;

        let width = 0;
        let sliderWidth = this.$refs.slider.clientWidth;
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i];
          addClass(child, 'slider-item');

          child.style.width = sliderWidth + 'px';
          width += sliderWidth
        }
        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,  // 当快速滑动时是否开启滑动惯性
          snap: {
            loop: this.loop, // 循环
            threshold: 0.3, // 用手指滑动时页面可切换的阀值，大于这个阀值时可以滑动到下一页
            speed: 400 // 轮播间隔
          },
          click: true // 是否派发click事件
        });

        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX;
          // 老版本有，新版去掉
          // if (this.loop) {
          //   pageIndex -= 1
          // }
          this.currentPageIndex = pageIndex;

          if (this.autoPlay) {
            clearTimeout(this.timer);
            this._play()
          }
        });

        this.slider.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _initDots() {
        // this.dots = new Array(this.children.length) 老版本写法
        this.dots = new Array(this.children.length)
      },
      _play() {
        // let pageIndex = this.currentPageIndex + 1;
        // if (this.loop) {
        //   pageIndex += 1
        // }
        // this.timer = setTimeout(() => {
        //   this.slider.goToPage(pageIndex, 0, 400)
        // }, this.interval)
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.slider.next() // 下一个
        }, this.interval);
      }
    }
  }
</script>

<style lang="scss">
  .slider {
    position: relative;
    min-height: 2px;
    .slider-group {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-item {
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        a {
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
        }
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .dots {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 12px;
      text-align: center;
      font-size: 0;
      .dot {
        display: inline-block;
        margin: 0 8px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fd7979;
        &.active {
          width: 40px;
          border-radius: 10px;
        }
      }
    }
  }
</style>