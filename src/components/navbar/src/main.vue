<template>
  <div class="header">
    <div class="header-left" @click="back">
      <i class="fl header-icon"></i>
    </div>
    <h1 class="title" v-text="title"></h1>
    <div class="header-right" v-text="rightText" @click="rightEven"></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },

    // 右边按钮事件
    rightEven () {
      this.$emit('rightEven')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 90px;
  background: $mainColor;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  z-index: 2;
  flex: 1;
  font-size: $font16; /*no*/
  .header-left {
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 30px;
    flex: 1;
    .header-icon {
      width: 22px;
      height: 36px;
      background: url('../img/back.png') no-repeat;
      background-size: contain;
    }
  }
  h1.title {
    font-size: $font18; /*no*/
    font-weight: 400;
    line-height: 90px;
    height: 90px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header-right {
    height: 90px;
    line-height: 90px;
    flex: 1;
    text-align: right;
    padding-right: 30px;
  }
}
</style>
