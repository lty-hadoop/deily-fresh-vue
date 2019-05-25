import Cascade from './src/main.vue';

/* 使用插件 */
Cascade.install = function(Vue) {
  Vue.component(Cascade.name, Cascade);
};

export default Cascade;