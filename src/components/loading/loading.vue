<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>

<style lang="scss">
.loading {
  width: 100%;
  text-align: center;
  .desc {
    padding: 5px 0 0 15px;
    line-height: 20px;
    font-size:  $font14; /*no*/
  }
}
</style>
