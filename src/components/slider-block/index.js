import SlideBlock from './src/main.vue'

/* 使用插件 */
SlideBlock.install = function(Vue) {
    Vue.component(SlideBlock.name, SlideBlock)
}

export default SlideBlock