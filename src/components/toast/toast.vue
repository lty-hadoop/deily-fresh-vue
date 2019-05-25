<template>
  <div v-show="visible" class="dialog-tips">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      visible: false,
      message: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-tips{
  position: fixed;
  top: 50%;
  left: 50%;
  /* min-width: 200px; */
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 0.266666rem 0.5333333rem;
  border-radius: 0.32rem;
  background-color: #000;
  opacity: .8;
  color: #fff;
  text-align: center;
  font-size: $font14; /*no*/
}
</style>
