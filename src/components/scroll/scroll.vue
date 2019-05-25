<template>
  <div ref="wrapper">
    <ul class="content">
      <div v-if="pulldown" class="pulldown"
           :style="`margin-top:${dragTip.translate}px`">
        <div class="clear" v-if="dragTip.showLoading">
          <div class="fl lh30 ml10">{{dragTip.text}}</div>
        </div>
      </div>
      <slot></slot>
      <div v-if="pullup" class="pullup">
        <div class="clear" v-if="!isDone">
          <div class="fl lh30 ml10">加载中.....</div>
        </div>
        <div class="list-donetip" v-if="!isLoading && isDone">
          <slot name="doneTip">没有数据了</slot>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        dragTip: {
          text: "下拉刷新",
          translate: -50,
          showLoading: false
        },
        isLoading: false,
        isDone: false
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 2
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表数据
       */
      data: {
        type: [Object,Array,String],
        default: null
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后,刷新scroll延时
       */
      refreshDelay: {
        type: Number,
        default: 20
      },
      scrollToEndFlag: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods:{
      _initScroll(){
        if(!this.$refs.wrapper){
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper,{
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX
        });
        // 是否派发滚动事件
        if(this.listenScroll){
          let _this = this;
          this.scroll.on('scroll',(pos) => {
            if(this.listenScroll){
              _this.$emit('scroll', pos)
            }
          })
        }
        // 是否派发滚动到底部事件，用于上拉加载
        if(this.pullup){
          this.scroll.on('scrollEnd',() => {
            if(this.scroll.y <= this.scroll.maxScrollY + 50){
              //所有数据加载完毕后
              this.$on('infinitescroll.loadedDone', () => {
                this.isLoading = false;
                this.isDone = true
              });
              //单次请求数据加载完毕后
              this.$on('infinitescroll.finishLoad', () => {
                this.isLoading = false
              });
              //重新初始化
              this.$on('infinitescroll.reInit', () => {
                this.isLoading = false;
                this.isDone = false
              });
              this.$emit('scrollToEnd')
            }
          })
        }
        // 是否派发顶部下拉事件，用于下拉刷新
        if(this.pulldown){
          this.scroll.on('scroll',(pos) => {
            //显示下拉刷新loading
            this.dragTip.showLoading = true;
            //隐藏底部加载loading
            this.isLoading = false;
            if(pos.y > 50){
              this.dragTip.text = "释放刷新"
            }
          });
          this.scroll.on('touchEnd',(pos) => {
            if(pos.y > 50){
              this.dragTip.translate = 0;
              this.dragTip.text = "刷新中...";
              //重新初始化
              this.$on('pullrefresh.finishLoad', this.resetParams);
              this.$emit('pulldown',pos)
              this.refresh()
            }
          })
        }
        // 是否派发列表滚动开始的事件
        if(this.beforeScroll){
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      resetParams(){
        setTimeout(() => {
          this.isLoading = false;
          this.isDone = false;
          this.dragTip = {
            text: "下拉刷新",
            translate: -50,
            showLoading: false
          }
        }, 600)
      },
      disable(){
        this.scroll && this.scroll.disable()
      },
      enable(){
        this.scroll && this.scroll.enable()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      scrollTo(){
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data(){
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped lang="scss">
  .pulldown, .pullup {
    width: 100%;
    height: 100px;
    position: relative;
    .clear {
      padding: 20px 0;
      font-size: $font14; /* no */
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translate(-50%, 0);
    }
    .list-donetip {
      text-align: center;
      line-height: 100px;
    }
  }
</style>

