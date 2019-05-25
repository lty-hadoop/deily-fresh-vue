<template>
  <div class="count-down">
    <button class="sendSmsBtn" :class="disabled ? 'dissendSmsBtn': ''" type="button" @click="send" :disabled="disabled">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    second: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      time: 0,
      disabled: false
    }
  },
  methods: {
    send () {
      this.$emit('run')
      this.time = this.second
      this.timer()
    },

    timer() {
      if (this.time > 0) {
        this.time--
        this.disabled = true
        setTimeout(this.timer, 1000)
        if (this.time === 0) {
          this.disabled = false
        }
      }
    }
  },
  computed: {
    text () {
      return this.time > 0 ? this.time + 's后获取' : '获取验证码'
    }
  }
}
</script>

<style lang="scss" scoped>
.sendSmsBtn{
  border: none;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  background: #ff0000;
  color: $white;
  outline: none;
  border-radius: 8px;
}
.dissendSmsBtn{
  opacity: .6;
}
</style>

