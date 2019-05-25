<template>
  <div class="three">
    <div class="money calu">
      <span class="minus" @click="minusOrPlus(-1)">-</span>
      <input type="number" v-model="multiple" class="input" @keyup="changeMoney">
      <span class="add" @click="minusOrPlus(1)">+</span>
    </div>
    <div class="money">
      <p>最高奖金</p>
      <p class="total">{{getTotalPrice}}元</p>
    </div>
    <div class="money bet-btn" @click="handlerClick">投注20元</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Price from '@/assets/js/price.js'
export default {
  data () {
    return {
      price: 20,
      multiple: 10
    }
  },
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 30
    }
  },
  methods: {
    minusOrPlus (type) {      
      if (type < 0) {
        if (this.multiple > this.min){
          this.multiple--
        } else {
          return false
        }
      } else {
        if (this.multiple < this.max) {
          this.multiple++
        } else {
          return false
        }
      }
      let data = new Price(
        this.price,
        this.multiple
      )
      this.$store.dispatch("updateOrder", data)
    },

    // 手动输入
    changeMoney () {
      let fix;
      if (typeof this.multiple === "string") {
        fix = this.multiple.replace(/\D/g, "")
      } else {
        fix = this.multiple
      }
      if (fix <= 0 && fix !== '') {
        // 把最小值给他
        fix = this.min
      } else if (fix > this.max) {
        fix = this.max
      }
      this.multiple = fix
      let data = new Price(
        this.price,
        this.multiple
      )
      this.$store.dispatch('updateOrder', data)
    },

    // 将vuex的总金额暴露出去
    handlerClick () {
      this.$emit('shop', this.$store.getters.getTotalPrice)
    }
  },
  computed: {
    // 读取vuex
    ...mapGetters([
      'getTotalPrice'
    ])
  }
}
</script>

<style scoped lang="scss">
.three {
  display: flex;
  align-items: center;
  margin-top: 20px;
  .money {
    flex: 1;
    .total {
      color: #ff0000;
    }     
  }
  .calu {
    flex: 0;
    .minus, .add {
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: $font14; /*no*/
      border: 1px solid #ccc; /*no*/
      border-radius: 50%;
    }
    .input {
      width: 80px;
      height: 48px;
      margin: 0 10px;
      line-height: 48px;
      text-indent: 12px;
      border: 1px solid #ccc; /*no*/
      outline: none;
    }
  }
  .bet-btn {
    flex: .7;
    line-height: 2.8;
    border-radius: 5px; /*px*/
    background: #ff0000;
    color: $white;
    
  }
}
</style>