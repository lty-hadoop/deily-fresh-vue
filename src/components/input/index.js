import Input from './src/main.vue'

/* 使用插件 */
Input.install = function(Vue) {
    Vue.component(Input.name, Input)
}
  
export default Input;