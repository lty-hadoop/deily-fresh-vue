import Button from './src/main.vue';

/* 使用插件 */
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;