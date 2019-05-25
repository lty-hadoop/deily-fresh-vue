import Vue from 'vue'
import router from './router'
import App from '@/pages/App.vue'
import 'lib-flexible'
import '@/assets/scss/reset.scss'

/* 全局使用组件 */
import Plugin from '@/components/index.js'
Vue.use(Plugin)

/* 工具函数 */ 
import utils from '@/assets/js/utils.js'
Vue.prototype.$utils = utils

Vue.config.productionTip = false

new Vue({
	router,
  	render: h => h(App),
}).$mount('#app')
