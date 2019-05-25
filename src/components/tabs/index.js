import Tabs from './src/tabs.vue'

/* 使用插件 */
Tabs.install = function(Vue) {
    Vue.component(Tabs.name, Tabs)
}

export default Tabs