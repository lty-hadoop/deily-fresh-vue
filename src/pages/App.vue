<template>
  <div class="home-wrap">
    <Tabs />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/iconfont/iconfont.css';
</style>
